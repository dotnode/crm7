# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个 ** CRM 的 H5 原型**，把 `crm_xiaoman_prototype_spec.md`（约 4000 行的真实站点采集说明文档）还原为可在浏览器中点击走查的静态原型。无后端、无构建工具、无包管理器——纯静态 HTML + CSS + 原生 JS（ES5 风格，用 `var`/`function`，兼容性优先）。

## 运行与开发

无需安装依赖。本地预览任一静态服务器即可：

```bash
python3 -m http.server 8000   # 然后访问 http://localhost:8000
# 或: npx serve .
```

直接用 `file://` 打开 `index.html` 也能工作（路由基于 `location.hash`，不依赖服务器）。

**语法自检**（唯一的"测试"）：
```bash
node -c js/app.js
```

没有 lint、没有单元测试、没有构建步骤。改动后用浏览器走查对应页面即可。

## 架构

### 单文件 SPA，hash 路由
所有逻辑在 `js/app.js`（约 3900+ 行）一个文件里。`index.html` 提供固定骨架：`.topbar` + `.sidebar` + `#submenu` + `#contentArea` + 全局 `#drawer`/`#modal`。骨架节点在 HTML 中是固定的，JS 只填充 `innerHTML`。

路由是纯 hash 驱动：`#nav/sub`（如 `#customers/customers-list`）。`navigateTo(page, sub)` 改 hash → `hashchange` 触发 `handleRoute()` → 依次重渲染侧栏、二级菜单、内容区。`window.load` 也调 `handleRoute`，默认页 `dashboard`。

### 三张注册表（理解全局的入口）
1. **`NAV_ITEMS`**（顶部数组）：一级导航项，`{id, label, icon(内联SVG)}`。
2. **`SUBMENUS`**（对象）：`navId → [{id, label, group?, badge?}]`。`group` 字段既是分组标题（字符串）也用 `true` 表示"此处开始新组但不显示标题"。无对应 `SUBMENUS` 条目的一级项（如 `dashboard`、`communication`、`favorites`）不显示二级菜单，直接由 `PAGE_RENDERERS[navId]` 渲染。
3. **`PAGE_RENDERERS`**（对象）：`pageKey → () => htmlString`。`renderContent()` 取 key 的顺序是 `currentSubmenu || SUBMENUS[nav][0].id || nav`。渲染器返回模板字符串 HTML。

**新增页面 = 三步**：在 `SUBMENUS` 加菜单项 → 写 `PAGE_RENDERERS['id'] = () => \`...\`` → 若需弹窗/抽屉，写 `openXxx()` 函数。详情页（如 `customers-detail`）通常不进 `SUBMENUS`，而是从列表行的 `onclick="navigateTo(...)"` 进入。

### 组件 helper（js/app.js 中部，复用率极高）
- `renderTable(cols, rows, opts)` — 标准表格，`opts.checkbox`/`opts.total`。
- `renderTabs(tabs, activeIdx, groupId)` + `renderTabPanels(groupId, panels)` + `switchTab(groupId, idx)` — tab 组件。**注意：很多页面只调了 `renderTabs` 没配 `renderTabPanels`，导致 tab 点击不切换内容（已知技术债，见下）。**
- `renderDetailFields(arr)` — 详情页 label/value 双列网格。
- `renderFormField(label, type, opts)` — 表单字段（text/select/textarea/switch）。
- `openDrawer(title, body, footer)` / `closeDrawer()` — 右侧抽屉，全局只有一个 `#drawer`，重入会覆盖。
- `openModal(title, body, footer)` / `closeModal()` — 居中弹窗，同理全局单例。
- `renderPagination`、`renderBizKanban`（商机看板，含拖拽 `onBizDragStart/Over/Drop`）。

### CSS（css/style.css，约 720 行）
设计 token 全在 `:root` CSS 变量（`--primary`、`--primary-rgb`、`--border`、`--radius` 等）。配色围绕 OKKI 蓝。常用布局类：`.page-with-sidebar`（左树+右内容）、`.grid-2`/`.grid-4`、`.flex-between`、`.card`、`.stat-cards`、`.timeline`、`.stage-bar`（销售阶段进度条）、`.flow-lane`（跟单流程泳道）、`.kanban-*`。`.hidden { display:none !important }` 是 tab panel 切换的开关。

### 数据
所有列表数据是渲染器内的内联字面量（样例客户/商机/邮件等），无外部 JSON、无 fetch。文档 §15 说明部分页面因真实账号权限/空数据仅有入口框架，原型里这些以 empty-state 占位。

## 规范与约定

- **所有函数挂全局**（`function openXxx()`、`window` 上），因为 `onclick="..."` 内联在模板字符串里，必须全局可访问。新增交互函数照此办理，不要用模块作用域。
- **中文 UI**：界面文案、字段名、按钮一律中文（与 spec 文档一致）。代码注释也用中文。
- **对照 spec 改页面**：要还原某页时，先在 `crm_xiaoman_prototype_spec.md` 搜对应章节（URL 在章节标题里，如 `URL：/crm/customer/list`），按其"页面布局"代码块和字段表逐项实现，字段名/分组/tab 顺序保持与文档一致。
- **SVG 图标**：一级导航用内联 SVG（stroke 风格），不要用 emoji 替换导航图标（`favorites` 页除外，那里用 emoji 是刻意的）。
- **抽屉/弹窗单例**：`openDrawer`/`openModal` 会覆盖上一个，连续弹层需自行嵌套或先关闭。
- **静态资源版本参数**：`index.html` 中 `css/style.css` 和 `js/app.js` 引用带 `?v=<版本号>` 后缀（如 `?v=20260623a`）以避免浏览器缓存。**每次改动 `css/style.css` 或 `js/app.js` 后，必须把 `index.html` 里对应的 `?v=` 值递增**（日期+字母，如 `20260623a` → `20260623b`，或跨天改为新日期）。两个资源的版本号可独立维护，但通常一起递增。

## 已知技术债（补齐时优先处理）

1. 多个 spec 详述的交互弹窗未实现：新建产品抽屉、阿里商品批量匹配/生成本地产品、新建审批流、新建任务规则、写工作报告完整弹窗、销售订单"关联生成/发起任务"下拉、目标管理新建目标。
2. `tx-alipay` 及多数企业管理深层配置页为空态占位。
