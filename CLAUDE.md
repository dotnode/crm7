# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目定位
这是一个 CRM 的 H5 静态原型，用来把 `crm_xiaoman_prototype_spec.md` 里的页面说明还原成可在浏览器中点击走查的界面。仓库里没有后端、没有构建工具、没有包管理器；页面由 `index.html` 提供壳，`js/app.js` 负责路由、渲染和交互，`css/style.css` 负责样式。

## 常用命令
- 本地预览：`python3 -m http.server 8000`，然后打开 `http://localhost:8000`
- 备用预览：`npx serve .`
- 语法检查：`node -c js/app.js`
- 仓库没有独立的 build / lint / 单元测试脚本；改动后用浏览器直接走查对应页面，重点检查 hash 路由、抽屉、弹窗、tab 切换和列表页。

## 架构总览
### 1) 单文件 SPA
- 所有业务逻辑集中在 `js/app.js`
- `index.html` 只放固定骨架：顶部栏、左侧导航、二级菜单、内容区，以及全局单例的 drawer/modal
- 路由完全依赖 `location.hash`，形式是 `#nav/sub`
- `navigateTo()` 只改 hash；`hashchange` 触发 `handleRoute()`，再依次重渲染侧栏、二级菜单和内容区

### 2) 三个核心注册表
- `NAV_ITEMS`：一级导航
- `SUBMENUS`：一级导航对应的二级菜单；没有配置的一级项会直接由 `PAGE_RENDERERS[nav]` 渲染
- `PAGE_RENDERERS`：`pageKey -> () => htmlString`
- 新增页面通常是：先加 `SUBMENUS`，再加 `PAGE_RENDERERS['xxx']`，需要交互时再补全局 `openXxx()` / `navigateTo()` 调用点

### 3) 共享 helper
- `renderTable()`、`renderPagination()`：列表页
- `renderTabs()`、`renderTabPanels()`、`switchTab()`：tab 结构
- `renderDetailFields()`：详情页字段网格
- `renderFormField()`：表单字段
- `openDrawer()` / `closeDrawer()`：右侧抽屉
- `openModal()` / `closeModal()`：居中弹窗
- `renderBizKanban()`：商机看板拖拽

### 4) 数据和样式
- 站点数据都写在渲染器内部的字面量里，没有外部 JSON，也没有 fetch
- `css/style.css` 主要是设计 token、布局和通用组件类；修改页面布局时优先复用现有 class
- `index.html` 的 `css/style.css` 和 `js/app.js` 都带 `?v=` 缓存参数，改这两个文件后记得同步递增版本号

## 当前状态与约定
- `okki-leads` 顶部导航目前是刻意隐藏的；只有业务明确恢复时再取消注释
- 很多深层企业管理页和部分交易页当前是 empty-state 占位，这是原型的已知范围，不是遗漏
- 关键对照源是 `crm_xiaoman_prototype_spec.md`；改某页前先搜对应 URL 章节，再按“页面布局”和字段表对齐
- 所有模板里的点击交互依赖全局函数和内联 `onclick`，不要把相关函数收进模块作用域
- 一级导航图标使用内联 SVG；`favorites` 页除外
- tab 页面如果要真正切换内容，通常需要同时放 `renderTabs()` 和 `renderTabPanels()`，否则只会切换高亮
