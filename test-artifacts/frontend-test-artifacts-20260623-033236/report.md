# 前端真实浏览器测试报告

## 摘要
- 结果：通过
- 模式：Headless 冒烟
- 测试时间：2026-06-23 03:32 本地时间
- 产物目录：`test-artifacts/frontend-test-artifacts-20260623-033236`

## 环境
- 前端启动命令：`python3 -m http.server 8123`（静态原型，无构建）
- 测试地址：
  - `http://localhost:8123/#customers/customers-detail`
- 浏览器 / 工具：Dockerized Playwright headless Chromium
- 浏览器命令：`docker run --rm --network host -e PLAYWRIGHT_BROWSERS_PATH=/ms-playwright -v "$PWD":"$PWD" -w "$PWD" mcr.microsoft.com/playwright:v1.60.0-noble node .../run-browser-test.cjs`

## 已执行检查
针对 `customers-detail` 页面的 7 项补齐逐项验证：

1. **写跟进入口展开表单** — 点击 `.follow-up-input` 后展开为 `.follow-up-form`，缺失项检测为 `[]`，即写跟进/AI写跟进/选择模板/跟进类型/快捷文本分组/跟进内容/跟进联系人/关联业务数据/下次跟进日程/取消/提交 全部存在。✅
2. **资料 Tab 四组字段** — 检测到 `['公司常用信息','公司其它信息','跟进信息','系统信息']` 四组齐全。✅
3. **商机&交易 Tab 三块表格** — 表头共 24 列，覆盖商机(8) + 销售订单(11) + 产品(5) 三块表格，字段名与 spec 6.5.5 一致。✅
4. **数据分析 Tab** — 顶部筛选区(时间区间/周期/成交数据来源/范围)、排序设置按钮、销售情况/沟通情况分组均存在；销售情况组 3 卡(客户销售趋势/产品销售排行/产品销售趋势对比)、沟通情况组 3 卡(客户跟进趋势/邮件收发趋势/客户EDM发送趋势)，6 张图表卡全齐。✅
5. **AI 背调 Tab** — 顶部有"完整背调报告未出现"说明，含 AI 聊天旅程/AI 谈单卡点动态类型切换，且时间线含 2025 年动态。与动态 Tab 结构一致。✅
6. **操作历史 Tab** — 筛选区(操作类型/操作人/时间范围/关键字)齐全，表格 7 列(操作时间/操作人/操作类型/操作对象·字段/变更前/变更后/备注·来源)。✅
7. **编辑客户抽屉** — 顶部"编辑"打开抽屉，含公司常用信息/公司其它信息/联系人信息/显示设置入口/添加联系人/确定；"公司其它信息"点击可展开收起。✅

## 截图
- `01-detail-default.png` — 客户详情默认（动态 Tab）
- `02-write-followup-expanded.png` — 写跟进表单展开态
- `03-tab-profile.png` — 资料 Tab 四组字段
- `04-tab-biztx.png` — 商机&交易 Tab 三块表格
- `05-tab-analysis.png` — 数据分析 Tab（销售情况组）
- `05b-tab-analysis-comm.png` — 数据分析 Tab（沟通情况组）
- `06-tab-ai.png` — AI 背调 Tab
- `07-tab-history.png` — 操作历史 Tab
- `08-edit-drawer.png` — 编辑客户抽屉
- `09-edit-drawer-other-expanded.png` — 公司其它信息展开
- `10-final.png` — 最终状态

## 浏览器发现
- Console errors：无
- Page errors：无
- 网络 / 导航失败：无
- API 4xx/5xx 响应：无

## 测试产物
- `browser-result.json` — 结构化浏览器结果（含每项检测的通过数据）
- `run-browser-test.cjs` — 主走查脚本
- `check-analysis.cjs` — 数据分析沟通情况分组补充验证脚本

## 限制说明
- 仅做结构化文本与表头检测，未逐字段核对资料 Tab 上百字段的取值（按 spec 字段名对齐，值多为 `--` 占位）。
- 沟通情况分组卡片在主脚本中因默认显示"销售情况"面板而被隐藏，已用 `check-analysis.cjs` 切换分组单独验证，3 卡齐全。
- 浏览器走查为 headless 冒烟，未覆盖交互细节（如排序设置 popover 拖拽、写跟进提交后时间线刷新等动态行为）。
