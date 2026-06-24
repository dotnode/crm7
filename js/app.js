// ========== crm H5 Prototype ==========

// ===== Navigation Config =====
const NAV_ITEMS = [
  { id: 'favorites', label: '常用', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' },
  { id: 'dashboard', label: '工作台', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>' },
  { id: 'ai-assistant', label: 'AI 助理', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 7V3M9 3h6"/><circle cx="9" cy="13" r="1.2" fill="currentColor"/><circle cx="15" cy="13" r="1.2" fill="currentColor"/><path d="M9.5 16.5c.8.6 1.6.9 2.5.9s1.7-.3 2.5-.9"/><path d="M2 12h2M20 12h2"/></svg>' },
  { id: 'mail', label: '邮件', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>' },
  { id: 'communication', label: '沟通', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>' },
  { id: 'leads', label: '线索', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/><path d="M11 8v6M8 11h6"/></svg>' },
  { id: 'customers', label: '客户', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>' },
  { id: 'business', label: '商机', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><path d="M12 12v4M8 12v4M16 12v4"/></svg>' },
  // TODO: 暂时移除 okki-leads 模块，后续需要时取消注释即可
  // { id: 'okki-leads', label: 'Leads', icon: '🎯' },
  { id: 'transaction', label: '交易', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6"/><path d="M8 13h8M8 17h8M8 9h2"/></svg>' },
  { id: 'team-data', label: '团队数据', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>' },
  { id: 'collaboration', label: '协同', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 12h8M12 8v8"/><circle cx="12" cy="12" r="10"/></svg>' },
  { id: 'enterprise', label: '企业管理', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"/></svg>' },
];

const SUBMENUS = {
  'ai-assistant': [
    { id: 'ai-todo', label: '全局 AI 待办中心', group: 'P0 · 核心闭环' },
    { id: 'ai-lead-pipeline', label: '线索自动处理链路' },
    { id: 'ai-erp-sync', label: 'CRM 与 ERP 打通' },
    { id: 'ai-biz-auto', label: '商机自动流转' },
    { id: 'ai-payment-ledger', label: '收款台账' },
    { id: 'ai-customer-profile', label: 'AI 客户画像', group: 'P1 · 重要增强' },
    { id: 'ai-tag-governance', label: '标签体系治理' },
    { id: 'ai-reply-coach', label: 'AI 回复话术' },
    { id: 'ai-stage-detect', label: '客户阶段自动判断' },
    { id: 'ai-payment-match', label: '付款与订单匹配' },
    { id: 'ai-logistics-followup', label: '物流签收回访' },
    { id: 'ai-customer-kb', label: '客户知识库' },
    { id: 'ai-field-governance', label: '字段清理与合并' },
    { id: 'ai-acquisition', label: '自研获客策略' },
    { id: 'ai-global-map', label: '全球客户地图', group: 'P2 · 后续增强' },
    { id: 'ai-map-recommend', label: '地图式产品推荐' },
    { id: 'ai-sms-subscribe', label: '短信触达 / 新品订阅' },
    { id: 'ai-linkedin-data', label: 'LinkedIn 数据接入' },
  ],
  mail: [
    { id: 'mail-inbox', label: '收件箱', parent: '邮件' },
    { id: 'mail-pending', label: '待处理邮件' },
    { id: 'mail-unread', label: '未读邮件' },
    { id: 'mail-draft', label: '草稿箱' },
    { id: 'mail-sent', label: '发件箱' },
    { id: 'mail-mass', label: '群发箱' },
    { id: 'mail-folder', label: '文件夹' },
    { id: 'mail-ad', label: '广告邮件' },
    { id: 'mail-star', label: '关注' },
    { id: 'mail-tag', label: '标签邮件', group: true },
    { id: 'mail-deleted', label: '已删除邮件' },
    { id: 'mail-spam', label: '垃圾邮件' },
    { id: 'mail-track', label: '追踪信息' },
    { id: 'mail-status', label: '已处理状态' },
  ],
  leads: [
    { id: 'leads-list', label: '线索列表' },
    { id: 'leads-incubation', label: '线索智能孵化' },
  ],
  customers: [
    { id: 'customers-list', label: '客户列表' },
    { id: 'customers-public', label: '公海客户' },
    { id: 'customers-archive', label: '建档建议', badge: '5' },
    { id: 'customers-dedup', label: '客户查重' },
    { id: 'customers-settings', label: '客户设置' },
  ],
  business: [
    { id: 'business-list', label: '商机列表' },
    { id: 'business-ai-analysis', label: 'AI 商机转化分析' },
    { id: 'business-ai-config', label: 'AI 自动化配置' },
  ],
  'okki-leads': [
    { id: 'okki-smart', label: '智能获客', group: '一站式获客' },
    { id: 'okki-recommend', label: '推荐广场' },
    { id: 'okki-search', label: '搜索引擎', group: '渠道获客' },
    { id: 'okki-trade', label: '智能贸易数据' },
    { id: 'okki-exhibition', label: '展会数据' },
    { id: 'okki-b2b', label: 'B2B询盘' },
    { id: 'okki-social', label: '社媒数据' },
    { id: 'okki-map', label: '地图获客' },
    { id: 'okki-social-monitor', label: '社媒动态', group: '动态监测' },
    { id: 'okki-trade-monitor', label: '交易动态' },
    { id: 'okki-marketing', label: '智能营销', group: '触达工具' },
    { id: 'okki-edm', label: '邮件营销' },
    { id: 'okki-whatsapp', label: 'WhatsApp营销' },
  ],
  transaction: [
    { id: 'tx-process', label: '跟单流程', group: '跟单' },
    { id: 'tx-product', label: '产品', group: '产品管理' },
    { id: 'tx-ali-product', label: '阿里商品' },
    { id: 'tx-order', label: '销售订单', group: '订单管理' },
    { id: 'tx-alipay', label: 'Alibaba.com Pay', group: '资金管理' },
  ],
  'team-data': [
    { id: 'td-completion', label: '目标完成情况', group: '目标数据' },
    { id: 'td-manage', label: '目标管理' },
    { id: 'td-wall', label: '团队墙' },
    { id: 'td-ai-monitor', label: 'AI 数据监测', group: 'AI 数据洞察' },
    { id: 'td-ai-analysis', label: 'AI 数据分析' },
    { id: 'td-ai-quality', label: 'AI 批量质检' },
    { id: 'td-report', label: '系统报表', group: '统计报表' },
    { id: 'td-work-report', label: '工作报告', group: '工作动态' },
    { id: 'td-follow-dynamics', label: '跟进动态' },
    { id: 'td-subordinate', label: '下属单页' },
  ],
  collaboration: [
    { id: 'collab-schedule', label: '日程' },
    { id: 'collab-approval', label: '审批' },
    { id: 'collab-cloud', label: '云盘' },
    { id: 'collab-contacts', label: '通讯录' },
    { id: 'collab-task', label: '任务' },
  ],
  enterprise: [
    { id: 'ent-switch', label: '功能开关', group: '基础管理' },
    { id: 'ent-roles', label: '角色权限' },
    { id: 'ent-translate', label: '翻译设置' },
    { id: 'ent-fields', label: '自定义字段', group: '销售管理' },
    { id: 'ent-field-display', label: '字段显示' },
    { id: 'ent-lead-settings', label: '线索设置' },
    { id: 'ent-customer-settings', label: '客户设置' },
    { id: 'ent-biz-settings', label: '商机设置' },
    { id: 'ent-source-settings', label: '来源设置' },
    { id: 'ent-dedup-settings', label: '判重设置' },
    { id: 'ent-product-settings', label: '产品设置', group: '交易管理' },
    { id: 'ent-order-settings', label: '销售订单设置' },
    { id: 'ent-rate-settings', label: '汇率设置' },
    { id: 'ent-mail-mgmt', label: '邮箱管理', group: '沟通管理' },
    { id: 'ent-marketing-settings', label: '营销设置' },
    { id: 'ent-guide', label: '谈单指南' },
    { id: 'ent-ali-shop', label: '阿里店铺管理', group: '外部对接' },
    { id: 'ent-site-mgmt', label: '独立站管理' },
    { id: 'ent-social-mgmt', label: '社媒管理' },
    { id: 'ent-work-report-tpl', label: '工作报告模版', group: '流程规则管理' },
    { id: 'ent-goal-mgmt', label: '目标管理' },
    { id: 'ent-automation', label: '自动化配置' },
    { id: 'ent-workflow', label: '工作流管理' },
    { id: 'ent-approval-flow', label: '审批流管理' },
    { id: 'ent-task-settings', label: '任务设置' },
    { id: 'ent-export', label: '客户导出', group: '数据管理' },
    { id: 'ent-recycle', label: '回收箱' },
    { id: 'ent-custom-report', label: '自定义报表' },
  ],
};

// ===== State =====
let currentNav = 'dashboard';
let currentSubmenu = '';
let activeDrawer = null;
// 工作台日程视图状态
let dashScheduleView = 'month'; // week | month | list
let dashScheduleOffset = 0; // 相对当前周/月的偏移

// ===== Router =====
function navigateTo(page, sub) {
  if (sub) {
    window.location.hash = `${page}/${sub}`;
  } else {
    window.location.hash = page;
  }
}

function handleRoute() {
  const hash = window.location.hash.slice(1) || 'dashboard';
  const parts = hash.split('/');
  const nav = parts[0];
  const sub = parts[1] || '';
  currentNav = nav;
  currentSubmenu = sub;
  renderSidebar();
  renderSubmenu();
  renderContent();
  refreshTopbarSearchTypes();
  closeAllTopbarPanels();
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('load', handleRoute);

// ===== Render Functions =====
function renderSidebar() {
  const el = document.getElementById('sidebar');
  el.innerHTML = NAV_ITEMS.map(item =>
    `<div class="sidebar-item ${currentNav === item.id ? 'active' : ''}" onclick="navigateTo('${item.id}')">
      <span class="icon">${item.icon}</span>
      <span>${item.label}</span>
    </div>`
  ).join('');
}

function renderSubmenu() {
  const el = document.getElementById('submenu');
  const mc = document.getElementById('mainContent');
  const items = SUBMENUS[currentNav];
  if (!items) {
    el.style.display = 'none';
    mc.classList.remove('has-submenu');
    return;
  }
  el.style.display = 'block';
  mc.classList.add('has-submenu');
  let html = '';
  let lastGroup = null;
  items.forEach(item => {
    if (item.group && item.group !== lastGroup) {
      lastGroup = item.group;
      if (typeof item.group === 'string' && item.group !== true) {
        html += `<div class="submenu-group-title">${item.group}</div>`;
      }
    }
    const active = currentSubmenu === item.id || (!currentSubmenu && items[0].id === item.id);
    html += `<div class="submenu-item ${active ? 'active' : ''}" onclick="navigateTo('${currentNav}','${item.id}')">
      ${item.label}
      ${item.badge ? `<span class="badge">${item.badge}</span>` : ''}
    </div>`;
  });
  el.innerHTML = html;
}

function renderContent() {
  const el = document.getElementById('contentArea');
  const sub = currentSubmenu || (SUBMENUS[currentNav] ? SUBMENUS[currentNav][0].id : '');
  const pageKey = sub || currentNav;
  const renderer = PAGE_RENDERERS[pageKey] || PAGE_RENDERERS[currentNav];
  if (renderer) {
    el.innerHTML = renderer();
  } else {
    el.innerHTML = `<div class="empty-state"><div class="empty-icon">📋</div><div class="empty-text">页面开发中: ${pageKey}</div></div>`;
  }
  if (pageKey === 'business-list') renderBizKanban();
}

// ===== Component Helpers =====
function renderTable(cols, rows, opts = {}) {
  const total = opts.total || rows.length;
  let html = `<div class="table-container">`;
  if (opts.toolbar) {
    html += `<div class="table-toolbar">${opts.toolbar}</div>`;
  }
  html += `<table><thead><tr>`;
  if (opts.checkbox) html += `<th style="width:40px"><input type="checkbox" class="table-checkbox" /></th>`;
  cols.forEach(c => {
    html += `<th>${typeof c === 'string' ? c : c.label}</th>`;
  });
  html += `</tr></thead><tbody>`;
  if (rows.length === 0) {
    html += `<tr><td colspan="${cols.length + (opts.checkbox ? 1 : 0)}" class="table-empty">暂无数据</td></tr>`;
  } else {
    rows.forEach(row => {
      html += `<tr>`;
      if (opts.checkbox) html += `<td><input type="checkbox" class="table-checkbox" /></td>`;
      row.forEach(cell => html += `<td>${cell}</td>`);
      html += `</tr>`;
    });
  }
  html += `</tbody></table>`;
  html += renderPagination(total, opts.pageSize || 20);
  html += `</div>`;
  return html;
}

function renderPagination(total, pageSize) {
  const pages = Math.ceil(total / pageSize) || 1;
  return `<div class="pagination">
    <span>共 ${total} 条</span>
    <span class="page-btn" onclick="showToast('上一页')">‹</span>
    ${Array.from({length: Math.min(pages, 5)}, (_, i) => `<span class="page-btn ${i === 0 ? 'active' : ''}" onclick="showToast('第'+${i+1}+'页')">${i + 1}</span>`).join('')}
    ${pages > 5 ? '<span>...</span>' : ''}
    <span class="page-btn" onclick="showToast('下一页')">›</span>
    <select onchange="showToast('每页'+this.value+'条')">${[10,20,50].map(n => `<option ${n===pageSize?'selected':''}>${n} 条/页</option>`).join('')}</select>
    <span class="text-sm text-muted" style="display:flex;align-items:center;gap:4px">跳至 <input class="page-jump" type="number" min="1" max="${pages}" value="1" style="width:48px;height:28px;border:1px solid var(--border);border-radius:var(--radius-sm);text-align:center"/> 页</span>
  </div>`;
}

function renderTabs(tabs, activeIdx = 0, groupId) {
  if (!groupId) groupId = 'tg_' + Math.random().toString(36).slice(2, 8);
  return `<div class="tabs" data-tab-group="${groupId}">${tabs.map((t, i) =>
    `<div class="tab-item ${i === activeIdx ? 'active' : ''}" data-tab-idx="${i}" onclick="switchTab('${groupId}',${i})">${t.label}${t.count !== undefined ? `<span class="tab-count">(${t.count})</span>` : ''}</div>`
  ).join('')}</div>`;
}

function renderTabPanels(groupId, panels) {
  return panels.map((p, i) =>
    `<div class="tab-panel ${i === 0 ? '' : 'hidden'}" data-tab-group="${groupId}" data-panel-idx="${i}">${p}</div>`
  ).join('');
}

function switchTab(groupId, idx) {
  document.querySelectorAll(`.tabs[data-tab-group="${groupId}"] .tab-item`).forEach(t => {
    t.classList.toggle('active', parseInt(t.dataset.tabIdx) === idx);
  });
  document.querySelectorAll(`.tab-panel[data-tab-group="${groupId}"]`).forEach(p => {
    p.classList.toggle('hidden', parseInt(p.dataset.panelIdx) !== idx);
  });
}

function switchToggle(el) {
  el.parentElement.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
}

function clickStage(el) {
  const items = el.parentElement.querySelectorAll('.stage-item');
  const idx = Array.from(items).indexOf(el);
  items.forEach((e, j) => {
    e.className = 'stage-item';
    if (j < idx) e.classList.add('done');
    if (j === idx) e.classList.add('active');
  });
}

function renderDetailFields(fields) {
  return fields.map(f => `<div class="detail-field"><span class="field-label">${f[0]}</span><span class="field-value">${f[1] || '--'}</span></div>`).join('');
}

function renderFormField(label, type, opts = {}) {
  const req = opts.required ? '<span class="required">*</span>' : '';
  const dis = opts.disabled ? ' disabled' : '';
  let input = '';
  switch (type) {
    case 'text': input = `<input class="form-input" type="text" placeholder="${opts.placeholder || ''}" value="${opts.value || ''}"${dis} />`; break;
    case 'select': input = `<select class="form-select"${dis}>${(opts.options || []).map(o => `<option>${o}</option>`).join('')}</select>`; break;
    case 'textarea': input = `<textarea class="form-textarea" placeholder="${opts.placeholder || ''}"${dis}>${opts.value || ''}</textarea>`; break;
    case 'date': input = `<input class="form-input" type="date" value="${opts.value || ''}"${dis} />`; break;
    case 'datetime': input = `<input class="form-input" type="datetime-local" value="${opts.value || ''}"${dis} />`; break;
    case 'month': input = `<input class="form-input" type="month" value="${opts.value || ''}"${dis} />`; break;
    default: input = `<input class="form-input" type="text" placeholder="${opts.placeholder || ''}" value="${opts.value || ''}"${dis} />`;
  }
  return `<div class="form-group"><label class="form-label">${label}${req}</label>${input}</div>`;
}

// ===== Topbar Interaction =====
// 按当前导航联动全局搜索类型（spec 1.2：搜索类型会随当前模块显示）
const SEARCH_TYPE_MAP = {
  favorites: ['全部', '常用', '页面', '成员'],
  dashboard: ['全部', '客户', '线索', '商机', '成员'],
  'ai-assistant': ['全部', '待办', '客户', '商机', '线索'],
  mail: ['全部', '邮件', '客户', '线索', '成员'],
  communication: ['全部', '会话', '客户', '线索', '成员'],
  leads: ['线索', '客户', '商机', '成员'],
  customers: ['客户', '线索', '商机', '成员'],
  business: ['商机', '客户', '线索', '成员'],
  transaction: ['订单', '产品', '客户', '商机'],
  'team-data': ['成员', '目标', '报表'],
  collaboration: ['成员', '日程', '任务', '审批'],
  enterprise: ['成员', '设置项', '页面'],
};
const GLOBAL_SEARCH_DATA = {
  客户: [
    { name: 'ABC Company', sub: '美国 · 5星客户', to: ['customers', 'customers-list'] },
    { name: 'Global Trade Ltd', sub: '英国 · 4星客户', to: ['customers', 'customers-list'] },
    { name: 'Shenzhen Tech Co', sub: '中国 · 3星客户', to: ['customers', 'customers-list'] },
  ],
  线索: [
    { name: 'John Smith', sub: '来源: 阿里询盘', to: ['leads', 'leads-list'] },
    { name: 'Sarah Lee', sub: '来源: 展会', to: ['leads', 'leads-list'] },
    { name: 'Mike Wilson', sub: '来源: 邮件', to: ['leads', 'leads-list'] },
  ],
  商机: [
    { name: 'DLBV 特单', sub: '阶段: 谈判报价 · ¥120,000', to: ['business', 'business-list'] },
    { name: 'Hair Extensions 整柜', sub: '阶段: 需求确认 · $45,000', to: ['business', 'business-list'] },
  ],
  成员: [
    { name: '张伟', sub: '销售一组 · 主管', to: ['team-data', 'td-completion'] },
    { name: '李娜', sub: '销售二组 · 销售', to: ['team-data', 'td-completion'] },
  ],
  邮件: [
    { name: 'Re: Product Catalog Request', sub: 'John Smith · 14:30', to: ['mail', 'mail-inbox'] },
    { name: 'Order Confirmation #12345', sub: 'Sarah Lee · 11:20', to: ['mail', 'mail-inbox'] },
  ],
  订单: [
    { name: 'SO-20260623-001', sub: 'ABC Company · ¥120,000', to: ['transaction', 'tx-order'] },
  ],
  产品: [
    { name: '男士发块 (Men Toupee)', sub: '多规格 · ¥320', to: ['transaction', 'tx-product'] },
  ],
};

function updateSearchType(val) { /* 类型切换占位，搜索时以当前选中类型为准 */ }

function refreshTopbarSearchTypes() {
  const sel = document.getElementById('searchType');
  if (!sel) return;
  const types = SEARCH_TYPE_MAP[currentNav] || ['全部'];
  const cur = sel.value && types.includes(sel.value) ? sel.value : types[0];
  sel.innerHTML = types.map(t => `<option ${t === cur ? 'selected' : ''}>${t}</option>`).join('');
}

function onGlobalSearchInput(val) {
  const box = document.getElementById('globalSearchResult');
  if (!val || !val.trim()) { if (box) box.style.display = 'none'; return; }
  const type = (document.getElementById('searchType') || {}).value || '全部';
  // 收集命中数据
  let hits = [];
  if (type === '全部') {
    Object.keys(GLOBAL_SEARCH_DATA).forEach(k => GLOBAL_SEARCH_DATA[k].forEach(d => hits.push({ ...d, cat: k })));
  } else if (GLOBAL_SEARCH_DATA[type]) {
    hits = GLOBAL_SEARCH_DATA[type].map(d => ({ ...d, cat: type }));
  }
  const q = val.trim().toLowerCase();
  hits = hits.filter(h => (h.name + h.sub).toLowerCase().includes(q)).slice(0, 8);
  if (!hits.length) {
    box.innerHTML = `<div class="gsr-empty">无匹配结果</div>`;
  } else {
    box.innerHTML = hits.map(h => {
      const target = h.to ? `navigateTo('${h.to[0]}','${h.to[1]}');closeGlobalSearch()` : 'closeGlobalSearch()';
      return `<div class="gsr-item" onclick="${target}">
        <span class="gsr-cat">${h.cat}</span>
        <span class="gsr-name">${h.name}</span>
        <span class="gsr-sub">${h.sub}</span>
      </div>`;
    }).join('');
  }
  box.style.display = 'block';
}

function closeGlobalSearch() {
  const box = document.getElementById('globalSearchResult');
  if (box) box.style.display = 'none';
}

function doGlobalSearch() {
  const v = (document.getElementById('globalSearchInput') || {}).value;
  if (v && v.trim()) showToast('全局搜索：' + v + '\n搜索类型：' + ((document.getElementById('searchType') || {}).value || '全部'));
}

document.addEventListener('click', (e) => {
  const t = e.target;
  if (!t.closest('.topbar-search')) {
    const box = document.getElementById('globalSearchResult');
    if (box) box.style.display = 'none';
  }
  if (!t.closest('.topbar-actions') && !t.closest('.topbar-panel')) {
    closeAllTopbarPanels();
  }
});

function closeAllTopbarPanels() {
  ['tm', 'msg', 'cs', 'help', 'user'].forEach(k => {
    const p = document.getElementById('topbarPanel-' + k);
    if (p) p.style.display = 'none';
  });
}

function toggleTopbarPanel(key, ev) {
  ev && ev.stopPropagation();
  const panel = document.getElementById('topbarPanel-' + key);
  const willOpen = panel.style.display === 'none';
  closeAllTopbarPanels();
  if (willOpen) {
    panel.innerHTML = renderTopbarPanel(key);
    panel.style.display = 'block';
  }
}

function renderTopbarPanel(key) {
  switch (key) {
    case 'tm':
      return `<div class="tp-head">TM 即时沟通</div>
        <div class="tp-list">
          <div class="tp-item" onclick="showToast('打开与客户 John Smith 的 TM 会话')">
            <div class="tp-avatar">J</div><div><div class="tp-name">John Smith</div><div class="tp-sub">在线 · ABC Company</div></div>
          </div>
          <div class="tp-item" onclick="showToast('打开与客户 Sarah Lee 的 TM 会话')">
            <div class="tp-avatar">S</div><div><div class="tp-name">Sarah Lee</div><div class="tp-sub">离线 · Global Trade</div></div>
          </div>
          <div class="tp-item" onclick="showToast('打开与客户 Mike Wilson 的 TM 会话')">
            <div class="tp-avatar">M</div><div><div class="tp-name">Mike Wilson</div><div class="tp-sub">在线 · mike@trade.co</div></div>
          </div>
        </div>
        <div class="tp-foot" onclick="showToast('进入 TM 沟通中心')">查看全部联系人与会话 ›</div>`;
    case 'msg':
      return `<div class="tp-head flex-between">系统消息 <span class="text-sm text-primary" onclick="showToast('全部标为已读')">全部标为已读</span></div>
        <div class="tp-list">
          ${[
            ['系统', '您分配到 3 个新公海客户，请及时跟进', '今天 14:30'],
            ['任务', 'AI 建议：商机「DLBV 特单」停留谈判报价已超 7 天', '今天 10:15'],
            ['审批', '张伟提交的「差旅报销 ¥3,200」待您审批', '昨天 18:40'],
            ['邮件', '收到新询盘邮件：Re: Product Catalog Request', '昨天 09:20'],
            ['目标', '本月销售额已完成 78%，距离目标还差 ¥52,000', '06-20'],
          ].map(m => `<div class="tp-item tp-msg" onclick="closeAllTopbarPanels()">
            <div class="tp-msg-tag ${m[0]==='任务'?'warning':m[0]==='审批'?'danger':m[0]==='目标'?'primary':'muted'}">${m[0]}</div>
            <div class="flex-1"><div class="tp-name">${m[1]}</div><div class="tp-sub">${m[2]}</div></div>
          </div>`).join('')}
        </div>
        <div class="tp-foot" onclick="closeAllTopbarPanels()">查看全部消息 ›</div>`;
    case 'cs':
      return `<div class="tp-head">在线客服</div>
        <div class="tp-body">
          <div class="tp-customer"><div class="tp-avatar" style="background:linear-gradient(135deg,#16a34a,#22c55e)">客</div>
            <div><div class="tp-name">小满在线客服</div><div class="tp-sub">服务时间 09:00-21:00</div></div></div>
          <button class="btn btn-primary w-full" onclick="showToast('正在接入在线客服…')">开始对话</button>
          <div class="tp-sub mt-12">常见问题</div>
          ${['如何导入客户？','怎样配置跟进规则？','邮件模板如何设置？','公海客户如何分配？'].map(q => `<div class="tp-faq" onclick="showToast('查看常见问题：${q}')">${q}</div>`).join('')}
        </div>`;
    case 'help':
      return `<div class="tp-head">帮助中心</div>
        <div class="tp-body">
          ${[['📖 使用手册','打开产品使用手册'],['🎓 新手教程','进入新手引导'],['❓ 常见问题','查看 FAQ'],['💬 意见反馈','提交意见与建议'],['☎️ 联系我们','获取联系方式']].map(h => `<div class="tp-help-item" onclick="showToast('${h[1]}')"><span>${h[0].split(' ')[0]}</span>${h[0].split(' ').slice(1).join(' ')} <span class="tp-arrow">›</span></div>`).join('')}
        </div>`;
    case 'user':
      return `<div class="tp-user-head">
          <div class="tp-avatar" style="width:44px;height:44px;font-size:16px">U</div>
          <div><div class="tp-name">Olivia · 销售主管</div><div class="tp-sub">admin@company.com</div></div>
        </div>
        <div class="tp-divider"></div>
        <div class="tp-body">
          ${[['个人中心'],['账号设置'],['消息通知设置'],['切换企业'],['修改密码']].map(m => `<div class="tp-help-item" onclick="showToast('${m}')"><span>›</span> ${m}</div>`).join('')}
          <div class="tp-divider"></div>
          <div class="tp-help-item tp-logout" onclick="showToast('退出登录')"><span>↪</span> 退出登录</div>
        </div>`;
  }
  return '';
}

// ===== Drawer & Modal =====
// 写跟进入口展开为完整表单（客户/线索/商机详情页共用）
// 按 spec 6.5 动态 Tab：写题、AI写跟进、选择模板、跟进类型、快捷文本分组、正文、跟进联系人、关联业务、下次跟进日程
function expandFollowUp(el) {
  var uid = 'fu_' + Math.random().toString(36).slice(2, 8);
  el.outerHTML =
    '<div class="card mb-12 follow-up-form" id="' + uid + '">' +
      '<div class="flex-between mb-12">' +
        '<div class="form-section-title mb-0">写跟进</div>' +
        '<div class="flex gap-8">' +
          '<button class="btn btn-sm" onclick="showToast(\'AI 正在根据沟通记录生成跟进内容…\')">✨ AI写跟进</button>' +
          '<button class="btn btn-sm" onclick="showToast(\'从跟进模板中带入标准化内容\')">📋 选择模板</button>' +
        '</div>' +
      '</div>' +
      '<div class="grid-2">' +
        renderFormField('跟进类型', 'select', {options:['快速记录','电话跟进','上门拜访','微信沟通','邮件跟进','其它']}) +
        renderFormField('快捷文本分组', 'select', {options:['个人分组','公司通用','询盘回复','报价跟进','售后跟进']}) +
      '</div>' +
      '<div class="form-group">' +
        '<label class="form-label">跟进内容</label>' +
        '<div class="follow-up-editor">' +
          '<textarea class="form-textarea" placeholder="请输入跟进内容，@ 可提及成员或对象" style="min-height:100px;margin-bottom:8px"></textarea>' +
          '<button class="btn btn-sm btn-text" onclick="showToast(\'在正文中提及成员或对象\')">@ 提及</button>' +
        '</div>' +
      '</div>' +
      '<div class="grid-2">' +
        renderFormField('跟进联系人', 'select', {options:['Erik Kirste（主联系人）','Lisa Weber','Thomas Braun']}) +
        '<div class="form-group">' +
          '<label class="form-label">关联业务数据</label>' +
          '<div class="flex gap-8">' +
            '<select class="form-select" style="flex:1"><option>选择关联商机/往来邮件</option><option>商机：Bono Hair Mens Toupee 询盘</option><option>邮件：Re: Your Bono Hair order</option></select>' +
            '<button class="btn">选择</button>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="form-group">' +
        '<label class="form-label">下次跟进日程</label>' +
        '<div class="flex gap-8" style="align-items:center;flex-wrap:wrap">' +
          '<input class="form-input" type="date" style="flex:1;min-width:160px" />' +
          '<label class="form-switch" style="margin:0"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 全天</label>' +
          '<a class="text-primary text-sm">完整编辑</a>' +
        '</div>' +
      '</div>' +
      '<div class="flex gap-12 mt-12" style="justify-content:flex-end">' +
        '<button class="btn" onclick="document.getElementById(\'' + uid + '\').remove()">取消</button>' +
        '<button class="btn btn-primary" onclick="collapseFollowUp(document.getElementById(\'' + uid + '\'))">提交</button>' +
      '</div>' +
    '</div>';
}
// 提交后收起为收起态输入入口
function collapseFollowUp(formEl) {
  if (!formEl) return;
  formEl.outerHTML = '<div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>';
}
function openDrawer(title, bodyHtml, footerHtml) {
  closeAllTopbarPanels();
  document.getElementById('drawerTitle').textContent = title;
  document.getElementById('drawerBody').innerHTML = bodyHtml;
  document.getElementById('drawerFooter').innerHTML = footerHtml || '';
  document.getElementById('drawerOverlay').classList.add('active');
  document.getElementById('drawer').classList.add('active');
}

function closeDrawer() {
  document.getElementById('drawerOverlay').classList.remove('active');
  document.getElementById('drawer').classList.remove('active');
}

function openModal(title, bodyHtml, footerHtml) {
  closeAllTopbarPanels();
  document.getElementById('modalHeader').innerHTML = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalFooter').innerHTML = footerHtml || '';
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
}

// 轻提示 toast —— 取代原生 alert，风格与站点一致
function showToast(message, type) {
  const wrap = document.getElementById('toastWrap') || (() => {
    const el = document.createElement('div');
    el.id = 'toastWrap';
    el.className = 'toast-wrap';
    document.body.appendChild(el);
    return el;
  })();
  const map = {
    info:    { icon: '💡', cls: 'toast-info' },
    success: { icon: '✓',  cls: 'toast-success' },
    warn:    { icon: '!',  cls: 'toast-warn' },
    error:   { icon: '✕',  cls: 'toast-error' },
  };
  const cfg = map[type] || map.info;
  const node = document.createElement('div');
  node.className = 'toast ' + cfg.cls;
  node.innerHTML = '<span class="toast-icon"></span><span class="toast-msg"></span>';
  node.querySelector('.toast-icon').textContent = cfg.icon;
  node.querySelector('.toast-msg').textContent = String(message == null ? '' : message);
  wrap.appendChild(node);
  requestAnimationFrame(() => node.classList.add('show'));
  setTimeout(() => {
    node.classList.remove('show');
    setTimeout(() => node.remove(), 240);
  }, 2600);
}

// ============================================================
// ===== PAGE RENDERERS =====
// ============================================================

const PAGE_RENDERERS = {};

// ===== 1. Dashboard / 工作台 =====
PAGE_RENDERERS['dashboard'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">工作台</h1>
    </div>
    <div class="card mb-16">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div>
          <div style="font-size:18px;font-weight:600">Hi，Olivia，欢迎回来 👋</div>
          <div class="text-muted text-sm mt-12">UTC+8 ${new Date().toLocaleString('zh-CN')}</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-sm" onclick="openExchangeCalcModal()">💱 汇率计算器</button>
          <button class="btn btn-sm" onclick="openDashboardConfigModal()">⚙ 工作台配置</button>
        </div>
      </div>
    </div>
    <div class="card mb-16">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">日程</div>
        <div class="btn-group">
          <button class="btn btn-sm btn-primary" onclick="openNewScheduleModal()">+ 新建日程</button>
          <div class="toggle-group">
            <button class="toggle-btn ${dashScheduleView==='week'?'active':''}" onclick="setDashScheduleView('week')">周</button>
            <button class="toggle-btn ${dashScheduleView==='month'?'active':''}" onclick="setDashScheduleView('month')">月</button>
            <button class="toggle-btn ${dashScheduleView==='list'?'active':''}" onclick="setDashScheduleView('list')">列表</button>
          </div>
          <button class="btn btn-sm" onclick="shiftDashSchedule(-1)">‹ 上一段</button>
          <button class="btn btn-sm" onclick="dashScheduleOffset=0;renderContent()">今天</button>
          <button class="btn btn-sm" onclick="shiftDashSchedule(1)">下一段 ›</button>
        </div>
      </div>
      ${renderDashScheduleBody()}
    </div>
    <div class="card">
      <div class="flex-between mb-12">
        <div>
          <div class="card-title mb-0">跟进任务 <span class="ai-badge">AI</span></div>
          <div class="text-sm text-muted" style="margin-top:4px">基于 AI 分析与管理者配置，为你推荐以下跟进任务。立即行动，持续提升业绩！</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-sm" onclick="openDashTaskDisplayModal()">显示设置</button>
          <button class="btn btn-sm" onclick="showToast('已将全部跟进任务标记为已读')">全部已读</button>
          <button class="btn btn-sm" onclick="ignoreAllDashTasks()">全部忽略</button>
        </div>
      </div>
      <div id="dashTaskList">${renderDashTaskList()}</div>
    </div>
  `;
};

function renderDashScheduleBody() {
  const dayHeaders = ['周一','周二','周三','周四','周五','周六','周日'];
  // 基线日期：当前周/月的起点 + offset
  const base = new Date();
  if (dashScheduleView === 'week') {
    base.setDate(base.getDate() - base.getDay() + 1 + dashScheduleOffset * 7);
    const cells = Array.from({length:7}, (_, i) => {
      const d = new Date(base); d.setDate(base.getDate() + i);
      const isToday = d.toDateString() === new Date().toDateString();
      const evs = dashScheduleEvents(d);
      return `<div class="calendar-cell ${isToday?'today':''}"><div class="cell-date">${d.getMonth()+1}/${d.getDate()} ${dayHeaders[i]}</div>${evs.map(e=>`<div class="cal-event">${e}</div>`).join('')}</div>`;
    }).join('');
    return `<div class="calendar-grid">${dayHeaders.map(d=>`<div class="calendar-day-header">${d}</div>`).join('')}${cells}</div>`;
  }
  if (dashScheduleView === 'month') {
    const first = new Date(base.getFullYear(), base.getMonth() + dashScheduleOffset, 1);
    const startWeekday = (first.getDay() + 6) % 7; // 周一为首
    const daysInMonth = new Date(first.getFullYear(), first.getMonth() + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < startWeekday; i++) cells.push(`<div class="calendar-cell muted"></div>`);
    for (let day = 1; day <= daysInMonth; day++) {
      const d = new Date(first.getFullYear(), first.getMonth(), day);
      const isToday = d.toDateString() === new Date().toDateString();
      const evs = dashScheduleEvents(d);
      cells.push(`<div class="calendar-cell ${isToday?'today':''}"><div class="cell-date">${day}</div>${evs.map(e=>`<div class="cal-event">${e}</div>`).join('')}</div>`);
    }
    return `<div class="calendar-grid">${dayHeaders.map(d=>`<div class="calendar-day-header">${d}</div>`).join('')}${cells.join('')}</div>`;
  }
  // list
  const items = [];
  for (let i = 0; i < 14; i++) {
    const d = new Date(); d.setDate(d.getDate() + i + dashScheduleOffset * 7);
    const evs = dashScheduleEvents(d);
    if (evs.length) items.push(`<div class="dash-sched-list-item"><div class="dsl-date">${d.getMonth()+1}/${d.getDate()} ${dayHeaders[(d.getDay()+6)%7]}</div><div class="dsl-events">${evs.map(e=>`<div class="cal-event">${e}</div>`).join('')}</div></div>`);
  }
  return items.length ? `<div class="dash-sched-list">${items.join('')}</div>` : `<div class="empty-state" style="padding:40px"><div class="empty-text">该时段暂无日程</div></div>`;
}

// 简要日程样例：根据日期生成固定伪事件
function dashScheduleEvents(date) {
  const key = date.getDate() % 7;
  const pool = [
    ['10:00 与客户电话'],
    ['14:00 商机推进会议'],
    ['09:30 发送报价单'],
    ['16:00 跟进 ABC Company'],
    ['11:00 团队周会'],
    ['15:30 寄送样品', '18:00 邮件回复'],
    ['回复询盘邮件'],
  ];
  return pool[key] || [];
}

function setDashScheduleView(v) { dashScheduleView = v; renderContent(); }
function shiftDashSchedule(n) { dashScheduleOffset += n; renderContent(); }

// 工作台跟进任务列表（带 id 以支持单条操作）
const DASH_TASKS = [
  { id: 'dt1', title: '建议跟进客户 ABC Company', desc: '该客户15天未联系，建议尽快跟进', source: 'AI 推荐', done: false },
  { id: 'dt2', title: '回复邮件: Re: Product Inquiry', desc: '收到新询盘邮件，建议24小时内回复', source: '管理者规则', done: false },
  { id: 'dt3', title: '商机推进: DLBV 特单', desc: '商机停留在谈判报价阶段已超过7天', source: 'AI 推荐', done: false },
];

function renderDashTaskList() {
  const tasks = DASH_TASKS.filter(t => !t.done);
  if (!tasks.length) return `<div class="empty-state" style="padding:48px"><div class="empty-icon">🎉</div><div class="empty-text">跟进任务已全部处理，干得漂亮！</div></div>`;
  return tasks.map(task => `
    <div class="card card-flat mb-8">
      <div class="flex-between">
        <div>
          <div style="font-weight:500;margin-bottom:4px">${task.title}</div>
          <div class="text-sm text-muted">${task.desc}</div>
          <div class="text-sm" style="margin-top:4px"><span class="table-tag ${task.source==='AI 推荐'?'primary':'success'}">${task.source}</span></div>
        </div>
        <div class="btn-group">
          <button class="btn btn-sm btn-primary" onclick="dashTaskGenScript('${task.id}')">生成话术</button>
          <button class="btn btn-sm" onclick="dashTaskGenMail('${task.id}')">生成邮件</button>
          ${task.id==='dt2' ? `<button class="btn btn-sm" onclick="navigateTo('mail','mail-inbox')">回复</button>` : ''}
          <button class="btn btn-sm" onclick="ignoreDashTask('${task.id}')">忽略</button>
        </div>
      </div>
    </div>
  `).join('');
}

function ignoreDashTask(id) {
  const t = DASH_TASKS.find(x => x.id === id);
  if (t) t.done = true;
  const el = document.getElementById('dashTaskList');
  if (el) el.innerHTML = renderDashTaskList();
}
function ignoreAllDashTasks() {
  openModal('确认忽略全部', '确定将所有跟进任务忽略吗？此操作不可撤销。',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="confirmIgnoreAllDashTasks()">确定</button>');
}
function confirmIgnoreAllDashTasks() {
  DASH_TASKS.forEach(t => t.done = true);
  closeModal();
  const el = document.getElementById('dashTaskList');
  if (el) el.innerHTML = renderDashTaskList();
}
function dashTaskGenScript(id) { showToast('✨ AI 正在根据任务生成跟进话术…'); }
function dashTaskGenMail(id) { navigateTo('mail','mail-compose'); }

// 汇率计算器弹窗
function openExchangeCalcModal() {
  openModal('💱 汇率计算器', `
    <div class="form-group">
      <label class="form-label">金额</label>
      <input class="form-input" type="number" id="xcAmount" value="1000" oninput="calcExchange()" />
    </div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">从</label>
        <select class="form-select" id="xcFrom" onchange="calcExchange()">
          <option>USD</option><option>EUR</option><option>CNY</option><option>GBP</option><option>JPY</option>
        </select>
      </div>
      <div class="form-group">
        <label class="form-label">到</label>
        <select class="form-select" id="xcTo" onchange="calcExchange()">
          <option>USD</option><option>EUR</option><option selected>CNY</option><option>GBP</option><option>JPY</option>
        </select>
      </div>
    </div>
    <div class="alert alert-info mb-0" id="xcResult">1000 USD ≈ 7280.00 CNY（参考汇率 1 USD = 7.28 CNY）</div>
    <div class="form-tip">汇率为参考值，实际交易以银行汇率为准。</div>
  `, '<button class="btn" onclick="closeModal()">关闭</button>');
  calcExchange();
}
const XC_RATES = { USD:1, EUR:1.09, CNY:7.28, GBP:1.27, JPY:156.5 };
function calcExchange() {
  const amt = parseFloat(document.getElementById('xcAmount').value) || 0;
  const from = document.getElementById('xcFrom').value;
  const to = document.getElementById('xcTo').value;
  const usd = amt * XC_RATES[from];
  const out = (usd / XC_RATES[to]).toFixed(2);
  document.getElementById('xcResult').innerHTML = `${amt} ${from} ≈ ${out} ${to}（参考汇率 1 ${from} = ${(XC_RATES[from]/XC_RATES[to]).toFixed(4)} ${to}）`;
}

// 工作台配置弹窗
function openDashboardConfigModal() {
  const modules = [['日程','日程视图区',true],['跟进任务','AI 推荐跟进任务',true],['数据洞察','关键数据指标',false],['目标概览','本月目标进度',false],['快捷工具','常用快捷入口',false]];
  openModal('⚙ 工作台配置', `
    <div class="text-sm text-muted mb-12">勾选要在工作台显示的模块，调整后即时生效。</div>
    ${modules.map(m => `
      <label class="dash-cfg-item">
        <span><span style="font-weight:600">${m[0]}</span><span class="text-muted text-sm" style="margin-left:8px">${m[1]}</span></span>
        <span class="switch-track ${m[2]?'on':''}" onclick="this.classList.toggle('on')"></span>
      </label>
    `).join('')}
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'工作台配置已保存\')">保存</button>');
}

// 显示设置弹窗
function openDashTaskDisplayModal() {
  const fields = ['任务来源','客户名称','任务标题','任务描述','截止时间','优先级','创建时间'];
  openModal('跟进任务显示设置', `
    <div class="text-sm text-muted mb-12">选择要显示的任务字段与推荐来源。</div>
    <div class="form-section-title" style="margin-bottom:10px;">显示字段</div>
    <div class="grid-2 mb-12">
      ${fields.map((f,i)=>`<label class="form-switch"><input type="checkbox" ${i<5?'checked':''}/> ${f}</label>`).join('')}
    </div>
    <div class="form-section-title" style="margin-bottom:10px;">推荐来源</div>
    <div class="flex gap-12">
      <label class="form-switch"><input type="checkbox" checked/> AI 推荐</label>
      <label class="form-switch"><input type="checkbox" checked/> 管理者规则</label>
      <label class="form-switch"><input type="checkbox"/> 系统提醒</label>
    </div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();renderContent()">确定</button>');
}

// ===== 2. Mail / 邮件模块 =====
// 邮件文件夹左侧导航树（spec 3.1.1）
const MAIL_FOLDERS = [
  { id: 'mail-inbox', label: '收件箱', badge: 156 },
  { id: 'mail-pending', label: '待处理邮件', badge: 4, badgeType: 'warning' },
  { id: 'mail-unread', label: '未读邮件', badge: 5 },
  { id: 'mail-draft', label: '草稿箱' },
  { id: 'mail-sent', label: '发件箱' },
  { id: 'mail-mass', label: '群发箱' },
  { id: 'mail-folder', label: '文件夹', group: '文件夹', expandable: true },
  { id: 'mail-ad', label: '广告邮件', indent: true },
  { id: 'mail-star', label: '关注', group: '标签邮件' },
  { id: 'mail-tag', label: '自定义标签', indent: true },
  { id: 'mail-deleted', label: '已删除邮件' },
  { id: 'mail-spam', label: '垃圾邮件' },
  { id: 'mail-track', label: '追踪信息' },
];

function renderMailFolderTree(active) {
  let html = '<div class="mail-foldertree-scroll">';
  let lastGroup = null;
  MAIL_FOLDERS.forEach(f => {
    if (f.group && f.group !== lastGroup) { lastGroup = f.group; html += `<div class="tree-group-title">${f.group}</div>`; }
    html += `<div class="tree-item ${active === f.id ? 'active' : ''} ${f.indent ? 'tree-indent' : ''}" onclick="navigateTo('mail','${f.id}')">
      <span>${f.label}</span>
      ${f.badge ? `<span class="count ${f.badgeType === 'warning' ? 'warning' : ''}">${f.badge}</span>` : ''}
    </div>`;
  });
  html += '</div>';
  return html;
}

// 邮件高级搜索弹窗
function openMailAdvancedSearch() {
  openModal('邮件高级搜索', `
    <div class="grid-2">
      ${renderFormField('发件人','text',{placeholder:'发件人名称或邮箱'})}
      ${renderFormField('收件人','text',{placeholder:'收件人名称或邮箱'})}
      ${renderFormField('主题包含','text',{placeholder:'主题关键字'})}
      ${renderFormField('正文包含','text',{placeholder:'正文关键字'})}
      ${renderFormField('开始日期','date',{})}
      ${renderFormField('结束日期','date',{})}
      ${renderFormField('是否有附件','select',{options:['不限','有附件','无附件']})}
      ${renderFormField('是否已读','select',{options:['不限','已读','未读']})}
    </div>
    <div class="form-group"><label class="form-label">标签</label>
      <select class="form-select"><option>不限</option><option>客户</option><option>同事</option><option>通讯录</option><option>其他</option></select>
    </div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn" onclick="resetMailSearch()" style="margin-right:auto">重置</button><button class="btn btn-primary" onclick="closeModal();showToast(\'搜索已执行\')">搜索</button>');
}
function resetMailSearch() {}

// 内联邮件阅读面板（右侧第三栏）
let mailSelectedItem = 0;
function renderMailReadPanel() {
  if (mailSelectedItem < 0) return `<div class="mail-read-empty"><div class="empty-icon">📧</div><div class="empty-text">从左侧选择一封邮件查看详情</div></div>`;
  const e = currentMailEmails[mailSelectedItem] || currentMailEmails[0];
  if (!e) return `<div class="mail-read-empty"><div class="empty-icon">📧</div><div class="empty-text">暂无邮件</div></div>`;
  return `
    <div class="mail-read-head">
      <div class="mr-subject">${e[2]}</div>
      <div class="mail-read-actions">
        <button class="btn btn-sm" title="回复">↩ 回复</button>
        <button class="btn btn-sm" title="转发">↪ 转发</button>
        <button class="btn btn-sm" title="删除" onclick="moveMailToDeleted(${mailSelectedItem})">🗑</button>
        <button class="btn btn-sm" onclick="showToast('已标记为待处理')">标记待处理</button>
        <button class="btn btn-sm btn-text" onclick="showToast('更多操作')">更多 ›</button>
      </div>
    </div>
    <div class="mail-read-meta flex-between">
      <div class="flex gap-8">
        <div class="mr-avatar">${e[0][0]}</div>
        <div>
          <div class="mr-from">${e[0]} &lt;${e[1]}&gt;</div>
          <div class="text-sm text-muted">收件人: service@company.com <a class="btn-text btn-sm" onclick="event.stopPropagation();toggleMailDetailInfo(this)">详细信息 ›</a></div>
          <div class="mail-detail-info hidden">
            <div class="text-sm text-muted">抄送: --</div>
            <div class="text-sm text-muted">发送时间: ${e[4]}</div>
            <div class="text-sm text-muted">当地时间: 暂未查询到该客户的当地时间</div>
            <div class="text-sm text-muted">邮件大小: 12.4 KB</div>
          </div>
        </div>
      </div>
      <div class="flex gap-8 items-center">
        <span class="text-sm text-muted">源语言: 英文</span>
        <button class="btn btn-sm" onclick="translateMail(this)">翻译邮件</button>
        <span class="text-sm text-muted">${e[4]}</span>
      </div>
    </div>
    <div class="mail-read-body" id="mailReadBody">
      <p>Hi,</p>
      <p>I would like to request your latest product catalog for hair products. We are particularly interested in:</p>
      <ul style="margin:8px 0;padding-left:20px;list-style:disc"><li>Men's toupee</li><li>Women's wigs</li><li>Hair extensions</li></ul>
      <p>Please send me the catalog along with your best prices for bulk orders.</p>
      <p>Best regards,<br>${e[0]}</p>
    </div>
    <div class="flex gap-8 mb-16">
      <button class="btn btn-primary btn-sm" onclick="navigateTo('mail','mail-compose')">快速回复</button>
      <button class="btn btn-sm btn-ai">✨ AI 邮件创作</button>
    </div>
    <div class="divider"></div>
    <div class="card-title">销售助手</div>
    <div class="mail-sales-assistant">
      <div class="flex gap-8 mb-8"><span class="table-tag warning">陌生人</span><span class="table-tag">高意向</span></div>
      <div class="info-list">
        <div class="info-item"><span class="info-label">联系人邮箱</span><span class="info-value">${e[1]}</span></div>
        <div class="info-item"><span class="info-label">公司名称</span><span class="info-value">Example Corp</span></div>
        <div class="info-item"><span class="info-label">公司官网</span><span class="info-value text-primary">example.com</span></div>
      </div>
      <div class="mt-12 ai-analysis-box">
        <span class="ai-badge">OKKI AI</span>
        <div class="text-sm mt-12">买家真实性验证: <strong class="text-success">高真实性</strong></div>
        <div class="text-sm">分析结果: 高意向询盘，询盘产品与业务高度匹配，建议优先跟进。</div>
        <div class="text-xs text-muted mt-12">内容由 AI 生成，仅供参考</div>
      </div>
      <div class="flex gap-8 mt-12" style="flex-wrap:wrap">
        <button class="btn btn-sm" onclick="showToast('打开谈单指南')">谈单指南</button>
        <button class="btn btn-sm" onclick="showToast('已对该客户发起背调')">发起背调</button>
        <button class="btn btn-sm" onclick="showToast('建档建议：建议新建客户 Example Corp')">建档建议</button>
        <button class="btn btn-sm" onclick="showToast('物流查价')">物流查价</button>
        <button class="btn btn-sm" onclick="showToast('查看与该邮箱的往来邮件')">往来邮件</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="alert alert-warning mail-receipt">
      已读回执：发件人希望得到您的已读回执，是否发送？
      <button class="btn btn-sm" onclick="this.closest('.alert').style.display='none'">不发送</button>
      <button class="btn btn-sm btn-primary" onclick="showToast('已读回执已发送');this.closest('.alert').style.display='none'">发送</button>
    </div>
  `;
}

let currentMailEmails = [];
function selectMailItem(idx) { mailSelectedItem = idx; const p = document.getElementById('mailReadPanel'); if (p) p.innerHTML = renderMailReadPanel(); }
function translateMail(el) { el.textContent = '已翻译'; const b = document.getElementById('mailReadBody'); if (b) b.style.opacity = '.85'; showToast('已翻译为中文（演示）'); }
function moveMailToDeleted(idx) { showToast('邮件已移至已删除'); }
function toggleMailDetailInfo(el) { const info = el.closest('.mail-read-meta').querySelector('.mail-detail-info'); if (info) info.classList.toggle('hidden'); }

// 通用三栏邮件布局
function renderMailLayout(pageKey, title, emails, opts = {}) {
  currentMailEmails = emails;
  const folderTree = renderMailFolderTree(pageKey);
  const tabs = renderTabs([
    {label:'全部'}, {label:'客户'}, {label:'同事'}, {label:'通讯录'}, {label:'其他'}
  ]);
  return `
    <div class="mail-3col">
      <div class="mail-col-folder">
        <div class="mail-switch">${['邮件','客户','下属'].map((t,i)=>`<span class="ms-item ${i===0?'active':''}" onclick="switchToggle(this)">${t}</span>`).join('')}</div>
        <button class="btn btn-primary btn-sm mail-write-btn" onclick="navigateTo('mail','mail-compose')">✉ 写信</button>
        ${folderTree}
      </div>
      <div class="mail-col-list">
        <div class="mail-list-toolbar flex-between">
          <div class="flex gap-8 items-center">
            <input class="filter-input" placeholder="搜索本文件夹邮件" style="height:30px;min-width:120px"/>
          </div>
          <div class="flex gap-8">
            ${opts.extraActions || ''}
            <button class="btn btn-sm" onclick="openMailAdvancedSearch()">高级搜索</button>
            <button class="btn btn-sm btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button>
          </div>
        </div>
        ${tabs}
        ${opts.banner || ''}
        <div class="table-info mb-8">共 ${emails.length} 封</div>
        <div class="mail-list-group">
          ${emails.map((e, i) => `
            <div class="mail-list-row ${i === mailSelectedItem ? 'active' : ''}" onclick="selectMailItem(${i})">
              <input type="checkbox" class="table-checkbox" onclick="event.stopPropagation()"/>
              <div class="mlr-from">${e[0]}</div>
              <div class="mlr-subject">${e[2]}<span class="mlr-snippet text-muted"> — ${e[3].substring(0,24)}…</span></div>
              <div class="mlr-time">${e[4]}</div>
              <div class="mlr-tags">${e[5] ? `<span class="table-tag primary">${e[5]}</span>` : ''}${e[6] ? `<span class="table-tag warning">${e[6]}</span>` : ''}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div class="mail-col-read" id="mailReadPanel">
        ${renderMailReadPanel()}
      </div>
    </div>
  `;
}

PAGE_RENDERERS['mail-inbox'] = () => {
  const emails = [
    ['John Smith', 'john@example.com', 'Re: Product Catalog Request', 'Hi, I would like to request your latest product catalog...', '14:30', '已分发邮件'],
    ['Sarah Lee', 'sarah@buyer.com', 'Order Confirmation #12345', 'Thank you for your order. Please find attached...', '11:20', ''],
    ['Mike Wilson', 'mike@trade.co', 'Re: Shipping Update', 'The shipment has been dispatched via DHL...', '09:15', '接收分发邮件'],
    ['Alice Chen', 'alice@partner.cn', 'Meeting Tomorrow', 'Hi, just confirming our meeting tomorrow at 3pm...', '昨天', ''],
    ['Bob Johnson', 'bob@corp.us', 'RFQ: Custom Products', 'We are looking for a supplier of custom...', '昨天', ''],
  ];
  return renderMailLayout('mail-inbox', '收件箱', emails);
};

PAGE_RENDERERS['mail-compose'] = () => {
  const composeTo = window.composeTo || '';
  window.composeTo = '';
  return `
  <div class="page-header">
    <h1 class="page-title">写邮件</h1>
    <div class="page-actions">
      <button class="btn btn-primary" onclick="sendMail()">发送</button>
      <button class="btn" onclick="saveMailDraft()">存草稿</button>
      <button class="btn" onclick="previewMail()">预览</button>
      <button class="btn" onclick="submitMailApproval()">提交审批</button>
      <button class="btn" onclick="navigateTo('mail','mail-inbox')">取消</button>
    </div>
  </div>
  <div class="card mail-compose">
    ${renderFormField('发件人', 'select', {options:['service@company.com','sales@company.com']})}
    ${renderFormField('收件人', 'text', {placeholder:'输入收件人邮箱，多个用分号分隔', value: composeTo})}
    <div class="flex gap-8 mb-8" id="mailCcBcc">
      <a class="btn-text btn-sm" onclick="toggleMailField('cc',this)">+ 抄送</a>
      <a class="btn-text btn-sm" onclick="toggleMailField('bcc',this)">+ 密送</a>
      <a class="btn-text btn-sm" onclick="showToast('已开启群发单显')">群发单显</a>
    </div>
    <div class="mail-cc-row hidden" id="mailCcRow">${renderFormField('抄送','text',{placeholder:'输入抄送邮箱'})}</div>
    <div class="mail-cc-row hidden" id="mailBccRow">${renderFormField('密送','text',{placeholder:'输入密送邮箱'})}</div>
    ${renderFormField('主题', 'text', {placeholder:'邮件主题'})}
    <div class="flex-between mb-8">
      <button class="btn btn-sm btn-ai" onclick="showToast('✨ AI 正在生成邮件内容…')">✨ AI 邮件创作</button>
    </div>
    <div style="border:1px solid var(--border);border-radius:var(--radius);min-height:300px;padding:12px">
      <div style="border-bottom:1px solid var(--border-light);padding-bottom:8px;margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
        ${['B','I','U','S','左','中','右','H1','H2','列表','表格','链接','😀'].map(b => `<button class="btn btn-sm btn-icon" style="min-width:28px;height:28px;padding:2px" onclick="showToast('富文本操作：${b}')">${b}</button>`).join('')}
      </div>
      <div contenteditable="true" style="min-height:200px;outline:none;color:var(--text-muted)">在此输入邮件正文...</div>
    </div>
    <div class="flex gap-8 mt-12" style="flex-wrap:wrap">
      <button class="btn btn-sm" onclick="openMailInsertDialog('附件')">📎 附件</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('云文档')">云文档</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('模板')">模板</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('图片')">图片</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('快速文本')">快速文本</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('产品')">产品</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('单据')">单据</button>
      <button class="btn btn-sm" onclick="openMailInsertDialog('收款')">收款</button>
    </div>
    <div class="divider"></div>
    <div class="form-group"><label class="form-label">签名</label>
      <select class="form-select"><option>默认签名</option><option>销售-英文签名</option><option>客服签名</option><option>不使用签名</option></select>
    </div>
    <div class="form-group"><label class="form-label">备注</label>
      <textarea class="form-textarea" placeholder="为本邮件添加备注（仅自己可见）"></textarea>
    </div>
    <div class="flex gap-16" style="font-size:12px;color:var(--text-secondary)">
      <span>邮件大小: 0KB</span>
    </div>
    <div class="flex gap-12 mt-12" style="flex-wrap:wrap">
      <label class="form-switch"><input type="checkbox" onchange="showToast('紧急邮件将标记优先')" /> 紧急</label>
      <label class="form-switch"><input type="checkbox" /> 回执</label>
      <label class="form-switch"><input type="checkbox" checked /> 追踪邮件</label>
      <label class="form-switch"><input type="checkbox" onchange="showToast('开启定时发送配置')" /> 定时发送</label>
      <label class="form-switch"><input type="checkbox" /> 标记为待处理</label>
    </div>
  </div>
`;};

function toggleMailField(type, el) {
  const row = document.getElementById(type === 'cc' ? 'mailCcRow' : 'mailBccRow');
  if (row.classList.contains('hidden')) { row.classList.remove('hidden'); el.textContent = el.textContent.replace('+','-'); }
  else { row.classList.add('hidden'); el.textContent = el.textContent.replace('-','+'); }
}
function sendMail() { openModal('发送确认','邮件将立即发送给收件人，是否继续？','<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();navigateTo(\'mail\',\'mail-sent\')">发送</button>'); }
function saveMailDraft() { showToast('草稿已保存'); navigateTo('mail','mail-draft'); }
function previewMail() { openModal('邮件预览','<div style="border:1px solid var(--border-light);border-radius:var(--radius);padding:16px;min-height:200px"><strong>主题：</strong>（待填写）<br/><br/>邮件正文预览…</div>','<button class="btn" onclick="closeModal()">关闭</button>'); }
function submitMailApproval() { openModal('提交审批','填写审批信息后由审批人审核通过再发送。','<div class="form-group"><label class="form-label">审批人</label><select class="form-select"><option>张伟（主管）</option><option>李娜（主管）</option></select></div><div class="form-group"><label class="form-label">审批说明</label><textarea class="form-textarea" placeholder="说明邮件背景"></textarea></div><button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已提交审批\')">提交</button>'); }
function openMailInsertDialog(type) {
  if (type === '附件') { openModal('添加附件','<div class="upload-area">📎 点击或拖拽文件到此处上传</div><div class="text-sm text-muted mt-12">支持图片、文档、压缩包，单个文件最大 50MB</div>','<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'附件已添加\')">确定</button>'); return; }
  let body = '';
  if (type === '模板') body = '<div class="form-group"><select class="form-select"><option>询盘回复模板</option><option>报价跟进模板</option><option>新品推荐模板</option><option>售后回访模板</option></select></div><div class="text-sm text-muted">选中模板后内容将插入正文。</div>';
  else if (type === '快速文本') body = '<div class="grid-2">'+['问候-英文','感谢-英文','催付款-英文','催样确认','质量管理'].map(t=>`<div class="tp-faq" onclick="closeModal();showToast('已插入：'+t)">${t}</div>`).join('')+'</div>';
  else if (type === '云文档') body = '<div class="form-group"><input class="form-input" placeholder="搜索云盘文档"/></div><div class="text-sm text-muted">选择需插入的云文档，以链接形式附在正文。</div>';
  else if (type === '图片') body = '<div class="upload-area">📷 点击或拖拽图片上传</div>';
  else if (type === '产品') body = '<div class="form-group"><input class="form-input" placeholder="搜索产品"/></div><div class="text-sm text-muted">选择产品后将插入产品卡片（含图片、型号、价格）。</div>';
  else if (type === '单据') body = '<div class="flex gap-12">'+['销售订单','报价单','回款单','采购单'].map(t=>`<label class="form-switch"><input type="checkbox"/> ${t}</label>`).join('')+'</div><div class="text-sm text-muted mt-12">勾选后将单据信息插入正文中。</div>';
  else if (type === '收款') body = '<div class="form-group"><label class="form-label">关联订单</label><select class="form-select"><option>SO-20260623-001</option><option>SO-20260620-003</option></select></div><div class="text-sm text-muted">将收款信息链接插入正文，便于客户付款。</div>';
  openModal('插入' + type, '<div>' + body + '</div>', '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'' + type + '已插入邮件\')">确定</button>');
}

// Mail detail view
function showMailDetail() {
  openDrawer('邮件详情', `
    <div style="margin-bottom:16px">
      <h3 style="margin-bottom:8px">Re: Product Catalog Request</h3>
      <div class="flex-between">
        <div>
          <div style="font-weight:500">John Smith &lt;john@example.com&gt;</div>
          <div class="text-sm text-muted">收件人: service@company.com</div>
        </div>
        <span class="text-sm text-muted">14:30</span>
      </div>
    </div>
    <div class="flex gap-8 mb-12">
      <button class="btn btn-sm">翻译邮件</button>
      <button class="btn btn-sm" onclick="openMailPrintDrawer()">🖨 打印</button>
      <span class="text-sm text-muted">源语言: 英文</span>
    </div>
    <div style="border:1px solid var(--border-light);border-radius:var(--radius);padding:16px;margin-bottom:16px;min-height:150px">
      <p>Hi,</p>
      <p>I would like to request your latest product catalog for hair products. We are particularly interested in:</p>
      <ul style="margin:8px 0;padding-left:20px;list-style:disc"><li>Men's toupee</li><li>Women's wigs</li><li>Hair extensions</li></ul>
      <p>Please send me the catalog along with your best prices for bulk orders.</p>
      <p>Best regards,<br>John Smith</p>
    </div>
    <div class="flex gap-8 mb-16">
      <button class="btn btn-primary btn-sm">快速回复</button>
      <button class="btn btn-sm btn-ai">✨ AI 邮件创作</button>
    </div>
    <div class="divider"></div>
    <div class="card-title">销售助手</div>
    <div style="border:1px solid var(--border-light);border-radius:var(--radius);padding:12px">
      <div class="flex gap-8 mb-8"><span class="table-tag warning">陌生人</span></div>
      <div class="info-list">
        <div class="info-item"><span class="info-label">联系人邮箱</span><span class="info-value">john@example.com</span></div>
        <div class="info-item"><span class="info-label">公司名称</span><span class="info-value">Example Corp</span></div>
        <div class="info-item"><span class="info-label">公司官网</span><span class="info-value text-primary">example.com</span></div>
      </div>
      <div class="mt-12"><span class="ai-badge">OKKI AI</span> <span class="text-sm">买家真实性验证: 待判断</span></div>
      <div class="flex gap-8 mt-12">
        <button class="btn btn-sm">谈单指南</button>
        <button class="btn btn-sm">发起背调</button>
        <button class="btn btn-sm">建档建议</button>
        <button class="btn btn-sm">物流查价</button>
        <button class="btn btn-sm">往来邮件</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="alert alert-warning">
      已读回执：发件人希望得到您的已读回执，是否发送？
      <button class="btn btn-sm ml-auto">不发送</button>
      <button class="btn btn-sm btn-primary">发送</button>
    </div>
  `, '<button class="btn" onclick="closeDrawer()">关闭</button>');
}

// Mail sub-pages with mock data
PAGE_RENDERERS['mail-pending'] = () => {
  const emails = [
    ['Sarah Lee','sarah@buyer.com','Order Confirmation #12345','Thank you for your order. Please find attached the confirmation...','今天 11:20','','待回复'],
    ['Bob Johnson','bob@corp.us','RFQ: Custom Products','We are looking for a supplier of custom hair products...','昨天 15:30','','待回复'],
    ['Alice Chen','alice@partner.cn','Partnership Proposal','We would like to propose a strategic partnership...','昨天 09:00','','待跟进'],
    ['Mike Wilson','mike@trade.co','Urgent: Shipping Delay','There has been a delay in the shipment. The new ETA is...','06-19','','待处理'],
  ];
  return renderMailLayout('mail-pending', '待处理邮件', emails, {
    banner: `<div class="alert alert-warning mb-12">📌 您有 ${emails.length} 封邮件待处理</div>`,
    extraActions: `<button class="btn btn-sm" onclick="markAllProcessed()">全部标记已处理</button>`
  });
};

function markAllProcessed() {
  openModal('确认操作', '确定将所有待处理邮件标记为已处理吗？',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确定</button>'
  );
}

PAGE_RENDERERS['mail-unread'] = () => {
  const emails = [
    ['Tom Baker','tom@newclient.com','Inquiry About Hair Extensions','Hello, I am interested in your clip-in hair extensions...','今天 16:45',''],
    ['Lisa Wang','lisa@distributor.hk','Re: Bulk Order Discount','Thanks for the quotation. We would like to negotiate...','今天 14:10',''],
    ['Hans Mueller','hans@vendor.de','Neue Kollektion Anfrage','Wir sind an Ihrer neuen Kollektion interessiert...','今天 10:30',''],
    ['Maria Garcia','maria@salon.es','Sample Request','Could you please send us samples of your premium line...','昨天 18:20',''],
    ['Ahmed Khan','ahmed@trade.pk','Re: MOQ and Pricing','Your MOQ seems high for our market. Can we discuss...','昨天 11:15',''],
  ];
  return renderMailLayout('mail-unread', '未读邮件', emails, {
    extraActions: `<button class="btn btn-sm" onclick="showToast('已将全部未读邮件标记为已读')">全部标记已读</button>`
  });
};

PAGE_RENDERERS['mail-draft'] = () => {
  const drafts = [
    ['Re: Product Catalog','service@company.com → john@example.com','产品目录回复草稿...','今天 13:00','1.2KB'],
    ['Summer Promotion','sales@company.com → (未填写)','夏季促销邮件模板...','昨天 16:30','3.5KB'],
    ['Follow Up: Meeting','service@company.com → lisa@distributor.hk','会议跟进邮件...','06-18','0.8KB'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">草稿箱</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="table-info mb-8">共 ${drafts.length} 封草稿</div>
    ${renderTable(
      ['主题','收发','摘要','保存时间','大小','操作'],
      drafts.map(d => [
        '<span class="table-link" onclick="openDraft()">' + d[0] + '</span>',
        '<span class="text-muted text-sm">' + d[1] + '</span>',
        '<span class="text-muted text-sm">' + d[2] + '</span>',
        d[3], d[4],
        '<button class="btn btn-sm btn-primary" onclick="openDraft()">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'
      ]),
      { checkbox: true, total: drafts.length }
    )}
  `;
};

PAGE_RENDERERS['mail-sent'] = () => {
  const sent = [
    ['service@company.com','john@example.com','Re: Product Catalog Request','Hi John, Please find our latest catalog attached...','今天 15:00','已送达','已读'],
    ['service@company.com','sarah@buyer.com','Quotation for Hair Extensions','Dear Sarah, Thank you for your inquiry...','今天 10:30','已送达','已读'],
    ['sales@company.com','info@wilson.com','Product Catalog','Dear Wilson Corp, Please find attached...','昨天 10:00','已送达','未读'],
    ['service@company.com','hans@vendor.de','Re: Neue Kollektion','Vielen Dank für Ihre Anfrage...','06-19','已送达','已读'],
    ['sales@company.com','maria@salon.es','Sample Arrangement','Dear Maria, Your samples have been arranged...','06-18','已送达','未读'],
    ['service@company.com','ahmed@trade.pk','MOQ Discussion','Dear Ahmed, We can offer flexible MOQ...','06-17','已送达','已读'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">发件箱</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="table-info mb-8">共 ${sent.length} 封已发送邮件</div>
    ${renderTable(
      ['发件人','收件人','主题','摘要','发送时间','送达','阅读','操作'],
      sent.map(e => [
        '<span class="text-muted">' + e[0] + '</span>',
        e[1],
        '<span class="table-link" onclick="showMailDetail()">' + e[2] + '</span>',
        '<span class="text-muted text-sm">' + e[3].substring(0,30) + '...</span>',
        e[4],
        '<span class="table-tag success">' + e[5] + '</span>',
        '<span class="table-tag ' + (e[6]==='已读'?'success':'') + '">' + e[6] + '</span>',
        '<button class="btn btn-sm" onclick="showMailDetail()">查看</button>'
      ]),
      { checkbox: true, total: 45 }
    )}
  `;
};

PAGE_RENDERERS['mail-mass'] = () => {
  const mass = [
    ['夏季新品推广','sales@company.com','350 人','2026-06-18 10:00','<span class="table-tag success">已完成</span>','312','28','10','32.5%'],
    ['Q2 产品更新通知','service@company.com','200 人','2026-06-10 09:00','<span class="table-tag success">已完成</span>','195','15','5','28.0%'],
    ['展会邀约邮件','sales@company.com','150 人','2026-06-05 14:00','<span class="table-tag success">已完成</span>','142','12','8','35.2%'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">群发箱</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="stat-cards mb-16">
      <div class="stat-card"><div class="stat-label">总群发次数</div><div class="stat-value">3</div></div>
      <div class="stat-card"><div class="stat-label">总发送人数</div><div class="stat-value">700</div></div>
      <div class="stat-card"><div class="stat-label">平均打开率</div><div class="stat-value">31.9%</div></div>
      <div class="stat-card"><div class="stat-label">平均回复率</div><div class="stat-value">5.2%</div></div>
    </div>
    ${renderTable(
      ['群发主题','发件人','发送人数','发送时间','状态','送达','打开','回复','打开率'],
      mass.map(e => [
        '<span class="table-link">' + e[0] + '</span>',
        e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]
      ]),
      { total: 3 }
    )}
  `;
};

PAGE_RENDERERS['mail-star'] = () => {
  const starred = [
    ['John Smith','john@example.com','Re: Product Catalog Request','Important inquiry from potential big buyer','今天 14:30','⭐'],
    ['Sarah Lee','sarah@buyer.com','Order Confirmation #12345','Confirmed order, need to follow up shipping','昨天 11:20','⭐'],
    ['Hans Mueller','hans@vendor.de','Partnership Discussion','Strategic partnership opportunity in Germany','06-15','⭐'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">关注</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="table-info mb-8">共 ${starred.length} 封关注邮件</div>
    ${renderTable(
      ['关注','发件人','邮箱','主题','备注','时间'],
      starred.map(e => [
        '<span style="cursor:pointer" onclick="toggleStar(this)">' + e[5] + '</span>',
        '<span class="table-link" onclick="showMailDetail()">' + e[0] + '</span>',
        '<span class="text-muted">' + e[1] + '</span>',
        '<span class="table-link" onclick="showMailDetail()">' + e[2] + '</span>',
        '<span class="text-sm text-muted">' + e[3] + '</span>',
        e[4]
      ]),
      { checkbox: true, total: starred.length }
    )}
  `;
};

PAGE_RENDERERS['mail-deleted'] = () => {
  const deleted = [
    ['Newsletter Bot','news@spam.com','Weekly Industry Newsletter','This week in hair industry news...','06-20','自动删除'],
    ['Promo','deals@marketing.com','Flash Sale Alert!!!','Limited time offer on bulk orders...','06-19','手动删除'],
    ['Unknown','test@test123.com','RE: RE: RE: Hello','Forwarded chain mail...','06-17','自动删除'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">已删除邮件</h1><div class="page-actions"><button class="btn btn-text text-danger" onclick="openClearDeletedModal()">清空</button><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="alert alert-warning mb-12">⚠️ 已删除邮件将在 30 天后自动永久删除</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','删除时间','删除方式','操作'],
      deleted.map(e => [
        e[0], '<span class="text-muted">' + e[1] + '</span>',
        e[2], '<span class="text-muted text-sm">' + e[3] + '</span>',
        e[4], '<span class="table-tag">' + e[5] + '</span>',
        '<button class="btn btn-sm">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>'
      ]),
      { checkbox: true, total: deleted.length }
    )}
  `;
};

PAGE_RENDERERS['mail-spam'] = () => {
  const spam = [
    ['WINNER','prize@scam.com','You Won $1,000,000!!!','Congratulations! Click here to claim...','06-20'],
    ['SEO Expert','seo@bulk.com','Boost Your Rankings Now','We guarantee #1 on Google...','06-19'],
    ['Cheap Deals','offer@fake.com','90% OFF All Products','Unbelievable deals just for you...','06-18'],
    ['Account Alert','security@phish.com','Your Account Has Been Compromised','Click immediately to secure...','06-17'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">垃圾邮件</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="table-info mb-8">共 ${spam.length} 封垃圾邮件</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','时间','操作'],
      spam.map(e => [
        e[0], '<span class="text-muted">' + e[1] + '</span>',
        e[2], '<span class="text-muted text-sm">' + e[3].substring(0,30) + '...</span>',
        e[4],
        '<button class="btn btn-sm">非垃圾邮件</button> <button class="btn btn-sm btn-text text-danger">删除</button>'
      ]),
      { checkbox: true, total: spam.length }
    )}
  `;
};

PAGE_RENDERERS['mail-track'] = () => {
  const tracked = [
    ['Re: Product Catalog Request','john@example.com','今天 15:00','<span class="table-tag success">已送达</span>','<span class="table-tag success">已读</span>','3次','今天 16:20','链接未点击'],
    ['Quotation for Hair Extensions','sarah@buyer.com','今天 10:30','<span class="table-tag success">已送达</span>','<span class="table-tag success">已读</span>','1次','今天 12:15','点击了报价链接'],
    ['Product Catalog','info@wilson.com','昨天 10:00','<span class="table-tag success">已送达</span>','<span class="table-tag">未读</span>','0次','--','--'],
    ['Sample Arrangement','maria@salon.es','06-18','<span class="table-tag success">已送达</span>','<span class="table-tag success">已读</span>','2次','06-19 09:30','点击了产品链接'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">追踪信息</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="stat-cards mb-16">
      <div class="stat-card"><div class="stat-label">追踪邮件总数</div><div class="stat-value">25</div></div>
      <div class="stat-card"><div class="stat-label">已读率</div><div class="stat-value">72%</div></div>
      <div class="stat-card"><div class="stat-label">链接点击率</div><div class="stat-value">35%</div></div>
      <div class="stat-card"><div class="stat-label">平均打开次数</div><div class="stat-value">1.8</div></div>
    </div>
    ${renderTable(
      ['主题','收件人','发送时间','送达','阅读','打开次数','最近打开','链接点击'],
      tracked.map(e => [
        '<span class="table-link" onclick="showMailDetail()">' + e[0] + '</span>',
        e[1],e[2],e[3],e[4],e[5],e[6],e[7]
      ]),
      { total: 25 }
    )}
  `;
};

PAGE_RENDERERS['mail-folder'] = () => `
  <div class="page-header"><h1 class="page-title">文件夹</h1><div class="page-actions"><button class="btn btn-primary" onclick="openNewFolderModal()">+ 新建文件夹</button><button class="btn" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="tree-item active">全部文件夹</div>
      <div class="tree-item tree-indent">重要客户 <span class="count">12</span></div>
      <div class="tree-item tree-indent">待跟进 <span class="count">8</span></div>
      <div class="tree-item tree-indent">报价相关 <span class="count">23</span></div>
      <div class="tree-item tree-indent">订单确认 <span class="count">15</span></div>
      <div class="tree-item tree-indent">样品邮件 <span class="count">6</span></div>
    </div>
    <div class="right-content px-16">
      <div class="table-info mb-8">文件夹: 重要客户 · 12 封邮件</div>
      ${renderTable(
        ['发件人','邮箱','主题','时间'],
        [['John Smith','john@example.com','Re: Product Catalog Request','今天 14:30'],
         ['Hans Mueller','hans@vendor.de','Partnership Discussion','06-15'],
         ['Sarah Lee','sarah@buyer.com','Order Confirmation #12345','06-14']],
        { checkbox: true, total: 12 }
      )}
    </div>
  </div>
`;

function openNewFolderModal() {
  openModal('新建文件夹',
    renderFormField('文件夹名称', 'text', {required:true, placeholder:'输入文件夹名称'}) +
    renderFormField('上级文件夹', 'select', {options:['无（顶级文件夹）','重要客户','待跟进','报价相关']}),
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">创建</button>'
  );
}

PAGE_RENDERERS['mail-ad'] = () => {
  const ads = [
    ['Marketing Pro','promo@service.com','Upgrade Your CRM Today!','Special offer for enterprise customers...','今天 08:00'],
    ['Trade Show Alerts','events@expo.com','Canton Fair 2026 Registration Open','Register early for Canton Fair...','昨天 12:00'],
    ['Logistics Partner','ads@shipping.com','Competitive Shipping Rates','Get 20% off on international shipping...','06-19'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">广告邮件</h1><div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="alert alert-info mb-12">💡 系统自动识别的广告邮件，可能包含有价值的行业信息</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','时间','操作'],
      ads.map(e => [
        e[0], '<span class="text-muted">' + e[1] + '</span>',
        '<span class="table-link" onclick="showMailDetail()">' + e[2] + '</span>',
        '<span class="text-muted text-sm">' + e[3] + '</span>',
        e[4],
        '<button class="btn btn-sm">移至收件箱</button>'
      ]),
      { checkbox: true, total: ads.length }
    )}
  `;
};

PAGE_RENDERERS['mail-tag'] = () => `
  <div class="page-header"><h1 class="page-title">标签邮件</h1><div class="page-actions"><button class="btn btn-sm" onclick="openNewTagModal()">+ 新建标签</button><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="tree-item active">全部标签</div>
      <div class="tree-item tree-indent"><span class="status-dot danger"></span>紧急 <span class="count">5</span></div>
      <div class="tree-item tree-indent"><span class="status-dot warning"></span>重要 <span class="count">12</span></div>
      <div class="tree-item tree-indent"><span class="status-dot success"></span>已处理 <span class="count">45</span></div>
      <div class="tree-item tree-indent"><span class="status-dot primary"></span>询盘 <span class="count">28</span></div>
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#999;margin-right:6px"></span>其他 <span class="count">10</span></div>
    </div>
    <div class="right-content px-16">
      <div class="table-info mb-8">标签: 紧急 · 5 封</div>
      ${renderTable(
        ['标签','发件人','主题','时间'],
        [['<span class="status-dot danger"></span>紧急','Mike Wilson','Urgent: Shipping Delay','06-19'],
         ['<span class="status-dot danger"></span>紧急','Bob Johnson','RFQ: Custom Products - Deadline Tomorrow','06-18']],
        { checkbox: true, total: 5 }
      )}
    </div>
  </div>
`;

function openNewTagModal() {
  openModal('新建标签',
    renderFormField('标签名称', 'text', {required:true, placeholder:'输入标签名称'}) +
    '<div class="form-group"><label class="form-label">标签颜色</label><div class="flex gap-8">' +
    ['var(--danger)','var(--warning)','var(--success)','var(--primary)','#999','#9c27b0'].map(c =>
      '<span style="display:inline-block;width:24px;height:24px;border-radius:50%;background:' + c + ';cursor:pointer;border:2px solid transparent" onclick="pickTagColor(this)"></span>'
    ).join('') + '</div></div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">创建</button>'
  );
}

function ignoreMail(el) { el.closest('tr').style.display = 'none'; }
function openDraft() { navigateTo('mail','mail-compose'); }
function toggleStar(el) { el.textContent = el.textContent === '⭐' ? '☆' : '⭐'; }
function openClearDeletedModal() {
  openModal('清空确认', '确定永久清空所有已删除邮件吗？此操作不可恢复。',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-danger" onclick="closeModal()">确定清空</button>'
  );
}
function pickTagColor(el) {
  el.parentElement.querySelectorAll('span').forEach(s => s.style.borderColor = 'transparent');
  el.style.borderColor = 'var(--text)';
}

// ===== 3. Communication / 沟通模块 =====
PAGE_RENDERERS['communication'] = () => renderCommunicationPage();
let commActiveChannel = 'WhatsApp 企业版'; // WhatsApp企业版(带空格,与spec一致)
function switchCommChannel(label) { commActiveChannel = label; renderContent(); }

function renderCommunicationPage() {
  const channels = ['WhatsApp 企业版','Facebook聊天','Instagram','网站聊天','TM','WhatsApp'];
  const tabs = `<div class="tabs">${channels.map((c,i)=>`<div class="tab-item ${c===commActiveChannel?'active':''}" onclick="switchCommChannel('${c}')">${c}</div>`).join('')}</div>`;
  const ops = `<div class="flex gap-8 mb-16">
      <button class="btn" onclick="showToast('查看沟通/营销相关数据')">营销数据</button>
      <button class="btn" onclick="showToast('管理社媒账号连接')">社媒管理</button>
      <button class="btn" onclick="showToast('查看渠道使用指南')">使用指南</button>
      <button class="btn btn-primary" onclick="showToast('新建会话')">+ 新建会话</button>
    </div>`;
  // WhatsApp 企业版：未配置 → 引导卡（与 spec 4.1.2 一致）
  if (commActiveChannel === 'WhatsApp 企业版') {
    return `
      <div class="page-header"><h1 class="page-title">沟通</h1></div>
      ${tabs}
      ${ops}
      <div class="card">
        <div style="text-align:center;padding:20px 40px">
          <div style="font-size:32px;margin-bottom:16px">📱</div>
          <h2 style="margin-bottom:8px">WhatsApp 官方群发</h2>
          <p class="text-muted mb-24">一键触达全球海量客户</p>
          <div class="grid-4 mb-24" style="max-width:760px;margin:0 auto;gap:16px;text-align:left">
            ${['批量营销信息','官方群发通道','企业账号统一管理','营销模板统一创建'].map(c => `<div class="comm-cap"><span class="cc-badge">✓</span>${c}</div>`).join('')}
          </div>
          <div class="grid-3" style="max-width:680px;margin:0 auto;gap:24px;text-align:left">
            <div class="card comm-step">
              <div class="cs-num">Step 1</div>
              <div class="cs-title">准备可用的 Facebook 账号和手机号</div>
              <div class="text-sm text-muted">用于绑定 WABA 企业账号。</div>
            </div>
            <div class="card comm-step comm-step-active">
              <div class="cs-num">Step 2</div>
              <div class="cs-title">授权绑定 WABA 账号</div>
              <div class="text-sm text-muted">预计耗时 5 分钟</div>
              <div class="text-sm text-muted">输入 Facebook 账号并连接 OKKI 账号</div>
              <div class="flex gap-8 mt-12">
                <a class="btn-text text-sm" onclick="showToast('打开操作指南')">查看操作指南</a>
                <button class="btn btn-primary btn-sm" onclick="showToast('开始创建 WABA 账号…')">立即创建</button>
              </div>
            </div>
            <div class="card comm-step">
              <div class="cs-num">Step 3</div>
              <div class="cs-title">等待官方审核</div>
              <div class="text-sm text-muted">通过后即可使用 WABA 与买家洽谈业务。</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
  // 其它频道：会话列表 + 聊天消息面板
  const convos = [
    { name: 'John Smith', preview: 'Hi, I would like to know more about...', time: '14:30', unread: 2, channel: 'whatsapp' },
    { name: 'Sarah Lee', preview: 'Thanks for the quotation!', time: '12:10', unread: 0, channel: 'facebook' },
    { name: 'Mike Wilson', preview: 'Order confirmed, shipping tomorrow', time: '昨天', unread: 1, channel: 'whatsapp' },
    { name: 'Lisa Wang', preview: 'Photo', time: '昨天', unread: 0, channel: 'instagram' },
    { name: 'Hans Mueller', preview: 'Guten Tag, wir interessieren uns...', time: '06-19', unread: 3, channel: 'whatsapp' },
  ];
  const msgs = [
    { from: 'them', text: 'Hi, I saw your products on the website, very interested!', time: '14:20' },
    { from: 'me', text: 'Hi John! Nice to hear from you. Which product line are you interested in?', time: '14:22' },
    { from: 'them', text: 'Mainly the hair extensions, could you send the catalog?', time: '14:25' },
    { from: 'me', text: 'Sure, I will send you the latest catalog right away. Please check your email.', time: '14:28' },
    { from: 'them', text: 'Hi, I would like to know more about...', time: '14:30' },
  ];
  return `
    <div class="page-header"><h1 class="page-title">沟通</h1></div>
    ${tabs}
    ${ops}
    <div class="card comm-2col">
      <div class="comm-convolist">
        <input class="filter-input comm-search" placeholder="搜索会话" />
        ${convos.map((c, i) => `
          <div class="comm-convo ${i === 0 ? 'active' : ''}">
            <div class="cc-avatar">${c.name[0]}</div>
            <div class="cc-main">
              <div class="flex-between"><div class="cc-name">${c.name}</div><div class="cc-time">${c.time}</div></div>
              <div class="flex-between"><div class="cc-preview">${c.preview}</div>${c.unread ? `<span class="cc-unread">${c.unread}</span>` : ''}</div>
            </div>
          </div>
        `).join('')}
      </div>
      <div class="comm-chatpanel">
        <div class="comm-chathead">
          <div class="flex gap-8 items-center"><div class="cc-avatar">J</div><div><div class="cc-name">John Smith</div><div class="text-xs text-muted">在线 · WhatsApp</div></div></div>
          <div class="flex gap-8"><button class="btn btn-sm" onclick="showToast('查看客户资料')">客户资料</button><button class="btn btn-sm" onclick="showToast('查看往来邮件')">往来邮件</button><button class="btn btn-sm" onclick="showToast('更多')">⋯</button></div>
        </div>
        <div class="comm-msglist">
          ${msgs.map(m => `<div class="comm-msg ${m.from === 'me' ? 'me' : 'them'}"><div class="cm-bubble">${m.text}</div><div class="cm-time">${m.time}</div></div>`).join('')}
        </div>
        <div class="comm-inputbar">
          <div class="flex gap-8 mb-8"><button class="btn btn-sm">📎</button><button class="btn btn-sm">😀</button><button class="btn btn-sm" onclick="showToast('发送模板消息')">模板</button><button class="btn btn-sm" onclick="showToast('快速回复')">快速回复</button></div>
          <textarea class="form-textarea comm-input" placeholder="输入消息，回车发送"></textarea>
          <div class="flex-between mt-8"><span class="text-xs text-muted">Enter 发送 / Shift+Enter 换行</span><button class="btn btn-primary btn-sm" onclick="showToast('消息已发送')">发送</button></div>
        </div>
      </div>
    </div>
  `;
}

// ===== 4. Leads / 线索模块 =====
PAGE_RENDERERS['leads-list'] = () => {
  const leads = [
    ['张经理', 'zhang@buyer.com', '待处理', '高意向', 'Google搜索', '主动开发', '主动开发', '2026-06-20'],
    ['Wilson Corp', 'info@wilson.com', '初步触达', '新询盘', '网站访问', '官网询盘', '个人询盘', '2026-06-19'],
    ['Maria Santos', 'maria@trade.br', '完善信息', '', '阿里询盘', '阿里巴巴', '阿里询盘', '2026-06-18'],
    ['Tech Solutions', 'contact@tech.de', '联系互动', '活跃客户', '展会', '展会', '展会', '2026-06-17'],
    ['Al Maktoum Trading', 'info@almak.ae', '待处理', '', 'TM', 'TM 咨询', 'TM 咨询', '2026-06-16'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">线索列表</h1>
      <div class="flex gap-8 items-center">
        <select class="filter-select" style="width:130px" onchange="switchToggle(this.previousElementSibling)">
          <option>我的视角</option><option>团队视角</option><option>全部视角</option>
        </select>
        <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的线索</button><button class="toggle-btn" onclick="switchToggle(this)">团队线索</button></div>
      </div>
      <div class="page-actions">
        <button class="btn btn-sm btn-ai" onclick="openAILeadAssistant()">🤖 AI 数据助理</button>
        <button class="btn btn-sm" onclick="openLeadImportExportDialog()">⇅ 导入导出</button>
        <button class="btn btn-sm" onclick="openLeadFilterDrawer()">MASConstraintMaker 筛选</button>
        <button class="btn btn-primary" onclick="openNewLeadDrawer()">+ 新建线索</button>
        <button class="btn btn-sm btn-icon" onclick="openLeadSettingsModal()">⚙</button>
      </div>
    </div>
    <div class="page-with-sidebar">
      <div class="left-panel">
        <div class="tree-item active" onclick="filterLeadTree(this,'全部线索',128)">全部线索 <span class="count">128</span></div>
        <div class="tree-item" onclick="filterLeadTree(this,'未读线索',12)">未读线索 <span class="count">12</span></div>
        <div class="tree-group-title">线索状态</div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'待处理',45)">待处理 <span class="count">45</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'完善信息',23)">完善信息 <span class="count">23</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'初步触达',38)">初步触达 <span class="count">38</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'联系互动',22)">联系互动 <span class="count">22</span></div>
        <div class="tree-item" onclick="filterLeadTree(this,'已完成线索',56)">已完成线索 <span class="count">56</span></div>
        <div class="tree-group-title">系统标签</div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'高意向',15)">高意向 <span class="count">15</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'新询盘',30)">新询盘 <span class="count">30</span></div>
        <div class="tree-group-title">线索来源</div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'个人询盘',28)">个人询盘 <span class="count">28</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'TM 咨询',16)">TM 咨询 <span class="count">16</span></div>
        <div class="tree-item tree-indent" onclick="filterLeadTree(this,'阿里询盘',20)">阿里询盘 <span class="count">20</span></div>
      </div>
      <div class="right-content px-16">
        <div class="bulk-toolbar" id="leadBulkBar">${renderLeadBulkBar()}</div>
        <div class="flex-between mb-12">
          <span class="table-info">共 128 条线索</span>
          <div class="flex gap-8 items-center">
            <button class="btn btn-sm text-primary" onclick="navigateTo('leads','leads-incubation')">查看孵化建议</button>
            <span class="text-sm text-muted">最近联系时间</span>
            <select class="filter-select" style="width:120px" onchange="showToast('筛选：'+this.value)"><option>最近 7 天内</option><option>最近 30 天内</option><option>未联系</option></select>
            <button class="btn btn-sm btn-text" onclick="showToast('列设置')">列设置 ⚙</button>
          </div>
        </div>
        ${renderTable(
          ['线索名称','邮箱','线索状态','系统标签','访问来源','来源方式','线索来源',`创建时间 <span class="sort-arrow" onclick="showToast('切换创建时间排序')" title="排序">⇅</span>`,'操作'],
          leads.map(l => [
            `<span class="table-link" onclick="navigateTo('leads','leads-detail')">${l[0]}</span>`,
            l[1],
            `<span class="table-tag ${l[2]==='待处理'?'warning':l[2]==='联系互动'?'success':'primary'}">${l[2]}</span>`,
            l[3] ? `<span class="table-tag primary">${l[3]}</span>` : '',
            l[4], l[5], l[6], l[7],
            '<button class="btn btn-sm btn-text" onclick="openLeadRowMenu(this)">操作 ▾</button>'
          ]),
          { checkbox: true, total: 128 }
        )}
      </div>
    </div>
  `;
};

function renderLeadBulkBar() {
  return `<div class="flex gap-8 items-center"><span class="text-sm">已选 <strong id="leadSelectedCount">0</strong> 条</span>
    <button class="btn btn-sm" onclick="showToast('批量分配所选线索')">分配</button>
    <button class="btn btn-sm" onclick="showToast('批量添加标签')">加标签</button>
    <button class="btn btn-sm" onclick="showToast('批量转化为客户')">转为客户</button>
    <button class="btn btn-sm" onclick="showToast('批量放入公海')">放入公海</button>
    <button class="btn btn-sm btn-text text-danger" onclick="showToast('批量删除所选线索')">删除</button>
    <span class="text-sm text-muted">勾选线索后可批量操作</span></div>`;
}
function openLeadImportExportDialog() {
  openModal('线索导入 / 导出','<div class="grid-2"><div class="upload-area">📥 导入线索（Excel/CSV）</div><div class="upload-area" style="border-style:solid">📤 导出当前线索</div></div><div class="mt-12"><div class="text-sm text-muted">支持 Excel、CSV 格式，可导入前预览与去重。</div></div><div class="dt-steps mt-12"></div>','<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已开始导入\')">开始导入</button>');
}
function openLeadFilterDrawer() {
  openDrawer('线索筛选', `
    <div class="form-group"><label class="form-label">关键词</label><input class="form-input" placeholder="线索名称/邮箱/公司"/></div>
    <div class="grid-2">
      ${renderFormField('线索状态','select',{options:['不限','待处理','完善信息','初步触达','联系互动']})}
      ${renderFormField('系统标签','select',{options:['不限','高意向','新询盘','活跃客户']})}
      ${renderFormField('线索来源','select',{options:['不限','主动开发','个人询盘','TM 咨询','阿里询盘','社媒','展会']})}
      ${renderFormField('最近联系','select',{options:['不限','7天内','30天内','未联系']})}
      ${renderFormField('创建开始','date',{})}
      ${renderFormField('创建结束','date',{})}
    </div>
    <div class="form-group"><label class="form-label">负责人</label><select class="form-select"><option>不限</option><option>我</option><option>张伟</option><option>李娜</option></select></div>
  `, '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-danger" onclick="resetLeadFilter()" style="margin-right:auto">重置</button><button class="btn btn-primary" onclick="closeDrawer();showToast(\'筛选已应用\')">确定</button>');
}
function resetLeadFilter() { closeDrawer(); }

// New Lead Drawer
function openNewLeadDrawer() {
  openDrawer('新建线索', `
    <div class="alert alert-info mb-12">💡 线索增强：系统将自动补全公司信息和联系方式</div>
    <div class="form-section">
      <div class="form-section-title">常用信息 <a class="btn-text btn-sm ml-auto">显示设置</a></div>
      ${renderFormField('公司网址', 'text', {placeholder:'输入网址或名称自动匹配'})}
      ${renderFormField('线索名称', 'text', {required:true, placeholder:'请输入线索名称'})}
      ${renderFormField('国家地区', 'select', {options:['请选择','中国','美国','德国','巴西','阿联酋','日本','英国']})}
      ${renderFormField('线索来源', 'select', {options:['请选择','主动开发','个人询盘','TM 咨询','阿里询盘','社媒','展会']})}
      ${renderFormField('公司名称', 'text', {placeholder:'请输入公司名称'})}
    </div>
    <div class="form-section">
      <div class="form-section-title">联系人信息(1) <span class="table-tag primary">主</span></div>
      <div class="text-sm text-muted mb-12">主联系人默认置顶</div>
      ${renderFormField('昵称', 'text', {placeholder:'联系人昵称'})}
      ${renderFormField('邮箱', 'text', {placeholder:'联系人邮箱'})}
      <div class="form-row">
        ${renderFormField('社交平台', 'select', {options:['请选择','WhatsApp','Facebook','Instagram','LinkedIn','Twitter']})}
        ${renderFormField('社交账号', 'text', {placeholder:'平台账号'})}
      </div>
      <div class="form-row">
        ${renderFormField('电话区号', 'select', {options:['+86','+1','+44','+49','+55','+971']})}
        ${renderFormField('电话号码', 'text', {placeholder:'电话号码'})}
      </div>
      <a class="btn-text btn-sm">展开全部（选填）</a>
    </div>
    <a class="btn-text btn-sm">+ 添加联系人</a>
    <div class="divider"></div>
    <label class="form-switch"><span class="switch-track"></span> 历史动态重建</label>
  `, `
    <button class="btn" onclick="closeDrawer()">取消</button>
    <button class="btn">确定并继续新建</button>
    <button class="btn btn-primary" onclick="closeDrawer()">确定</button>
  `);
}

// Lead Detail
PAGE_RENDERERS['leads-detail'] = () => {
  const mainTab = 'lead_main';
  const dynFilter = 'lead_dynf';

  const timelineAll = `
    <div class="timeline">
      <div class="timeline-item"><div class="tl-time">2026-06-20 14:30</div><div class="tl-title">收到邮件</div><div class="tl-desc">info@wilson.com 发送给 service@company.com，主题: Re: Product Inquiry</div></div>
      <div class="timeline-item"><div class="tl-time">2026-06-19 10:00</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@company.com 发送给 info@wilson.com，主题: Product Catalog</div></div>
      <div class="timeline-item"><div class="tl-time">2026-06-18 16:45</div><div class="tl-title">快速记录</div><div class="tl-desc">初次联系，客户对产品感兴趣，需要报价单</div></div>
      <div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览了产品页面 - Men's Hair Toupee Collection</div></div>
      <div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 Contact Us 填写并提交表单 <span class="table-tag warning">疑似无效询盘</span></div></div>
    </div>`;

  const panelDynamic = `
    <div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>
    <div class="flex gap-12 mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchLeadDynView(this,'hist')">历史动态</button>
        <button class="toggle-btn" onclick="switchLeadDynView(this,'chat')">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchLeadDynView(this,'stuck')">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="lead_dyn_wrap">
      <div id="lead_dyn_hist">
      ${renderTabs([{label:'全部',count:5},{label:'询盘',count:1},{label:'网站行为',count:1},{label:'跟进记录',count:1},{label:'往来邮件',count:2}], 0, dynFilter)}
      ${renderTabPanels(dynFilter, [
        timelineAll,
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 Contact Us 填写并提交表单</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览了产品页面 - Men\'s Hair Toupee Collection</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-18 16:45</div><div class="tl-title">快速记录</div><div class="tl-desc">初次联系，客户对产品感兴趣，需要报价单</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-20 14:30</div><div class="tl-title">收到邮件</div><div class="tl-desc">info@wilson.com → service@company.com</div></div><div class="timeline-item"><div class="tl-time">2026-06-19 10:00</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@company.com → info@wilson.com</div></div></div>'
      ])}
      </div>
      <div id="lead_dyn_chat" style="display:none"><div class="card placeholder-card">AI 聊天旅程：暂无数据</div></div>
      <div id="lead_dyn_stuck" style="display:none"><div class="card placeholder-card">AI 谈单卡点：暂无卡点</div></div>
    </div>`;

  const panelProfile = `
    <div class="card">
      <div class="form-section-title">常用信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['线索名称','Wilson Corp'],['线索编号','L20260001'],['公司名称','Wilson Corporation'],['公司网址','wilson.com'],
          ['线索状态','初步触达'],['线索来源','个人询盘'],['访问来源','网站--直接访问'],['国家地区','美国'],
          ['联系地址','New York, USA'],['客户类型','潜在客户'],['系统标签','高意向'],
        ])}
      </div>
      <div class="divider"></div>
      <div class="form-section-title">其他信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['线索备注','客户对价格敏感，需重点跟进'],['客户实际采购规模','USD 50万/年'],['客户现阶段采购规模','USD 8万/季'],
          ['采购频次/周期','每季度一次'],['产品特殊偏好','真人发材质，长度 18-24 寸'],['有无客诉','无'],
          ['AI等级评分','B'],['开发策略','重点开发'],['调研报告','已生成'],['性格标签','决策谨慎型'],
          ['跟进频率','每周一次'],['客户价值等级','A'],['当前处理中订单','0'],['遗留问题/未兑现承诺','样品未寄出'],
          ['交接建议','交接时附上历史报价'],['最近询盘时间','2026-06-20'],['主力采购产品','假发配件'],['客户主要联系方式','邮件'],
          ['最佳联系时间','北京时间 21:00-23:00'],['网站EDM','已订阅'],['WhatsApp广播','未开通'],['配送方式','海运'],
          ['营销邮件','已发送 3 封'],['付款方式','T/T'],['二次开发成交时间','—'],['首次成交时间','—'],['首次询盘时间','2026-06-17'],
          ['需求痛点','寻找稳定供应商，要求小批量起订'],['客户目前供应商','越南供应商'],['经营模式','贸易商'],['客户月采购量','5000 顶'],
          ['客户等级','B'],['广告UTM','utm_source=google'],
        ])}
      </div>
      <div class="divider"></div>
      <div class="form-section-title">跟进信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['首次跟进时间','2026-06-17 09:30'],['最近联系时间','2026-06-20 14:30'],['最近发EDM时间','2026-06-19 10:00'],
          ['未联系天数','1'],['最近进入私海时间','2026-06-17 09:00'],['最近进入公海时间','—'],
        ])}
      </div>
      <div class="divider"></div>
      <div class="form-section-title">系统信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['创建方式','网站表单自动创建'],['创建时间','2026-06-17 09:00'],['资料更新时间','2026-06-20 14:30'],
          ['最近修改人','当前用户'],['创建人','系统'],
        ])}
      </div>
    </div>`;

  const panelBg = `
    <div class="card mb-12">
      <div class="card-title">公司/客户背景摘要 <span class="ai-badge">AI</span></div>
      <div class="text-sm">Wilson Corporation 是一家位于美国纽约的假发贸易商，主营真人发制品，年采购规模约 USD 50 万，下游覆盖北美零售渠道。客户对供应商稳定性与小批量起订能力较为看重。</div>
    </div>
    <div class="card mb-12">
      <div class="card-title">业务需求</div>
      ${renderDetailFields([['主营需求','真人发假发配件，长度 18-24 寸'],['采购偏好','小批量多批次起订'],['潜在机会','可拓展为长期供货合作']])}
    </div>
    <div class="card mb-12">
      <div class="card-title">采购画像</div>
      <div class="grid-2">
        ${renderDetailFields([['采购规模','USD 50万/年'],['采购频次','季度'],['付款方式','T/T'],['配送方式','海运到洛杉矶']])}
      </div>
    </div>
    <div class="card mb-12">
      <div class="card-title">关键联系人信息</div>
      <div class="contact-card">
        <div class="contact-name">Wilson <span class="contact-tag">主</span></div>
        <div class="contact-info"><span>✉ info@wilson.com</span><span>♂ 男</span><span>决策人</span></div>
      </div>
    </div>
    <div class="card mb-12">
      <div class="card-title">风险/备注</div>
      <div class="alert alert-info">⚠ 客户当前有越南供应商，价格竞争激烈；建议以小批量快速交付和样品优势切入。</div>
      <div class="mt-12"><button class="btn btn-sm btn-primary" onclick="openBackgroundCheckModal()">发起背调</button> <button class="btn btn-sm">刷新背景</button></div>
    </div>`;

  const panelHistory = `
    <div class="card">
      <div class="card-title">操作历史</div>
      <div class="filter-bar mb-12">
        <select class="filter-select"><option>全部操作类型</option><option>状态变更</option><option>字段修改</option><option>跟进人变更</option><option>转移</option><option>公海操作</option></select>
        <select class="filter-select"><option>全部操作人</option><option>当前用户</option><option>系统</option><option>张伟</option></select>
        <select class="filter-select"><option>全部时间</option><option>近 7 天</option><option>近 30 天</option><option>自定义</option></select>
        <button class="btn btn-sm" onclick="showToast('应用筛选')">查询</button>
      </div>
      <div class="table-container">
        ${renderTable(['操作时间','操作人','操作类型','操作对象/字段','变更前','变更后','备注'],
          [
            ['2026-06-20 14:30','系统','状态变更','线索状态','初步触达','联系互动','邮件触发'],
            ['2026-06-18 16:45','当前用户','字段修改','线索备注','—','客户对价格敏感','手动'],
            ['2026-06-17 09:30','当前用户','跟进记录','—','—','初次联系','手动'],
            ['2026-06-17 09:00','系统','新建线索','—','—','系统自动创建','来源: 网站表单'],
          ],
          { total: 4 })}
      </div>
    </div>`;

  return `
    <div class="page-header">
      <h1 class="page-title">线索详情</h1>
      <div class="page-actions">
        <button class="btn" onclick="openEditLeadDrawer()">编辑</button>
        <button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
        <button class="btn" onclick="openLeadMoreMenu()">更多 ▾</button>
      </div>
    </div>
    <div class="detail-header">
      <div class="detail-name">
        <span class="table-tag primary">私海线索</span>
        Wilson Corp
        <button class="btn btn-sm btn-icon" onclick="this.textContent=this.textContent==='☆'?'★':'☆'">☆</button>
      </div>
      <div class="detail-meta">
        <span class="detail-meta-item">编号: L20260001</span>
        <span class="detail-meta-item">跟进人: 当前用户</span>
        <span class="detail-meta-item">线索来源: 个人询盘</span>
        <span class="detail-meta-item">线索评分: ⭐⭐⭐</span>
      </div>
    </div>
    <div class="stage-bar mb-16">
      <div class="stage-item done" onclick="clickStage(this)">待处理</div>
      <div class="stage-item done" onclick="clickStage(this)">完善信息</div>
      <div class="stage-item active" onclick="clickStage(this)">初步触达</div>
      <div class="stage-item" onclick="clickStage(this)">联系互动</div>
      <div class="stage-item" onclick="clickStage(this)">转化为客户</div>
      <div class="stage-item" onclick="clickStage(this)">无效</div>
    </div>
    <div class="detail-page">
      <div class="detail-main">
        ${renderTabs([{label:'动态'},{label:'资料'},{label:'客户背景'},{label:'操作历史'}], 0, mainTab)}
        ${renderTabPanels(mainTab, [panelDynamic, panelProfile, panelBg, panelHistory])}
      </div>
      <div class="detail-sidebar">
        <div class="detail-card">
          <div class="card-title">关键联系信息</div>
          <div class="grid-2 gap-8">
            <div><div class="text-muted text-sm">联系信息</div><div class="text-bold">3</div></div>
            <div><div class="text-muted text-sm">未联系天数</div><div class="text-bold">1</div></div>
            <div><div class="text-muted text-sm">收到邮件</div><div class="text-bold">5</div></div>
            <div><div class="text-muted text-sm">打开邮件</div><div class="text-bold">3</div></div>
            <div><div class="text-muted text-sm">转移次数</div><div class="text-bold">0</div></div>
            <div><div class="text-muted text-sm">移入公海</div><div class="text-bold">0</div></div>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-title">联系人</div>
          <div class="contact-card">
            <div class="contact-name">Wilson <span class="contact-tag">主</span></div>
            <div class="contact-info">
              <span>✉ info@wilson.com</span>
              <span>♂ 男</span>
            </div>
          </div>
          <button class="btn btn-sm w-full mt-12" onclick="openNewContactModal()">+ 添加联系人</button>
        </div>
        <div class="detail-card">
          <div class="card-title">计划日程 <span class="count">(0)</span></div>
          <button class="btn btn-sm w-full" onclick="openNewScheduleModal()">+ 添加日程</button>
        </div>
      </div>
    </div>
  `;
};

function switchLeadDynView(btn, key) {
  switchToggle(btn);
  ['hist','chat','stuck'].forEach(k => { const el = document.getElementById('lead_dyn_'+k); if (el) el.style.display = (k === key ? '' : 'none'); });
}

function openEditLeadDrawer() {
  openDrawer('编辑线索',
    '<div class="form-section"><div class="form-section-title">基本信息</div>' +
    renderFormField('线索名称', 'text', {required:true, value:'Wilson Corp'}) +
    renderFormField('公司名称', 'text', {value:'Wilson Corporation'}) +
    renderFormField('国家地区', 'select', {options:['美国','中国','德国','英国','巴西']}) +
    renderFormField('线索来源', 'select', {options:['个人询盘','主动开发','TM 咨询','阿里询盘','社媒','展会']}) +
    renderFormField('线索状态', 'select', {options:['待处理','完善信息','初步触达','联系互动']}) +
    '</div>',
    '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer()">保存</button>'
  );
}

function openLeadMoreMenu() {
  openModal('更多操作',
    '<div style="display:flex;flex-direction:column;gap:8px">' +
    '<button class="btn w-full" onclick="closeModal()">转移线索</button>' +
    '<button class="btn w-full" onclick="closeModal()">转化为客户</button>' +
    '<button class="btn w-full" onclick="closeModal()">发起背调</button>' +
    '<button class="btn w-full" onclick="closeModal()">移入公海</button>' +
    '<button class="btn w-full text-danger" onclick="closeModal()">标记为无效</button>' +
    '</div>', ''
  );
}

function filterLeadTree(el, label, count) {
  el.closest('.left-panel').querySelectorAll('.tree-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  var info = el.closest('.page-with-sidebar').querySelector('.table-info');
  if (info) info.textContent = label + ' · 共 ' + count + ' 条线索';

  var mockData = {
    '全部线索': [
      ['张经理','zhang@buyer.com','待处理','高意向','Google搜索','主动开发','主动开发','2026-06-20'],
      ['Wilson Corp','info@wilson.com','初步触达','新询盘','网站访问','官网询盘','个人询盘','2026-06-19'],
      ['Maria Santos','maria@trade.br','完善信息','','阿里询盘','阿里巴巴','阿里询盘','2026-06-18'],
      ['Tech Solutions','contact@tech.de','联系互动','活跃客户','展会','展会','展会','2026-06-17'],
      ['Al Maktoum Trading','info@almak.ae','待处理','','TM','TM 咨询','TM 咨询','2026-06-16'],
    ],
    '未读线索': [
      ['David Kim','david@koreatech.kr','待处理','新询盘','Google搜索','主动开发','主动开发','2026-06-21'],
      ['Sophie Laurent','sophie@parfum.fr','初步触达','','网站访问','官网询盘','个人询盘','2026-06-21'],
      ['Raj Patel','raj@textile.in','待处理','高意向','阿里询盘','阿里巴巴','阿里询盘','2026-06-20'],
      ['Carlos Ruiz','carlos@import.mx','完善信息','','展会','展会','展会','2026-06-20'],
    ],
    '待处理': [
      ['张经理','zhang@buyer.com','待处理','高意向','Google搜索','主动开发','主动开发','2026-06-20'],
      ['Al Maktoum Trading','info@almak.ae','待处理','','TM','TM 咨询','TM 咨询','2026-06-16'],
      ['David Kim','david@koreatech.kr','待处理','新询盘','Google搜索','主动开发','主动开发','2026-06-21'],
      ['Raj Patel','raj@textile.in','待处理','高意向','阿里询盘','阿里巴巴','阿里询盘','2026-06-20'],
      ['Anna Kowalski','anna@trade.pl','待处理','','社媒','Facebook','社媒','2026-06-15'],
    ],
    '完善信息': [
      ['Maria Santos','maria@trade.br','完善信息','','阿里询盘','阿里巴巴','阿里询盘','2026-06-18'],
      ['Carlos Ruiz','carlos@import.mx','完善信息','','展会','展会','展会','2026-06-20'],
      ['Yuki Tanaka','yuki@osaka.jp','完善信息','','网站访问','官网询盘','个人询盘','2026-06-14'],
    ],
    '初步触达': [
      ['Wilson Corp','info@wilson.com','初步触达','新询盘','网站访问','官网询盘','个人询盘','2026-06-19'],
      ['Sophie Laurent','sophie@parfum.fr','初步触达','','网站访问','官网询盘','个人询盘','2026-06-21'],
      ['Hans Weber','hans@industrie.de','初步触达','高意向','Google搜索','主动开发','主动开发','2026-06-13'],
      ['James Brown','james@retail.uk','初步触达','新询盘','社媒','LinkedIn','社媒','2026-06-12'],
    ],
    '联系互动': [
      ['Tech Solutions','contact@tech.de','联系互动','活跃客户','展会','展会','展会','2026-06-17'],
      ['Lisa Chen','lisa@beauty.sg','联系互动','活跃客户','TM','TM 咨询','TM 咨询','2026-06-15'],
      ['Omar Hassan','omar@trade.eg','联系互动','','阿里询盘','阿里巴巴','阿里询盘','2026-06-11'],
    ],
    '已完成线索': [
      ['Bono Hair Intl','bono@hair.de','已转化','高意向','Google搜索','主动开发','主动开发','2026-05-10'],
      ['Beauty Supply Co','info@beauty.us','已转化','活跃客户','网站访问','官网询盘','个人询盘','2026-04-22'],
      ['SWISS HAIR CLUB','info@swisshair.ch','无效','','TM','TM 咨询','TM 咨询','2026-03-15'],
    ],
    '高意向': [
      ['张经理','zhang@buyer.com','待处理','高意向','Google搜索','主动开发','主动开发','2026-06-20'],
      ['Raj Patel','raj@textile.in','待处理','高意向','阿里询盘','阿里巴巴','阿里询盘','2026-06-20'],
      ['Hans Weber','hans@industrie.de','初步触达','高意向','Google搜索','主动开发','主动开发','2026-06-13'],
    ],
    '新询盘': [
      ['Wilson Corp','info@wilson.com','初步触达','新询盘','网站访问','官网询盘','个人询盘','2026-06-19'],
      ['David Kim','david@koreatech.kr','待处理','新询盘','Google搜索','主动开发','主动开发','2026-06-21'],
      ['James Brown','james@retail.uk','初步触达','新询盘','社媒','LinkedIn','社媒','2026-06-12'],
    ],
    '个人询盘': [
      ['Wilson Corp','info@wilson.com','初步触达','新询盘','网站访问','官网询盘','个人询盘','2026-06-19'],
      ['Sophie Laurent','sophie@parfum.fr','初步触达','','网站访问','官网询盘','个人询盘','2026-06-21'],
      ['Yuki Tanaka','yuki@osaka.jp','完善信息','','网站访问','官网询盘','个人询盘','2026-06-14'],
      ['Hans Weber','hans@industrie.de','初步触达','高意向','Google搜索','主动开发','个人询盘','2026-06-13'],
    ],
    'TM 咨询': [
      ['Al Maktoum Trading','info@almak.ae','待处理','','TM','TM 咨询','TM 咨询','2026-06-16'],
      ['Lisa Chen','lisa@beauty.sg','联系互动','活跃客户','TM','TM 咨询','TM 咨询','2026-06-15'],
    ],
    '阿里询盘': [
      ['Maria Santos','maria@trade.br','完善信息','','阿里询盘','阿里巴巴','阿里询盘','2026-06-18'],
      ['Raj Patel','raj@textile.in','待处理','高意向','阿里询盘','阿里巴巴','阿里询盘','2026-06-20'],
      ['Omar Hassan','omar@trade.eg','联系互动','','阿里询盘','阿里巴巴','阿里询盘','2026-06-11'],
    ],
  };

  var rows = mockData[label] || mockData['全部线索'];
  var tbody = el.closest('.page-with-sidebar').querySelector('tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(function(l) {
    var statusClass = l[2]==='待处理'?'warning':l[2]==='联系互动'||l[2]==='已转化'?'success':'primary';
    return '<tr>' +
      '<td><input type="checkbox" class="table-checkbox"></td>' +
      '<td><span class="table-link" onclick="navigateTo(\'leads\',\'leads-detail\')">' + l[0] + '</span></td>' +
      '<td>' + l[1] + '</td>' +
      '<td><span class="table-tag ' + statusClass + '">' + l[2] + '</span></td>' +
      '<td>' + (l[3] ? '<span class="table-tag primary">' + l[3] + '</span>' : '') + '</td>' +
      '<td>' + l[4] + '</td><td>' + l[5] + '</td><td>' + l[6] + '</td><td>' + l[7] + '</td>' +
      '<td><button class="btn btn-sm btn-text" onclick="openLeadRowMenu(this)">操作 ▾</button></td>' +
      '</tr>';
  }).join('');
}

function openAILeadAssistant() {
  openDrawer('AI 数据助理', `
    <div class="ai-banner mb-16">
      <div><div class="ai-title">AI 数据助理</div><div class="ai-desc">智能分析您的线索数据，提供洞察和建议</div></div>
    </div>
    <div class="card mb-12">
      <div class="card-title">数据概览</div>
      <div class="grid-2 gap-8">
        <div><div class="text-muted text-sm">线索总数</div><div class="text-bold">128</div></div>
        <div><div class="text-muted text-sm">本周新增</div><div class="text-bold text-success">+12</div></div>
        <div><div class="text-muted text-sm">转化率</div><div class="text-bold">6.3%</div></div>
        <div><div class="text-muted text-sm">平均跟进周期</div><div class="text-bold">4.2天</div></div>
      </div>
    </div>
    <div class="card mb-12">
      <div class="card-title">AI 建议</div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-title">优先跟进高意向线索</div><div class="tl-desc">15条高意向线索中有5条超过3天未联系，建议尽快跟进。</div></div>
        <div class="timeline-item"><div class="tl-title">补充线索信息</div><div class="tl-desc">23条线索缺少联系方式，建议使用智能背调功能补充。</div></div>
        <div class="timeline-item"><div class="tl-title">线索孵化提醒</div><div class="tl-desc">45条待建联线索可批量发起营销触达，提升转化效率。</div></div>
      </div>
    </div>
  `, '<button class="btn" onclick="closeDrawer()">关闭</button>');
}

function openLeadSettingsModal() {
  openModal('线索设置',
    '<div class="form-section"><div class="form-section-title">列表显示</div>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 显示系统标签</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 显示线索来源</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track" onclick="this.classList.toggle(\'on\')"></span> 显示访问来源</label><br>' +
    '<label class="form-switch"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 显示创建时间</label></div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>'
  );
}

function openLeadRowMenu(btn) {
  closeLeadRowMenu();
  var menu = document.createElement('div');
  menu.className = 'row-action-menu';
  menu.innerHTML =
    '<div class="row-action-item" onclick="closeLeadRowMenu();navigateTo(\'leads\',\'leads-detail\')"><span class="row-action-icon">👁</span>查看详情</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu();openEditLeadDrawer()"><span class="row-action-icon">✏️</span>编辑线索</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu();navigateTo(\'mail\',\'mail-compose\')"><span class="row-action-icon">✉️</span>发送邮件</div>' +
    '<div class="row-action-divider"></div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">↗️</span>转移线索</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu();openConvertToCustomerModal()"><span class="row-action-icon">👤</span>转化为客户</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">🌊</span>移入公海</div>' +
    '<div class="row-action-divider"></div>' +
    '<div class="row-action-item row-action-danger" onclick="closeLeadRowMenu()"><span class="row-action-icon">🚫</span>标记为无效</div>';
  btn.style.position = 'relative';
  btn.appendChild(menu);
  setTimeout(function() { document.addEventListener('click', closeLeadRowMenu, {once:true}); }, 0);
}
function closeLeadRowMenu() {
  var old = document.querySelector('.row-action-menu');
  if (old) old.remove();
}

function openBackgroundCheckModal() {
  openModal('发起背调',
    '<div class="alert alert-info mb-12">AI 将自动从公开渠道收集公司背景信息、联系人信息和经营数据。</div>' +
    renderFormField('背调范围', 'select', {options:['完整背调（公司+联系人+经营数据）','仅公司信息','仅联系人信息']}) +
    renderFormField('补充邮箱', 'select', {options:['是，自动补充发现的邮箱','否，仅收集信息']}) +
    '<div class="text-sm text-muted">预计耗时 1-3 分钟，背调完成后将通知您。</div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">开始背调</button>'
  );
}

function openFeedbackModal() {
  openModal('使用反馈',
    renderFormField('反馈类型', 'select', {options:['功能建议','问题反馈','数据不准确','其他']}) +
    renderFormField('反馈内容', 'textarea', {placeholder:'请描述您的反馈...', required:true}) +
    '<div class="text-sm text-muted">您的反馈将帮助我们改进产品体验。</div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">提交反馈</button>'
  );
}

function scrollToIncubationResult() {
  var el = document.querySelector('.card:last-child .card-title');
  if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
}

function openMassMarketingModal() {
  openModal('一键营销',
    '<div class="alert alert-info mb-12">系统将自动向选定线索发送营销邮件。</div>' +
    renderFormField('邮件模板', 'select', {options:['产品介绍模板','新品推广模板','展会邀约模板','自定义模板']}) +
    renderFormField('发件邮箱', 'select', {options:['sales@company.com','service@company.com']}) +
    '<div class="form-group"><label class="form-switch"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 启用 AI 个性化内容</label></div>' +
    '<div class="form-group"><label class="form-switch"><span class="switch-track" onclick="this.classList.toggle(\'on\')"></span> 定时发送</label></div>' +
    '<div class="text-sm text-muted">预计发送数量: 45 封</div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确认发送</button>'
  );
}

function openDistributeLeadModal() {
  openModal('分配线索',
    '<div class="alert alert-info mb-12">将选定线索分配给团队成员跟进。</div>' +
    renderFormField('分配方式', 'select', {options:['手动选择','按地区自动分配','轮流分配']}) +
    renderFormField('分配给', 'select', {options:['请选择','张三','李四','王五','赵六']}) +
    renderFormField('分配数量', 'text', {value:'30', placeholder:'线索数量'}) +
    '<div class="text-sm text-muted">分配后线索将从您的私海移至对应成员的私海。</div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确认分配</button>'
  );
}

function openConvertToCustomerModal() {
  openModal('转化为客户',
    '<div class="alert alert-warning mb-12">转化后线索将变为正式客户，请确认信息完整。</div>' +
    renderFormField('客户名称', 'text', {required:true, placeholder:'请输入客户名称'}) +
    renderFormField('客户阶段', 'select', {options:['询盘客户','样单客户','意向客户']}) +
    renderFormField('跟进人', 'select', {options:['当前用户','张三','李四','王五']}) +
    '<div class="form-group"><label class="form-switch"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 同步转移关联商机</label></div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确认转化</button>'
  );
}

// Leads Incubation
PAGE_RENDERERS['leads-incubation'] = () => `
  <div class="page-header"><h1 class="page-title">线索智能孵化</h1>
    <div class="page-actions">
      <select class="filter-select" onchange="showToast('按资料完整度筛选')"><option>资料完整度</option><option>无联系方式</option><option>信息不全</option><option>信息完整</option></select>
      <select class="filter-select" onchange="showToast('按互动情况筛选')"><option>互动情况</option><option>未联系</option><option>已营销未回复</option><option>已回复</option><option>已询盘</option></select>
      <select class="filter-select" onchange="showToast('按询盘状态筛选')"><option>询盘状态</option><option>待询盘</option><option>疑似无效询盘</option><option>高意向询盘</option></select>
      <button class="btn btn-sm" onclick="openFeedbackModal()">使用反馈</button>
    </div>
  </div>
  <div class="card mb-16">
    <div class="flex-between mb-12">
      <div class="card-title mb-0">私海线索分布情况</div>
      <input type="date" class="filter-input" value="2026-06-21" style="width:150px" />
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-label">线索总数</div><div class="stat-value">128</div></div>
      <div class="stat-card danger"><div class="stat-label">无联系信息</div><div class="stat-value text-danger">15</div></div>
      <div class="stat-card warning"><div class="stat-label">待建联</div><div class="stat-value text-warning">45</div></div>
      <div class="stat-card info"><div class="stat-label">已回复</div><div class="stat-value text-primary">38</div></div>
      <div class="stat-card success"><div class="stat-label">已询盘</div><div class="stat-value text-success">30</div></div>
    </div>
    <div class="alert alert-info">💡 总结分析：待补全建议开启智能背调，待建联建议尽快初步联系，已回复建议加强沟通，已询盘建议优先分发或转化为客户。</div>
  </div>
  <div class="card mb-16">
    <div class="card-title">行动建议</div>
    <button class="btn btn-sm btn-primary mb-12" onclick="scrollToIncubationResult()">查看孵化结果</button>
    <div class="grid-2 gap-16">
      <div class="card card-flat">
        <div class="flex-between mb-8"><span class="text-bold">无联系方式 (15)</span><button class="btn btn-sm btn-primary" onclick="openBackgroundCheckModal()">智能补充背调</button></div>
        <div class="text-sm text-muted">这些线索无联系方式，可通过智能背调补充企业、联系人和公司信息。</div>
      </div>
      <div class="card card-flat">
        <div class="flex-between mb-8"><span class="text-bold">待建联 (45)</span><button class="btn btn-sm btn-primary" onclick="openMassMarketingModal()">一键营销</button></div>
        <div class="text-sm text-muted">从未联系、建档超30天、已营销但未回复。</div>
        <div class="mt-12 text-sm text-primary">为您精选，建议优先跟进：</div>
        <div class="mt-8 incub-rec-grid">
          ${[
            ['John Smith','buyer1@trade.com','美国','主动开发','06-18'],
            ['Tech Solutions','contact@newcorp.de','德国','主动开发','06-16'],
            ['Maria Santos','maria@trade.br','巴西','展会','06-15'],
          ].map(r => `<div class="incub-rec-card">
            <div class="flex-between"><span class="text-bold text-sm">${r[0]}</span><span class="table-tag primary">${r[2]}</span></div>
            <div class="text-xs text-muted">${r[1]}</div>
            <div class="flex-between mt-8"><span class="text-xs text-muted">${r[3]} · ${r[4]}</span>
              <span class="flex gap-8"><button class="btn btn-sm btn-text" onclick="showToast('查看 ${r[0]} 的营销计划')">营销计划</button><button class="btn btn-sm" onclick="showToast('置为无效')">置为无效</button><button class="btn btn-sm btn-text" onclick="showToast('为 ${r[0]} 应用标签')">标签</button></span>
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card card-flat">
        <div class="flex-between mb-8"><span class="text-bold">已回复 (38)</span><button class="btn btn-sm btn-primary" onclick="navigateTo('mail','mail-compose')">立即沟通</button></div>
        <div class="text-sm text-muted">线索已获回复，需要持续跟进并挖掘诉求。</div>
        <div class="mt-12 text-sm text-primary">为您精选，建议优先跟进：</div>
        <div class="mt-8 incub-rec-grid">
          ${[
            ['Sarah Lee','sarah@retail.uk','英国','官网询盘','06-19'],
            ['Hans Mueller','hans@de-trade.de','德国','阿里询盘','06-18'],
          ].map(r => `<div class="incub-rec-card">
            <div class="flex-between"><span class="text-bold text-sm">${r[0]}</span><span class="table-tag primary">${r[2]}</span></div>
            <div class="text-xs text-muted">${r[1]}</div>
            <div class="flex-between mt-8"><span class="text-xs text-muted">${r[3]} · ${r[4]}</span>
              <button class="btn btn-sm btn-primary" onclick="navigateTo('mail','mail-compose')">立即沟通</button>
            </div>
          </div>`).join('')}
        </div>
      </div>
      <div class="card card-flat">
        <div class="flex-between mb-8"><span class="text-bold">已询盘 (30)</span><div class="btn-group"><button class="btn btn-sm" onclick="openDistributeLeadModal()">分配线索</button><button class="btn btn-sm btn-primary" onclick="openConvertToCustomerModal()">转化客户</button></div></div>
        <div class="text-sm text-muted">识别询盘诉求明确、疑似无效询盘、推荐标签和精选线索。</div>
        <div class="mt-12 text-sm text-primary">为您精选，建议优先跟进：</div>
        <div class="mt-8 incub-rec-grid">
          ${[
            ['Al Maktoum','info@almak.ae','阿联酋','高意向','06-20'],
            ['Lisa Wang','lisa@biz.cn','中国','新询盘','06-17'],
          ].map(r => `<div class="incub-rec-card">
            <div class="flex-between"><span class="text-bold text-sm">${r[0]}</span><span class="table-tag success">${r[2]}</span></div>
            <div class="text-xs text-muted">${r[1]}</div>
            <div class="flex-between mt-8"><span class="text-xs text-muted">${r[3]} · ${r[4]}</span>
              <span class="flex gap-8"><button class="btn btn-sm btn-text" onclick="showToast('分配 ${r[0]}')">分配</button><button class="btn btn-sm btn-text" onclick="showToast('置 ${r[0]} 为无效')">置为无效</button><button class="btn btn-sm btn-text" onclick="showToast('为 ${r[0]} 应用标签')">标签</button></span>
            </div>
          </div>`).join('')}
        </div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-title">孵化结果</div>
    <div class="grid-3">
      <div class="stat-card"><div class="stat-label">线索补充 - 已补充公司网址</div><div class="stat-value">12</div></div>
      <div class="stat-card"><div class="stat-label">线索补充 - 更多联系人</div><div class="stat-value">7</div></div>
      <div class="stat-card"><div class="stat-label">线索补充 - 其他信息</div><div class="stat-value">19</div></div>
      <div class="stat-card"><div class="stat-label">线索营销 - 邮件已打开</div><div class="stat-value">42</div></div>
      <div class="stat-card"><div class="stat-label">线索营销 - EDM 已打开</div><div class="stat-value">31</div></div>
      <div class="stat-card"><div class="stat-label">线索营销 - 总营销</div><div class="stat-value">56</div></div>
      <div class="stat-card success"><div class="stat-label">线索转化 - 总转化</div><div class="stat-value">8</div></div>
      <div class="stat-card danger"><div class="stat-label">无效线索</div><div class="stat-value text-danger">6</div></div>
    </div>
    <div class="text-sm text-muted mt-12">系统累计补充 12 条公司信息、7 个更多联系人、19 条其他信息；完成 56 次营销触达（邮件打开 42、EDM 打开 31）；成功转化 8 条线索为客户；识别 6 条无效线索。</div>
  </div>
`;

// ===== 5. Customer / 客户模块 =====
PAGE_RENDERERS['customers-list'] = () => {
  let custGroupTab = window.custGroupTab || '客群';
  const customers = [
    ['Bono Hair Intl', '2025-03-21', '德国', 'hair wig', 'Google Ads', '网站--直接访问', '官网询盘'],
    ['SWISS HAIR CLUB', '2025-11-26', '巴基斯坦', '', '', '社媒--自然', '社媒'],
    ['Beauty Supply Co', '2026-01-15', '美国', 'extension', '', '主动开发', '主动开发'],
    ['Hair World Trading', '2026-03-08', '英国', '', 'Facebook', '社媒--付费', '社媒'],
    ['Glamour Wigs Ltd', '2026-05-20', '澳大利亚', 'wig', '', '展会', '展会'],
  ];
  const normalTree = `
    <div class="tree-item active" onclick="filterCustomerTree(this,'全部客户',356)">全部客户 <span class="count">356</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'已成交客户',89)">已成交客户 <span class="count">89</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'本月活跃客户',45)">本月活跃客户 <span class="count">45</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'私海未成交客户',167)">私海未成交客户 <span class="count">167</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'跟进人只有自己',234)">跟进人只有自己 <span class="count">234</span></div>
    <div class="tree-group-title">客户阶段</div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'待跟进',78)">待跟进 <span class="count">78</span></div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'询盘客户',120)">询盘客户 <span class="count">120</span></div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'样单客户',45)">样单客户 <span class="count">45</span></div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'成交客户',89)">成交客户 <span class="count">89</span></div>
    <div class="tree-group-title">国家地区</div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'欧洲',95)">欧洲 <span class="count">95</span></div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'北美',78)">北美 <span class="count">78</span></div>
    <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'亚洲',65)">亚洲 <span class="count">65</span></div>`;
  const aiTree = `
    <div class="alert alert-info" style="margin:0 0 12px">🤖 AI 自动筛选名单，按业务标签与行为生成</div>
    <div class="tree-item active" onclick="filterCustomerTree(this,'高价值待激活',32)">高价值待激活 <span class="count">32</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'沉睡超 90 天',58)">沉睡超 90 天 <span class="count">58</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'相似客户扩列',41)">相似客户扩列 <span class="count">41</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'询盘未成交',27)">询盘未成交 <span class="count">27</span></div>
    <div class="tree-item" onclick="filterCustomerTree(this,'高意向复购',19)">高意向复购 <span class="count">19</span></div>
    <div class="text-xs text-muted mt-12">AI 名单每日自动更新，可在「企业管理·AI 数据」配置筛选规则。</div>`;
  const isAi = custGroupTab === 'AI 客群';
  return `
    <div class="page-header">
      <h1 class="page-title">客户管理</h1>
      <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的客户</button><button class="toggle-btn" onclick="switchToggle(this)">团队客户</button></div>
      <div class="page-actions">
        <button class="btn btn-sm" onclick="openCustomerImportExportDialog()">⇅ 导入导出</button>
        <button class="btn btn-sm btn-icon" onclick="openCustomerSettingsModal()">⚙</button>
        <button class="btn btn-primary" onclick="openNewCustomerDrawer()">+ 新建客户</button>
      </div>
    </div>
    <div class="page-with-sidebar">
      <div class="left-panel">
        <div class="tabs comp-mini-tabs"><div class="tab-item ${isAi?'':'active'}" onclick="switchCustGroupTab('客群')">客群</div><div class="tab-item ${isAi?'active':''}" onclick="switchCustGroupTab('AI 客群')">AI 客群</div></div>
        ${isAi ? aiTree : normalTree}
      </div>
      <div class="right-content px-16">
        <div class="bulk-toolbar">${renderCustomerBulkBar()}</div>
        <div class="flex-between mb-12">
          <span class="table-info">${isAi?'高价值待激活':'全部客户'} · ${isAi?32:356} 个客户</span>
          <div class="flex gap-8 items-center">
            <input class="filter-input" placeholder="搜索客户名称/邮箱" style="height:30px;min-width:160px"/>
            <button class="btn btn-sm" onclick="showToast('高级筛选')">筛选</button>
            <button class="btn btn-sm" onclick="showToast('列设置')">列设置 ⚙</button>
            <button class="btn btn-sm btn-icon" onclick="openCustomerSettingsModal()">⚙</button>
          </div>
        </div>
        ${renderTable(
          ['公司名称','首次询盘时间','国家地区','谷歌广告-关键词','谷歌广告-广告组','谷歌广告-广告系列','来源方式','客户来源','操作'],
          customers.map(c => [
            '<span class="table-link" onclick="navigateTo(\'customers\',\'customers-detail\')">' + c[0] + '</span>',
            c[1], c[2], c[3], c[4], c[5]==='Google Ads'?'品牌词-搜索':'', c[5], c[6],
            '<button class="btn btn-sm btn-text" onclick="openCustomerRowMenu(this)">操作 ▾</button>'
          ]),
          { checkbox: true, total: isAi?32:356 }
        )}
      </div>
    </div>
  `;
};
function switchCustGroupTab(t) { window.custGroupTab = t; renderContent(); }

function renderCustomerBulkBar() {
  return `<div class="flex gap-8 items-center"><span class="text-sm">已选 <strong id="custSelectedCount">0</strong> 条</span>
    <button class="btn btn-sm" onclick="showToast('批量分配客户')">分配</button>
    <button class="btn btn-sm" onclick="showToast('批量加标签')">加标签</button>
    <button class="btn btn-sm" onclick="showToast('批量放入公海')">放入公海</button>
    <button class="btn btn-sm" onclick="showToast('批量导出')">导出</button>
    <button class="btn btn-sm btn-text text-danger" onclick="showToast('批量删除')">删除</button></div>`;
}
function openCustomerImportExportDialog() {
  openModal('客户导入 / 导出','<div class="grid-2"><div class="upload-area">📥 导入客户（Excel/CSV）</div><div class="upload-area" style="border-style:solid">📤 导出当前客户</div></div><div class="mt-12 text-sm text-muted">导入前自动查重，可选择性合并或新建客户。</div>','<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已开始导入\')">开始导入</button>');
}

function switchCustDynView(btn, key) {
  switchToggle(btn);
  ['hist','chat','stuck'].forEach(k => { const el = document.getElementById('cust_dyn_'+k); if (el) el.style.display = (k === key ? '' : 'none'); });
}
function switchCustAiView(btn, key) {
  switchToggle(btn);
  ['chat','stuck'].forEach(k => { const el = document.getElementById('cust_ai_'+k); if (el) el.style.display = (k === key ? '' : 'none'); });
}

function filterCustomerTree(el, label, count) {
  el.closest('.left-panel').querySelectorAll('.tree-item').forEach(function(i) { i.classList.remove('active'); });
  el.classList.add('active');
  var info = el.closest('.page-with-sidebar').querySelector('.table-info');
  if (info) info.textContent = label + ' · ' + count + ' 个客户';

  var mockData = {
    '全部客户': [
      ['Bono Hair Intl','2025-03-21','德国','hair wig','Google Ads','网站--直接访问','官网询盘'],
      ['SWISS HAIR CLUB','2025-11-26','巴基斯坦','','','社媒--自然','社媒'],
      ['Beauty Supply Co','2026-01-15','美国','extension','','主动开发','主动开发'],
      ['Hair World Trading','2026-03-08','英国','','Facebook','社媒--付费','社媒'],
      ['Glamour Wigs Ltd','2026-05-20','澳大利亚','wig','','展会','展会'],
    ],
    '已成交客户': [
      ['Bono Hair Intl','2025-03-21','德国','hair wig','Google Ads','网站--直接访问','官网询盘'],
      ['TopKnot Studios','2025-08-12','美国','lace front','Google Ads','主动开发','主动开发'],
      ['Milano Beauty SRL','2025-06-03','意大利','human hair','','展会','展会'],
    ],
    '本月活跃客户': [
      ['Beauty Supply Co','2026-01-15','美国','extension','','主动开发','主动开发'],
      ['Hair World Trading','2026-03-08','英国','','Facebook','社媒--付费','社媒'],
      ['Glamour Wigs Ltd','2026-05-20','澳大利亚','wig','','展会','展会'],
      ['Bella Hair AG','2026-06-10','瑞士','topper','Google Ads','网站--直接访问','官网询盘'],
    ],
    '私海未成交客户': [
      ['SWISS HAIR CLUB','2025-11-26','巴基斯坦','','','社媒--自然','社媒'],
      ['Zenith Trading LLC','2026-02-20','阿联酋','','','TM 咨询','TM 咨询'],
      ['Luxe Perruques','2026-04-11','法国','perruque','','主动开发','主动开发'],
      ['Sakura Hair Inc','2025-12-08','日本','wig cap','','阿里巴巴','阿里询盘'],
    ],
    '跟进人只有自己': [
      ['Bono Hair Intl','2025-03-21','德国','hair wig','Google Ads','网站--直接访问','官网询盘'],
      ['Beauty Supply Co','2026-01-15','美国','extension','','主动开发','主动开发'],
      ['Glamour Wigs Ltd','2026-05-20','澳大利亚','wig','','展会','展会'],
    ],
    '待跟进': [
      ['Zenith Trading LLC','2026-02-20','阿联酋','','','TM 咨询','TM 咨询'],
      ['Cape Town Hair','2026-03-15','南非','braids','','社媒--自然','社媒'],
      ['Nordic Style AB','2026-04-22','瑞典','clip in','','主动开发','主动开发'],
    ],
    '询盘客户': [
      ['SWISS HAIR CLUB','2025-11-26','巴基斯坦','','','社媒--自然','社媒'],
      ['Luxe Perruques','2026-04-11','法国','perruque','','主动开发','主动开发'],
      ['Hair World Trading','2026-03-08','英国','','Facebook','社媒--付费','社媒'],
      ['Sakura Hair Inc','2025-12-08','日本','wig cap','','阿里巴巴','阿里询盘'],
    ],
    '样单客户': [
      ['Glamour Wigs Ltd','2026-05-20','澳大利亚','wig','','展会','展会'],
      ['Bella Hair AG','2026-06-10','瑞士','topper','Google Ads','网站--直接访问','官网询盘'],
    ],
    '成交客户': [
      ['Bono Hair Intl','2025-03-21','德国','hair wig','Google Ads','网站--直接访问','官网询盘'],
      ['TopKnot Studios','2025-08-12','美国','lace front','Google Ads','主动开发','主动开发'],
      ['Milano Beauty SRL','2025-06-03','意大利','human hair','','展会','展会'],
    ],
    '欧洲': [
      ['Bono Hair Intl','2025-03-21','德国','hair wig','Google Ads','网站--直接访问','官网询盘'],
      ['Hair World Trading','2026-03-08','英国','','Facebook','社媒--付费','社媒'],
      ['Luxe Perruques','2026-04-11','法国','perruque','','主动开发','主动开发'],
      ['Milano Beauty SRL','2025-06-03','意大利','human hair','','展会','展会'],
      ['Nordic Style AB','2026-04-22','瑞典','clip in','','主动开发','主动开发'],
    ],
    '北美': [
      ['Beauty Supply Co','2026-01-15','美国','extension','','主动开发','主动开发'],
      ['TopKnot Studios','2025-08-12','美国','lace front','Google Ads','主动开发','主动开发'],
      ['Maple Hair Inc','2026-01-30','加拿大','','','官网询盘','官网询盘'],
    ],
    '亚洲': [
      ['SWISS HAIR CLUB','2025-11-26','巴基斯坦','','','社媒--自然','社媒'],
      ['Sakura Hair Inc','2025-12-08','日本','wig cap','','阿里巴巴','阿里询盘'],
      ['Seoul Wig Co','2026-02-14','韩国','full lace','','展会','展会'],
    ],
  };

  var rows = mockData[label] || mockData['全部客户'];
  var tbody = el.closest('.page-with-sidebar').querySelector('tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(function(c) {
    return '<tr>' +
      '<td><input type="checkbox" class="table-checkbox"></td>' +
      '<td><span class="table-link" onclick="navigateTo(\'customers\',\'customers-detail\')">' + c[0] + '</span></td>' +
      '<td>' + c[1] + '</td><td>' + c[2] + '</td><td>' + c[3] + '</td><td>' + c[4] + '</td><td>' + c[5] + '</td><td>' + c[6] + '</td>' +
      '<td><button class="btn btn-sm btn-text" onclick="openCustomerRowMenu(this)">操作 ▾</button></td>' +
      '</tr>';
  }).join('');
}

function openCustomerSearchModal() {
  openModal('搜索客户',
    renderFormField('关键词', 'text', {placeholder:'输入公司名称、邮箱或联系人搜索'}) +
    '<div class="form-row">' +
    renderFormField('国家地区', 'select', {options:['全部','中国','美国','德国','英国','日本','巴基斯坦','法国','澳大利亚']}) +
    renderFormField('客户来源', 'select', {options:['全部','官网询盘','主动开发','社媒','展会','TM 咨询','阿里巴巴']}) +
    '</div>' +
    '<div class="form-row">' +
    renderFormField('客户阶段', 'select', {options:['全部','待跟进','询盘客户','样单客户','成交客户']}) +
    renderFormField('创建时间', 'select', {options:['全部','最近7天','最近30天','最近90天','自定义']}) +
    '</div>',
    '<button class="btn" onclick="closeModal()">重置</button><button class="btn btn-primary" onclick="closeModal()">搜索</button>'
  );
}

function openCustomerSettingsModal() {
  openModal('客户设置',
    '<div class="form-section"><div class="form-section-title">列表显示列</div>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 首次询盘时间</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 国家地区</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 谷歌广告-关键词</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 谷歌广告-广告组</label><br>' +
    '<label class="form-switch mb-12"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 来源方式</label><br>' +
    '<label class="form-switch"><span class="switch-track on" onclick="this.classList.toggle(\'on\')"></span> 客户来源</label></div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>'
  );
}

// New Customer Drawer
function openNewCustomerDrawer() {
  openDrawer('新建客户', `
    <div class="form-section">
      <div class="form-section-title">公司常用信息 <a class="btn-text btn-sm ml-auto">显示设置</a></div>
      ${renderFormField('公司网址', 'text', {placeholder:'输入公司网址/名称自动匹配'})}
      ${renderFormField('公司名称', 'text', {required:true, placeholder:'请输入公司名称'})}
      ${renderFormField('国家地区', 'select', {options:['请选择','中国','美国','德国','巴西','阿联酋','日本','英国','澳大利亚']})}
      ${renderFormField('客户等级', 'select', {options:['请选择','个人','批发商','零售商','代理商']})}
      ${renderFormField('客户来源', 'select', {options:['请选择','主动开发','官网询盘','阿里巴巴','社媒','展会','TM 咨询']})}
      ${renderFormField('需求和售后', 'textarea', {placeholder:'需求或售后说明'})}
      ${renderFormField('付款方式', 'text', {placeholder:'付款方式'})}
      ${renderFormField('客户阶段', 'select', {options:['请选择','待跟进','询盘客户','样单客户','成交客户','复购客户']})}
      <div class="form-row">
        ${renderFormField('电话区号', 'select', {options:['+86','+1','+44','+49']})}
        ${renderFormField('电话号码', 'text', {placeholder:'座机号码'})}
      </div>
      ${renderFormField('公海分组', 'select', {required:true, options:['公共公海分组']})}
      ${renderFormField('客户编号', 'text', {placeholder:'自动生成'})}
      ${renderFormField('简称', 'text', {placeholder:'客户简称'})}
      ${renderFormField('客户标签', 'select', {options:['请选择','潜力客户','预退公海','女装折页','男装折页']})}
      ${renderFormField('广告UTM', 'text', {placeholder:'广告UTM'})}
    </div>
    <a class="btn-text btn-sm mb-16">展开全部（选填）</a>
    <div class="form-section">
      <div class="form-section-title">联系人信息(1) <span class="table-tag primary">主</span></div>
      <div class="text-sm text-muted mb-12">主联系人默认置顶</div>
      ${renderFormField('昵称', 'text', {placeholder:'联系人昵称'})}
      ${renderFormField('邮箱', 'text', {placeholder:'联系人邮箱'})}
      <div class="form-row">
        ${renderFormField('社交平台', 'select', {options:['请选择','WhatsApp','Facebook','Instagram','LinkedIn']})}
        ${renderFormField('社交账号', 'text', {placeholder:'社交账号'})}
      </div>
      <div class="form-row">
        ${renderFormField('电话区号', 'select', {options:['+86','+1','+44','+49']})}
        ${renderFormField('电话号码', 'text', {placeholder:'电话号码'})}
      </div>
    </div>
    <a class="btn-text btn-sm">+ 添加联系人</a>
    <div class="divider"></div>
    <div class="flex gap-16">
      <label class="form-switch"><span class="switch-track"></span> 历史动态重建</label>
      <label class="form-switch"><span class="switch-track"></span> 同时新建商机</label>
    </div>
  `, `
    <button class="btn" onclick="closeDrawer()">取消</button>
    <button class="btn">确定并继续新建</button>
    <button class="btn btn-primary" onclick="closeDrawer()">确定</button>
  `);
}

// Customer Detail
PAGE_RENDERERS['customers-detail'] = () => {
  const mainTabId = 'cust_main';
  const dynTabId = 'cust_dyn';
  const dynFilterId = 'cust_dynf';

  const timelineHtml = `
    <div class="timeline">
      <div class="timeline-item"><div class="tl-time">2025-07-17 14:24</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@bonohair.com → Erik Kirste &lt;kirste.erik@gmail.com&gt;<br>主题: Re: Your Bono Hair order is now complete</div></div>
      <div class="timeline-item"><div class="tl-time">2025-07-17 11:53</div><div class="tl-title">收到邮件</div><div class="tl-desc">Erik &lt;kirste.erik@gmail.com&gt; → Bonohair &lt;info@bonohair.com&gt;</div></div>
      <div class="timeline-item"><div class="tl-time">2025-04-12 09:59</div><div class="tl-title">快速记录</div><div class="tl-desc">操作人 Bambi，记录 250412，关联联系人 Erik Kirste</div></div>
      <div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览 Mens Hairpiece Supplies | Best Lace Hair Toupee Price</div></div>
      <div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 login - Bono Hair 填写并提交表单 <span class="table-tag warning">疑似无效询盘</span> <a class="text-primary text-sm">查看详情</a></div></div>
    </div>`;

  const panelDynamic = `
    <div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>
    <div class="flex-between mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchCustDynView(this,'hist')">历史动态</button>
        <button class="toggle-btn" onclick="switchCustDynView(this,'chat')">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchCustDynView(this,'stuck')">AI 谈单卡点 (0)</button>
      </div>
      <div class="flex gap-8 items-center">
        <select class="filter-select" style="width:110px" onchange="showToast('按类型筛选动态：'+this.value)"><option>全部类型</option><option>跟进记录</option><option>往来邮件</option><option>网站行为</option><option>表单行为</option></select>
        <select class="filter-select" style="width:110px" onchange="showToast('排序：'+this.value)"><option>最新优先</option><option>最早优先</option></select>
        <button class="btn btn-sm btn-icon" title="刷新" onclick="showToast('已刷新动态')">🔄</button>
        <button class="btn btn-sm btn-icon" title="更多" onclick="showToast('更多：导出动态 / 同步动态')">⋯</button>
      </div>
    </div>
    <div id="cust_dyn_wrap">
      <div id="cust_dyn_hist">
      ${renderTabs([{label:'全部',count:12},{label:'跟进记录',count:1},{label:'往来邮件',count:7},{label:'聊天记录',count:0},{label:'其它',count:4}], 0, dynFilterId)}
      ${renderTabPanels(dynFilterId, [
        timelineHtml,
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-04-12 09:59</div><div class="tl-title">快速记录</div><div class="tl-desc">操作人 Bambi，记录 250412，关联联系人 Erik Kirste</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-07-17 14:24</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@bonohair.com → Erik Kirste</div></div><div class="timeline-item"><div class="tl-time">2025-07-17 11:53</div><div class="tl-title">收到邮件</div><div class="tl-desc">Erik → Bonohair</div></div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-icon">💬</div><div class="empty-text">暂无聊天记录</div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览 Mens Hairpiece Supplies</div></div><div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 login - Bono Hair 填写并提交表单</div></div></div>'
      ])}
      </div>
      <div id="cust_dyn_chat" style="display:none"><div class="card placeholder-card">AI 聊天旅程：根据沟通记录自动生成客户对话时间线</div></div>
      <div id="cust_dyn_stuck" style="display:none"><div class="card placeholder-card">AI 谈单卡点：暂无卡点数据</div></div>
    </div>
    <div class="text-sm text-muted mt-16 text-center">待跟进事项、AI聊天旅程、AI谈单卡点内容由AI生成</div>`;

  const panelProfile = `
    <div class="card mb-12">
      <div class="form-section-title">公司常用信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['公司网址','bonohair.com'],['公司名称','Bono Hair International'],['国家地区','德国'],['客户等级','B'],
          ['客户来源','Google Ads'],['需求和售后','--'],['付款方式','--'],['付款方式1','--'],
          ['客户阶段','询盘客户'],['座机','--'],['公海分组','公共公海分组'],['客户编号','116113'],
          ['简称','Bono Hair'],['广告UTM','--'],
        ])}
      </div>
    </div>
    <div class="card mb-12">
      <div class="form-section-title">公司其它信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['来源方式','网站--直接访问'],['时区','东一区：罗马，巴黎'],['产品分组','--'],['详细地址','--'],
          ['公司备注','--'],['询盘云规模','--'],['询盘云Monthly Quantity','--'],['询盘云get quote Message','--'],
          ['询盘云需求产品','--'],['询盘云需求备注','--'],['询盘云产品分类','--'],['客户意向','--'],
          ['询盘云Business Role','--'],['询盘云主营产品','--'],['询盘云客户背调','--'],['经营模式','--'],
          ['年销售额','--'],['员工人数','10-50人'],['客户月采购额','--'],['客户月采购量','--'],
          ['客户目前供应商','--'],['客户的竞对','--'],['采购需求是否明确','--'],['公司网址2','--'],
          ['需求痛点','--'],['客服--业务相关度','--'],['信息补充','--'],['客服--产品需求判断','--'],
          ['客服备注','--'],['首次询盘时间','2025-03-21'],['首次成交时间','--'],['公海转入日期','--'],
          ['二次开发成交时间','--'],['纸质物料投递时间','--'],['假发经验','--'],['订阅','--'],
          ['表单留言','--'],['营销邮件','--'],['配送方式','--'],['WhatsApp广播','--'],
          ['网站EDM','--'],['最佳联系时间','--'],['客户主要联系方式','--'],['主力采购产品','--'],
          ['客户价值等级','--'],['当前处理中订单','--'],['遗留问题/未兑现承诺','--'],['交接建议','--'],
          ['客户实际采购规模','--'],['客户现阶段采购规模','--'],['采购频次/周期','--'],['产品特殊偏好','--'],
          ['有无客诉','--'],['性格标签','--'],['跟进频率','--'],['AI等级评分','--'],
          ['开发策略','--'],['调研报告','--'],
        ])}
      </div>
    </div>
    <div class="card mb-12">
      <div class="form-section-title">跟进信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['最近联系时间','2025-07-17'],['最近跟进时间','2025-07-17'],['下次移入公海日期','--'],['最近进入私海时间','2025-03-21'],
          ['最近进入公海时间','--'],['进入公海次数','0'],['最近成交日期','--'],['最近发件时间','2025-07-17 14:24'],
          ['最近收件时间','2025-07-17 11:53'],['最近发EDM时间','--'],['最近收到阿里TM消息时间','--'],['最近发送阿里TM消息时间','--'],
          ['最近收到阿里TM询盘时间','--'],['最近WhatsApp沟通时间','--'],['最近企业微信沟通时间','--'],['最近Instagram Messenger沟通时间','--'],
          ['Tips最近更新时间','--'],['最近「写跟进」时间','2025-04-12 09:59'],
        ])}
      </div>
    </div>
    <div class="card">
      <div class="form-section-title">系统信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['创建人','Bambi'],['创建时间','2025-03-21 20:39:01'],['最近修改人','Bambi'],['资料更新时间','2025-04-12'],
          ['原跟进人','--'],['客户通跟进人','Bambi'],['客户通原跟进人','--'],['创建方式','系统生成'],
          ['关联线索','LEAD-20250321-01'],['最近转化线索创建时间','2025-03-21'],['来源线索','官网询盘'],['来源详情','网站表单'],
          ['客群','--'],['关联客户通客户首次同步时间','--'],['关联客户通客户最近同步时间','--'],['跟进人更新时间','2025-03-21'],
        ])}
      </div>
    </div>`;

  const panelBizTx = `
    <div class="card mb-12">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">商机</div>
        <div class="flex gap-8">
          ${renderTabs([{label:'全部',count:0}], 0, 'cust_biz_tab')}
          <button class="btn btn-sm btn-primary" onclick="openNewBusinessDrawer()">+ 新建商机</button>
        </div>
      </div>
      ${renderTable(['商机编号','商机名称','当前阶段','销售金额','结束日期','已生效回款金额','未回款金额','负责人'],
        [], {total:0, pageSize:20})}
    </div>
    <div class="card mb-12">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">销售订单</div>
        ${renderTabs([{label:'全部',count:0}], 0, 'cust_order_tab')}
      </div>
      ${renderTable(['订单编号','订单名称','当前阶段','订单金额','订单日期','产品项目数','已生效回款金额','未回款金额','符合目标规则','创建人','业绩归属人'],
        [], {total:0, pageSize:20})}
    </div>
    <div class="card">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">产品</div>
        <div class="text-sm text-muted">子分类：成交的产品</div>
      </div>
      ${renderTable(['产品','销售订单','报价单','商机','操作'],
        [], {total:0, pageSize:20})}
    </div>`;

  const panelTips = `
    <div class="empty-state" style="padding:48px">
      <div class="empty-icon">💡</div>
      <div class="empty-text">暂无 Tips</div>
      <div class="text-sm text-muted mt-8">AI 将根据客户背景和沟通历史自动生成谈单要点</div>
    </div>`;

  const panelAI = `
    <div class="alert alert-info mb-12">⚠ 当前账号下未出现独立的 AI 公司背调报告，此 Tab 仅呈现 AI 聊天旅程与 AI 谈单卡点。完整背调报告待权限/数据满足后生成。</div>
    <div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>
    <div class="flex gap-12 mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchCustAiView(this,'chat')">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchCustAiView(this,'stuck')">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="cust_ai_wrap">
      <div id="cust_ai_chat">
        <div class="card" style="padding:24px">
          <div class="form-section-title">AI 聊天旅程</div>
          <div class="timeline">
            <div class="timeline-item"><div class="tl-time">2025-07-17 14:24</div><div class="tl-title">邮件往来提炼</div><div class="tl-desc">客户询问价格阶梯与交期，AI 标记为高意向阶段。</div></div>
            <div class="timeline-item"><div class="tl-time">2025-07-16 10:12</div><div class="tl-title">沟通主题归纳</div><div class="tl-desc">核心关注点集中在 MOQ、包装定制与发货周期。</div></div>
            <div class="timeline-item"><div class="tl-time">2025-07-15 18:41</div><div class="tl-title">跟进建议生成</div><div class="tl-desc">建议补充近期热卖款报价与样品寄送节点。</div></div>
          </div>
        </div>
      </div>
      <div id="cust_ai_stuck" style="display:none"><div class="card placeholder-card">AI 谈单卡点：0</div></div>
    </div>
    <div class="text-sm text-muted mt-16 text-center">AI 背调内容由 AI 生成</div>`;

  const salesTrendData = [
    { label:'2025-07', value:12400 },
    { label:'2025-08', value:9600 },
    { label:'2025-09', value:18700 },
    { label:'2025-10', value:15200 },
    { label:'2025-11', value:26100 },
    { label:'2025-12', value:4400 }
  ];
  const productRankData = [
    { label:'Lace Front Wig 22in', sub:'自然黑 · 120% density', value:32600 },
    { label:'Hair Extensions 18in', sub:'棕色 · 50 bundles', value:24100 },
    { label:'Clip-in Set', sub:'高光色 · 36 packs', value:17900 }
  ];
  const productTrendData = [
    { label:'Wig 系列', value:54, color:'var(--primary)' },
    { label:'发丝类', value:31, color:'var(--success)' },
    { label:'配件类', value:15, color:'var(--warning)' }
  ];
  const followTrendData = [
    { label:'聊天', value:12, color:'var(--primary)' },
    { label:'邮件', value:8, color:'var(--success)' },
    { label:'EDM', value:2, color:'var(--warning)' },
    { label:'写跟进', value:5, color:'var(--danger)' }
  ];
  const mailTrendData = [
    { label:'2026-01', received:1, sent:1 },
    { label:'2026-02', received:0, sent:1 },
    { label:'2026-03', received:2, sent:1 },
    { label:'2026-04', received:1, sent:2 },
    { label:'2026-05', received:3, sent:1 },
    { label:'2026-06', received:2, sent:2 }
  ];
  const edmFunnelData = [
    { label:'已发送', value:2, rate:'100%' },
    { label:'送达', value:2, rate:'100%' },
    { label:'打开', value:1, rate:'50%' },
    { label:'回复', value:0, rate:'0%' }
  ];

  const panelAnalysis = `
    <div class="card mb-12">
      <div class="flex gap-12 mb-12" style="flex-wrap:wrap;align-items:center">
        <div class="form-group" style="margin:0;flex:1;min-width:200px"><label class="form-label">时间区间</label><div class="flex gap-8"><input class="form-input" type="date" value="2025-06-22" /><span>～</span><input class="form-input" type="date" value="2026-06-22" /></div></div>
        <div class="form-group" style="margin:0;min-width:120px"><label class="form-label">周期</label><select class="form-select"><option>按月</option><option>按周</option><option>按季</option><option>按年</option></select></div>
        <div class="form-group" style="margin:0;min-width:140px"><label class="form-label">成交数据来源</label><select class="form-select"><option>销售订单</option><option>回款</option></select></div>
        <div class="form-group" style="margin:0;min-width:120px"><label class="form-label">范围</label><select class="form-select"><option>全部</option></select></div>
        <div class="form-group" style="margin:0;align-self:flex-end"><button class="btn btn-sm" onclick="openAnalysisSortPopover(this)">⚙ 排序设置</button></div>
      </div>
      ${renderTabs([{label:'销售情况'},{label:'沟通情况 <span class="table-tag primary">新</span>'}], 0, 'cust_analysis_group')}
      ${renderTabPanels('cust_analysis_group', [
        '<div class="analysis-summary-strip mt-12">' +
          analysisSummaryItem('年度成交额', 'USD 86,400', '+18.6%', 'success') +
          analysisSummaryItem('成交订单数', '4', '+1 单', 'primary') +
          analysisSummaryItem('最高单月', 'USD 26,100', '2025-11', 'warning') +
          analysisSummaryItem('主力品类', 'Wig 系列', '占比 54%', 'primary') +
        '</div>' +
        '<div class="grid-2 mt-12">' +
          analysisCard('客户销售趋势', ['成交订单金额：USD 86,400','平均成交订单金额：USD 21,600','成交订单数：4','平均成交订单间隔天数：28'], true, false, renderAnalysisLineChart(salesTrendData, { unit:'USD', note:'11 月大单拉升明显，12 月进入样品确认期' })) +
          analysisCard('产品销售排行', ['产品数量：3','产品金额：USD 74,600','关联销售订单数：4'], true, false, renderAnalysisRankChart(productRankData, { unit:'USD' })) +
          analysisCard('产品销售趋势对比', ['Wig 系列：54%','发丝类：31%','配件类：15%'], true, false, renderAnalysisStackChart(productTrendData, 'Wig 系列增长最快，Q4 占比 54%')) +
        '</div>',
        '<div class="analysis-summary-strip mt-12">' +
          analysisSummaryItem('近 30 天触达', '27 次', '+9 次', 'success') +
          analysisSummaryItem('邮件互动', '17 次', '已读率 78%', 'primary') +
          analysisSummaryItem('平均响应', '11h', '德国工作时段', 'warning') +
          analysisSummaryItem('EDM 打开', '1 次', '待二次触达', 'danger') +
        '</div>' +
        '<div class="grid-2 mt-12">' +
          analysisCard('客户跟进趋势', ['发送聊天数：12','发送邮件数：8','发送EDM数：2','写跟进数：5'], true, true, renderAnalysisBarChart(followTrendData, { note:'聊天和邮件双线回升，建议保持 2 天一次跟进节奏' })) +
          analysisCard('邮件收发趋势', ['收到邮件数：9','发送邮件数：8'], true, false, renderAnalysisMailChart(mailTrendData)) +
          analysisCard('客户EDM发送趋势', ['已发送数：2','送达数：2','打开数：1','回复数：0'], true, false, renderAnalysisFunnel(edmFunnelData, '打开后未回复，可补发样品案例与交期说明')) +
        '</div>'
      ])}
    </div>`;

  const panelKb = `
    <div class="flex-between mb-12">
      <div class="text-sm text-muted">客户级在线知识库：备调资料、特殊要求、名词解释、产品偏好、历史问题、交接说明。支持在线编辑、修改记录与权限控制，无需反复上传文档。</div>
      <button class="btn btn-sm btn-primary" onclick="openAiKbNewDrawer()">+ 新建文档</button>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">知识库文档 <span class="ai-badge">AI</span></div>
      <div class="grid-3">
        ${[
          { title:'客户备调资料', icon:'🌐', time:'2 小时前编辑', desc:'官网/社媒/店铺背调汇总' },
          { title:'客户特殊要求', icon:'📌', time:'昨日编辑', desc:'包装、标签、认证等特殊要求' },
          { title:'客户名词解释', icon:'📖', time:'3 天前编辑', desc:'客户常用术语与对应我方产品' },
          { title:'客户产品偏好', icon:'🎯', time:'5 天前编辑', desc:'款式/颜色/网底偏好记录' },
          { title:'客户历史问题', icon:'🐛', time:'1 周前编辑', desc:'历史客诉与解决方案' },
          { title:'交接说明', icon:'📤', time:'2 周前编辑', desc:'业务交接时的注意事项' },
        ].map(d => `
          <div class="card ai-kb-doc" style="border:1px solid var(--border);cursor:pointer" onclick="openAiKbEditDrawer('${d.title}')">
            <div style="font-size:28px;margin-bottom:8px">${d.icon}</div>
            <div class="text-bold mb-4">${d.title}</div>
            <div class="text-sm text-muted mb-12">${d.desc}</div>
            <div class="flex-between">
              <span class="text-sm text-muted">${d.time}</span>
              <span class="text-primary text-sm">编辑 →</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">修改记录</div>
      ${renderTable(
        ['时间','文档','操作人','改动','版本'],
        [
          ['10:40','客户特殊要求','Camila','新增：需提供 CE 认证','v3'],
          ['昨日','客户备调资料','AI 自动','更新店铺规模与主营品类','v5'],
          ['3 天前','交接说明','张伟','从 Marco 交接给 Camila','v2'],
        ],
        { total:18, pageSize:20 }
      )}
    </div>`;

  const panelDocs = `
    <div class="card">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">全部文档</div>
        <div class="flex gap-8 items-center">
          <input class="filter-input" placeholder="搜索文档名称" style="height:30px;min-width:160px"/>
          <select class="filter-select" onchange="showToast('按类型筛选：'+this.value)"><option>全部类型</option><option>报价单</option><option>合同</option><option>图片</option><option>其他</option></select>
          <select class="filter-select" onchange="showToast('排序：'+this.value)"><option>上传时间↓</option><option>上传时间↑</option><option>文件名称</option></select>
          <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)" title="列表视图">☰</button><button class="toggle-btn" onclick="switchToggle(this)" title="网格视图">▦</button></div>
          <button class="btn btn-sm" onclick="showToast('关联已有文档')">关联文档</button>
          <button class="btn btn-sm btn-primary">上传文档</button>
        </div>
      </div>
      ${renderTable(['文件名称','父级文件夹','关联类型','上传方式','文件大小','添加人','上传时间','操作'], [], {total: 0})}
    </div>`;

  const panelHistory = `
    <div class="card mb-12">
      <div class="flex gap-12" style="flex-wrap:wrap;align-items:flex-end">
        <div class="form-group" style="margin:0;min-width:140px"><label class="form-label">操作类型</label><select class="form-select"><option>全部</option><option>新建</option><option>修改</option><option>删除</option><option>转移</option><option>写跟进</option><option>发邮件</option></select></div>
        <div class="form-group" style="margin:0;min-width:140px"><label class="form-label">操作人</label><select class="form-select"><option>全部</option><option>Bambi</option><option>系统</option></select></div>
        <div class="form-group" style="margin:0;min-width:220px"><label class="form-label">时间范围</label><div class="flex gap-8"><input class="form-input" type="date" /><span>～</span><input class="form-input" type="date" /></div></div>
        <div class="form-group" style="margin:0;min-width:160px"><label class="form-label">关键字</label><input class="form-input" type="text" placeholder="搜索操作对象/字段" /></div>
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">操作历史</div>
      ${renderTable(['操作时间','操作人','操作类型','操作对象/字段','变更前','变更后','备注/来源'],
        [
          ['2025-07-17 14:24','Bambi','发邮件','往来邮件','--','发送邮件给 Erik Kirste','邮件: Re: Your Bono Hair order'],
          ['2025-04-12 09:59','Bambi','修改','客户标签','--','行业相关性弱','人工修改'],
          ['2025-04-12 09:59','Bambi','写跟进','跟进记录','--','记录 250412','关联联系人 Erik Kirste'],
          ['2025-03-21 20:39','系统','新建','客户','--','Bono Hair International (116113)','来源: 网站表单'],
        ],
        {total:4, pageSize:20})}
    </div>`;

  return `
    <div class="page-header">
      <h1 class="page-title">客户详情</h1>
      <div class="page-actions">
        <button class="btn" onclick="openModal('合并客户','选择要合并的目标客户：' + renderFormField('目标客户','text',{placeholder:'搜索客户名称'}),'<button class=\\'btn\\' onclick=\\'closeModal()\\'>取消</button><button class=\\'btn btn-primary\\' onclick=\\'closeModal()\\'>确定合并</button>')">合并客户</button>
        <button class="btn" onclick="openEditCustomerDrawer()">编辑</button>
        <button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
        <button class="btn" onclick="openCustomerMoreMenu(this)">更多 ▾</button>
      </div>
    </div>
    <div class="detail-page cust-detail">
      <div class="detail-sidebar cust-detail-side">
        <div class="detail-header">
          <div class="detail-name">
            <span class="table-tag primary">私海客户</span>
            Bono Hair International
            <button class="btn btn-sm btn-icon" onclick="this.textContent=this.textContent==='☆'?'★':'☆'">☆</button>
          </div>
          <div class="detail-meta">
            <span class="detail-meta-item">🏢 编号: 116113</span>
            <span class="detail-meta-item">🌍 德国 · 欧洲</span>
            <span class="detail-meta-item">🕐 UTC+1 (柏林时间 <span id="custTzTime"></span>)</span>
            <span class="detail-meta-item">👤 跟进人: Bambi</span>
            <span class="detail-meta-item">📊 客户阶段: <span class="table-tag primary">询盘客户</span></span>
            <span class="detail-meta-item">🏷 标签: <span class="table-tag">行业相关性弱</span></span>
            <span class="detail-meta-item">🌊 公海分组: 公共公海分组</span>
            <span class="detail-meta-item">📁 客户分组: VIP 欧洲客户</span>
            <span class="detail-meta-item">💰 客户等级: B</span>
            <span class="detail-meta-item">📅 创建: 2025-03-21</span>
          </div>
        </div>
        <div class="detail-card">
          <div class="card-title">AI 客户分析 <span class="ai-badge">AI</span></div>
          <div class="ai-analysis-box" style="margin-top:12px">
            <div class="flex-between mb-8">
              <div class="text-sm text-muted">AI 综合判断</div>
              <span class="table-tag warning">报价确认中</span>
            </div>
            <div class="text-sm mb-12">客户近 30 天重新活跃，价格和交期是主要决策点，建议优先发送阶梯报价、MOQ 说明和备货周期。</div>
            <div class="cust-key-row"><span class="cust-key-label">成交概率</span><span class="cust-key-val text-primary">68%</span></div>
            <div class="cust-key-row"><span class="cust-key-label">决策阶段</span><span class="cust-key-val">报价确认</span></div>
            <div class="cust-key-row"><span class="cust-key-label">价格敏感度</span><span class="cust-key-val text-warning">较高</span></div>
            <div class="cust-key-row"><span class="cust-key-label">推荐动作</span><span class="cust-key-val text-success">48 小时内跟进</span></div>
          </div>
          <div class="text-sm text-muted mt-8">数据来源：邮件 3 封 · 网站访问 1 次 · 跟进记录 1 条</div>
          <a class="text-primary text-sm" onclick="switchTab('${mainTabId}',5)">查看完整分析 →</a>
        </div>
        <div class="cust-key-stats-card">
          <div class="card-title">关键联系信息</div>
          <div class="cust-key-row"><span class="cust-key-label">联系信息数量</span><span class="cust-key-val">3</span></div>
          <div class="cust-key-row"><span class="cust-key-label">未联系天数</span><span class="cust-key-val text-danger">5</span></div>
          <div class="cust-key-row"><span class="cust-key-label">收到邮件/消息次数</span><span class="cust-key-val">8</span></div>
          <div class="cust-key-row"><span class="cust-key-label">打开邮件/EDM次数</span><span class="cust-key-val">2</span></div>
          <div class="cust-key-row"><span class="cust-key-label">转移次数</span><span class="cust-key-val">1</span></div>
          <div class="cust-key-row"><span class="cust-key-label">移入公海次数</span><span class="cust-key-val text-success">0</span></div>
        </div>
        <div class="cust-contacts-strip">
          <div class="cust-contact-panel">
            <div class="cust-contact-head">
              <span class="cust-contact-name">Erik Kirste</span>
              <span class="contact-tag success">主</span>
            </div>
            <div class="cust-contact-sub">写信 3 次，成功 2 次</div>
            <div class="cust-contact-fields">
              <div class="cust-cf"><span class="cust-cf-label">邮箱</span><span class="cust-cf-val"><a class="text-primary">kirste.erik@gmail.com</a></span></div>
              <div class="cust-cf"><span class="cust-cf-label">社交平台</span><span class="cust-cf-val">+49 176 8823 4456<br><a class="text-primary text-sm">WhatsApp</a></span></div>
              <div class="cust-cf"><span class="cust-cf-label">性别</span><span class="cust-cf-val">男</span></div>
              <div class="cust-cf"><span class="cust-cf-label">职位</span><span class="cust-cf-val">采购总监</span></div>
            </div>
            <div class="flex gap-8 mt-8">
              <button class="btn btn-sm" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
              <button class="btn btn-sm btn-text" onclick="openContactDetailModal('Erik Kirste')">详情</button>
            </div>
          </div>
          <div class="cust-contact-panel">
            <div class="cust-contact-head">
              <span class="cust-contact-name">Lisa Weber</span>
              <span class="contact-tag">采购</span>
            </div>
            <div class="cust-contact-sub">写信 1 次，成功 1 次</div>
            <div class="cust-contact-fields">
              <div class="cust-cf"><span class="cust-cf-label">邮箱</span><span class="cust-cf-val"><a class="text-primary">lisa.w@bonohair.com</a></span></div>
              <div class="cust-cf"><span class="cust-cf-label">社交平台</span><span class="cust-cf-val">+49 176 9912 3378<br><a class="text-primary text-sm">LinkedIn: lisa-weber-bono</a></span></div>
              <div class="cust-cf"><span class="cust-cf-label">性别</span><span class="cust-cf-val">女</span></div>
              <div class="cust-cf"><span class="cust-cf-label">职位</span><span class="cust-cf-val">采购专员</span></div>
            </div>
            <div class="flex gap-8 mt-8">
              <button class="btn btn-sm" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
              <button class="btn btn-sm btn-text" onclick="openContactDetailModal('Lisa Weber')">详情</button>
            </div>
          </div>
          <div class="cust-contact-panel">
            <div class="cust-contact-head">
              <span class="cust-contact-name">Thomas Braun</span>
              <span class="contact-tag" style="background:var(--warning-light);color:#92400e">技术</span>
            </div>
            <div class="cust-contact-sub">写信 0 次，成功 0 次</div>
            <div class="cust-contact-fields">
              <div class="cust-cf"><span class="cust-cf-label">邮箱</span><span class="cust-cf-val"><a class="text-primary">t.braun@bonohair.com</a></span></div>
              <div class="cust-cf"><span class="cust-cf-label">社交平台</span><span class="cust-cf-val">--</span></div>
              <div class="cust-cf"><span class="cust-cf-label">性别</span><span class="cust-cf-val">男</span></div>
              <div class="cust-cf"><span class="cust-cf-label">职位</span><span class="cust-cf-val">技术经理</span></div>
            </div>
            <div class="flex gap-8 mt-8">
              <button class="btn btn-sm" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
              <button class="btn btn-sm btn-text" onclick="openContactDetailModal('Thomas Braun')">详情</button>
            </div>
          </div>
        </div>
      </div>
      <div class="detail-main cust-detail-main">
        <div class="cust-detail-aside">
          <div class="detail-card">
            <div class="flex-between"><span class="card-title mb-0">进行中的商机 (0)</span><button class="btn btn-sm" onclick="openNewBusinessDrawer()">+ 添加</button></div>
          </div>
          <div class="detail-card">
            <div class="flex-between"><span class="card-title mb-0">计划日程 (0)</span><button class="btn btn-sm" onclick="openNewScheduleModal()">+ 添加</button></div>
          </div>
        </div>
        ${renderTabs([{label:'动态'},{label:'资料'},{label:'商机&交易'},{label:'Tips'},{label:'AI 背调'},{label:'数据分析'},{label:'客户知识库'},{label:'文档'},{label:'操作历史'}], 0, mainTabId)}
        ${renderTabPanels(mainTabId, [panelDynamic, panelProfile, panelBizTx, panelTips, panelAI, panelAnalysis, panelKb, panelDocs, panelHistory])}
      </div>
    </div>
  `;
};

// 数据分析 Tab 图表卡 helper（客户详情）
function analysisCard(title, metrics, withDetail, isNew, chartHtml) {
  var newTag = isNew ? ' <span class="table-tag primary">新</span>' : '';
  var metricsHtml = metrics.map(function(m) { return '<div class="text-sm text-muted">' + m + '</div>'; }).join('');
  return '<div class="card mb-12" style="margin:0">' +
    '<div class="flex-between mb-12"><div class="card-title mb-0">' + title + newTag + '</div>' +
      (withDetail ? '<a class="text-primary text-sm" onclick="showToast(\'查看详情：图表详情区聚焦（原型未设计独立弹层）\')">查看详情</a>' : '') +
    '</div>' +
    '<div class="analysis-chart-box">' + (chartHtml || '暂无数据') + '</div>' +
    '<div class="analysis-metrics">' + metricsHtml + '</div>' +
  '</div>';
}

function analysisSummaryItem(label, value, sub, tone) {
  return '<div class="analysis-summary-item ' + (tone || '') + '">' +
    '<div class="analysis-summary-label">' + label + '</div>' +
    '<div class="analysis-summary-value">' + value + '</div>' +
    '<div class="analysis-summary-sub">' + sub + '</div>' +
  '</div>';
}

function formatUsd(value) {
  return 'USD ' + Number(value || 0).toLocaleString('en-US');
}

function renderAnalysisLineChart(data, opts) {
  opts = opts || {};
  var max = Math.max.apply(null, data.map(function(d) { return d.value; }));
  var points = data.map(function(d, i) {
    var x = data.length === 1 ? 50 : Math.round(i * 100 / (data.length - 1));
    var y = Math.round(82 - d.value / max * 58);
    return x + ',' + y;
  }).join(' ');
  var labels = data.map(function(d) {
    var left = data.length === 1 ? 50 : Math.round(data.indexOf(d) * 100 / (data.length - 1));
    return '<span style="left:' + left + '%">' + d.label.slice(5) + '</span>';
  }).join('');
  return '<div class="analysis-line-chart">' +
    '<svg viewBox="0 0 100 88" preserveAspectRatio="none"><polyline points="' + points + '" /></svg>' +
    '<div class="analysis-line-points">' + data.map(function(d, i) {
      var left = data.length === 1 ? 50 : Math.round(i * 100 / (data.length - 1));
      var top = Math.round(82 - d.value / max * 58);
      return '<span style="left:' + left + '%;top:' + top + '%" title="' + d.label + ' ' + formatUsd(d.value) + '"></span>';
    }).join('') + '</div>' +
    '<div class="analysis-axis-labels">' + labels + '</div>' +
    '<div class="analysis-chart-note">' + (opts.note || '') + '</div>' +
  '</div>';
}

function renderAnalysisRankChart(data, opts) {
  opts = opts || {};
  var max = Math.max.apply(null, data.map(function(d) { return d.value; }));
  return '<div class="analysis-rank-list">' + data.map(function(d, i) {
    var width = Math.max(8, Math.round(d.value / max * 100));
    return '<div class="analysis-rank-row">' +
      '<div class="analysis-rank-head"><span>' + (i + 1) + '. ' + d.label + '</span><b>' + formatUsd(d.value) + '</b></div>' +
      '<div class="analysis-rank-sub">' + d.sub + '</div>' +
      '<div class="progress-bar"><div class="progress-fill" style="width:' + width + '%"></div></div>' +
    '</div>';
  }).join('') + '</div>';
}

function renderAnalysisStackChart(data, note) {
  var bars = data.map(function(d) { return '<div style="width:' + d.value + '%;background:' + d.color + '"></div>'; }).join('');
  var legend = data.map(function(d) {
    return '<span><i style="background:' + d.color + '"></i>' + d.label + ' ' + d.value + '%</span>';
  }).join('');
  return '<div class="analysis-stack-chart">' +
    '<div class="analysis-stack-bar">' + bars + '</div>' +
    '<div class="analysis-stack-legend">' + legend + '</div>' +
    '<div class="analysis-chart-note">' + note + '</div>' +
  '</div>';
}

function renderAnalysisBarChart(data, opts) {
  opts = opts || {};
  var max = Math.max.apply(null, data.map(function(d) { return d.value; }));
  return '<div class="analysis-bar-chart">' + data.map(function(d) {
    var height = Math.max(12, Math.round(d.value / max * 82));
    return '<div class="analysis-bar-item"><div class="analysis-bar-value">' + d.value + '</div><div class="analysis-bar-track"><div style="height:' + height + '%;background:' + d.color + '"></div></div><div class="analysis-bar-label">' + d.label + '</div></div>';
  }).join('') + '<div class="analysis-chart-note">' + (opts.note || '') + '</div></div>';
}

function renderAnalysisMailChart(data) {
  var max = Math.max.apply(null, data.map(function(d) { return Math.max(d.received, d.sent); }));
  return '<div class="analysis-mail-chart">' + data.map(function(d) {
    var received = Math.max(8, Math.round(d.received / max * 78));
    var sent = Math.max(8, Math.round(d.sent / max * 78));
    return '<div class="analysis-mail-month"><div class="analysis-mail-bars"><span style="height:' + received + '%" title="收到 ' + d.received + '"></span><span style="height:' + sent + '%" title="发送 ' + d.sent + '"></span></div><div>' + d.label.slice(5) + '</div></div>';
  }).join('') + '<div class="analysis-stack-legend"><span><i style="background:var(--primary)"></i>收到</span><span><i style="background:var(--success)"></i>发送</span></div></div>';
}

function renderAnalysisFunnel(data, note) {
  var max = Math.max.apply(null, data.map(function(d) { return d.value; }));
  return '<div class="analysis-funnel">' + data.map(function(d) {
    var width = max ? Math.max(12, Math.round(d.value / max * 100)) : 12;
    return '<div class="analysis-funnel-row"><div class="analysis-funnel-label">' + d.label + '</div><div class="analysis-funnel-bar"><span style="width:' + width + '%"></span></div><div class="analysis-funnel-val">' + d.value + ' · ' + d.rate + '</div></div>';
  }).join('') + '<div class="analysis-chart-note">' + note + '</div></div>';
}
function openAnalysisSortPopover(btn) {
  var charts = ['客户销售趋势','产品销售排行','产品销售趋势对比','客户跟进趋势','邮件收发趋势','客户EDM发送趋势'];
  var body = '<div style="display:flex;flex-direction:column;gap:4px">' +
    charts.map(function(t, i) {
      return '<div style="display:flex;align-items:center;gap:8px;padding:6px 8px;cursor:move;border-radius:var(--radius);background:var(--bg)"><span style="cursor:grab;color:var(--text-muted)">⋮⋮</span><span class="text-sm">' + (i+1) + '. ' + t + '</span></div>';
    }).join('') +
    '</div>';
  openModal('排序设置', body, '<button class="btn" onclick="closeModal()">关闭</button>');
}

function openEditCustomerDrawer() {
  var cOtherFields = [
    ['来源方式','select',{options:['网站--直接访问','网站--注册','主动开发','展会']}],
    ['时区','select',{options:['东一区：罗马，巴黎','东八区：北京','西五区：纽约']}],
    ['产品分组','text',{}],
    ['详细地址','text',{}],
    ['公司备注','textarea',{placeholder:'公司备注'}],
    ['询盘云规模','text',{}],
    ['询盘云Monthly Quantity','text',{}],
    ['询盘云get quote Message','text',{}],
    ['询盘云需求产品','text',{}],
    ['询盘云需求备注','text',{}],
    ['询盘云产品分类','text',{}],
    ['客户意向','select',{options:['请选择','高','中','低']}],
    ['询盘云Business Role','text',{}],
    ['询盘云主营产品','text',{}],
    ['询盘云客户背调','text',{}],
    ['经营模式','select',{options:['请选择','生产型','贸易型','工贸一体']}],
    ['年销售额','text',{}],
    ['员工人数','text',{value:'10-50人'}],
    ['客户月采购额','text',{}],
    ['客户月采购量','text',{}],
    ['客户目前供应商','text',{}],
    ['客户的竞对','text',{}],
    ['采购需求是否明确','select',{options:['请选择','明确','不明确']}],
    ['公司网址2','text',{}],
    ['需求痛点','textarea',{}],
    ['客服--业务相关度','select',{options:['请选择','高','中','低']}],
    ['信息补充','text',{}],
    ['客服--产品需求判断','text',{}],
    ['客服备注','textarea',{}],
  ];
  var cOtherHtml = cOtherFields.map(function(f){ return renderFormField(f[0], f[1], f[2]); }).join('');

  var contactBlock = function(name, isMain) {
    return '<div class="form-section" style="border:1px solid var(--border);border-radius:var(--radius);padding:12px;margin-bottom:12px">' +
      '<div class="flex-between mb-12"><div class="form-section-title mb-0">' + name + (isMain?' <span class="contact-tag success">主联系人</span>':'') + '</div>' +
      '<button class="btn btn-sm btn-text text-danger" onclick="showToast(\'移除联系人块\')">移除</button></div>' +
      renderFormField('昵称', 'text', {placeholder:'联系人昵称'}) +
      renderFormField('姓名', 'text', {value:name, required:isMain}) +
      renderFormField('邮箱', 'text', {placeholder:'邮箱地址'}) +
      renderFormField('社交平台', 'select', {options:['WhatsApp','LinkedIn','Facebook','Instagram','--']}) +
      renderFormField('联系电话', 'text', {placeholder:'联系电话'}) +
      renderFormField('电话区号', 'text', {placeholder:'如 +49'}) +
    '</div>';
  };

  openDrawer('编辑客户',
    '<div class="form-section">' +
      '<div class="flex-between mb-12"><div class="form-section-title mb-0">公司常用信息</div>' +
      '<button class="btn btn-sm btn-text" onclick="showToast(\'显示设置：调整编辑抽屉内字段显示\')"><span>⚙</span> 显示设置</button></div>' +
      renderFormField('公司网址', 'text', {value:'bonohair.com'}) +
      renderFormField('公司名称', 'text', {required:true, value:'Bono Hair International'}) +
      renderFormField('国家地区', 'select', {options:['德国 (Germany)','中国','美国','英国','巴西']}) +
      renderFormField('客户等级', 'select', {options:['请选择','个人','A','B','C','D']}) +
      renderFormField('客户来源', 'select', {options:['官网询盘 (OKKI Marketing)','Google Ads','主动开发','阿里巴巴','社媒','展会']}) +
      renderFormField('需求和售后', 'textarea', {placeholder:'需求或售后说明'}) +
      renderFormField('付款方式', 'text', {}) +
      renderFormField('客户阶段', 'select', {options:['无','待跟进','询盘客户','样单客户','成交客户','复购客户']}) +
      renderFormField('座机 / 电话区号', 'text', {placeholder:'座机 / 区号'}) +
      renderFormField('公海分组', 'select', {options:['公共公海分组','沉睡客户分组','低意向分组']}) +
      renderFormField('客户编号', 'text', {value:'116113'}) +
      renderFormField('简称', 'text', {value:'Bono Hair'}) +
      renderFormField('客户标签', 'text', {value:'行业相关性弱'}) +
      renderFormField('广告UTM', 'text', {}) +
    '</div>' +
    '<div class="form-section">' +
      '<div class="flex-between mb-12" style="cursor:pointer" onclick="var b=document.getElementById(\'cust_other_block\');b.style.display=b.style.display==\'none\'?\'\':\'none\';this.querySelector(\'.caret\').textContent=b.style.display==\'none\'?\'▸\':\'▾\'">' +
        '<div class="form-section-title mb-0">公司其它信息 <span class="caret">▾</span></div>' +
        '<div class="text-sm text-muted">点击展开/收起</div></div>' +
      '<div id="cust_other_block">' + cOtherHtml + '</div>' +
    '</div>' +
    '<div class="form-section">' +
      '<div class="form-section-title mb-12">联系人信息 <span class="text-sm text-muted">(1)</span></div>' +
      contactBlock('Erik Kirste', true) +
      '<button class="btn btn-sm btn-text" onclick="document.getElementById(\'cust_contacts_wrap\').insertAdjacentHTML(\'beforeend\', window._newContactBlock())">+ 添加联系人</button>' +
      '<div id="cust_contacts_wrap"></div>' +
    '</div>',
    '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer()">确定</button>'
  );
  window._newContactBlock = function() { return contactBlock('新联系人', false); };
}

function openCustomerMoreMenu(btn) {
  openModal('更多操作',
    '<div style="display:flex;flex-direction:column;gap:8px">' +
    '<button class="btn w-full" onclick="closeModal()">转移客户</button>' +
    '<button class="btn w-full" onclick="closeModal()">共享客户</button>' +
    '<button class="btn w-full" onclick="closeModal()">移入公海</button>' +
    '<button class="btn w-full" onclick="closeModal()">添加协同跟进人</button>' +
    '<button class="btn w-full" onclick="closeModal()">发起背调</button>' +
    '<button class="btn w-full text-danger" onclick="closeModal()">删除客户</button>' +
    '</div>', ''
  );
}

function openCustomerRowMenu(btn) {
  closeLeadRowMenu();
  var menu = document.createElement('div');
  menu.className = 'row-action-menu';
  menu.innerHTML =
    '<div class="row-action-item" onclick="closeLeadRowMenu();navigateTo(\'customers\',\'customers-detail\')"><span class="row-action-icon">👁</span>查看详情</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu();openEditCustomerDrawer()"><span class="row-action-icon">✏️</span>编辑客户</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu();navigateTo(\'mail\',\'mail-compose\')"><span class="row-action-icon">✉️</span>发送邮件</div>' +
    '<div class="row-action-divider"></div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">↗️</span>转移客户</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">🔗</span>共享客户</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">🌊</span>移入公海</div>' +
    '<div class="row-action-item" onclick="closeLeadRowMenu()"><span class="row-action-icon">👤</span>添加协同跟进人</div>' +
    '<div class="row-action-divider"></div>' +
    '<div class="row-action-item row-action-danger" onclick="closeLeadRowMenu()"><span class="row-action-icon">🗑</span>删除客户</div>';
  btn.style.position = 'relative';
  btn.appendChild(menu);
  setTimeout(function() { document.addEventListener('click', closeLeadRowMenu, {once:true}); }, 0);
}

// Public Customers
PAGE_RENDERERS['customers-public'] = () => {
  var customers = [
    ['Global Trade Co', '', '2025-01-10', '2024-08-15', 'B', '', '订阅', '', '180天未成交'],
    ['Pacific Imports', '', '2024-12-20', '2024-06-01', 'C', '', '', '', '90天未联系'],
    ['Euro Hair Supply', '', '2025-03-05', '', '', '', '', '', '客户未回复'],
    ['Sunrise Exports Ltd', 'Brand_A', '2025-05-18', '2025-02-10', 'A', 'SE', '已订阅', '', '跟进人离职'],
    ['Nordic Hair AB', '', '2024-11-03', '2024-07-22', 'C', '', '', '', '180天未成交'],
  ];
  return '<div class="page-header">' +
    '<h1 class="page-title">公海客户</h1>' +
    '<div class="page-actions">' +
    '<button class="btn btn-sm btn-icon" onclick="openPublicCustomerSearchModal()">🔍</button>' +
    '<button class="btn btn-primary" onclick="openNewCustomerDrawer()">+ 新建客户</button>' +
    '</div></div>' +
    '<div class="page-with-sidebar">' +
    '<div class="left-panel">' +
    '<div class="tree-item active" onclick="filterPublicCustomerTree(this,\'全部客户\',523)">全部客户 <span class="count">523</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'近7天联系客户\',23)">近7天联系客户 <span class="count">23</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'90天内掉公海\',45)">90天内掉公海 <span class="count">45</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'AiReach 盘活交付\',12)">AiReach 盘活交付 <span class="count">12</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'AiReach 挖掘交付\',8)">AiReach 挖掘交付 <span class="count">8</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'已成交掉公海\',34)">已成交掉公海 <span class="count">34</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'当月询盘掉公海\',15)">当月询盘掉公海 <span class="count">15</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'上月询盘掉公海\',9)">上月询盘掉公海 <span class="count">9</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'目标客户进公海\',28)">目标客户进公海 <span class="count">28</span></div>' +
    '<div class="tree-group-title">移入公海方式</div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'系统自动\',310)">系统自动 <span class="count">310</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'手动移入\',156)">手动移入 <span class="count">156</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'跟进人离职\',57)">跟进人离职 <span class="count">57</span></div>' +
    '<div class="tree-group-title">客户阶段</div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'询盘客户\',180)">询盘客户 <span class="count">180</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'样单客户\',95)">样单客户 <span class="count">95</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'成交客户\',248)">成交客户 <span class="count">248</span></div>' +
    '<div class="tree-group-title">国家地区</div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'欧洲\',145)">欧洲 <span class="count">145</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'北美\',110)">北美 <span class="count">110</span></div>' +
    '<div class="tree-item tree-indent" onclick="filterPublicCustomerTree(this,\'亚洲\',88)">亚洲 <span class="count">88</span></div>' +
    '</div>' +
    '<div class="right-content px-16">' +
    '<div class="bulk-toolbar"><div class="flex gap-8 items-center"><span class="text-sm">已选 <strong>0</strong> 条</span><button class="btn btn-sm" onclick="batchClaimPublic()">批量领取</button><button class="btn btn-sm" onclick="batchAssignPublic()">批量分配</button></div></div>' +
    '<div class="flex-between mb-12"><span class="table-info">全部客户 · 523 个客户</span>' +
    '<div class="flex gap-8"><button class="btn btn-sm btn-icon" onclick="openPublicCustomerSearchModal()">🔍</button><button class="btn btn-sm btn-icon" onclick="openCustomerSettingsModal()">⚙</button></div></div>' +
    renderTable(
      ['公司名称','谷歌广告-广告系列','创建时间','首次询盘时间','客户等级','简称','营销邮件','首次成交时间','移入公海原因','操作'],
      customers.map(function(c) { return [
        '<span class="table-link" onclick="navigateTo(\'customers\',\'customers-detail\')">' + c[0] + '</span>',
        c[1], c[2], c[3], c[4], c[5], c[6], c[7],
        '<span class="table-tag warning">' + c[8] + '</span>',
        '<button class="btn btn-sm btn-primary" onclick="claimPublicCustomer(this)">领取</button>'
      ]; }),
      { checkbox: true, total: 523 }
    ) +
    '</div></div>';
};

function filterPublicCustomerTree(el, label, count) {
  el.closest('.left-panel').querySelectorAll('.tree-item').forEach(function(i) { i.classList.remove('active'); });
  el.classList.add('active');
  var info = el.closest('.page-with-sidebar').querySelector('.table-info');
  if (info) info.textContent = label + ' · ' + count + ' 个客户';

  var mockData = {
    '全部客户': [
      ['Global Trade Co','','2025-01-10','2024-08-15','B','','订阅','','180天未成交'],
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
      ['Nordic Hair AB','','2024-11-03','2024-07-22','C','','','','180天未成交'],
    ],
    '90天内掉公海': [
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
      ['Cape Beauty Co','','2026-04-12','2026-01-20','B','','已订阅','','90天未联系'],
      ['Bella Trading','Brand_C','2026-05-01','','C','','','','客户未回复'],
    ],
    'AiReach 盘活交付': [
      ['Global Trade Co','','2025-01-10','2024-08-15','B','','订阅','','180天未成交'],
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
    ],
    'AiReach 挖掘交付': [
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
    ],
    '已成交掉公海': [
      ['Nordic Hair AB','','2024-11-03','2024-07-22','C','','','2024-03-15','180天未成交'],
      ['TopKnot Studios','','2024-09-20','2024-05-10','B','TK','已订阅','2024-01-20','跟进人离职'],
      ['Milano Beauty SRL','','2024-06-15','2024-02-08','A','MB','已订阅','2023-11-10','180天未成交'],
    ],
    '当月询盘掉公海': [
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
      ['Cape Beauty Co','','2026-04-12','2026-01-20','B','','已订阅','','90天未联系'],
    ],
    '目标客户进公海': [
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
    ],
    '系统自动': [
      ['Global Trade Co','','2025-01-10','2024-08-15','B','','订阅','','180天未成交'],
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
      ['Nordic Hair AB','','2024-11-03','2024-07-22','C','','','','180天未成交'],
    ],
    '手动移入': [
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
      ['Cape Beauty Co','','2026-04-12','2026-01-20','B','','已订阅','','90天未联系'],
    ],
    '跟进人离职': [
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
      ['TopKnot Studios','','2024-09-20','2024-05-10','B','TK','已订阅','2024-01-20','跟进人离职'],
    ],
    '询盘客户': [
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
      ['Cape Beauty Co','','2026-04-12','2026-01-20','B','','已订阅','','90天未联系'],
    ],
    '样单客户': [
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
    ],
    '成交客户': [
      ['Nordic Hair AB','','2024-11-03','2024-07-22','C','','','2024-03-15','180天未成交'],
      ['TopKnot Studios','','2024-09-20','2024-05-10','B','TK','已订阅','2024-01-20','跟进人离职'],
      ['Milano Beauty SRL','','2024-06-15','2024-02-08','A','MB','已订阅','2023-11-10','180天未成交'],
    ],
    '欧洲': [
      ['Nordic Hair AB','','2024-11-03','2024-07-22','C','','','','180天未成交'],
      ['Milano Beauty SRL','','2024-06-15','2024-02-08','A','MB','已订阅','2023-11-10','180天未成交'],
      ['Euro Hair Supply','','2025-03-05','','','','','','客户未回复'],
    ],
    '北美': [
      ['Global Trade Co','','2025-01-10','2024-08-15','B','','订阅','','180天未成交'],
      ['TopKnot Studios','','2024-09-20','2024-05-10','B','TK','已订阅','2024-01-20','跟进人离职'],
    ],
    '亚洲': [
      ['Pacific Imports','','2024-12-20','2024-06-01','C','','','','90天未联系'],
      ['Sunrise Exports Ltd','Brand_A','2025-05-18','2025-02-10','A','SE','已订阅','','跟进人离职'],
    ],
  };

  var rows = mockData[label] || mockData['全部客户'];
  var tbody = el.closest('.page-with-sidebar').querySelector('tbody');
  if (!tbody) return;
  tbody.innerHTML = rows.map(function(c) {
    return '<tr>' +
      '<td><input type="checkbox" class="table-checkbox"></td>' +
      '<td><span class="table-link" onclick="navigateTo(\'customers\',\'customers-detail\')">' + c[0] + '</span></td>' +
      '<td>' + c[1] + '</td><td>' + c[2] + '</td><td>' + c[3] + '</td><td>' + c[4] + '</td><td>' + c[5] + '</td><td>' + c[6] + '</td><td>' + c[7] + '</td>' +
      '<td><span class="table-tag warning">' + c[8] + '</span></td>' +
      '<td><button class="btn btn-sm btn-primary" onclick="claimPublicCustomer(this)">领取</button></td>' +
      '</tr>';
  }).join('');
}

function claimPublicCustomer(btn) {
  var row = btn.closest('tr');
  var name = row ? row.querySelector('.table-link') : null;
  var companyName = name ? name.textContent : '该客户';
  btn.setAttribute('data-claim-name', companyName);
  openModal('领取客户',
    '<div style="margin-bottom:16px">确定领取 <b>' + companyName + '</b> 到我的客户吗？</div>' +
    renderFormField('跟进人', 'select', {options:['我自己','Bambi','Camila','Jade']}) +
    renderFormField('备注', 'textarea', {placeholder:'可选，填写领取原因'}),
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" id="confirmClaimBtn" data-claim-name="' + companyName + '" onclick="confirmClaimPublic(this)">确认领取</button>'
  );
}
function confirmClaimPublic(modalBtn) {
  var companyName = modalBtn.getAttribute('data-claim-name');
  closeModal();
  setTimeout(function() {
    openModal('领取成功',
      '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;padding:10px 0"><div style="font-size:40px">✅</div><div style="font-weight:600">已成功领取「' + companyName + '」</div><div class="text-sm text-muted">客户已转入“我的客户”，请尽快跟进。</div></div>',
      '<button class="btn" onclick="closeModal();navigateTo(\'customers\',\'customers-list\')">去我的客户</button><button class="btn btn-primary" onclick="closeModal()">继续领取</button>'
    );
  }, 120);
}
function batchClaimPublic() { showToast('已对所选公海客户发起批量领取，领取后转入我的客户。'); }
function batchAssignPublic() { openModal('批量分配公海客户','<div style="margin-bottom:12px">将所选客户分配给指定成员。</div>'+renderFormField('分配给','select',{options:['张伟','李娜','Camila','Jade']})+renderFormField('备注','textarea',{placeholder:'可选'}),'<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已批量分配\')">确定</button>'); }

function openPublicCustomerSearchModal() {
  openModal('搜索公海客户',
    renderFormField('关键词', 'text', {placeholder:'输入公司名称、邮箱或联系人'}) +
    '<div class="form-row">' +
    renderFormField('移入公海原因', 'select', {options:['全部','180天未成交','90天未联系','客户未回复','跟进人离职']}) +
    renderFormField('客户等级', 'select', {options:['全部','A','B','C','D']}) +
    '</div>' +
    '<div class="form-row">' +
    renderFormField('国家地区', 'select', {options:['全部','中国','美国','德国','英国','日本','法国','澳大利亚']}) +
    renderFormField('创建时间', 'select', {options:['全部','最近7天','最近30天','最近90天','自定义']}) +
    '</div>',
    '<button class="btn" onclick="closeModal()">重置</button><button class="btn btn-primary" onclick="closeModal()">搜索</button>'
  );
}

// Archive Advice
PAGE_RENDERERS['customers-archive'] = () => `
  <div class="page-header">
    <h1 class="page-title">建档建议</h1>
    <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的建档建议</button><button class="toggle-btn" onclick="switchToggle(this)">团队建档建议</button></div>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="showToast('批量加标签')">加标签</button>
      <button class="btn btn-sm btn-text text-danger" onclick="showToast('批量标记不采纳')">标记不采纳</button>
      <button class="btn btn-primary" onclick="openConfirmArchiveModal()">建为客户</button>
    </div>
  </div>
  <div class="table-info mb-12">共 12 条数据</div>
  ${renderTable(
    ['置信度','推荐来源','联系人邮箱','联系人名称','建议关联公司','建议跟进人','最近邮件','最近联系时间','操作'],
    [
      ['<span class="table-tag success">高</span>','邮件识别','alex@newbuyer.com','Alex Brown','NewBuyer Ltd','Bambi','Re: Quotation Request','2026-06-20','<button class="btn btn-sm btn-primary" onclick="openConfirmArchiveModal()">建为客户</button> <button class="btn btn-sm btn-text" onclick="archiveNotAdopt(this)">更多 ▾</button>'],
      ['<span class="table-tag success">高</span>','邮件识别','info@trade.co','Trade Manager','Trade Co','Camila','Product Inquiry','2026-06-19','<button class="btn btn-sm btn-primary" onclick="openConfirmArchiveModal()">建为客户</button> <button class="btn btn-sm btn-text" onclick="archiveNotAdopt(this)">更多 ▾</button>'],
      ['<span class="table-tag warning">中</span>','背调补充','buyer@mall.com','Mall Buyer','Mall Corp','Jade','Bulk Order','2026-06-18','<button class="btn btn-sm btn-primary" onclick="openConfirmArchiveModal()">建为客户</button> <button class="btn btn-sm btn-text" onclick="archiveNotAdopt(this)">更多 ▾</button>'],
      ['<span class="table-tag warning">中</span>','线索转化','sales@vendor.de','Hans Mueller','Vendor GmbH','Bambi','Partnership','2026-06-17','<button class="btn btn-sm btn-primary" onclick="openConfirmArchiveModal()">建为客户</button> <button class="btn btn-sm btn-text" onclick="archiveNotAdopt(this)">更多 ▾</button>'],
      ['<span class="table-tag">低</span>','社媒线索','test@sample.com','Sample User','Sample Inc','Camila','General Inquiry','2026-06-15','<button class="btn btn-sm btn-primary" onclick="openConfirmArchiveModal()">建为客户</button> <button class="btn btn-sm btn-text" onclick="archiveNotAdopt(this)">更多 ▾</button>'],
    ],
    { checkbox: true, total: 12, pageSize: 10 }
  )}
  <div class="flex-between mt-12"><span class="text-sm text-muted">已选 0 条</span><button class="btn btn-sm btn-text text-danger" onclick="showToast('批量标记不采纳')">批量标记不采纳</button></div>
`;

// Confirm Archive Modal
function openConfirmArchiveModal() {
  const n = document.querySelectorAll('#content .table-checkbox:checked').length || 1;
  const tips = `确定将这 <b>${n}</b> 条建为客户吗？<br/><span class="text-sm text-muted">确认后系统将自动创建客户档案并关联对应线索/邮件。</span>`;
  openModal('建为客户', `${tips}<div class="mt-12"><label class="form-label">备注（可选）</label><input class="form-input" placeholder="建为客户备注"/></div>`,
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已建为 '+n+' 条客户\')">确定</button>'
  );
}
function archiveNotAdopt(btn) {
  openModal('更多操作', '<div class="tp-help-item" onclick="closeModal();showToast(\'已标记为不采纳\')">标记不采纳</div><div class="tp-help-item" onclick="closeModal();showToast(\'已忽略该建档建议\')">忽略</div><div class="tp-help-item" onclick="closeModal();showToast(\'查看推荐依据\')">查看推荐依据</div>','<button class="btn" onclick="closeModal()">关闭</button>');
}

// Customer Dedup
PAGE_RENDERERS['customers-dedup'] = () => `
  <div class="page-header"><h1 class="page-title">客户查重</h1></div>
  <div class="card mb-16">
    <div class="flex gap-8">
      <select class="filter-select" style="width:160px">
        <option>全部</option><option>公司名称/简称</option><option>客户编号</option><option>邮箱</option><option>邮箱后缀</option><option>联系人名称</option><option>联系电话</option><option>社交账号</option>
      </select>
      <input class="filter-input flex-1" placeholder="输入公司名称/简称、客户编号、邮箱地址等" />
      <button class="btn btn-primary">查重</button>
    </div>
  </div>
  <div class="card">
    <div class="empty-state">
      <div class="empty-icon">🔍</div>
      <div class="empty-text">为了避免销售冲突，可以通过客户查重来查看客户的归属情况。</div>
      <div class="text-sm text-muted mt-12">客户查重是基于全公司所有客户资料的全局查找。</div>
    </div>
  </div>
`;

// Customer Settings
PAGE_RENDERERS['customers-settings'] = () => `
  <div class="page-header"><h1 class="page-title">客户设置</h1></div>
  ${renderTabs([{label:'移入公海规则'},{label:'标签管理'},{label:'客户来源'},{label:'客户导入'}])}
  <div class="card">
    <div class="flex-between mb-12">
      <div><span class="text-bold">我的客户数: </span>3 / 无上限</div>
      <button class="btn btn-sm">移入公海规则设置</button>
    </div>
    <div class="alert alert-info mb-12">符合移入公海条件时，系统会提前 7 天发送邮件提醒。</div>
    <div class="grid-2">
      <div class="card card-flat">
        <div class="text-bold mb-4">询盘客户180天未成交</div>
        <div class="text-sm text-muted">移入条件: 180 天未成交</div>
        <div class="text-sm text-muted">生效客群: 私海未成交客户（部门）</div>
      </div>
      <div class="card card-flat">
        <div class="text-bold mb-4">目标客户90天未联系</div>
        <div class="text-sm text-muted">移入条件: 90 天未联系</div>
        <div class="text-sm text-muted">生效客群: 非个人未成交（部门）</div>
      </div>
    </div>
  </div>
`;

// ===== 6. Business / 商机模块 =====
let bizListView = 'kanban'; // kanban | list
let bizAiAnalysisOpen = false;
PAGE_RENDERERS['business-list'] = function() {
  return '<div class="page-header">' +
    '<h1 class="page-title">商机</h1>' +
    '<div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的商机</button></div>' +
    '<div class="page-actions">' +
    '<input class="filter-input" placeholder="搜索商机名称/客户" style="height:30px;min-width:160px"/>' +
    '<button class="btn btn-sm" onclick="toggleBizAiAnalysis()">AI 商机转化分析</button>' +
    '<button class="btn btn-sm" onclick="navigateTo(\'business\',\'business-ai-config\')">AI 商机自动化配置</button>' +
    '<button class="btn btn-primary" onclick="openNewBusinessDrawer()">+ 新建商机</button>' +
    '</div></div>' +
    (bizAiAnalysisOpen ? renderBizAiAnalysisPanel() : '') +
    '<div class="ai-banner"><div>' +
    '<div class="ai-title">✨ 智能识商机，AI自推进，AI商机全面升级！</div>' +
    '<div class="ai-desc">汇总全渠道沟通数据，OKKI AI 智能新建/推进商机，分析谈单卡点，推动谈单转化</div>' +
    '</div><button class="btn">了解更多</button></div>' +
    '<div class="flex-between mb-12"><div class="flex gap-8 items-center">' +
    '<span class="table-info">共 5186 个商机</span>' +
    '<select class="filter-select"><option>创建时间</option></select>' +
    '<input type="date" class="filter-input" style="height:30px;width:130px" placeholder="开始日期"/>' +
    '<input type="date" class="filter-input" style="height:30px;width:130px" placeholder="结束日期"/>' +
    '<select class="filter-select"><option>开发销售标准流程</option></select>' +
    '<select class="filter-select"><option>未归档</option></select>' +
    '</div>' +
    '<div class="flex gap-8"><button class="btn btn-sm" onclick="showToast(\'列设置\')">列设置</button><button class="btn btn-sm" onclick="showToast(\'批量操作\')">批量操作</button><div class="toggle-group"><button class="toggle-btn '+(bizListView==='kanban'?'active':'')+'" onclick="setBizListView(\'kanban\')">看板视图</button><button class="toggle-btn '+(bizListView==='list'?'active':'')+'" onclick="setBizListView(\'list\')">列表视图</button></div></div></div>' +
    '<div class="alert alert-warning mb-12">💡 近30天未录入历史商机 <strong>12</strong> 个 <a class="text-primary" style="margin-left:8px">前往配置</a></div>' +
    '<div class="stat-cards mb-16">' +
    '<div class="stat-card"><div class="stat-label">总销售金额 (USD)</div><div class="stat-value">2,411,309</div></div>' +
    '<div class="stat-card"><div class="stat-label">进行中金额</div><div class="stat-value">202,533</div></div>' +
    '<div class="stat-card"><div class="stat-label">赢单金额</div><div class="stat-value">1,911,210</div></div>' +
    '</div>' +
    (bizListView === 'kanban'
      ? '<div class="biz-pipeline" id="bizPipeline"></div><div class="kanban" id="bizKanban"></div>'
      : renderBizListView());
};

function renderBizListView() {
  var rows = [];
  Object.keys(BIZ_KANBAN_DATA).forEach(function(stage) {
    BIZ_KANBAN_DATA[stage].forEach(function(c) {
      rows.push([stage, c]);
    });
  });
  return renderTable(
    ['商机名称','客户公司','商机阶段','销售金额(USD)','负责人','预计成交','最后跟进','操作'],
    rows.map(function(r) {
      var s = r[0], c = r[1];
      return [
        '<span class="table-link" onclick="navigateTo(\'business\',\'business-detail\')">' + c.title + '</span>',
        c.company,
        '<span class="table-tag '+(s==='赢单'?'success':s==='输单'?'danger':'primary')+'">'+s+'</span>',
        c.amount, c.owner, '2026-07-15', '2026-'+c.date,
        '<button class="btn btn-sm btn-text" onclick="showToast(\'操作 ▾\')">操作 ▾</button>'
      ];
    }),
    { checkbox: true, total: 5186, pageSize: 20 }
  );
}

function setBizListView(v) { bizListView = v; renderContent(); if (v === 'kanban') renderBizKanban(); }
function openAIAnalysis() { bizAiAnalysisOpen = true; renderContent(); renderBizKanban(); }
function toggleBizAiAnalysis() { bizAiAnalysisOpen = !bizAiAnalysisOpen; renderContent(); if (bizListView === 'kanban' && !bizAiAnalysisOpen) renderBizKanban(); }
function renderBizAiAnalysisPanel() {
  return '<div class="card mb-16 biz-ai-panel">' +
    '<div class="flex-between mb-12"><div class="card-title mb-0">✨ AI 商机转化分析 <span class="ai-badge">OKKI AI</span></div>' +
    '<div class="flex gap-8"><select class="filter-select"><option>近30天</option><option>近7天</option><option>本季度</option></select><button class="btn btn-sm" onclick="toggleBizAiAnalysis()">收起 ‹</button></div></div>' +
    '<div class="stat-cards mb-12">' +
    '<div class="stat-card"><div class="stat-label">分析商机</div><div class="stat-value">186</div></div>' +
    '<div class="stat-card warning"><div class="stat-label">停滞商机</div><div class="stat-value text-warning">34</div></div>' +
    '<div class="stat-card success"><div class="stat-label">预计可赢单</div><div class="stat-value text-success">52</div></div>' +
    '<div class="stat-card"><div class="stat-label">预计转化率</div><div class="stat-value">28%</div></div>' +
    '</div>' +
    '<div class="alert alert-info">📌 AI 分析：谈判报价阶段停滞商机最多（34 个），主要卡点为价格谈判与样品确认。建议优先推进 DLBV 特单、澳洲 clip-in 批量。</div>' +
    '<div class="text-sm text-muted">内容由 AI 生成，仅供参考。</div>' +
    '</div>';
}

var BIZ_KANBAN_DATA = {
  '客户背调': [
    {id:'b01', title:'美国假发采购意向', amount:'0', owner:'Camila', company:'Beauty Supply Co', date:'06-22'},
  ],
  '商机': [
    {id:'b02', title:'巴西发片需求确认中', amount:'5,000', owner:'Bambi', company:'Maria Santos', date:'06-21'},
  ],
  '需求确认': [
    {id:'b1', title:'巴基斯坦 wig 采购', amount:'12,500', owner:'Camila', company:'SWISS HAIR CLUB', date:'06-18'},
    {id:'b2', title:'法国假发套装', amount:'8,200', owner:'Jade', company:'Luxe Perruques', date:'06-15'},
    {id:'b3', title:'日本发片定制', amount:'4,800', owner:'Bambi', company:'Sakura Hair Inc', date:'06-12'},
    {id:'b4', title:'韩国全蕾丝订单', amount:'6,300', owner:'Camila', company:'Seoul Wig Co', date:'06-10'},
  ],
  '谈判报价': [
    {id:'b5', title:'DLBV 特单', amount:'22,400', owner:'Bambi', company:'Bono Hair Intl', date:'06-16'},
    {id:'b6', title:'澳洲 clip-in 批量', amount:'15,800', owner:'Jade', company:'Glamour Wigs Ltd', date:'06-14'},
    {id:'b7', title:'加拿大人发接发', amount:'9,600', owner:'Camila', company:'Maple Hair Inc', date:'06-11'},
  ],
  'PI': [
    {id:'b8', title:'POBC', amount:'35,200', owner:'Jade', company:'Beauty Supply Co', date:'06-17'},
    {id:'b9', title:'SFBC 特单', amount:'28,900', owner:'Bambi', company:'Hair World Trading', date:'06-13'},
    {id:'b10', title:'CCPV', amount:'18,500', owner:'Camila', company:'TopKnot Studios', date:'06-09'},
    {id:'b11', title:'瑞士头顶补发', amount:'14,300', owner:'Jade', company:'Bella Hair AG', date:'06-07'},
    {id:'b12', title:'意大利真人发', amount:'22,100', owner:'Bambi', company:'Milano Beauty SRL', date:'06-05'},
  ],
  '样品单': [
    {id:'b13', title:'南非编发样品', amount:'2,800', owner:'Camila', company:'Cape Town Hair', date:'06-19'},
    {id:'b14', title:'瑞典夹式样品', amount:'1,500', owner:'Jade', company:'Nordic Style AB', date:'06-08'},
  ],
  '赢单': [
    {id:'b15', title:'德国假发首单', amount:'45,000', owner:'Bambi', company:'Bono Hair Intl', date:'05-28'},
    {id:'b16', title:'美国年度框架', amount:'120,000', owner:'Camila', company:'Beauty Supply Co', date:'05-15'},
    {id:'b17', title:'英国 lace front', amount:'38,600', owner:'Jade', company:'Hair World Trading', date:'05-02'},
  ],
  '输单': [
    {id:'b18', title:'阿联酋批量', amount:'55,000', owner:'Bambi', company:'Zenith Trading LLC', date:'06-01'},
    {id:'b19', title:'巴基斯坦补单', amount:'8,200', owner:'Camila', company:'SWISS HAIR CLUB', date:'05-20'},
  ],
};

function renderBizKanban() {
  var kanbanEl = document.getElementById('bizKanban');
  var pipelineEl = document.getElementById('bizPipeline');
  if (!kanbanEl) return;
  var stageOrder = ['客户背调','商机','需求确认','谈判报价','PI','样品单','赢单','输单'];

  var lastActiveIdx = -1;
  stageOrder.forEach(function(s, i) {
    if ((BIZ_KANBAN_DATA[s] || []).length > 0) lastActiveIdx = i;
  });

  // unified progress rail above kanban
  if (pipelineEl) {
    pipelineEl.innerHTML = '<div class="biz-rail">' +
      stageOrder.map(function(stage, idx) {
        var cards = BIZ_KANBAN_DATA[stage] || [];
        var cnt = cards.length;
        var total = cards.reduce(function(s, c) { return s + parseFloat(c.amount.replace(/,/g,'')); }, 0);
        var isDone = idx < lastActiveIdx;
        var isCurrent = idx === lastActiveIdx;
        var cls = isDone ? 'done' : (isCurrent ? 'current' : 'pending');

        return '<div class="biz-rail-cell">' +
          '<div class="biz-rail-track">' +
            (idx === 0 ? '<div class="biz-rail-line-half transparent"></div>' : '<div class="biz-rail-line-half ' + cls + '"></div>') +
            '<div class="biz-rail-dot ' + cls + '">' +
              (isDone ? '<svg viewBox="0 0 16 16" width="11" height="11"><path d="M3 8l3 3 7-7" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : '<span>' + (idx + 1) + '</span>') +
            '</div>' +
            (idx === stageOrder.length - 1 ? '<div class="biz-rail-line-half transparent"></div>' : '<div class="biz-rail-line-half ' + (isDone ? 'done' : (isCurrent ? 'current-out' : 'pending')) + '"></div>') +
          '</div>' +
          '<div class="biz-rail-label ' + cls + '">' + stage + '</div>' +
          '<div class="biz-rail-meta">' + cnt + ' 个 · USD ' + total.toLocaleString() + '</div>' +
          '</div>';
      }).join('') +
      '</div>';
  }

  // kanban columns (no header, just cards)
  kanbanEl.innerHTML = stageOrder.map(function(stage) {
    var cards = BIZ_KANBAN_DATA[stage] || [];
    return '<div class="kanban-col" data-stage="' + stage + '" ondragover="onBizDragOver(event)" ondrop="onBizDrop(event,this)">' +
      '<div class="kanban-col-body">' +
      cards.map(function(c) {
        return '<div class="kanban-card" draggable="true" data-id="' + c.id + '" ondragstart="onBizDragStart(event,this)" ondragend="onBizDragEnd(event,this)" onclick="navigateTo(\'business\',\'business-detail\')">' +
          '<div class="kanban-card-title">' + c.title + '</div>' +
          '<div class="kanban-card-info">' +
          '<div class="kanban-card-row"><span>USD ' + c.amount + '</span><span class="text-muted">' + c.owner + '</span></div>' +
          '<div class="kanban-card-row"><span class="text-muted">' + c.company + '</span><span class="text-muted">' + c.date + '</span></div>' +
          '</div></div>';
      }).join('') +
      '</div></div>';
  }).join('');
}

var _bizDragId = null;
function onBizDragStart(e, card) {
  _bizDragId = card.getAttribute('data-id');
  card.style.opacity = '0.4';
  card.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', _bizDragId);
}
function onBizDragEnd(e, card) {
  card.style.opacity = '1';
  card.classList.remove('dragging');
  document.querySelectorAll('.kanban-col').forEach(function(col) { col.classList.remove('kanban-col-over'); });
  _bizDragId = null;
}
function onBizDragOver(e) {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'move';
  var col = e.target.closest('.kanban-col');
  if (col) {
    document.querySelectorAll('.kanban-col').forEach(function(c) { c.classList.remove('kanban-col-over'); });
    col.classList.add('kanban-col-over');
  }
}
function onBizDrop(e, col) {
  e.preventDefault();
  col.classList.remove('kanban-col-over');
  var dragId = e.dataTransfer.getData('text/plain') || _bizDragId;
  if (!dragId) return;
  var targetStage = col.getAttribute('data-stage');
  var card = null;
  var fromStage = null;
  var stageKeys = Object.keys(BIZ_KANBAN_DATA);
  for (var s = 0; s < stageKeys.length; s++) {
    var arr = BIZ_KANBAN_DATA[stageKeys[s]];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].id === dragId) {
        card = arr[i];
        fromStage = stageKeys[s];
        arr.splice(i, 1);
        break;
      }
    }
    if (card) break;
  }
  if (!card || fromStage === targetStage) {
    if (card && fromStage) BIZ_KANBAN_DATA[fromStage].push(card);
    return;
  }
  BIZ_KANBAN_DATA[targetStage].push(card);
  renderBizKanban();
  showBizMoveToast(card.title, fromStage, targetStage);
}
function showBizMoveToast(title, from, to) {
  var toast = document.createElement('div');
  toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111827;color:#fff;padding:10px 20px;border-radius:8px;font-size:13px;z-index:9999;box-shadow:0 4px 12px rgba(0,0,0,.2);animation:contentFadeIn .2s ease-out;white-space:nowrap';
  toast.textContent = '「' + title + '」已从 ' + from + ' 移至 ' + to;
  document.body.appendChild(toast);
  setTimeout(function() { toast.style.opacity = '0'; toast.style.transition = 'opacity .3s'; }, 2000);
  setTimeout(function() { toast.remove(); }, 2500);
}

function scrollToKanbanCol(stage) {
  var col = document.querySelector('.kanban-col[data-stage="' + stage + '"]');
  if (!col) return;
  col.scrollIntoView({behavior:'smooth', inline:'center', block:'nearest'});
  col.classList.add('kanban-col-highlight');
  setTimeout(function() { col.classList.remove('kanban-col-highlight'); }, 1200);
}


// AI Analysis Panel
function openAIAnalysis() {
  openDrawer('AI 商机转化分析', `
    <div class="card mb-12" style="border:1px solid var(--border-light)">
      <div class="text-sm text-muted mb-8">当前报表: WhatsApp 团队沟通效果趋势</div>
      <div class="text-sm text-muted">查看范围: 所有范围</div>
    </div>
    <div class="text-sm text-muted mb-12">您可以问邮件、线索、客户、商机、订单、订单产品相关的问题</div>
    <div class="card-title">推荐问题</div>
    ${['上个月创建了多少商机？','上个月，不同员工分别创建了多少商机？','今年每个月的赢单商机金额有多少？','今年新建商机整体的输单原因分布','不同员工负责的不同销售阶段的商机数量','近1年，不同客户来源的商机转化率是多少？'].map(q =>
      `<div class="tree-item" style="padding:8px 0;border-bottom:1px solid var(--border-light)">${q}</div>`
    ).join('')}
    <div class="divider"></div>
    <div class="card-title">分析条件</div>
    ${renderFormField('分析范围', 'select', {options:['所有范围']})}
    ${renderFormField('创建日期', 'date')}
    ${renderFormField('销售流程', 'select', {options:['开发销售标准流程']})}
  `, `
    <button class="btn" onclick="closeDrawer()">退出</button>
    <button class="btn btn-primary">生成分析</button>
  `);
}

// New Business Drawer
function openNewBusinessDrawer() {
  openDrawer('新建商机', `
    <div class="form-section">
      <div class="form-section-title">基本信息 <a class="btn-text btn-sm ml-auto">显示设置</a></div>
      ${renderFormField('客户', 'text', {required:true, placeholder:'搜索选择客户'})}
      ${renderFormField('销售流程', 'select', {required:true, options:['开发销售标准流程','维护销售标准流程']})}
      ${renderFormField('商机名称', 'text', {required:true, placeholder:'请输入商机名称'})}
      <div class="form-row">
        ${renderFormField('币种', 'select', {required:true, options:['USD','EUR','GBP','CNY']})}
        ${renderFormField('汇率', 'text', {required:true, value:'100'})}
      </div>
      ${renderFormField('销售金额', 'text', {required:true, placeholder:'0.00'})}
      ${renderFormField('关联联系人', 'select', {options:['请选择联系人']})}
      ${renderFormField('销售阶段', 'select', {required:true, options:['需求确认','谈判报价','PI','样品单']})}
      ${renderFormField('负责人', 'select', {required:true, options:['请选择负责人']})}
      ${renderFormField('结束日期', 'date', {required:true})}
    </div>
    <a class="btn-text btn-sm mb-16">展开全部（选填）</a>
    <div class="form-section">
      <div class="form-section-title">关联附件</div>
      <div class="upload-area">拖拽/粘贴文件到此处上传<br><span class="text-sm">单个文件不可超过20MB</span></div>
      <div class="flex gap-8 mt-8">
        <button class="btn btn-sm">上传本地文件</button>
        <button class="btn btn-sm">上传云盘文件</button>
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">关联产品</div>
      <button class="btn btn-sm">选择产品</button>
    </div>
  `, `
    <button class="btn" onclick="closeDrawer()">取消</button>
    <button class="btn btn-primary" onclick="closeDrawer()">确定</button>
  `);
}

// Transfer Business Modal
function composeMailTo(email) { window.composeTo = email || ''; navigateTo('mail','mail-compose'); }
function clickBizStage(el, stage) {
  el.closest('.stage-bar').querySelectorAll('.stage-item').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  showToast('已切换销售阶段：' + stage);
}
function switchBizDynView(btn, key) {
  switchToggle(btn);
  ['hist','chat','stuck'].forEach(k => { const e = document.getElementById('biz_dyn_'+k); if (e) e.style.display = (k === key ? '' : 'none'); });
}
function openTransferModal() {
  openModal('转移商机',
    renderFormField('转移给', 'select', {options:['请选择新负责人','Bambi','Camila','Jade','Amy']}) +
    '<label class="form-switch" style="margin:12px 0"><input type="checkbox" checked /> 共享商机关联客户给新负责人</label><br>' +
    '<label class="form-switch" style="margin:12px 0"><input type="checkbox" checked /> 将原负责人增加为协同跟进人</label><br>' +
    renderFormField('权限', 'select', {options:['仅查看','可编辑']}),
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确定</button>'
  );
}

// Business Detail
PAGE_RENDERERS['business-detail'] = () => {
  const mainTab = 'biz_main';
  const dynFilter = 'biz_dynf';

  const panelDynamic = `
    <div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>
    <div class="flex gap-8 mb-12">
      <button class="btn btn-sm" onclick="showToast('AI 写跟进')">AI 写跟进</button>
      <button class="btn btn-sm" onclick="showToast('选择跟进模板')">选择模板</button>
      <button class="btn btn-sm btn-text" onclick="showToast('同步动态：从邮件/聊天同步最新动态')">同步动态</button>
    </div>
    <div class="flex-between mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchBizDynView(this,'hist')">历史动态</button>
        <button class="toggle-btn" onclick="switchBizDynView(this,'chat')">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchBizDynView(this,'stuck')">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="biz_dyn_wrap">
      <div id="biz_dyn_hist">
      ${renderTabs([{label:'全部',count:1},{label:'跟进记录',count:0},{label:'往来邮件',count:0},{label:'聊天记录',count:0},{label:'其它',count:1}], 0, dynFilter)}
      ${renderTabPanels(dynFilter, [
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">商机</div><div class="tl-desc">Camila 新建了一个商机<br>商机金额: USD 100.00 | 商机阶段: 客户背调 | 结束日期: 2026-04-29</div></div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无跟进记录</div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无往来邮件</div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无聊天记录</div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">商机</div><div class="tl-desc">Camila 新建了一个商机</div></div></div>'
      ])}
      </div>
      <div id="biz_dyn_chat" style="display:none"><div class="card placeholder-card">AI 聊天旅程：暂无数据</div></div>
      <div id="biz_dyn_stuck" style="display:none"><div class="card placeholder-card">AI 谈单卡点：暂无卡点</div></div>
    </div>`;

  const panelProfile = `
    <div class="card mb-12">
      <div class="form-section-title">基本信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['客户','SWISS HAIR CLUB'],['销售流程','维护销售标准流程'],['币种','USD'],['汇率','100'],
          ['销售阶段','客户背调'],['销售金额','USD 100.00'],['来源线索','--'],['结束日期','2026-04-29'],
          ['商机类型','--'],['商机来源','社媒--自然'],['归属部门','业务维护一组'],['输单描述','--'],
          ['输单原因','--'],['商机名称','巴基斯坦wig'],['负责人','Camila'],['备注','--'],
          ['其他总费用','0.0000'],['产品总金额','0.0000'],['产品总数量','0.0000'],['首次成交时间','--'],
          ['二次开发成交时间','--'],['客户阶段','待跟进'],
        ])}
      </div>
    </div>
    <div class="card">
      <div class="form-section-title">系统信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['创建时间','2026-03-30 16:07:03'],['创建方式','手动创建'],['创建人','Camila'],
          ['更新时间','2026-03-30 16:07:03'],['资料更新时间','--'],['动态更新时间','2026-03-30 16:07:03'],
          ['商机产品更新日期','--'],['当前阶段停留时间','83 天 10 小时 2 分钟'],
        ])}
      </div>
    </div>`;

  const panelTx = `
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title mb-0">商机产品</div><button class="btn btn-sm">选择产品</button></div>
      ${renderTable(['产品编号','产品名称','产品型号','产品价格','产品规格','产品数量','其他费用','产品金额','产品备注'], [], {total:0})}
    </div>
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title mb-0">销售订单</div></div>
      ${renderTable(['名称','金额','状态'], [], {total:0})}
    </div>
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title mb-0">报价单</div></div>
      ${renderTable(['名称','金额','状态'], [], {total:0})}
    </div>
    <div class="card">
      <div class="flex-between mb-12"><div class="card-title mb-0">回款单</div></div>
      <div class="empty-state" style="padding:20px"><div class="empty-text">暂无数据</div></div>
    </div>`;

  const panelDocs = `
    <div class="card">
      <div class="flex-between mb-12"><div class="card-title mb-0">全部文档</div><button class="btn btn-sm btn-primary">上传文档</button></div>
      ${renderTable(['文件名称','父级文件夹','关联类型','上传方式','文件大小','添加人','上传时间','操作'], [], {total:0})}
    </div>`;

  const panelHistory = `
    <div class="card">
      <div class="card-title">操作历史</div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">新建商机</div><div class="tl-desc">Camila 新建了商机信息：编号 O13428，名称 巴基斯坦wig，金额 USD 100.00，结束日期 2026-04-29</div></div>
        <div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">添加联系人</div><div class="tl-desc">Camila 添加了关联联系人 +92 300 8015673</div></div>
        <div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">修改销售阶段</div><div class="tl-desc">Camila 修改了销售阶段：-- → 客户背调</div></div>
      </div>
    </div>`;

  return `
    <div class="page-header">
      <h1 class="page-title">商机详情</h1>
      <div class="page-actions">
        <button class="btn btn-primary" onclick="composeMailTo('nomanilyas567@gmail.com')">✉ 写邮件</button>
        <button class="btn" onclick="openTransferModal()">转移</button>
      </div>
    </div>
    <div class="detail-header">
      <div class="detail-name">巴基斯坦wig <button class="btn btn-sm btn-icon" onclick="this.textContent=this.textContent==='☆'?'★':'☆'">☆</button></div>
      <div class="detail-meta">
        <span class="detail-meta-item">编号: O13428</span>
        <span class="detail-meta-item">客户: <a class="text-primary" onclick="navigateTo('customers','customers-detail')">SWISS HAIR CLUB</a></span>
        <span class="detail-meta-item">负责人: Camila</span>
        <span class="detail-meta-item">协同跟进人: <a class="text-primary" onclick="showToast('查看协同跟进人')">Jade</a></span>
        <span class="detail-meta-item">标签: <span class="table-tag primary">高意向</span> <span class="table-tag">社媒</span></span>
        <span class="detail-meta-item">销售流程: 维护销售标准流程</span>
        <span class="detail-meta-item">销售金额: USD 100.00</span>
        <span class="detail-meta-item">结束日期: 2026-04-29</span>
        <span class="detail-meta-item">当前阶段停留: 83天10小时2分钟</span>
      </div>
    </div>
    <div class="stage-bar mb-16">
      <div class="stage-item active" onclick="clickBizStage(this,'客户背调')">客户背调</div>
      <div class="stage-item" onclick="clickBizStage(this,'商机')">商机</div>
      <div class="stage-item" onclick="clickBizStage(this,'需求确认')">需求确认</div>
      <div class="stage-item" onclick="clickBizStage(this,'谈判报价')">谈判报价</div>
      <div class="stage-item" onclick="clickBizStage(this,'PI')">PI</div>
      <div class="stage-item" onclick="clickBizStage(this,'样品单')">样品单</div>
      <div class="stage-item" onclick="clickBizStage(this,'赢单')">赢单</div>
      <div class="stage-item" onclick="clickBizStage(this,'输单')">输单</div>
    </div>
    <div class="detail-page">
      <div class="detail-main">
        ${renderTabs([{label:'动态'},{label:'资料'},{label:'交易'},{label:'文档'},{label:'操作历史'}], 0, mainTab)}
        ${renderTabPanels(mainTab, [panelDynamic, panelProfile, panelTx, panelDocs, panelHistory])}
      </div>
      <div class="detail-sidebar">
        <div class="detail-card">
          <div class="card-title">计划日程 (0)</div>
          <button class="btn btn-sm w-full" onclick="openNewScheduleModal()">+ 添加日程</button>
        </div>
        <div class="detail-card">
          <div class="card-title">关联联系人信息 (1)</div>
          <div class="contact-card">
            <div class="contact-name">+92 300 8015673</div>
            <div class="contact-info">
              <span>✉ nomanilyas567@gmail.com</span>
              <span>📞 923008015673</span>
              <span>📱 WhatsApp: 923008015673</span>
              <span>Facebook: Swiss Hair Club</span>
              <span>性别: 不设置</span>
              <span>要到邮箱时间: 2025-11-26</span>
              <span>要到邮箱客服: Jade</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

// AI Config
PAGE_RENDERERS['business-ai-config'] = () => `
  <div class="page-header">
    <h1 class="page-title">新建AI自动化销售流程</h1>
    <div class="page-actions"><button class="btn" onclick="navigateTo('business','business-list')">返回</button></div>
  </div>
  <div class="steps mb-16">
    <div class="step active"><div class="step-dot">1</div>基础信息配置</div><div class="step-line"></div>
    <div class="step"><div class="step-dot">2</div>销售阶段配置</div><div class="step-line"></div>
    <div class="step"><div class="step-dot">3</div>销售阶段必填字段配置</div>
  </div>
  <div class="card">
    <div class="alert alert-info mb-16">💡 AI自动新建商机时，支持提取字段 <a class="text-primary">查看明细</a></div>
    ${renderFormField('销售流程名称', 'text', {placeholder:'请输入销售流程名称'})}
    ${renderFormField('默认币种', 'select', {options:['USD','EUR','GBP','CNY']})}
    <div class="form-section">
      <div class="form-section-title">商机名称规则</div>
      <div class="text-sm text-muted mb-8">AI会自动抓取配置字段的信息，配置内容支持拖拽排序</div>
      <div style="border:1px solid var(--border);border-radius:var(--radius);padding:12px;margin-bottom:8px">
        <span class="table-tag primary">中文产品名称</span> - <span class="table-tag primary">产品数量</span>
      </div>
      <button class="btn btn-sm mb-8">+ 插入信息</button>
      <div class="text-sm text-muted">预览: 户外储能电源-500</div>
    </div>
    ${renderFormField('创建门槛', 'text', {placeholder:'商机金额 ≥ USD 时才创建'})}
  </div>
  <div style="text-align:right;margin-top:16px">
    <button class="btn" onclick="navigateTo('business','business-list')">取消</button>
    <button class="btn btn-primary">下一步</button>
  </div>
`;

PAGE_RENDERERS['business-ai-analysis'] = function() { bizAiAnalysisOpen = true; return PAGE_RENDERERS['business-list'](); };

// ===== 7. OKKI Leads =====
PAGE_RENDERERS['okki-smart'] = () => `
  <div class="page-header"><h1 class="page-title">智能获客</h1><div class="page-actions"><button class="btn btn-primary">+ 新建获客任务</button></div></div>
  <div class="ai-banner"><div><div class="ai-title">✨ AI 智能获客</div><div class="ai-desc">基于 AI 大模型深度理解您的业务，精准挖掘全球潜在客户</div></div></div>
  <div class="card mb-16">
    <div class="card-title">获客条件</div>
    <div class="grid-2">
      ${renderFormField('目标市场', 'select', {options:['全球','北美','欧洲','东南亚','中东','南美']})}
      ${renderFormField('行业关键词', 'text', {placeholder:'输入产品或行业关键词，如 hair wig, toupee'})}
      ${renderFormField('公司规模', 'select', {options:['不限','1-50人','50-200人','200-1000人','1000人以上']})}
      ${renderFormField('采购意向', 'select', {options:['不限','高意向','中意向','低意向']})}
    </div>
    <div class="flex gap-8 mt-12"><button class="btn btn-primary">开始获客</button><button class="btn">重置条件</button></div>
  </div>
  <div class="card">
    <div class="card-title">推荐潜客</div>
    ${renderTable(['公司名称','国家','行业','联系人数','匹配度','操作'],
      [['Global Hair Supplies','美国','假发贸易','3','<span class="table-tag success">95%</span>','<button class="btn btn-sm btn-primary">加入线索</button>'],
       ['European Wig Center','德国','美容美发','5','<span class="table-tag success">88%</span>','<button class="btn btn-sm btn-primary">加入线索</button>'],
       ['Asia Beauty Trading','日本','美妆批发','2','<span class="table-tag warning">72%</span>','<button class="btn btn-sm btn-primary">加入线索</button>']],
      {total: 156})}
  </div>
`;

PAGE_RENDERERS['okki-recommend'] = () => `
  <div class="page-header"><h1 class="page-title">推荐广场</h1></div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部行业</option><option>假发</option><option>服装</option></select>
    <select class="filter-select"><option>全部地区</option><option>欧美</option><option>东南亚</option></select>
    <select class="filter-select"><option>推荐时间</option><option>今天</option><option>本周</option><option>本月</option></select>
  </div>
  <div class="grid-3">
    ${[{name:'Hair World Inc',country:'美国',match:'92%',tag:'高匹配'},{name:'Beauty First GmbH',country:'德国',match:'87%',tag:'新推荐'},{name:'Wig House Ltd',country:'英国',match:'85%',tag:'高匹配'},
       {name:'Salon Pro Trading',country:'澳大利亚',match:'80%',tag:''},{name:'Cheveux Paris',country:'法国',match:'78%',tag:'新推荐'},{name:'Cape Hair SA',country:'南非',match:'75%',tag:''}
    ].map(c => `
      <div class="card">
        <div class="flex-between mb-8"><span class="text-bold">${c.name}</span>${c.tag ? `<span class="table-tag primary">${c.tag}</span>` : ''}</div>
        <div class="text-sm text-muted mb-8">🌍 ${c.country} · 匹配度 ${c.match}</div>
        <div class="flex gap-8"><button class="btn btn-sm btn-primary">加入线索</button><button class="btn btn-sm">查看详情</button></div>
      </div>
    `).join('')}
  </div>
`;

PAGE_RENDERERS['okki-search'] = () => `
  <div class="page-header"><h1 class="page-title">搜索引擎</h1></div>
  <div class="card mb-16">
    <div class="card-title">搜索获客</div>
    <div class="flex gap-8 mb-12">
      <input class="filter-input flex-1" placeholder="输入关键词搜索全球企业，如 hair wig supplier" />
      <select class="filter-select"><option>Google</option><option>Bing</option><option>Yahoo</option></select>
      <button class="btn btn-primary">搜索</button>
    </div>
    <div class="text-sm text-muted">支持通过搜索引擎发现全球潜在客户，系统自动提取企业信息和联系方式</div>
  </div>
  <div class="card"><div class="empty-state"><div class="empty-icon">🔍</div><div class="empty-text">输入关键词开始搜索</div></div></div>
`;

PAGE_RENDERERS['okki-trade'] = () => `
  <div class="page-header"><h1 class="page-title">智能贸易数据</h1><div class="page-actions"><button class="btn btn-sm">数据说明</button></div></div>
  <div class="card mb-16">
    <div class="flex gap-8">
      <input class="filter-input flex-1" placeholder="输入 HS 编码或产品关键词" />
      <select class="filter-select"><option>进口商</option><option>出口商</option></select>
      <select class="filter-select"><option>全部国家</option><option>美国</option><option>德国</option><option>英国</option></select>
      <button class="btn btn-primary">查询</button>
    </div>
  </div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">贸易记录总数</div><div class="stat-value">12,456</div></div>
    <div class="stat-card"><div class="stat-label">涉及企业</div><div class="stat-value">3,280</div></div>
    <div class="stat-card"><div class="stat-label">覆盖国家</div><div class="stat-value">85</div></div>
  </div>
  ${renderTable(['企业名称','国家','贸易次数','最近贸易时间','产品描述','操作'],
    [['US Hair Imports LLC','美国','45','2026-05-15','Human hair wigs, toupees','<button class="btn btn-sm btn-primary">加入线索</button>'],
     ['Hamburg Beauty GmbH','德国','32','2026-04-20','Hair extensions, clips','<button class="btn btn-sm btn-primary">加入线索</button>'],
     ['London Wig Co','英国','28','2026-06-01','Lace front wigs','<button class="btn btn-sm btn-primary">加入线索</button>']],
    {total:3280})}
`;

PAGE_RENDERERS['okki-exhibition'] = () => `
  <div class="page-header"><h1 class="page-title">展会数据</h1></div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部展会</option><option>广交会</option><option>美博会</option><option>中东美发展</option></select>
    <select class="filter-select"><option>全部年份</option><option>2026</option><option>2025</option></select>
    <input class="filter-input" placeholder="搜索参展商" />
  </div>
  <div class="card mb-16">
    <div class="card-title">即将举行的展会</div>
    <div class="grid-3">
      ${[{name:'Canton Fair 2026秋季',date:'2026-10-15',location:'广州',exhibitors:2500},{name:'Cosmoprof Asia 2026',date:'2026-11-12',location:'香港',exhibitors:1800},{name:'Beauty World 2026',date:'2026-12-01',location:'迪拜',exhibitors:1200}].map(e => `
        <div class="card">
          <div class="text-bold mb-4">${e.name}</div>
          <div class="text-sm text-muted mb-4">📅 ${e.date} · 📍 ${e.location}</div>
          <div class="text-sm mb-8">参展商: ${e.exhibitors}</div>
          <button class="btn btn-sm btn-primary">查看参展商</button>
        </div>`).join('')}
    </div>
  </div>
`;

PAGE_RENDERERS['okki-b2b'] = () => `
  <div class="page-header"><h1 class="page-title">B2B询盘</h1></div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">今日新增询盘</div><div class="stat-value">5</div></div>
    <div class="stat-card"><div class="stat-label">待处理询盘</div><div class="stat-value">12</div></div>
    <div class="stat-card"><div class="stat-label">本月总询盘</div><div class="stat-value">89</div></div>
  </div>
  ${renderTable(['询盘来源','买家名称','买家国家','产品需求','询盘时间','状态','操作'],
    [['Alibaba','Ahmed Khan','巴基斯坦','Men toupee, 100pcs','2026-06-21','<span class="table-tag warning">待处理</span>','<button class="btn btn-sm btn-primary">处理</button>'],
     ['Made-in-China','Lisa Brown','美国','Lace front wig, samples','2026-06-20','<span class="table-tag primary">已回复</span>','<button class="btn btn-sm">查看</button>'],
     ['Global Sources','Hans Weber','德国','Hair extensions, bulk','2026-06-19','<span class="table-tag success">已转化</span>','<button class="btn btn-sm">查看</button>']],
    {total:89})}
`;

PAGE_RENDERERS['okki-social'] = () => `
  <div class="page-header"><h1 class="page-title">社媒数据</h1></div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部平台</option><option>Facebook</option><option>Instagram</option><option>LinkedIn</option><option>Twitter</option></select>
    <input class="filter-input" placeholder="搜索关键词或用户名" />
    <button class="btn btn-primary">搜索</button>
  </div>
  <div class="card"><div class="empty-state"><div class="empty-icon">📱</div><div class="empty-text">输入关键词搜索社媒潜客</div><div class="text-sm text-muted mt-8">支持 Facebook、Instagram、LinkedIn 等主流社交平台</div></div></div>
`;

PAGE_RENDERERS['okki-map'] = () => `
  <div class="page-header"><h1 class="page-title">地图获客</h1></div>
  <div class="card mb-16">
    <div class="flex gap-8">
      <input class="filter-input flex-1" placeholder="输入地区或行业关键词，如 hair salon New York" />
      <select class="filter-select"><option>Google Maps</option></select>
      <button class="btn btn-primary">搜索</button>
    </div>
  </div>
  <div class="card" style="min-height:400px;display:flex;align-items:center;justify-content:center;background:var(--bg)">
    <div class="text-center">
      <div style="font-size:48px;margin-bottom:16px">🗺️</div>
      <div class="text-bold mb-8">地图获客</div>
      <div class="text-sm text-muted">通过地图定位发现周边潜在客户，支持全球范围搜索</div>
    </div>
  </div>
`;

PAGE_RENDERERS['okki-social-monitor'] = () => `
  <div class="page-header"><h1 class="page-title">社媒动态</h1><div class="page-actions"><button class="btn btn-primary">+ 添加监测</button></div></div>
  <div class="alert alert-info mb-12">💡 监测客户社交媒体动态，及时发现商机和互动机会</div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部平台</option><option>Facebook</option><option>Instagram</option><option>LinkedIn</option></select>
    <select class="filter-select"><option>全部时间</option><option>今天</option><option>本周</option><option>本月</option></select>
  </div>
  ${[{platform:'Facebook',user:'Swiss Hair Club',content:'New collection launch! Check out our latest hair pieces...',time:'2小时前'},
     {platform:'Instagram',user:'bonnohair_official',content:'Behind the scenes at our production facility #hairwig #quality',time:'5小时前'},
     {platform:'LinkedIn',user:'Erik Kirste',content:'Looking for reliable hair product suppliers in Asia...',time:'1天前'}
  ].map(d => `
    <div class="card card-flat mb-8">
      <div class="flex-between mb-8"><span class="table-tag primary">${d.platform}</span><span class="text-sm text-muted">${d.time}</span></div>
      <div class="text-bold mb-4">${d.user}</div>
      <div class="text-sm text-muted mb-8">${d.content}</div>
      <div class="flex gap-8"><button class="btn btn-sm">查看原文</button><button class="btn btn-sm">互动</button><button class="btn btn-sm btn-primary">加入线索</button></div>
    </div>
  `).join('')}
`;

PAGE_RENDERERS['okki-trade-monitor'] = () => `
  <div class="page-header"><h1 class="page-title">交易动态</h1></div>
  <div class="alert alert-info mb-12">💡 监测目标市场的贸易动态变化，发现新的合作机会</div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部产品</option><option>假发</option><option>接发</option></select>
    <select class="filter-select"><option>全部国家</option><option>美国</option><option>德国</option><option>英国</option></select>
  </div>
  ${[{title:'美国假发进口量环比增长 15%',desc:'2026年5月美国假发类产品进口总额达 $12.5M，环比增长15%，主要增长来自中国和印度供应商。',time:'2026-06-20'},
     {title:'欧盟新增发制品检测标准',desc:'欧盟发布新的发制品安全检测标准，2027年1月起生效，涉及化学成分和标签要求。',time:'2026-06-18'},
     {title:'巴西市场假发需求持续上升',desc:'巴西市场假发和接发产品需求同比增长 22%，主要集中在中低端市场。',time:'2026-06-15'}
  ].map(d => `
    <div class="card card-flat mb-8">
      <div class="flex-between mb-8"><span class="text-bold">${d.title}</span><span class="text-sm text-muted">${d.time}</span></div>
      <div class="text-sm text-muted">${d.desc}</div>
    </div>
  `).join('')}
`;

PAGE_RENDERERS['okki-marketing'] = () => `
  <div class="page-header"><h1 class="page-title">智能营销</h1><div class="page-actions"><button class="btn btn-primary">+ 新建营销计划</button></div></div>
  ${renderTabs([{label:'全部'},{label:'进行中'},{label:'已完成'},{label:'草稿'}])}
  ${renderTable(['营销计划名称','营销方式','目标客户数','已发送','打开率','回复率','创建时间','状态','操作'],
    [['夏季新品推广','邮件','500','480','32%','8%','2026-06-10','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">查看报告</button>'],
     ['老客户回访','WhatsApp','200','185','45%','15%','2026-06-15','<span class="table-tag primary">进行中</span>','<button class="btn btn-sm btn-text">查看</button>'],
     ['展会邀约','邮件','300','0','--','--','2026-06-20','<span class="table-tag">草稿</span>','<button class="btn btn-sm btn-text">编辑</button>']],
    {total:12})}
`;

PAGE_RENDERERS['okki-edm'] = () => `
  <div class="page-header"><h1 class="page-title">邮件营销</h1><div class="page-actions"><button class="btn btn-primary">+ 新建 EDM</button></div></div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">本月发送量</div><div class="stat-value">2,450</div></div>
    <div class="stat-card"><div class="stat-label">平均打开率</div><div class="stat-value">28.5%</div></div>
    <div class="stat-card"><div class="stat-label">平均点击率</div><div class="stat-value">6.2%</div></div>
    <div class="stat-card"><div class="stat-label">退订率</div><div class="stat-value">0.8%</div></div>
  </div>
  ${renderTabs([{label:'全部'},{label:'待发送'},{label:'发送中'},{label:'已发送'},{label:'草稿'}])}
  ${renderTable(['EDM名称','主题','收件人数','发送时间','打开率','点击率','状态','操作'],
    [['夏季新品目录','Summer 2026 Collection','350','2026-06-18 10:00','32.5%','8.1%','<span class="table-tag success">已发送</span>','<button class="btn btn-sm btn-text">查看</button>'],
     ['MOQ优惠活动','Special Offer: Low MOQ','200','--','--','--','<span class="table-tag">草稿</span>','<button class="btn btn-sm btn-text">编辑</button>']],
    {total:15})}
`;

PAGE_RENDERERS['okki-whatsapp'] = () => `
  <div class="page-header"><h1 class="page-title">WhatsApp营销</h1><div class="page-actions"><button class="btn btn-primary">+ 新建群发</button></div></div>
  <div class="alert alert-info mb-12">💡 使用 WhatsApp Business API 官方通道群发营销消息，触达全球客户</div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">本月发送量</div><div class="stat-value">890</div></div>
    <div class="stat-card"><div class="stat-label">送达率</div><div class="stat-value">95.2%</div></div>
    <div class="stat-card"><div class="stat-label">已读率</div><div class="stat-value">68.5%</div></div>
    <div class="stat-card"><div class="stat-label">回复率</div><div class="stat-value">12.3%</div></div>
  </div>
  ${renderTabs([{label:'群发记录'},{label:'消息模板'},{label:'自动回复'}])}
  ${renderTable(['任务名称','模板','发送人数','送达','已读','回复','发送时间','状态'],
    [['新品通知','product_launch','150','145','98','18','2026-06-19','<span class="table-tag success">已完成</span>'],
     ['订单确认提醒','order_reminder','80','78','65','12','2026-06-20','<span class="table-tag success">已完成</span>']],
    {total:8})}
`;

// ===== 8. Transaction / 交易模块 =====
PAGE_RENDERERS['tx-process'] = () => {
  const txMenu = [
    { group: '跟单', items: [['tx-process','跟单流程',true]] },
    { group: '产品管理', items: [['tx-product','产品',false],['tx-ali-product','阿里商品',false]] },
    { group: '订单管理', items: [['tx-order','销售订单',false]] },
    { group: '资金管理', items: [['tx-alipay','Alibaba.com Pay',false]] },
  ];
  const lanes = [
    { role:'业务', nodes:[['询盘','done','询盘客户 John Smith'],['报价单','done','已发送报价单 Q-20260623-01'],['销售订单','current','创建销售订单 SO-20260623-001 (待确认 PI)']] },
    { role:'采购', nodes:[['询价任务','done','已发起询价任务 PC-0623'],['采购任务','done','已生成采购任务'],['采购订单','pending','待创建采购订单'],['以销定购','pending','以销定购待处理'],['供应商管理','pending','供应商可视化']] },
    { role:'跟单', nodes:[['出运单','pending','待创建出运单']] },
    { role:'财务', nodes:[['费用单','pending','附加费用待录入'],['付款单','pending','供应商付款待付'],['回款单','pending','待客户回款'],['回款登记','pending','回款登记待登记']] },
    { role:'仓管', nodes:[['入库任务','pending','待创建入库'],['出库任务','pending','待创建出库'],['采购入库','pending','待采购入库'],['销售出库','pending','待销售出库']] },
  ];
  return `
    <div class="page-header"><h1 class="page-title">跟单流程</h1>
      <div class="page-actions"><input class="filter-input" placeholder="搜索节点/单据" style="height:30px;min-width:160px"/><button class="btn btn-sm" onclick="showToast('导出流程图')">导出</button></div>
    </div>
    <div class="page-with-sidebar tx-process-page">
      <div class="left-panel tx-leftmenu">
        <div class="left-panel-title">交易菜单 ${''}</div>
        <input class="filter-input" placeholder="搜索菜单" style="width:calc(100% - 24px);margin:0 12px 8px;height:28px"/>
        ${txMenu.map(g => `<div class="tree-group-title">${g.group}</div>${g.items.map(it=>`<div class="tree-item ${it[2]?'active':''}" onclick="navigateTo('transaction','${it[0]}')">${it[1]}</div>`).join('')}`).join('')}
      </div>
      <div class="right-content" style="padding:16px;overflow-x:auto">
        <div class="flex gap-8 mb-12" style="flex-wrap:wrap">
          ${['发起','创建','关联回款','核销'].map(a=>`<span class="table-tag primary">${a}</span>`).join('')}
          <span class="text-sm text-muted">当前订单：SO-20260623-001 · ABC Company</span>
        </div>
        <div class="alert alert-info mb-12">🔗 跨泳道流转：业务「销售订单」→ 采购「采购订单」→ 跟单「出运单」→ 仓管「销售出库」→ 财务「回款登记 / 核销」。点击节点查看详情并推进。</div>
        <div class="flow-swimlane">
          ${lanes.map(lane => `
            <div class="flow-lane-row">
              <div class="flow-lane-label">${lane.role}</div>
              <div class="flow-lane-cells">
                ${lane.nodes.map((n,i)=>`<div class="flow-node ${n[1]}" onclick="openProcessNodeDetail('${lane.role}','${n[0]}','${n[2]}')">
                  <div class="fn-title">${n[0]}</div><div class="fn-desc text-muted">${n[2]}</div>
                  <div class="fn-status ${n[1]}">${n[1]==='done'?'已完成':n[1]==='current'?'进行中':'待处理'}</div>
                </div>${i<lane.nodes.length-1?'<span class="fn-arrow">→</span>':''}`).join('')}
              </div>
            </div>
          `).join('')}
        </div>
        <div class="divider"></div>
        <div class="flex gap-12 mt-12" style="justify-content:center">
          <div class="flow-node primary" onclick="showToast('订单毛利分析')">订单毛利</div>
          <div class="flow-node primary" onclick="showToast('数据分析')">数据分析</div>
        </div>
      </div>
    </div>
  `;
};
function openProcessNodeDetail(role, node, desc) {
  openModal(role + ' · ' + node, `
    <div class="info-list">
      <div class="info-item"><span class="info-label">流程节点</span><span class="info-value">${role} / ${node}</span></div>
      <div class="info-item"><span class="info-label">关联单据</span><span class="info-value">${desc}</span></div>
      <div class="info-item"><span class="info-label">节点状态</span><span class="info-value">进行中</span></div>
      <div class="info-item"><span class="info-label">负责人</span><span class="info-value">张伟</span></div>
      <div class="info-item"><span class="info-label">计划时间</span><span class="info-value">2026-06-23</span></div>
    </div>
    <div class="mt-12"><button class="btn btn-sm btn-primary" onclick="showToast('推进该节点')">推进</button> <button class="btn btn-sm" onclick="showToast('查看节点详情')">查看详情</button></div>
  `, '<button class="btn" onclick="closeModal()">关闭</button>');
}

// Products
PAGE_RENDERERS['tx-product'] = () => {
  const products = [
    ['🖼️','Men Toupee BH4L','男士发块 BH4L','P001','6*8 inches','BH4L','男块','USD 45.00','CNY 120.00'],
    ['🖼️','Lace Front Wig','蕾丝前额假发','P002','22 inches','LFW22','女装','USD 85.00','CNY 280.00'],
    ['🖼️','Clip-in Extension','接发夹片','P003','18 inches','CE18','辅料','USD 25.00','CNY 65.00'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">产品</h1></div>
    ${renderTabs([{label:'全部'},{label:'无规格产品'},{label:'多规格产品'},{label:'组合产品'}])}
    <div class="ai-banner mb-16" style="padding:12px 16px">
      <span>🤖 AI 数据助理：助您精准分析产品表现</span>
      <button class="btn btn-sm ml-auto">我知道了</button>
      <button class="btn btn-sm">立即体验</button>
    </div>
    <div class="page-with-sidebar">
      <div class="left-panel">
        <div class="flex-between" style="padding:8px 16px"><span class="text-bold text-sm">分组管理</span></div>
        <div class="tree-item active">全部分组 <span class="count">156</span></div>
        <div class="tree-item tree-indent">男块 <span class="count">45</span></div>
        <div class="tree-item tree-indent">女装 <span class="count">38</span></div>
        <div class="tree-item tree-indent">辅料 <span class="count">23</span></div>
        <div class="tree-item tree-indent">未分组 <span class="count">50</span></div>
      </div>
      <div class="right-content px-16">
        <div class="flex-between mb-12">
          <span class="table-info">共 156 个产品</span>
          <div class="btn-group">
            <button class="btn btn-sm" onclick="showToast('下载产品列表')">下载</button>
            <div style="position:relative"><button class="btn btn-sm" onclick="toggleProductImportMenu(this)">导入 ▾</button></div>
            <div style="position:relative"><button class="btn btn-sm btn-primary" onclick="toggleProductCreateMenu(this)">新建 ▾</button></div>
          </div>
        </div>
        ${renderTable(
          ['图片','产品名称','中文名称','编号','规格','型号','分组','离岸价','含税成本价','操作'],
          products.map(p => p.concat(['<button class="btn btn-sm btn-text">编辑</button>'])),
          { checkbox: true, total: 156 }
        )}
      </div>
    </div>
  `;
};

function toggleProductCreateMenu(btn) { openProductCreateMenu(btn); }
function openProductCreateMenu(btn) {
  openModal('新建产品', '<div class="text-sm text-muted mb-12">请选择产品类型</div>' +
    `<div class="row-action-item" onclick="closeModal();openProductForm('无规格产品')"><span class="row-action-icon">📦</span> 无规格产品</div>` +
    `<div class="row-action-item" onclick="closeModal();openProductForm('多规格产品')"><span class="row-action-icon">📋</span> 多规格产品（含规格/型号）</div>` +
    `<div class="row-action-item" onclick="closeModal();openProductForm('组合产品')"><span class="row-action-icon">🗃️</span> 组合产品（多个单品组合）</div>`,
    '<button class="btn" onclick="closeModal()">取消</button>');
}
function toggleProductImportMenu(btn) {
  openModal('导入产品', '<div class="text-sm text-muted mb-12">请选择导入类型</div>' +
    '<div class="row-action-item" onclick="closeModal();showToast(\'导入无规格产品\')"><span class="row-action-icon">📥</span> 导入无规格产品</div>' +
    '<div class="row-action-item" onclick="closeModal();showToast(\'导入多规格产品\')"><span class="row-action-icon">📥</span> 导入多规格产品</div>' +
    '<div class="row-action-item" onclick="closeModal();showToast(\'导入组合产品\')"><span class="row-action-icon">📥</span> 导入组合产品</div>' +
    '<div class="row-action-item" onclick="closeModal();showToast(\'导入产品图片\')"><span class="row-action-icon">🖼️</span> 导入产品图片</div>' +
    '<div class="row-action-item" onclick="closeModal();showToast(\'导入配件清单\')"><span class="row-action-icon">📦</span> 导入配件清单</div>',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-text" style="margin-right:auto" onclick="showToast(\'下载标准模板\')">下载模板</button>');
}
function openProductForm(type) {
  openDrawer('新建' + type, `
    <div class="alert alert-info mb-12">💡 ${type}：请完善以下信息，带 <span class="text-danger">*</span> 为必填</div>
    <div class="form-section">
      <div class="form-section-title">基本信息</div>
      ${renderFormField('产品图片','-',{})}
      <div class="upload-area" style="padding:16px">📷 上传产品图片（可拖拽/粘贴，最多 6 张，也可从云盘上传）</div>
      ${renderFormField('产品名称','text',{required:true,placeholder:'请输入产品名称'})}
      ${renderFormField('中文名称','text',{placeholder:'请输入中文名称'})}
      ${renderFormField('产品编号','text',{placeholder:'自动生成或手动填写'})}
      ${renderFormField('产品分组','select',{options:['请选择','男块','女装','辅料','未分组']})}
      ${renderFormField('型号','text',{placeholder:'产品型号'})}
      ${renderFormField('条形码','text',{placeholder:'产品条形码'})}
    </div>
    <div class="form-section">
      <div class="form-section-title">产品特性</div>
      ${renderFormField('产品描述','textarea',{placeholder:'产品详细描述'})}
      ${renderFormField('材质','text',{placeholder:'如：100% 人发'})}
      ${renderFormField('产地','text',{placeholder:'产地'})}
      ${renderFormField('是否定制','select',{options:['否','是']})}
    </div>
    <div class="form-section">
      <div class="form-section-title">价格信息</div>
      <div class="grid-2">
        ${renderFormField('离岸价模式','select',{options:['固定单价','区间定价','按数量阶梯定价']})}
        ${renderFormField('最小起订量(MOQ)','text',{placeholder:'1'})}
        ${renderFormField('离岸价币种','select',{options:['USD','CNY','EUR','GBP']})}
        ${renderFormField('离岸价','text',{placeholder:'0.00'})}
        ${renderFormField('含税成本价币种','select',{options:['CNY','USD']})}
        ${renderFormField('含税成本价','text',{placeholder:'0.00'})}
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">尺寸信息</div>
      <div class="grid-2">
        ${renderFormField('产品长(cm)','text',{})}
        ${renderFormField('产品宽(cm)','text',{})}
        ${renderFormField('产品高(cm)','text',{})}
        ${renderFormField('产品体积(m³)','text',{})}
        ${renderFormField('产品净重(kg)','text',{})}
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">包装信息</div>
      <div class="grid-2">
        ${renderFormField('包装长(cm)','text',{})}
        ${renderFormField('包装宽(cm)','text',{})}
        ${renderFormField('包装高(cm)','text',{})}
        ${renderFormField('包装体积(m³)','text',{})}
        ${renderFormField('包装毛重(kg)','text',{})}
        ${renderFormField('每包装产品数','text',{})}
      </div>
      ${renderFormField('包装说明','textarea',{placeholder:'包装方式说明'})}
    </div>
    <div class="form-section">
      <div class="form-section-title">外箱信息</div>
      <div class="grid-2">
        ${renderFormField('单箱长(cm)','text',{})}
        ${renderFormField('单箱宽(cm)','text',{})}
        ${renderFormField('单箱高(cm)','text',{})}
        ${renderFormField('单箱体积(m³)','text',{})}
        ${renderFormField('单箱净重(kg)','text',{})}
        ${renderFormField('单箱毛重(kg)','text',{})}
        ${renderFormField('每箱产品数','text',{})}
        ${renderFormField('包装方式','select',{options:['请选择','纸箱','木箱','托盘']})}
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">报关信息</div>
      ${renderFormField('中文报关名称','text',{placeholder:'报关用中文名称'})}
      ${renderFormField('英文报关名称','text',{placeholder:'报关用英文名称'})}
      <div class="grid-2">
        ${renderFormField('海关编码','text',{placeholder:'HS Code'})}
        ${renderFormField('申报税率','text',{placeholder:'% '})}
        ${renderFormField('出口退税率','text',{placeholder:'%'})}
        ${renderFormField('报关单位','select',{options:['个','套','件','千克']})}
      </div>
    </div>
    ${type==='多规格产品' ? `<div class="form-section"><div class="form-section-title">规格设置</div><div class="text-sm text-muted mb-8">添加规格名与规格值，系统将自动生成 SKU 组合。</div><div class="grid-2">${renderFormField('规格名','select',{options:['颜色','尺寸','长度','密度','工艺']})}${renderFormField('规格值','text',{placeholder:'多个用逗号分隔'})}</div><button class="btn btn-sm btn-text">+ 添加规格</button></div>` : ''}
    <div class="form-section">
      <div class="form-section-title">配件清单</div>
      <div class="text-sm text-muted mb-8">添加产品标配配件。</div>
      <div class="grid-2">${renderFormField('配件名称','text',{placeholder:'配件名'})}${renderFormField('数量','text',{placeholder:'数量'})}</div>
      <button class="btn btn-sm btn-text">+ 添加配件</button>
    </div>
    <div class="form-section">
      <div class="form-section-title">更多信息</div>
      <div class="text-sm text-muted mb-8">选择报关信息中的产品类目后可快速加载该类目的产品属性，支持添加自定义属性。</div>
      ${renderFormField('产品属性','select',{options:['请选择产品类目加载属性','材质','长度','密度','工艺','颜色']})}
      <div class="grid-2 mt-8">
        ${renderFormField('属性名','text',{placeholder:'自定义属性名'})}
        ${renderFormField('属性值','text',{placeholder:'属性值'})}
      </div>
      <button class="btn btn-sm btn-text">+ 添加自定义属性</button>
    </div>
    <div class="form-section">
      <div class="form-section-title">附件</div>
      <div class="upload-area">📎 上传产品说明书、检测报告等附件</div>
    </div>
  `, '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn" onclick="closeDrawer();showToast(\'已保存，可继续新增\')">保存并继续新增</button><button class="btn btn-primary" onclick="closeDrawer();showToast(\'产品已创建\')">保存</button>');
}
PAGE_RENDERERS['tx-ali-product'] = () => `
  <div class="page-header">
    <h1 class="page-title">阿里商品</h1>
    <div class="page-actions">
      <label class="form-switch"><span class="switch-track on" onclick="this.classList.toggle('on')"></span> 自动匹配</label>
      <button class="btn btn-sm" onclick="openAliGenerateProduct()">生成本地产品</button>
      <button class="btn btn-sm" onclick="showToast('同步阿里商品')">同步</button>
      <div style="position:relative"><button class="btn btn-sm" onclick="toggleAliBatchMatchMenu(this)">批量匹配 ▾</button></div>
    </div>
  </div>
  <div class="alert alert-warning mb-12">⚠️ 发现 3 个疑似被删除或更改的阿里商品 <a class="text-primary">查看</a> | <a class="text-primary">全部移除</a></div>
  <div class="table-info mb-12">共 89 个阿里商品（256 个 SKU）</div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>匹配状态</option><option>已匹配</option><option>未匹配</option></select>
    <input class="filter-input" placeholder="阿里商品名称" />
    <select class="filter-select"><option>阿里店铺</option></select>
  </div>
  ${renderTable(
    ['主图','阿里产品名称/ID','阿里店铺','型号','规格数','SKU编码','最近同步','匹配的本地产品','匹配状态','操作'],
    [
      ['🖼️','Men Hair Toupee BH4L<br><span class="text-muted text-sm">ID: 1234567890</span>','Bono Hair Store','BH4L','12','BH4L-001','2026-06-20','P001','<span class="table-tag success">已匹配</span>','<button class="btn btn-sm btn-text">查看</button>'],
      ['🖼️','Lace Front Wig 22inch<br><span class="text-muted text-sm">ID: 1234567891</span>','Bono Hair Store','LFW22','8','','2026-06-20','','<span class="table-tag warning">未匹配</span>','<button class="btn btn-sm btn-text" onclick="openAliGenerateProduct()">生成本地产品</button>'],
    ],
    { checkbox: true, total: 89 }
  )}
`;

function toggleAliBatchMatchMenu(btn) { openAliBatchRangeMenu(btn); }
function openAliBatchRangeMenu(btn) {
  openModal('批量匹配 · 选择范围', '<div class="text-sm text-muted mb-12">请选择批量匹配的范围（仅适用于「未匹配」的产品）</div>' +
    '<div class="row-action-item" onclick="closeModal();openAliBatchMatchModal(\'已勾选的 0 个产品\')"><span class="row-action-icon">☑️</span> 匹配勾选中的产品</div>' +
    '<div class="row-action-item" onclick="closeModal();openAliBatchMatchModal(\'本页的产品\')"><span class="row-action-icon">📄</span> 匹配本页的产品</div>' +
    '<div class="row-action-item" onclick="closeModal();openAliBatchMatchModal(\'所有页产品\')"><span class="row-action-icon">📚</span> 匹配所有页的产品</div>',
    '<button class="btn" onclick="closeModal()">取消</button>');
}
function openAliBatchMatchModal(scope) {
  openModal('批量匹配', `
    <div class="alert alert-info mb-12">💡 建议提前在阿里国际站编辑好「SKU 商品编码」 <a class="text-primary" onclick="showToast('前往阿里国际站')">前往阿里国际站 ›</a></div>
    <div class="form-section-title">匹配范围</div>
    <div class="text-sm mb-12">已选择：${scope}</div>
    <div class="form-section-title mt-12">匹配规则</div>
    <div class="flex gap-12 mb-12" style="flex-direction:column;gap:8px">
      <label class="form-switch"><input type="radio" name="alirule" checked/> 「完整的阿里 SKU 编码」与「本地产品编号」匹配</label>
      <label class="form-switch"><input type="radio" name="alirule"/> 「忽略前缀、后缀的阿里 SKU 编码」与「本地产品编号」匹配</label>
      <label class="form-switch"><input type="radio" name="alirule"/> 「截取后的阿里 SKU 编码」与「本地产品编号」匹配</label>
    </div>
    <button class="btn btn-sm" onclick="showToast('测试匹配规则：将在未匹配商品上预览匹配结果')">🧪 测试匹配规则</button>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'已开始批量匹配（范围：'+scope+'），请等待完成\')">开始匹配</button>');
}
function openAliMatchRuleModal() {
  openModal('匹配规则配置', `
    <div class="grid-2">
      ${renderFormField('匹配字段优先级','select',{options:['主图相似 > 型号 > 规格','型号 > 规格名称','阿里商品名称包含本地产品名']})}
      ${renderFormField('图片相似度阈值','select',{options:['85%','90%','95%','99%']})}
      ${renderFormField('同店铺优先','select',{options:['是','否']})}
      ${renderFormField('匹配后是否自动建立关联','select',{options:['是','否']})}
    </div>
    <div class="form-group"><label class="form-label">排除条件</label><textarea class="form-textarea" placeholder="若商品名称包含这些词将不匹配"></textarea></div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal();showToast(\'规则已保存\')">保存</button>');
}
function openAliGenerateProduct() {
  openDrawer('生成本地产品', `
    <div class="alert alert-info mb-12">📌 已自动带入阿里商品信息：图片、型号、规格、类目等，请确认后补充本地产品信息。</div>
    <div class="form-section-title">来源商品</div>
    <div class="info-list mb-12">
      <div class="info-item"><span class="info-label">阿里商品</span><span class="info-value">Lace Front Wig 22inch (ID: 1234567891)</span></div>
      <div class="info-item"><span class="info-label">阿里店铺</span><span class="info-value">Bono Hair Store</span></div>
      <div class="info-item"><span class="info-label">型号</span><span class="info-value">LFW22</span></div>
      <div class="info-item"><span class="info-label">规格数</span><span class="info-value">8</span></div>
    </div>
    <div class="mb-12 text-sm text-muted">已自动带入主图：</div>
    <div class="upload-area" style="padding:12px;margin-bottom:12px">🖼️ [已带入阿里主图]</div>
    ${renderFormField('产品名称','text',{value:'Lace Front Wig 22inch'})}
    ${renderFormField('产品分组','select',{options:['请选择','男块','女装','辅料','未分组']})}
    ${renderFormField('产品类型','select',{options:['无规格产品','多规格产品','组合产品']})}
    <div class="text-sm text-muted mb-12">规格与类目已自动带入，可在下方调整。</div>
    <div class="grid-2">
      ${renderFormField('离岸价(USD)','text',{placeholder:'0.00'})}
      ${renderFormField('最低起订量','text',{value:'1'})}
    </div>
  `, '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast(\'本地产品已生成，并自动关联阿里商品\')">生成产品</button>');
}

// Sales Orders
PAGE_RENDERERS['tx-order'] = () => {
  const orders = [
    ['2026BONO-WPWS0011','2026BONO-WPWS0011','2026-06-18','USD 123.60','Hair World','<span class="table-tag success">交易成功</span>','已同步','已通过','Bambi','2026-06-18'],
    ['2026BONO-CCPV0088','2026BONO-CCPV0088','2026-06-15','USD 456.00','Pacific Corp','<span class="table-tag primary">待收款</span>','','待审批','Camila','2026-06-15'],
    ['2026BONO-DLBV0023','2026BONO-DLBV0023','2026-06-10','USD 789.50','Euro Supply','<span class="table-tag warning">待发货</span>','已同步','已通过','Jade','2026-06-10'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">销售订单</h1>
      <div class="page-actions">
        <button class="btn btn-sm btn-ai" onclick="showToast('AI 数据助理')">🤖 AI 数据助理</button>
        <button class="btn btn-sm" onclick="showToast('识别 PI')">识别PI</button>
        <button class="btn btn-primary" onclick="showToast('新建销售订单')">+ 新建销售订单</button>
      </div>
    </div>
    <div class="filter-bar">
      <select class="filter-select" onchange="showToast('筛选客户名称')"><option>客户名称</option><option>Hair World</option><option>Pacific Corp</option></select>
      <select class="filter-select" onchange="showToast('筛选客户简称')"><option>客户简称</option></select>
      <input class="filter-input" placeholder="订单号" />
      <input class="filter-input" placeholder="订单名称" />
      <input type="date" class="filter-input" placeholder="订单日期起" />
      <input type="date" class="filter-input" placeholder="订单日期止" />
      <input class="filter-input" placeholder="阿里订单 ID" />
      <select class="filter-select"><option>来源店铺</option></select>
      <button class="btn btn-sm btn-primary" onclick="showToast('筛选已应用')">筛选</button>
    </div>
    <div class="flex gap-8 mb-12">
      <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">全部订单</button><button class="toggle-btn" onclick="switchToggle(this)">阿里信保</button></div>
    </div>
    ${renderTabs([{label:'全部'},{label:'草稿'},{label:'待收款'},{label:'待发货'},{label:'已发货'},{label:'售后'},{label:'交易成功'},{label:'交易取消'},{label:'更多'}])}
    <div class="stat-cards mb-16">
      <div class="stat-card"><div class="stat-label">订单金额</div><div class="stat-value">USD 1,234,567</div></div>
      <div class="stat-card"><div class="stat-label">已回款金额</div><div class="stat-value">USD 987,654</div></div>
      <div class="stat-card"><div class="stat-label">待回款金额</div><div class="stat-value">USD 246,913</div></div>
      <div class="stat-card"><div class="stat-label">产品总金额</div><div class="stat-value">USD 1,100,000</div></div>
      <div class="stat-card warning"><div class="stat-label">附加费用总金额</div><div class="stat-value">USD 134,567</div></div>
    </div>
    ${renderTable(
      ['订单号','订单名称','更新日期','订单金额','客户','订单状态','ERP状态','审批状态','当前处理人','订单日期'],
      orders.map(o => [
        `<span class="table-link" onclick="navigateTo('transaction','tx-order-detail')">${o[0]}</span>`,
        o[1], o[2], o[3], `<span class="table-link">${o[4]}</span>`, o[5], o[6], o[7], o[8], o[9]
      ]),
      { checkbox: true, total: 14794 }
    )}
  `;
};

// Order Detail
PAGE_RENDERERS['tx-order-detail'] = () => `
  <div class="page-header">
    <h1 class="page-title">销售订单详情</h1>
    <div class="page-actions">
      <button class="btn" onclick="showToast('变更订单')">变更</button>
      <button class="btn" onclick="showToast('变更状态')">变更状态</button>
      <button class="btn" onclick="openOrderRelatedGenMenu()">关联生成 ▾</button>
      <button class="btn" onclick="openOrderStartTaskMenu()">发起任务 ▾</button>
      <button class="btn" onclick="showToast('更多操作 ▾')">更多 ▾</button>
    </div>
  </div>
  <div class="detail-header">
    <div class="detail-name">2026BONO-WPWS0011 <span class="table-tag success">交易成功</span></div>
    <div class="detail-meta">
      <span>订单名称: 2026BONO-WPWS0011</span>
      <span>客户: <a class="text-primary">Hair World</a></span>
      <span>订单金额: USD 123.60</span>
      <span>订单日期: 2026-06-18</span>
      <span>当前处理人: Bambi</span>
      <span>业绩归属人: Bambi</span>
      <span>业绩归属部门: 销售一组</span>
    </div>
  </div>
  <div class="stage-bar mb-16">
    <div class="stage-item done">交易成功</div>
    <div class="stage-item">待回款</div>
    <div class="stage-item">待备货</div>
    <div class="stage-item">待出运</div>
    <div class="stage-item">待出库</div>
    <div class="stage-item">待完成</div>
  </div>
  ${renderTabs(
    [
      {label:'订单详情'},{label:'回款单'},{label:'备货'},{label:'出运'},{label:'出库'},
      {label:'费用单'},{label:'相关'},{label:'操作历史'}
    ], 0, 'orderDetail')}
  <div class="card">${renderOrderDetailTab()}</div>
`;

function renderOrderDetailTab() {
  const gid = 'orderDetail';
  const panels = [
    renderOrderBasePanel(),
    renderOrderReceivablesPanel(),
    renderOrderStockPanel('备货','备货任务已生成，预计 2026-06-25 可备货完成。'),
    renderOrderStockPanel('出运','待创建出运单（含物流、箱单、订舱）。'),
    renderOrderStockPanel('出库','待销售出库，出库任务待创建。'),
    renderOrderExpensePanel(),
    renderOrderRelatedPanel(),
    renderOrderHistoryPanel(),
  ];
  return renderTabPanels(gid, panels);
}

function renderOrderBasePanel() {
  return `
    <div class="form-section-title">基本信息</div>
    <div class="grid-2">
      ${renderDetailFields([
        ['订单名称','2026BONO-WPWS0011'],['客户','Hair World'],['商机','DLBV 特单'],['联系人','Bambi'],
        ['联系人电话','+86 138-0000-0000'],['备注','客户要求 7 月初交货'],['国家地区','英国'],
        ['价格条款','FOB'],['币种','USD'],['主币种金额','USD 123.60 / CNY 834.30'],
        ['汇率','100USD = 675.771CNY'],['订单金额','USD 123.60'],['付款方式','T/T'],
        ['关联报价单','Q-20260618-01'],['采购订单数','1'],['首次回款日期','2026-06-20'],
        ['询价任务编号','PC-20260623-01'],['是否退税','是'],['订单日期','2026-06-18'],['交货期','30天'],
      ])}
    </div>
    <div class="divider"></div>
    <div class="form-section-title">银行信息</div>
    <div class="grid-2">
      ${renderDetailFields([
        ['收款银行','中国银行 深圳分行'],['收款账号','6228 4800 1234 5678 901'],
        ['SWIFT Code','BKCHCNBJ830'],['收款人','Bono Hair Intl Co., Ltd'],
        ['中间行','HSBC UK'],['账户币种','USD'],
      ])}
    </div>
    <div class="alert alert-info mt-12 mb-12 alipay-banner-card">
      <div class="flex gap-12 items-center">
        <div style="font-size:24px">💳</div>
        <div><div style="font-weight:600">Alibaba.com Pay · 在线收款</div><div class="text-sm text-muted">支持通过 Alibaba.com Pay 在线收款，资金到账更快、自动结算回款单。</div></div>
        <button class="btn btn-sm btn-primary" style="margin-left:auto" onclick="showToast('开通/关联 Alibaba.com Pay 在线收款')">立即开通</button>
      </div>
    </div>
    <div class="divider"></div>
    <div class="form-section-title">订单产品</div>
    ${renderTable(
      ['序号','产品信息','单价','数量','其他费用','包装数','描述','备注','海关编码','增值税率','退税率'],
      [['1','Men Hair Toupee BH4L<br><span class="text-muted">编号: P001 | 型号: BH4L</span>','USD 41.20','3','0','1','6*8 inches toupee','','6704200000','13%','13%']],
      {}
    )}
    <div class="flex-between mt-12" style="padding:0 16px">
      <span>产品总数量: 3</span><span>产品总金额: USD 123.60</span><span>附加费用: USD 0.00</span><span>订单金额: USD 123.60</span>
    </div>
    <div class="divider"></div>
    <div class="form-section-title">系统信息</div>
    <div class="grid-2">
      ${renderDetailFields([['创建日期','2026-06-18'],['创建人','Bambi'],['创建方式','ERP 同步'],['更新日期','2026-06-20']])}
    </div>
  `;
}
function renderOrderReceivablesPanel() {
  return renderTable(['回款单号','回款金额','币种','回款日期','回款方式','银行','状态','操作'],
    [['RC-20260620-01','50.00','USD','2026-06-20','T/T','中国银行','<span class="table-tag success">已核销</span>','<button class="btn btn-sm btn-text">查看</button>'],
     ['RC-20260720-01','73.60','USD','2026-07-20','T/T','中国银行','<span class="table-tag warning">待核销</span>','<button class="btn btn-sm btn-text">核销</button>']],
    { toolbar: '<button class="btn btn-sm btn-primary">+ 新增回款单</button><button class="btn btn-sm">登记 Alipay.com Pay</button>' });
}
function renderOrderStockPanel(title, desc) {
  return `<div class="alert alert-info mb-12">📌 ${title}：${desc}</div>${renderTable(['序号','单据编号','类型','负责人','计划日期','状态','操作'],[['1',(title==='备货'?'ST':'')+'-20260625-01',title,'Bambi','2026-06-25','<span class="table-tag warning">待处理</span>','<button class="btn btn-sm btn-primary">处理</button>']],{ toolbar: '<button class="btn btn-sm btn-primary">+ 新增'+title+'任务</button>' })}`;
}
function renderOrderExpensePanel() {
  return renderTable(['费用单号','费用类型','币种','金额','支付方式','发生日期','状态','操作'],
    [['EX-20260619-01','海运费','USD','320.00','公司垫付','2026-06-19','<span class="table-tag success">已支付</span>','<button class="btn btn-sm btn-text">查看</button>'],
     ['EX-20260622-01','手续费','USD','15.00','银行扣款','2026-06-22','<span class="table-tag warning">待支付</span>','<button class="btn btn-sm btn-text">支付</button>']],
    { toolbar: '<button class="btn btn-sm btn-primary">+ 新增费用单</button>' });
}
function renderOrderRelatedPanel() {
  return `<div class="grid-2">
    ${renderDetailFields([['关联商机','DLBV 特单'],['关联报价单','Q-20260618-01'],['采购订单','PO-20260623-01'],['出运单','待创建'],['关联线索','John Smith'],['关联客户','Hair World']])}
  </div>`;
}
function renderOrderHistoryPanel() {
  return `<div class="timeline">${(
    [['2026-06-20 14:30','Bambi','登记回款 RC-20260620-01 · USD 50.00'],
     ['2026-06-18 15:00','系统','订单创建（ERP 同步）'],
     ['2026-06-18 14:00','Bambi','提交审批']].map(h => `<div class="timeline-item"><div class="tl-time">${h[0]}</div><div class="tl-title">${h[1]}</div><div class="tl-desc">${h[2]}</div></div>`).join('')
  )}</div>`;
}

function openOrderRelatedGenMenu() {
  const opts = ['生成报价单','生成采购订单','生成出运单','生成回款单','生成费用单'];
  openModal('关联生成', '<div class="text-sm text-muted mb-12">从该销售订单关联生成以下单据：</div>' +
    opts.map(o => `<div class="row-action-item" onclick="closeModal();showToast('${o}')"><span class="row-action-icon">📄</span> ${o}</div>`).join(''),
    '<button class="btn" onclick="closeModal()">取消</button>');
}
function openOrderStartTaskMenu() {
  openModal('发起任务', '<div class="text-sm text-muted mb-12">从该订单发起任务：</div>' +
    `<div class="row-action-item" onclick="closeModal();showToast('发起备货任务')"><span class="row-action-icon">📦</span> 备货任务</div>` +
    `<div class="row-action-item" onclick="closeModal();showToast('发起出运任务')"><span class="row-action-icon">🚚</span> 出运任务</div>` +
    `<div class="row-action-item" onclick="closeModal();showToast('发起出库任务')"><span class="row-action-icon">📤</span> 出库任务</div>` +
    `<div class="row-action-item" onclick="closeModal();showToast('发起采购任务')"><span class="row-action-icon">🛒</span> 采购任务</div>`,
    '<button class="btn" onclick="closeModal()">取消</button>');
}

PAGE_RENDERERS['tx-alipay'] = () => `
  <div class="page-header">
    <h1 class="page-title">Alibaba.com Pay</h1>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="showToast('资金账户流水')">流水</button>
      <button class="btn btn-sm" onclick="showToast('导出记录')">导出</button>
      <button class="btn btn-primary" onclick="showToast('开通 Alibaba.com Pay')">开通收款</button>
    </div>
  </div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">账户余额 (USD)</div><div class="stat-value">86,420</div><div class="stat-sub">可用余额 86,420 · 冻结 0</div></div>
    <div class="stat-card success"><div class="stat-label">累计收款</div><div class="stat-value">524,318</div></div>
    <div class="stat-card warning"><div class="stat-label">待结算</div><div class="stat-value">12,800</div></div>
    <div class="stat-card"><div class="stat-label">累计提现</div><div class="stat-value">425,098</div></div>
  </div>
  ${renderTabs([{label:'收款记录'},{label:'支付记录'},{label:'提现记录'}], 0, 'aliPay')}
  ${renderTabPanels('aliPay', [
    renderTable(['交易单号','订单号','客户','收款金额','币种','到账时间','手续费','结算状态','操作'],
      [['AP-20260620-001','2026BONO-WPWS0011','Hair World','50.00','USD','2026-06-20 10:25','0.30','<span class="table-tag success">已结算</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['AP-20260705-008','2026BONO-SFYC0032','Sunrise Exports','1,200.00','USD','2026-07-05 16:40','7.20','<span class="table-tag warning">待结算</span>','<button class="btn btn-sm btn-text">结算</button>']],
      { checkbox:true, total: 326 }),
    renderTable(['支付单号','采购订单','供应商','支付金额','币种','支付时间','手续费','状态','操作'],
      [['PR-20260621-005','PO-20260623-01','供应商 A','3,200.00','CNY','2026-06-21 09:10','16.00','<span class="table-tag success">已支付</span>','<button class="btn btn-sm btn-text">查看</button>']],
      { checkbox:true, total: 48 }),
    renderTable(['提现单号','提现金额','币种','目标账户','申请时间','到账时间','手续费','状态','操作'],
      [['WD-20260618-002','20,000','USD','中国银行 ****901','2026-06-18 11:00','2026-06-19 10:00','25.00','<span class="table-tag success">已到账</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['WD-20260701-005','10,000','USD','中国银行 ****901','2026-07-01 14:30','--','10.00','<span class="table-tag warning">处理中</span>','<button class="btn btn-sm btn-text">查看</button>']],
      { checkbox:true, total: 92 }),
  ])}
`;

// ===== 9. Team Data / 团队数据模块 =====
PAGE_RENDERERS['td-completion'] = () => `
  <div class="page-header"><h1 class="page-title">目标完成情况</h1></div>
  <div class="filter-bar mb-16">
    <select class="filter-select"><option>本月</option><option>本周</option><option>本季度</option><option>本年</option></select>
    <select class="filter-select"><option>我的企业</option><option>业务部</option><option>业务开发一组</option></select>
    <button class="btn btn-sm">下载Excel</button>
  </div>
  <div class="toggle-group mb-16"><button class="toggle-btn active" onclick="switchToggle(this)">结果目标</button><button class="toggle-btn" onclick="switchToggle(this)">过程目标</button></div>
  <div class="stat-cards mb-16">
    ${[
      {label:'成交订单金额',value:'¥125,800',goal:'¥180,000',rate:'70%',flag:'progress'},
      {label:'赢单商机金额',value:'¥89,500',goal:'¥120,000',rate:'75%',flag:'progress'},
      {label:'每日赢单目标完成率',value:'45%',goal:'100%',rate:'45%',flag:'progress'},
      {label:'新建商机数',value:'23',goal:'--',rate:'--',flag:'none'},
    ].map(s => `
      <div class="stat-card">
        <div class="stat-label">${s.label} <a class="text-primary text-sm">规则</a></div>
        <div class="stat-value">${s.value}</div>
        <div class="stat-sub">目标值: ${s.goal} · 完成率: ${s.rate}</div>
        ${s.flag==='progress' ? '<div class="text-xs text-warning">⚠ 进度预警</div>' : s.flag==='done' ? '<div class="text-xs text-success">✓ 已达标</div>' : '<div class="text-xs text-muted">未设定目标值</div>'}
      </div>
    `).join('')}
  </div>
  <div class="toggle-group mb-12"><button class="toggle-btn active" onclick="switchToggle(this)">排行榜</button><button class="toggle-btn" onclick="switchToggle(this)">趋势图</button></div>
  <div class="card mb-16">
    <div class="card-title">部门排行榜</div>
    <div class="text-xs text-muted mb-8">已达标 / 进度预警 / 无数据 的目标值和完成率</div>
    ${renderTable(
      ['排名','部门','成交订单金额','赢单商机金额','每日赢单完成率','新建商机数','状态'],
      [
        ['🥇','业务开发一组','45,200 / 50,000 / 90%','32,100 / 40,000 / 80%','80% / 100% / 80%','8 / 10 / 80%','<span class="table-tag warning">进度预警</span>'],
        ['🥈','业务维护一组','38,900 / 35,000 / 111%','28,500 / 30,000 / 95%','95% / 100% / 95%','6 / 8 / 75%','<span class="table-tag success">已达标</span>'],
        ['🥉','业务开发二组','25,700 / -- / --','18,900 / -- / --','-- / -- / --','5 / -- / --','<span class="table-tag">无数据</span>'],
        ['4','业务维护二组','16,000 / 20,000 / 80%','10,400 / 15,000 / 69%','69% / 100% / 69%','4 / 6 / 67%','<span class="table-tag warning">进度预警</span>'],
      ],
      { total: 4 }
    )}
  </div>
  <div class="card">
    <div class="card-title">成员排行榜</div>
    ${renderTable(
      ['排名','成员','部门','成交订单金额','赢单商机金额','新建商机数','状态'],
      [
        ['🥇','Bambi','业务开发一组','¥45,200','¥32,100','8','<span class="table-tag success">已达标</span>'],
        ['🥈','Camila','业务维护一组','¥38,900','¥28,500','6','<span class="table-tag success">已达标</span>'],
        ['🥉','Jade','业务开发二组','¥25,700','¥18,900','5','<span class="table-tag">无数据</span>'],
        ['4','Amy','业务维护二组','¥16,000','¥10,400','4','<span class="table-tag warning">进度预警</span>'],
      ],
      { total: 4 }
    )}
  </div>
`;

PAGE_RENDERERS['td-manage'] = () => `
  <div class="page-header">
    <h1 class="page-title">目标管理</h1>
    <div class="page-actions">
      <button class="btn btn-sm">目标起始月份</button>
      <button class="btn btn-sm" onclick="navigateTo('team-data','td-completion')">目标完成情况</button>
      <button class="btn btn-primary" onclick="openNewGoalModal()">+ 新建目标</button>
    </div>
  </div>
  <div class="alert alert-info mb-16">💡 设置过程/结果目标后，系统可自动分析完成进度</div>
  <div class="card mb-16">
    <div class="flex-between mb-12"><div class="card-title mb-0">我的目标</div><div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">结果目标</button><button class="toggle-btn" onclick="switchToggle(this)">过程目标</button></div></div>
    ${renderTable(
      ['目标名称','目标类型','统计方式','目标周期','目标值','当前完成','完成率','状态'],
      [
        ['成交订单金额','结果目标','以订单结算','2026-06','¥180,000','¥125,800','70%','<span class="table-tag warning">进行中</span>'],
        ['赢单商机金额','结果目标','以商机结算','2026-06','¥120,000','¥89,500','75%','<span class="table-tag warning">进行中</span>'],
        ['新建客户数','过程目标','自动统计','2026-06','30','18','60%','<span class="table-tag warning">进行中</span>'],
        ['发送邮件数','过程目标','自动统计','2026-06','500','432','86%','<span class="table-tag warning">进行中</span>'],
      ],
      { total: 4 }
    )}
  </div>
  <div class="card-title mb-12">目标设置模版</div>
  <div class="toggle-group mb-12"><button class="toggle-btn active" onclick="switchToggle(this)">结果目标模版</button><button class="toggle-btn" onclick="switchToggle(this)">过程目标模版</button></div>
  <div class="grid-3">
    ${[
      {name:'成交订单金额',cat:'成交金额',desc:'以订单结算'},
      {name:'订单毛利',cat:'成交金额',desc:'以订单结算'},
      {name:'成交新客户订单金额',cat:'成交金额',desc:'以订单结算'},
      {name:'复购客户数',cat:'客户数',desc:'以客户结算'},
      {name:'成交客户数',cat:'客户数',desc:'以客户结算'},
      {name:'首次成交客户数',cat:'客户数',desc:'以客户结算'},
      {name:'成交订单数',cat:'订单数',desc:'以订单结算'},
      {name:'大额订单数',cat:'订单数',desc:'以订单结算'},
      {name:'已回款的订单数',cat:'订单数',desc:'以回款单结算'},
    ].map(t =>
      `<div class="card" style="border:1px solid var(--border-light);cursor:pointer">
        <div class="text-xs text-muted mb-4">${t.cat}</div>
        <div class="text-bold mb-4">${t.name}</div>
        <div class="text-sm text-muted mb-8">${t.desc}</div>
        <button class="btn btn-sm btn-text" onclick="openNewGoalModal('${t.name}')">使用此模板创建目标</button>
      </div>`
    ).join('')}
  </div>
`;

function openNewGoalModal(tplName) {
  openModal('新建目标', `
    ${renderFormField('目标名称', 'text', {value: tplName || '', placeholder:'目标名称'})}
    <div class="form-row">
      ${renderFormField('目标类型', 'select', {options:['结果目标','过程目标']})}
      ${renderFormField('统计方式', 'select', {options:['以订单结算','以商机结算','以回款单结算','自动统计']})}
    </div>
    <div class="form-row">
      ${renderFormField('目标周期', 'select', {options:['日度','周度','月度','季度','年度']})}
      ${renderFormField('适用范围', 'select', {options:['全部门','业务部','业务开发一组','指定成员']})}
    </div>
    <div class="form-row">
      ${renderFormField('目标值', 'text', {placeholder:'请输入目标值'})}
      ${renderFormField('目标起始月份', 'month', {value:'2026-06'})}
    </div>
    ${renderFormField('备注', 'textarea', {placeholder:'目标说明...'})}
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>');
}

PAGE_RENDERERS['td-wall'] = () => `
  <div class="page-header">
    <h1 class="page-title">团队墙</h1>
    <div class="page-actions">
      <select class="filter-select"><option>本季度</option><option>本月</option><option>本年</option></select>
      <button class="btn btn-sm" onclick="navigateTo('enterprise','ent-goal-mgmt')">目标设置</button>
      <button class="btn btn-sm">刷新</button>
      <button class="btn btn-sm">组件配置</button>
    </div>
  </div>
  <div class="stat-cards mb-16">
    <div class="stat-card stat-card-ai">
      <div style="font-size:14px;opacity:.9">⏱ 离本月结束还剩</div>
      <div style="font-size:28px;font-weight:700;margin:8px 0">9 天</div>
      <div style="font-size:12px;opacity:.8">${new Date().toLocaleDateString('zh-CN')}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">成交订单金额</div>
      <div class="stat-value">¥125,800</div>
      <div class="stat-sub">完成值 / 目标 ¥180,000</div>
      <div class="progress-bar mt-8"><div class="progress-fill" style="width:70%;background:var(--primary)"></div></div>
      <div class="text-xs text-muted mt-4">完成率 70%</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">赢单商机金额</div>
      <div class="stat-value">¥89,500</div>
      <div class="stat-sub">完成值 / 目标 ¥120,000</div>
      <div class="progress-bar mt-8"><div class="progress-fill" style="width:75%;background:var(--success)"></div></div>
      <div class="text-xs text-muted mt-4">完成率 75%</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">新建客户数</div>
      <div class="stat-value">18</div>
      <div class="stat-sub">完成值 / 目标 30</div>
      <div class="progress-bar mt-8"><div class="progress-fill" style="width:60%;background:var(--warning)"></div></div>
      <div class="text-xs text-muted mt-4">完成率 60%</div>
    </div>
  </div>
  <div class="grid-2 mb-16">
    <div class="card">
      <div class="card-title">成交订单金额排行榜 🏆</div>
      ${['Bambi - ¥45,200','Camila - ¥38,900','Jade - ¥25,700','Amy - ¥16,000'].map((r, i) => {
        const [name, val] = r.split(' - ');
        const pct = [100,86,57,36][i];
        return `<div style="padding:8px 0;border-bottom:1px solid var(--border-light)">
          <div class="flex-between mb-4"><span>${['🥇','🥈','🥉','4️⃣'][i]} ${name}</span><span class="text-bold">${val}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
        </div>`;
      }).join('')}
    </div>
    <div class="card">
      <div class="card-title">客户邮件发送数排行榜 📧</div>
      ${['Camila - 156','Bambi - 134','Jade - 98','Amy - 67'].map((r, i) => {
        const [name, val] = r.split(' - ');
        const pct = [100,86,63,43][i];
        return `<div style="padding:8px 0;border-bottom:1px solid var(--border-light)">
          <div class="flex-between mb-4"><span>${['🥇','🥈','🥉','4️⃣'][i]} ${name}</span><span class="text-bold">${val}</span></div>
          <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:var(--success)"></div></div>
        </div>`;
      }).join('')}
    </div>
  </div>
  <div class="grid-3 mb-16">
    <div class="stat-card"><div class="stat-label">营销发件数</div><div class="stat-value">234</div></div>
    <div class="stat-card"><div class="stat-label">新建客户数</div><div class="stat-value">18</div></div>
    <div class="stat-card"><div class="stat-label">新建销售订单数</div><div class="stat-value">12</div></div>
  </div>
  <div class="card">
    <div class="card-title">业务新建商机数排名情况</div>
    <div class="chart-placeholder" style="min-height:200px">📊 柱状图：Bambi 8 / Camila 6 / Jade 5 / Amy 4 / 其他 3</div>
  </div>
`;

PAGE_RENDERERS['td-ai-monitor'] = () => `
  <div class="page-header"><h1 class="page-title">AI 数据监测</h1></div>
  <div class="card mb-16">
    <div class="flex-between">
      <div><div class="card-title mb-0">🤖 AI 数据助理</div><div class="text-sm text-muted">AI智能监测您的数据变化，利用大模型技术多视角监测数据差异</div></div>
    </div>
    <div class="divider"></div>
    <div class="card-title">推荐问题</div>
    <div class="grid-2">
      ${['今年销售订单总金额是多少？','哪些客户需要重点跟进？','今年赢单商机金额 Top10 客户','本月新增客户来源分布','各销售阶段商机转化率','哪些业务员本周邮件回复最慢？'].map(q =>
        `<div class="tree-item" style="border:1px solid var(--border-light);border-radius:var(--radius);margin-bottom:4px;cursor:pointer">${q}</div>`
      ).join('')}
    </div>
  </div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" />
    <select class="filter-select"><option>全部主题</option><option>客户跟进提醒</option><option>新增客户情况</option><option>私海客户分布情况</option><option>商机输单原因分析</option></select>
    <label class="form-switch"><input type="checkbox" /> 只看未读</label>
    <button class="btn btn-sm">设置监测人员范围</button>
  </div>
  ${[
    {date:'2026-06-21',topic:'客户跟进提醒',title:'本周有 15 位客户超过 7 天未联系',desc:'建议尽快跟进以下高价值客户：SWISS HAIR CLUB（83天未联系）、Bono Hair（14天未联系）...',sug:'行动建议：对 83 天未联系的高价值客户优先发送产品更新邮件；对 14 天未联系客户安排电话回访。',risk:'风险提示：长时间未联系可能导致客户流失到竞品。', unread:true},
    {date:'2026-06-20',topic:'新增客户情况',title:'昨日新增 3 位客户，较上周日均增长 50%',desc:'新客户主要来源：官网询盘 2 位、社媒 1 位。建议重点关注官网渠道效果。',sug:'行动建议：加大对官网询盘页面的 SEO 投入；对新增客户 24h 内完成首次建联。',risk:'', unread:true},
    {date:'2026-06-19',topic:'商机输单原因分析',title:'本月输单商机 8 个，主要原因为价格不匹配',desc:'价格不匹配占比 62.5%，建议调整报价策略。客户未回复占比 25%，建议加强跟进频率。',sug:'行动建议：梳理报价模板，针对价格敏感客户预留议价空间。',risk:'风险提示：价格不匹配持续偏高可能反映定价策略与市场脱节。', unread:false},
    {date:'2026-06-18',topic:'私海客户分布情况',title:'业务员 Bambi 私海客户数达 218，超出合理上限',desc:'建议将长期未成交客户转入公海，释放跟进精力。',sug:'行动建议：批量筛选 90 天未联系私海客户，转入公海池。',risk:'', unread:false},
  ].map(c => `
    <div class="card mb-12" style="border-left:3px solid ${c.unread ? 'var(--primary)' : 'var(--border)'}">
      <div class="flex-between mb-8">
        <div class="flex gap-8"><span class="text-sm text-muted">${c.date}</span><span class="table-tag primary">${c.topic}</span>${c.unread ? '<span class="table-tag danger">未读</span>' : ''}</div>
        <div><button class="btn btn-sm btn-text">查看详情</button><button class="btn btn-sm btn-text">忽略</button></div>
      </div>
      <div class="text-bold mb-4">${c.title}</div>
      <div class="text-sm text-muted mb-8">${c.desc}</div>
      <div class="text-sm text-primary">💡 ${c.sug}</div>
      ${c.risk ? `<div class="text-sm mt-4 text-danger">⚠ ${c.risk}</div>` : ''}
    </div>
  `).join('')}
  <div class="card">
    <div class="card-title mb-8">历史监测记录</div>
    ${renderTable(['日期','监测主题','摘要','状态','操作'],
      [['2026-06-15','客户跟进提醒','12 位客户超过 14 天未联系','<span class="table-tag">已读</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['2026-06-10','商机输单原因分析','上月输单 6 个，价格不匹配占 55%','<span class="table-tag">已读</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['2026-06-05','新增客户情况','上周日均新增 1.5 位客户','<span class="table-tag">已读</span>','<button class="btn btn-sm btn-text">查看</button>']],
      {total:18})}
  </div>
`;

PAGE_RENDERERS['td-ai-analysis'] = () => `
  <div class="page-header"><h1 class="page-title">AI 数据分析</h1></div>
  <div class="card mb-16">
    <div class="flex-between">
      <div><div class="card-title mb-0">🤖 AI 数据助理</div><div class="text-sm text-muted">您可以问邮件、线索、客户、商机、订单相关的问题</div></div>
    </div>
    <div class="divider"></div>
    <div class="card-title">分析范围</div>
    <div class="flex gap-8 mb-12">
      <select class="filter-select"><option>全部数据</option><option>我的数据</option><option>本部门</option></select>
      <select class="filter-select"><option>本月</option><option>本季度</option><option>本年</option><option>自定义</option></select>
    </div>
    <div class="card-title">推荐问题</div>
    <div class="grid-2">
      ${['上个月各员工发送了多少封邮件？','本月新建线索数量趋势如何？','近3个月客户来源分布','各销售阶段的商机转化率','本季度订单金额排行','不同地区客户的成交率对比'].map(q =>
        `<div class="tree-item" style="border:1px solid var(--border-light);border-radius:var(--radius);margin-bottom:4px;cursor:pointer">${q}</div>`
      ).join('')}
    </div>
    <div class="card-title mt-12">提问攻略</div>
    <div class="text-sm text-muted">建议包含时间范围、对象、指标三个要素，例如"本季度各部门成交订单金额对比"。可叠加维度细分到成员、地区、来源等。</div>
    <div class="divider"></div>
    <div class="flex gap-8">
      <input class="filter-input flex-1" placeholder="输入您的分析问题..." />
      <button class="btn btn-primary">生成分析</button>
    </div>
  </div>
  <div class="card mb-16">
    <div class="card-title mb-8">历史分析</div>
    ${renderTable(['提问时间','分析问题','分析范围','操作'],
      [['2026-06-20 15:30','本季度各部门成交订单金额对比','本季度 · 全部门','<button class="btn btn-sm btn-text">查看</button>'],
       ['2026-06-18 10:12','近3个月客户来源分布','近3个月 · 我的数据','<button class="btn btn-sm btn-text">查看</button>'],
       ['2026-06-15 09:45','各销售阶段的商机转化率','本月 · 本部门','<button class="btn btn-sm btn-text">查看</button>']],
      {total:12})}
  </div>
  <div class="flex-between">
    <button class="btn">退出</button>
    <button class="btn btn-primary">生成分析</button>
  </div>
`;

PAGE_RENDERERS['td-ai-quality'] = () => `
  <div class="page-header"><h1 class="page-title">AI 批量质检</h1><div class="page-actions"><button class="btn btn-primary" onclick="openNewQcTaskModal()">+ 新建质检任务</button></div></div>
  <div class="alert alert-info mb-12">💡 AI 自动质检邮件沟通质量，帮助管理者发现问题并提升团队服务水平</div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">待质检邮件</div><div class="stat-value">234</div></div>
    <div class="stat-card"><div class="stat-label">已质检邮件</div><div class="stat-value">1,890</div></div>
    <div class="stat-card"><div class="stat-label">问题邮件</div><div class="stat-value text-danger">45</div></div>
    <div class="stat-card"><div class="stat-label">平均质量评分</div><div class="stat-value">8.2</div></div>
  </div>
  ${renderTabs([{label:'全部'},{label:'待质检'},{label:'已通过'},{label:'有问题'}])}
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部执行人</option><option>Bambi</option><option>Camila</option><option>Jade</option></select>
    <select class="filter-select"><option>全部问题类型</option><option>回复不及时</option><option>缺少报价细节</option><option>用语不当</option></select>
    <input class="filter-input" type="date" />
    <button class="btn btn-sm">批量复核</button>
  </div>
  ${renderTable(['邮件主题','发件人','收件人','发送时间','质检评分','问题类型','状态','操作'],
    [['Re: Product Inquiry','Bambi','john@buyer.com','2026-06-20','9.2','--','<span class="table-tag success">通过</span>','<button class="btn btn-sm btn-text" onclick="openQcDetailModal(\'Re: Product Inquiry\')">详情</button>'],
     ['Price Quotation','Camila','info@trade.de','2026-06-19','6.5','回复不及时、缺少报价细节','<span class="table-tag danger">有问题</span>','<button class="btn btn-sm btn-text" onclick="openQcDetailModal(\'Price Quotation\')">复核</button>'],
     ['Sample Order Confirm','Jade','buyer@mall.us','2026-06-18','8.8','--','<span class="table-tag success">通过</span>','<button class="btn btn-sm btn-text" onclick="openQcDetailModal(\'Sample Order Confirm\')">详情</button>'],
     ['Order Delay Notice','Amy','client@abc.com','2026-06-17','5.8','用语不当、缺少歉意','<span class="table-tag danger">有问题</span>','<button class="btn btn-sm btn-text" onclick="openQcDetailModal(\'Order Delay Notice\')">复核</button>']],
    {total:234})}
`;

function openNewQcTaskModal() {
  openModal('新建质检任务', `
    <div class="alert alert-info mb-12">💡 选择质检范围后，AI 将自动对范围内的邮件进行质量评估</div>
    ${renderFormField('任务名称', 'text', {placeholder:'质检任务名称'})}
    ${renderFormField('任务范围', 'select', {options:['全部业务员','指定业务员','指定部门']})}
    <div class="form-row">
      ${renderFormField('质检时间范围', 'select', {options:['最近7天','最近30天','本月','自定义']})}
      ${renderFormField('质检维度', 'select', {options:['全部维度','回复时效','报价完整性','沟通语气','专业度']})}
    </div>
    ${renderFormField('最低合格评分', 'select', {options:['6.0','7.0','8.0','9.0']})}
    <div class="text-sm text-muted">将自动质检范围内的 234 封邮件，预计耗时约 5 分钟。</div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">开始质检</button>');
}

function openQcDetailModal(subject) {
  openModal('质检详情 — ' + subject, `
    <div class="info-list">
      <div class="info-item"><span class="info-label">邮件主题</span><span class="info-value">${subject}</span></div>
      <div class="info-item"><span class="info-label">发件人</span><span class="info-value">Camila</span></div>
      <div class="info-item"><span class="info-label">收件人</span><span class="info-value">info@trade.de</span></div>
      <div class="info-item"><span class="info-label">发送时间</span><span class="info-value">2026-06-19</span></div>
      <div class="info-item"><span class="info-label">质检评分</span><span class="info-value text-danger">6.5 / 10</span></div>
      <div class="info-item"><span class="info-label">问题类型</span><span class="info-value">回复不及时、缺少报价细节</span></div>
    </div>
    <div class="divider"></div>
    <div class="card-title mb-8">AI 质检分析</div>
    <div class="text-sm text-muted mb-8">该邮件在客户询盘后 48 小时才回复，超出 24h 标准时效；报价内容缺少运费、交期与最小起订量等关键信息，可能影响客户决策。</div>
    <div class="card-title mb-8">改进建议</div>
    <div class="text-sm text-muted">建议在询盘 24h 内首次回复；报价单补充 FOB 价、MOQ、交期、付款方式；开头增加客户称呼，结尾增加 CTA。</div>
    <div class="divider"></div>
    ${renderFormField('复核结论', 'select', {options:['确认问题','误报 · 标记为通过']})}
    ${renderFormField('复核备注', 'textarea', {placeholder:'复核说明...'})}
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">提交复核</button>');
}

PAGE_RENDERERS['td-report'] = () => {
  const tabs = [
    {label:'客户报表'},
    {label:'商机报表'},
    {label:'邮件报表'},
    {label:'订单报表'},
    {label:'产品报表'},
  ];
  const reports = {
    '客户报表': {chart:'📈 折线图：客户新增趋势（本月日均 0.6 → 上月 0.4）',metrics:[['新增客户',18,'↑ 50%'],['活跃客户',156,'↑ 8%'],['流失客户',3,'↓ 25%'],['成交客户',42,'↑ 12%']],detail:['排名','成员','新增客户','活跃客户','成交客户','成交率']},
    '商机报表': {chart:'🔻 漏斗图：商机阶段分布（线索 320 → 需求确认 180 → 谈判 95 → PI 52 → 赢单 38）',metrics:[['商机总数',320,''],['赢单商机',38,'11.9%'],['输单商机',24,'7.5%'],['平均成交周期','45 天','']],detail:['阶段','商机数','转化率','赢单数','输单数','平均停留天数']},
    '邮件报表': {chart:'📊 柱状图：邮件收发统计（发送 432 / 收到 286 / 回复率 66%）',metrics:[['发送邮件',432,''],['收到邮件',286,''],['回复率',66,'%'],['平均回复时长','6.2h','']],detail:['排名','成员','发送数','收到数','回复率','平均回复时长']},
    '订单报表': {chart:'📈 折线图：订单金额趋势（Q1 ¥312K → Q2 ¥458K）',metrics:[['订单总数',87,''],['订单金额','¥1.28M',''],['回款金额','¥986K','77%'],['待回款金额','¥294K','23%']],detail:['排名','成员','订单数','订单金额','已回款','待回款']},
    '产品报表': {chart:'📊 柱状图：产品销量 Top10',metrics:[['在售产品',256,''],['被询盘产品',89,''],['成交产品',42,''],['热销产品',12,'']],detail:['排名','产品','询盘次数','报价次数','成交次数','成交金额']},
  };
  const detailRows = {
    '客户报表': [['1','Bambi','6','52','15','29%'],['2','Camila','5','48','12','25%'],['3','Jade','4','38','9','24%'],['4','Amy','3','18','6','33%']],
    '商机报表': [['线索',320,'56%','--','--','12'],['需求确认',180,'53%','--','--','18'],['谈判报价',95,'55%','--','--','24'],['PI',52,'73%','--','--','15'],['赢单',38,'--','38','--','30'],['输单',24,'--','--','24','20']],
    '邮件报表': [['1','Bambi','134','96','72%','4.2h'],['2','Camila','156','108','69%','5.8h'],['3','Jade','98','62','63%','7.5h'],['4','Amy','44','20','45%','12.1h']],
    '订单报表': [['1','Bambi','24','¥45,200','¥38,200','¥7,000'],['2','Camila','21','¥38,900','¥31,500','¥7,400'],['3','Jade','18','¥25,700','¥18,900','¥6,800'],['4','Amy','12','¥16,000','¥10,000','¥6,000']],
    '产品报表': [['1','Toupee System HD','68','42','18','¥86,400'],['2','Men Hairpiece','52','38','15','¥45,000'],['3','Toupee Sample','45','28','12','¥9,600'],['4','Women Wig','32','22','8','¥24,000']],
  };
  return `
    <div class="page-header">
      <h1 class="page-title">系统报表</h1>
      <div class="page-actions">
        <span class="text-sm text-muted">数据更新于 2026-06-21 09:00</span>
        <button class="btn btn-sm">🔄 刷新</button>
        <button class="btn btn-sm">订阅</button>
        <button class="btn btn-sm btn-ai">🤖 AI 数据助理</button>
      </div>
    </div>
    ${renderTabs(tabs, 0, 'tdReport')}
    <div id="tdReport_panels">
      ${renderTabPanels('tdReport', tabs.map((t, idx) => {
        const r = reports[t.label];
        return `<div class="filter-bar mb-12">
          <select class="filter-select"><option>本月</option><option>本季度</option><option>本年</option><option>自定义</option></select>
          <select class="filter-select"><option>全部成员</option><option>本部门</option></select>
          <button class="btn btn-sm">导出Excel</button>
          <button class="btn btn-sm">报表详情</button>
        </div>
        <div class="stat-cards mb-16">
          ${r.metrics.map(m => `<div class="stat-card"><div class="stat-label">${m[0]}</div><div class="stat-value">${m[1]}</div><div class="stat-sub">${m[2]}</div></div>`).join('')}
        </div>
        <div class="card mb-16">
          <div class="card-title">${t.label} · 图表区</div>
          <div class="chart-placeholder" style="min-height:220px">${r.chart}</div>
        </div>
        <div class="card">
          <div class="card-title">${t.label} · 明细</div>
          ${renderTable(r.detail, detailRows[t.label], {total: detailRows[t.label].length})}
        </div>`;
      }))}
    </div>
  `;
};

PAGE_RENDERERS['td-follow-dynamics'] = () => `
  <div class="page-header">
    <h1 class="page-title">跟进动态</h1>
    <div class="page-actions"><button class="btn btn-primary" onclick="openWriteFollowDrawer()">+ 写跟进</button></div>
  </div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部成员</option><option>Bambi</option><option>Camila</option><option>Jade</option></select>
    <select class="filter-select"><option>全部类型</option><option>邮件</option><option>跟进记录</option><option>WhatsApp</option><option>TM</option></select>
    <input class="filter-input" type="date" />
  </div>
  <div class="toggle-group mb-12">
    <button class="toggle-btn active" onclick="switchToggle(this)">全部</button>
    <button class="toggle-btn" onclick="switchToggle(this)">今日</button>
    <button class="toggle-btn" onclick="switchToggle(this)">本周</button>
    <button class="toggle-btn" onclick="switchToggle(this)">本月</button>
  </div>
  <div class="timeline">
    ${[{time:'2026-06-21 14:30',user:'Bambi',type:'邮件',desc:'发送邮件给 john@buyer.com，主题: Re: Product Catalog'},
       {time:'2026-06-21 11:20',user:'Camila',type:'跟进记录',desc:'跟进 SWISS HAIR CLUB，客户确认需要500pcs toupee样品'},
       {time:'2026-06-21 09:45',user:'Jade',type:'WhatsApp',desc:'与 Ahmed Khan 沟通订单细节，客户要求修改发货地址'},
       {time:'2026-06-20 16:00',user:'Bambi',type:'邮件',desc:'收到 info@trade.de 的回复，确认价格并要求PI'},
       {time:'2026-06-20 14:15',user:'Camila',type:'跟进记录',desc:'电话沟通 Pacific Corp，对方表示Q3有批量采购计划'}
    ].map(d => `<div class="timeline-item"><div class="tl-time">${d.time}</div><div class="tl-title">${d.user} · <span class="table-tag primary">${d.type}</span></div><div class="tl-desc">${d.desc}</div></div>`).join('')}
  </div>
`;

function openWriteFollowDrawer() {
  openDrawer('写跟进', `
    ${renderFormField('跟进对象', 'text', {placeholder:'搜索关联客户/线索/商机'})}
    ${renderFormField('跟进方式', 'select', {options:['电话','邮件','WhatsApp','TM','拜访','其他']})}
    ${renderFormField('跟进时间', 'datetime', {value:'2026-06-21 14:30'})}
    <div class="form-section">
      <div class="form-section-title">跟进内容</div>
      <div class="flex gap-8 mb-8">
        <button class="btn btn-sm btn-ai" onclick="showToast('AI 已根据近期沟通生成跟进内容')">🤖 AI 写跟进</button>
        <select class="filter-select" onchange="showToast('已套用模板：'+this.value)"><option>选择跟进模板</option><option>询盘首次跟进</option><option>报价后跟进</option><option>样品确认跟进</option><option>催单跟进</option></select>
      </div>
      <textarea class="form-textarea" placeholder="请输入跟进内容..." style="min-height:120px"></textarea>
    </div>
    ${renderFormField('下次跟进时间', 'datetime', {})}
    ${renderFormField('提醒方式', 'select', {options:['不提醒','系统提醒','钉钉提醒']})}
  `, '<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer()">保存</button>');
}


PAGE_RENDERERS['td-subordinate'] = () => `
  <div class="page-header"><h1 class="page-title">下属单页</h1></div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>选择员工</option><option>Bambi</option><option>Camila</option><option>Jade</option><option>Amy</option></select>
    <select class="filter-select"><option>本月</option><option>本周</option><option>本季度</option></select>
  </div>
  <div class="card mb-16">
    <div class="flex gap-16 mb-12">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--primary);color:#fff;display:flex;align-items:center;justify-content:center;font-size:24px">B</div>
      <div><div class="text-bold" style="font-size:16px">Bambi</div><div class="text-sm text-muted">业务开发一组 · 高级业务员</div><div class="text-sm text-muted mt-12">入职时间: 2023-06-15 · 工龄: 3年</div></div>
    </div>
  </div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">本月客户邮件数</div><div class="stat-value">134</div></div>
    <div class="stat-card"><div class="stat-label">本月跟进记录</div><div class="stat-value">28</div></div>
    <div class="stat-card"><div class="stat-label">本月成交订单</div><div class="stat-value">5</div></div>
    <div class="stat-card"><div class="stat-label">本月成交金额</div><div class="stat-value">¥45,200</div></div>
  </div>
  <div class="grid-2">
    <div class="card"><div class="card-title">客户分布</div><div class="chart-placeholder">客户地区分布图</div></div>
    <div class="card"><div class="card-title">业绩趋势</div><div class="chart-placeholder">月度业绩趋势图</div></div>
  </div>
`;

// Work Report
PAGE_RENDERERS['td-work-report'] = () => {
  const tabs = [
    {label:'我收到的'},
    {label:'我提交的'},
    {label:'团队提交的'},
    {label:'系统推送报告'},
    {label:'报告提交统计'},
    {label:'工作报告模版'},
  ];
  const panelReceived = `<div class="flex-between mb-12">
      <div class="flex gap-8">
        <label class="form-switch"><input type="checkbox" /> 只看未读</label>
        <select class="filter-select"><option>全部提交人</option><option>Bambi</option><option>Camila</option></select>
        <select class="filter-select"><option>全部报告类型</option><option>日报</option><option>周报</option><option>月报</option></select>
      </div>
      <div class="btn-group"><button class="btn btn-sm">导出报告</button><button class="btn btn-sm">开启报告模版</button></div>
    </div>
    <div class="alert alert-info mb-12">💡 工作报告支持推送到钉钉群，可前往模版编辑配置</div>
    ${renderTable(['报告标题','类型','提交人','提交时间','状态','操作'],
      [['Bambi 的开发日报 06-21','日报','Bambi','2026-06-21 17:10','<span class="table-tag success">已读</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['Camila 的周报 W25','周报','Camila','2026-06-19 18:00','<span class="table-tag primary">未读</span>','<button class="btn btn-sm btn-text">查看</button>'],
       ['Jade 的开发日报 06-20','日报','Jade','2026-06-20 17:30','<span class="table-tag success">已读</span>','<button class="btn btn-sm btn-text">查看</button>']],
      {total:8})}`;
  const panelSubmitted = `${renderTable(['报告标题','类型','接收人','提交时间','状态','操作'],
    [['我的开发日报 06-21','日报','主管 · Lisa','2026-06-21 17:10','<span class="table-tag success">按时提交</span>','<button class="btn btn-sm btn-text">查看</button>'],
     ['我的周报 W24','周报','主管 · Lisa','2026-06-14 17:45','<span class="table-tag warning">迟交 15分钟</span>','<button class="btn btn-sm btn-text">查看</button>']],
    {total:12})}`;
  const panelTeam = `${renderTable(['报告标题','类型','提交人','部门','提交时间','状态'],
    [['开发日报 06-21','日报','Bambi','业务开发一组','2026-06-21 17:10','<span class="table-tag success">按时</span>'],
     ['周报 W25','周报','Camila','业务维护一组','2026-06-19 18:00','<span class="table-tag success">按时</span>'],
     ['开发日报 06-20','日报','Amy','业务维护二组','2026-06-20 18:20','<span class="table-tag warning">迟交</span>']],
    {total:24})}`;
  const panelPush = `<div class="alert alert-info mb-12">💡 系统根据客户跟进、商机、订单等数据自动生成推送报告</div>
    ${renderTable(['报告标题','生成时间','数据范围','操作'],
      [['本周客户跟进汇总','2026-06-21 09:00','06-15 ~ 06-21','<button class="btn btn-sm btn-text">查看</button>'],
       ['本月商机转化分析','2026-06-20 09:00','06-01 ~ 06-20','<button class="btn btn-sm btn-text">查看</button>']],
      {total:6})}`;
  const panelStat = `${renderTable(['成员','部门','应提交','已提交','按时提交','迟交','提交率'],
    [['Bambi','业务开发一组','21','20','19','1','95%'],
     ['Camila','业务维护一组','21','21','21','0','100%'],
     ['Jade','业务开发二组','21','18','16','2','86%'],
     ['Amy','业务维护二组','21','17','15','2','81%'],
     ['合计','--','84','76','71','5','90%']],
    {total:5})}`;
  const panelTpl = `${renderTable(['模板名称','报告类型','提交频率','截止时间','推送方式','状态','操作'],
    [['开发日报','日报','每天','17:30','系统+钉钉','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
     ['周报','周报','每周五','18:00','系统','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
     ['月报','月报','每月最后一天','18:00','系统','<span class="table-tag">停用</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
    {total:3})}
    <div class="mt-12"><button class="btn btn-primary" onclick="navigateTo('enterprise','ent-work-report-tpl')">+ 新建模板</button></div>`;
  return `
    <div class="page-header">
      <h1 class="page-title">工作报告</h1>
      <div class="page-actions">
        <button class="btn btn-sm">📱 App 即刻写报告</button>
        <button class="btn btn-primary" onclick="openWorkReportModal()">+ 写工作报告</button>
      </div>
    </div>
    ${renderTabs(tabs, 0, 'tdWorkReport')}
    <div id="tdWorkReport_panels">
      ${renderTabPanels('tdWorkReport', [panelReceived, panelSubmitted, panelTeam, panelPush, panelStat, panelTpl])}
    </div>
  `;
};

function openWorkReportModal() {
  openDrawer('写工作报告', `
    <div class="alert alert-info mb-12">💡 草稿会实时保存 | 每天 00:00 ~ 当日 17:30 为按时提交，之后为迟交</div>
    <div class="form-section">
      <div class="form-section-title">基础信息</div>
      <div class="grid-2">
        ${renderFormField('工作报告模版', 'select', {options:['开发日报','周报','月报']})}
        ${renderFormField('报告标题', 'text', {placeholder:'报告标题'})}
      </div>
      ${renderFormField('接收人', 'text', {placeholder:'选择接收人'})}
    </div>
    <div class="form-section">
      <div class="form-section-title">今日核心进展</div>
      <div class="text-sm text-muted mb-8">重点客户小结</div>
      <div class="flex gap-8 mb-8">
        <button class="btn btn-sm">插入关联对象</button>
        <button class="btn btn-sm">插入客户</button>
        <button class="btn btn-sm">插入商机</button>
      </div>
      <div class="rich-toolbar mb-8" style="display:flex;gap:4px;flex-wrap:wrap;padding:6px 8px;border:1px solid var(--border-light);border-radius:var(--radius);background:#f8f9fc">
        ${['字号','行高','B','I','U','列表','对齐','链接'].map(t => `<button class="btn btn-sm" style="padding:2px 8px">${t}</button>`).join('')}
      </div>
      <textarea class="form-textarea" placeholder="请输入今日核心进展..." style="min-height:100px"></textarea>
    </div>
    <div class="form-section">
      <div class="form-section-title">明日工作计划</div>
      <div class="text-sm text-muted mb-8">需要重点跟进的客户以及撬动点</div>
      <div class="rich-toolbar mb-8" style="display:flex;gap:4px;flex-wrap:wrap;padding:6px 8px;border:1px solid var(--border-light);border-radius:var(--radius);background:#f8f9fc">
        ${['字号','行高','B','I','U','列表','对齐','链接'].map(t => `<button class="btn btn-sm" style="padding:2px 8px">${t}</button>`).join('')}
      </div>
      <textarea class="form-textarea" placeholder="请输入明日计划..." style="min-height:100px"></textarea>
    </div>
    <div class="form-section">
      <div class="form-section-title">今日跟进PI</div>
      <div class="upload-area">📎 上传附件（docx, xls, PDF, rar, zip, PNG, JPG，单个文件不超过 20MB）</div>
    </div>
    <div class="form-section">
      <div class="form-section-title">其他考核目标完成情况</div>
      <div class="grid-2">
        ${renderFormField('今日新分询盘数', 'text', {placeholder:'0'})}
        ${renderFormField('今日公海领回客户数', 'text', {placeholder:'0'})}
        ${renderFormField('今日有报价的客户数', 'text', {placeholder:'0'})}
        ${renderFormField('今日发送开发信数', 'text', {placeholder:'0'})}
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">目标完成情况自动汇总</div>
      <div class="text-sm text-muted mb-8">结果目标</div>
      <div class="grid-2">
        ${renderFormField('成交订单金额', 'text', {value:'¥4,200', disabled:true})}
        ${renderFormField('赢单商机金额', 'text', {value:'¥3,100', disabled:true})}
        ${renderFormField('每日赢单目标完成率', 'text', {value:'80%', disabled:true})}
        ${renderFormField('新建商机数', 'text', {value:'1', disabled:true})}
      </div>
      <div class="text-sm text-muted mb-8 mt-12">过程目标</div>
      <div class="grid-2">
        ${renderFormField('新建客户数', 'text', {value:'1', disabled:true})}
        ${renderFormField('发送邮件数', 'text', {value:'12', disabled:true})}
        ${renderFormField('新建跟进数', 'text', {value:'5', disabled:true})}
        ${renderFormField('今日发送开发信数', 'text', {value:'8', disabled:true})}
      </div>
    </div>
    <div class="form-section">
      <div class="form-section-title">客户跟进动态自动汇总</div>
      <div class="text-sm text-muted">今日跟进 SWISS HAIR CLUB、Bono Hair、Pacific Corp 等 5 家客户，详见关联对象。</div>
    </div>
    <div class="form-section">
      <div class="form-section-title">日程自动汇总</div>
      <div class="text-sm text-muted">今日日程：10:00 跟进 SWISS HAIR CLUB（已完成）、14:00 周会（已完成）。</div>
    </div>
  `, `
    <button class="btn" onclick="closeDrawer()">取消</button>
    <button class="btn">存草稿</button>
    <button class="btn btn-primary" onclick="closeDrawer()">提交</button>
  `);
}


// ===== 10. Collaboration / 协同模块 =====
PAGE_RENDERERS['collab-schedule'] = () => `
  <div class="page-header">
    <h1 class="page-title">日程</h1>
    <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我有权限查看的日程</button></div>
    <div class="page-actions"><button class="btn btn-primary" onclick="openNewScheduleModal()">+ 新建日程</button></div>
  </div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" placeholder="开始日期" />
    <input class="filter-input" type="date" placeholder="结束日期" />
    <select class="filter-select"><option>全部成员</option><option>Bambi</option><option>Camila</option><option>Jade</option></select>
    <select class="filter-select"><option>全部对象类型</option><option>客户</option><option>线索</option><option>商机</option></select>
    <button class="btn btn-sm">自定义列</button>
  </div>
  ${renderTable(
    ['日程主题','创建时间','创建人','参与人','重复','开始时间','结束时间','全天','对象类型','关联对象','关联邮件','备注','提醒时间','操作'],
    [
      ['跟进 SWISS HAIR CLUB','2026-06-20','Camila','Camila, Bambi','否','2026-06-22 10:00','2026-06-22 11:00','否','客户','SWISS HAIR CLUB','Re: Product Inquiry','确认订单细节','09:45','<button class="btn btn-sm btn-text">编辑</button>'],
      ['周会','2026-06-18','Admin','全部成员','每周','2026-06-23 09:00','2026-06-23 10:00','否','','','','团队周会','08:45','<button class="btn btn-sm btn-text">编辑</button>'],
      ['Bono Hair 报价跟进','2026-06-19','Bambi','Bambi','否','2026-06-23 14:00','2026-06-23 15:00','否','客户','Bono Hair','Price Quotation','发送 PI','13:45','<button class="btn btn-sm btn-text">编辑</button>'],
    ],
    { total: 3 }
  )}
`;

function openNewScheduleModal() {
  openModal('新建日程（简版）', `
    <div class="form-group">
      <label class="form-switch"><input type="checkbox" checked /> 全天事件</label>
    </div>
    <div class="form-row">
      ${renderFormField('开始日期', 'date', {value: new Date().toISOString().split('T')[0]})}
      ${renderFormField('结束日期', 'date', {value: new Date().toISOString().split('T')[0]})}
    </div>
    ${renderFormField('备注', 'textarea', {placeholder:'日程备注...'})}
    <div class="flex gap-8">
      <button class="btn btn-sm">插入图片</button>
      <button class="btn btn-sm">附件</button>
    </div>
    <div class="divider"></div>
    <a class="text-primary text-sm" onclick="closeModal();openFullScheduleModal()">完整编辑 →</a>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>');
}

function openFullScheduleModal() {
  openModal('新建日程 · 完整编辑', `
    <div class="form-group">
      <label class="form-switch"><input type="checkbox" checked /> 全天事件</label>
    </div>
    <div class="form-row">
      ${renderFormField('开始时间', 'datetime', {value:'2026-06-22T10:00'})}
      ${renderFormField('结束时间', 'datetime', {value:'2026-06-22T11:00'})}
    </div>
    ${renderFormField('设置为周期性日期', 'select', {options:['不设置','每天','每周','每月','每年']})}
    ${renderFormField('提醒时间', 'select', {options:['不提醒','开始时','提前5分钟','提前15分钟','提前30分钟','提前1小时']})}
    <div class="form-row">
      ${renderFormField('关联对象类型', 'select', {options:['客户','线索','商机']})}
      ${renderFormField('关联对象', 'text', {placeholder:'搜索关键字选择关联对象'})}
    </div>
    ${renderFormField('参与人员', 'text', {placeholder:'添加参与人（默认包含当前用户）'})}
    ${renderFormField('备注', 'textarea', {placeholder:'富文本内容，支持插入图片...'})}
    <div class="flex gap-8 mb-12">
      <button class="btn btn-sm">插入图片</button>
      <button class="btn btn-sm">附件</button>
    </div>
    <div class="upload-area mb-12">上传附件</div>
    <label class="form-switch"><input type="checkbox" /> 以后默认打开完整编辑窗口</label>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>');
}

// Approval
PAGE_RENDERERS['collab-approval'] = () => {
  const tabs = [{label:'由我审批（待办）'},{label:'由我审批（已办）'},{label:'我提交的审批'}];
  const todo = renderTable(['审批标题','审批类型','发起人','发起时间','金额','操作'],
    [['Bono Hair 报价单审批','报价单状态变更','Bambi','2026-06-21 14:20','¥38,900','<button class="btn btn-sm btn-primary">同意</button> <button class="btn btn-sm btn-text text-danger">拒绝</button>'],
     ['Pacific Corp 费用单审批','费用单','Jade','2026-06-21 11:00','¥2,400','<button class="btn btn-sm btn-primary">同意</button> <button class="btn btn-sm btn-text text-danger">拒绝</button>']],
    {total:2});
  const done = renderTable(['审批标题','审批类型','发起人','发起时间','金额','结果','处理时间'],
    [['SWISS HAIR CLUB 回款审批','回款登记','Camila','2026-06-20','¥45,200','<span class="table-tag success">已同意</span>','2026-06-20 16:30']],
    {total:8});
  const mine = renderTable(['审批标题','审批类型','当前审批人','发起时间','金额','状态'],
    [['Hair World 订单审批','销售订单','主管 Lisa','2026-06-21','¥12,800','<span class="table-tag warning">审批中</span>'],
     ['Bono Hair 报价单审批','报价单','主管 Lisa','2026-06-19','¥38,900','<span class="table-tag success">已通过</span>']],
    {total:5});
  return `
    <div class="page-header">
      <h1 class="page-title">审批</h1>
      <div class="page-actions">
        <button class="btn btn-sm text-danger">🔥 App&钉钉便捷审批</button>
        <button class="btn btn-sm" onclick="navigateTo('enterprise','ent-approval-flow')">审批流管理</button>
      </div>
    </div>
    ${renderTabs(tabs, 0, 'collabApproval')}
    <div id="collabApproval_panels">
      ${renderTabPanels('collabApproval', [todo, done, mine])}
    </div>
  `;
};

// Cloud Drive
PAGE_RENDERERS['collab-cloud'] = () => `
  <div class="page-header">
    <h1 class="page-title">云盘</h1>
    <div class="page-actions">
      <button class="btn btn-sm">上传</button>
      <button class="btn btn-sm">新建文件夹</button>
      <button class="btn btn-primary">+ 共享</button>
    </div>
  </div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部文件类型</option><option>文档</option><option>表格</option><option>图片</option><option>PDF</option></select>
    <input class="filter-input" placeholder="搜索文件名" />
    <button class="btn btn-sm">按修改时间</button>
  </div>
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="tree-item active">OKKI云文档</div>
      <div class="tree-item">我的文档</div>
      <div class="tree-item">共享文档</div>
      <div class="tree-item">成员文档</div>
      <div class="tree-item">回收站</div>
    </div>
    <div class="right-content px-16">
      ${renderTable(['文件名','类型','大小','创建人','修改时间','操作'],
        [['📁 客户资料','文件夹','--','Admin','2026-06-20','<button class="btn btn-sm btn-text">打开</button> <button class="btn btn-sm btn-text">共享</button>'],
         ['📄 报价单模板.docx','文档','128KB','Bambi','2026-06-19','<button class="btn btn-sm btn-text">下载</button> <button class="btn btn-sm btn-text">共享</button>'],
         ['📊 6月销售统计.xlsx','表格','256KB','Camila','2026-06-18','<button class="btn btn-sm btn-text">下载</button> <button class="btn btn-sm btn-text">共享</button>'],
         ['🖼 产品图集.zip','压缩包','12.4MB','Jade','2026-06-15','<button class="btn btn-sm btn-text">下载</button> <button class="btn btn-sm btn-text">共享</button>'],
         ['📄 PI模板.pdf','PDF','340KB','Admin','2026-06-10','<button class="btn btn-sm btn-text">下载</button> <button class="btn btn-sm btn-text">共享</button>']],
        {checkbox:true, total:5})}
    </div>
  </div>
`;

// Contacts
PAGE_RENDERERS['collab-contacts'] = () => `
  <div class="page-header">
    <h1 class="page-title">通讯录</h1>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="openImportContactsModal()">导入通讯录</button>
      <button class="btn btn-primary" onclick="openNewContactModal()">+ 新增通讯录</button>
    </div>
  </div>
  ${renderTabs([{label:'个人通讯录'},{label:'企业通讯录'}])}
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="tree-item active">全部</div>
      <div class="tree-item">未分组</div>
      <div class="flex gap-8" style="padding:8px 16px"><button class="btn btn-sm">修改分组</button><button class="btn btn-sm">编辑</button><button class="btn btn-sm btn-text text-danger">删除成员</button></div>
    </div>
    <div class="right-content px-16">
      <input class="filter-input w-full mb-12" placeholder="搜索名称、电话、备注" />
      ${renderTable(['昵称','邮箱','电话','分组名','备注'],[
        ['John Smith','john@example.com','+1 234 567 890','客户','VIP客户'],
        ['Alice Chen','alice@partner.cn','+86 138 0000 0000','合作伙伴',''],
      ],{ checkbox: true, total: 2 })}
    </div>
  </div>
`;

function openNewContactModal() {
  openModal('新增通讯录', `
    ${renderFormField('名称', 'text', {placeholder:'联系人名称'})}
    ${renderFormField('分组', 'select', {options:['未分组','客户','合作伙伴']})}
    <div class="form-row">
      ${renderFormField('国家/区号', 'select', {options:['+86 中国','+1 美国','+44 英国']})}
      ${renderFormField('电话号码', 'text', {placeholder:'电话号码'})}
    </div>
    ${renderFormField('邮箱', 'text', {placeholder:'邮箱地址'})}
    ${renderFormField('备注', 'textarea', {placeholder:'备注信息'})}
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确认</button>');
}

function openEditGroupModal() {
  var groups = ['VIP 欧洲客户','假发行业','Google 渠道','北美重点','阿里客户','展会客户'];
  var active = ['VIP 欧洲客户','假发行业','Google 渠道'];
  var body = '<div class="form-section-title">选择客户分组</div>' +
    groups.map(function(g) {
      var on = active.indexOf(g) >= 0 ? ' on' : '';
      return '<label class="form-switch mb-12"><span class="switch-track' + on + '" onclick="this.classList.toggle(\'on\')"></span> ' + g + '</label><br>';
    }).join('');
  openModal('编辑分组', body,
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>'
  );
}

function openContactDetailModal(name) {
  var contacts = {
    'Erik Kirste': {role:'采购总监',email:'kirste.erik@gmail.com',phone:'+49 176 8823 4456',gender:'男',company:'Bono Hair International',country:'德国',tz:'UTC+1 柏林',tag:'决策人',social:'WhatsApp: +49 176 8823 4456',lastContact:'2025-07-17',note:'主要对接人，偏好邮件沟通，回复通常在24h内'},
    'Lisa Weber': {role:'采购专员',email:'lisa.w@bonohair.com',phone:'+49 176 9912 3378',gender:'女',company:'Bono Hair International',country:'德国',tz:'UTC+1 柏林',tag:'采购',social:'LinkedIn: lisa-weber-bono',lastContact:'2025-06-28',note:'负责日常下单和样品确认'},
    'Thomas Braun': {role:'技术经理',email:'t.braun@bonohair.com',phone:'',gender:'男',company:'Bono Hair International',country:'德国',tz:'UTC+1 柏林',tag:'技术',social:'',lastContact:'2025-05-10',note:'产品技术规格确认对接人'},
  };
  var c = contacts[name] || contacts['Erik Kirste'];
  openModal('联系人详情 — ' + name,
    '<div class="info-list">' +
    '<div class="info-item"><span class="info-label">姓名</span><span class="info-value">' + name + '</span></div>' +
    '<div class="info-item"><span class="info-label">角色标签</span><span class="info-value"><span class="table-tag primary">' + c.tag + '</span></span></div>' +
    '<div class="info-item"><span class="info-label">职位</span><span class="info-value">' + c.role + '</span></div>' +
    '<div class="info-item"><span class="info-label">性别</span><span class="info-value">' + c.gender + '</span></div>' +
    '<div class="info-item"><span class="info-label">公司</span><span class="info-value">' + c.company + '</span></div>' +
    '<div class="info-item"><span class="info-label">邮箱</span><span class="info-value"><a class="text-primary">' + c.email + '</a></span></div>' +
    (c.phone ? '<div class="info-item"><span class="info-label">电话</span><span class="info-value">' + c.phone + '</span></div>' : '') +
    '<div class="info-item"><span class="info-label">国家</span><span class="info-value">' + c.country + '</span></div>' +
    '<div class="info-item"><span class="info-label">时区</span><span class="info-value">' + c.tz + '</span></div>' +
    (c.social ? '<div class="info-item"><span class="info-label">社交账号</span><span class="info-value">' + c.social + '</span></div>' : '') +
    '<div class="info-item"><span class="info-label">最近联系</span><span class="info-value">' + c.lastContact + '</span></div>' +
    '<div class="info-item"><span class="info-label">备注</span><span class="info-value">' + c.note + '</span></div>' +
    '</div>',
    '<button class="btn" onclick="closeModal()">关闭</button><button class="btn" onclick="closeModal();navigateTo(\'mail\',\'mail-compose\')">✉ 写邮件</button><button class="btn btn-primary" onclick="closeModal()">编辑</button>'
  );
}

function openImportContactsModal() {
  openModal('通讯录导入', `
    <div class="form-section"><div class="form-section-title">步骤1：使用 Excel 填写通讯录数据</div><a class="text-primary">下载导入通讯录模板.xls</a></div>
    <div class="form-section"><div class="form-section-title">步骤2：选择导入文件</div><div class="upload-area">点击上传</div></div>
    <div class="form-section"><div class="form-section-title">步骤3：选择导入的分组</div><select class="form-select"><option>个人通讯录</option></select></div>
    <div class="form-section"><div class="form-section-title">步骤4：导入模式</div><div class="flex gap-12"><label><input type="radio" name="mode" checked /> 不更新</label><label><input type="radio" name="mode" /> 更新</label></div></div>
    <a class="text-primary text-sm" onclick="closeModal();navigateTo('enterprise','ent-task-settings')">查看任务列表</a>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">一键导入</button>');
}

// Tasks
PAGE_RENDERERS['collab-task'] = () => `
  <div class="page-header">
    <h1 class="page-title">任务</h1>
    <div class="page-actions">
      <button class="btn btn-sm" onclick="navigateTo('team-data','td-report')">任务完成情况</button>
      <button class="btn btn-sm" onclick="navigateTo('enterprise','ent-task-settings')">任务设置</button>
    </div>
  </div>
  <div class="text-sm text-muted mb-12">任务是由管理者设置的任务规则触发自动创建。</div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" placeholder="开始时间" />
    <span>~</span>
    <input class="filter-input" type="date" placeholder="结束时间" />
    <select class="filter-select"><option>全部执行人</option><option>Bambi</option><option>Camila</option><option>Jade</option></select>
  </div>
  ${renderTabs([{label:'全部'},{label:'即将超时'},{label:'已超时'},{label:'已完成'},{label:'已忽略'}])}
  <div class="toggle-group mb-12"><button class="toggle-btn active" onclick="switchToggle(this)">跟进客户</button><button class="toggle-btn" onclick="switchToggle(this)">回复邮件</button><button class="toggle-btn" onclick="switchToggle(this)">回复TM</button></div>
  ${renderTable(
    ['任务状态','公司名称','任务规则名称','执行人','最近动态','最近跟进','创建时间','最近跟进时间','截止时间','操作'],
    [
      ['<span class="table-tag danger">已超时</span>','SWISS HAIR CLUB','成交客户30天至少跟进1次','Camila','发送邮件','跟进记录','2026-06-01','2026-05-15','2026-06-15','<button class="btn btn-sm btn-text" onclick="openTaskHandleDrawer(\'SWISS HAIR CLUB\')">处理</button>'],
      ['<span class="table-tag warning">即将超时</span>','Hair World','询盘客户60天至少跟进1次','Bambi','收到邮件','','2026-06-10','2026-06-18','2026-06-25','<button class="btn btn-sm btn-text" onclick="openTaskHandleDrawer(\'Hair World\')">处理</button>'],
      ['<span class="table-tag success">已完成</span>','Bono Hair','成交客户的邮件12小时内回复','Camila','已回复邮件','邮件回复','2026-06-12','2026-06-20','2026-06-21','<button class="btn btn-sm btn-text">查看</button>'],
    ],
    { total: 3 }
  )}
`;

function openTaskHandleDrawer(company) {
  openDrawer('处理任务 — ' + company, `
    <div class="info-list mb-12">
      <div class="info-item"><span class="info-label">公司</span><span class="info-value">${company}</span></div>
      <div class="info-item"><span class="info-label">任务规则</span><span class="info-value">成交客户30天至少跟进1次</span></div>
      <div class="info-item"><span class="info-label">截止时间</span><span class="info-value">2026-06-15</span></div>
    </div>
    <div class="flex gap-8 mb-12">
      <button class="btn btn-sm btn-primary" onclick="closeDrawer()">标记已跟进</button>
      <button class="btn btn-sm" onclick="navigateTo('team-data','td-follow-dynamics');closeDrawer()">写跟进</button>
      <button class="btn btn-sm" onclick="closeDrawer()">忽略任务</button>
    </div>
    ${renderFormField('备注', 'textarea', {placeholder:'处理说明...'})}
  `, '');
}

// ===== 11. Enterprise / 企业管理模块 =====
PAGE_RENDERERS['ent-switch'] = () => `
  <div class="page-header"><h1 class="page-title">功能开关</h1></div>
  <div class="card">
    ${['公海分组','商机模块','销售订单模块','报价单模块','以销定购','线索模块','撞单提醒'].map(f =>
      `<div class="flex-between" style="padding:12px 0;border-bottom:1px solid var(--border-light)">
        <span>${f}</span>
        <span class="switch-track on" onclick="this.classList.toggle('on')" style="cursor:pointer"></span>
      </div>`
    ).join('')}
  </div>
`;

PAGE_RENDERERS['ent-roles'] = () => `
  <div class="page-header">
    <h1 class="page-title">角色权限</h1>
    <div class="page-actions"><button class="btn btn-primary">+ 新增角色</button></div>
  </div>
  ${renderTable(
    ['角色','成员','操作'],
    [
      ['系统管理员','<a class="text-primary">3 人 · 管理</a>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button>'],
      ['普通用户','<a class="text-primary">25 人 · 管理</a>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['部门管理员','<a class="text-primary">5 人 · 管理</a>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['财务管理员','<a class="text-primary">2 人 · 管理</a>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
    ],
    { total: 4 }
  )}
`;

PAGE_RENDERERS['ent-fields'] = () => `
  <div class="page-header">
    <h1 class="page-title">自定义字段</h1>
    <div class="page-actions"><button class="btn btn-primary">+ 新增字段</button></div>
  </div>
  <div class="text-sm text-muted mb-12">添加符合您公司管理规范的自定义字段</div>
  ${renderTable(
    ['字段','类型','可见于','归属','操作'],
    [
      ['客户等级','下拉单选','线索、客户管理、商机','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['广告UTM','文本','线索、客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['需求和售后','多行文本','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['付款方式1','下拉多选','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['首次成交时间','日期','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['谷歌广告-关键词','文本','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['询盘云跟进次数','数值','线索管理','联系信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['职位/职级','下拉多选','客户管理','联系信息','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
    ],
    { total: 45 }
  )}
`;

// Enterprise Customer Settings
PAGE_RENDERERS['ent-customer-settings'] = () => {
  const g = 'entCustSet';
  const stagePanel = `<div class="card"><div class="text-sm text-muted mb-12">按照业务进展阶段划分客户状态，帮助业务员针对性跟进客户，提高成单率。</div><div class="flex-between mb-12"><span class="card-title mb-0">客户阶段</span><button class="btn btn-sm btn-primary">+ 新增阶段</button></div>${renderTable(['阶段名称','排序','默认','操作'],[['待跟进','1','是','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['询盘客户','2','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['样单客户','3','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['成交客户','4','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['复购客户','5','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],{total:5})}</div>`;
  const typePanel = `<div class="card"><div class="text-sm text-muted mb-12">对客户进行分类管理，可用于分层运营和筛选。</div><div class="flex-between mb-12"><span class="card-title mb-0">客户类型</span><button class="btn btn-sm btn-primary">+ 新增类型</button></div>${renderTable(['类型名称','排序','操作'],[['VIP 客户','1','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['普通客户','2','<button class="btn btn-sm btn-text">编辑</button>'],['潜在客户','3','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const publicPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置公海客户回收规则与分组。</div><div class="grid-2">${renderFormField('公海回收规则','select',{options:['90天未成交回收','180天未联系回收','不自动回收']})}${renderFormField('公海分组','select',{options:['默认公海分组','沉睡客户分组']})}${renderFormField('领取上限(个/天)','text',{value:'50'})}${renderFormField('领取冷却(小时)','text',{value:'24'})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存公海规则</button></div></div>`;
  const followPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置客户跟进频率与超时提醒。</div><div class="grid-2">${renderFormField('跟进频率提醒','select',{options:['开启','关闭']})}${renderFormField('超时未跟进(天)','text',{value:'7'})}${renderFormField('提醒方式','select',{options:['站内消息','邮件','不提醒']})}${renderFormField('免跟进阶段','select',{options:['成交客户','复购客户']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存跟进规则</button></div></div>`;
  const dealPanel = `<div class="card"><div class="text-sm text-muted mb-12">定义客户成交判定规则。</div><div class="grid-2">${renderFormField('成交判定依据','select',{options:['签订销售订单','回款到账','样品单']})}${renderFormField('自动标记成交','select',{options:['是','否']})}${renderFormField('成交客户保护期(天)','text',{value:'365'})}${renderFormField('复购判定周期(天)','text',{value:'180'})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存成交规则</button></div></div>`;
  const blacklistPanel = `<div class="card"><div class="text-sm text-muted mb-12">加入黑名单的邮箱/公司不再建档或收件。</div><div class="flex-between mb-12"><span class="card-title mb-0">建档黑名单</span><button class="btn btn-sm btn-primary">+ 新增</button></div>${renderTable(['类型','内容','添加时间','操作'],[['邮箱','spam@bad.com','2026-05-01','<button class="btn btn-sm btn-text text-danger">移除</button>'],['公司','Scam Corp','2026-04-12','<button class="btn btn-sm btn-text text-danger">移除</button>']],{total:2})}</div>`;
  const limitPanel = `<div class="card"><div class="text-sm text-muted mb-12">限制业务员可拥有的私海客户上限。</div><div class="grid-2">${renderFormField('私海客户上限','text',{value:'500'})}${renderFormField('超额处理','select',{options:['禁止新增','提示并允许']})}${renderFormField('按职级差异化','select',{options:['是','否']})}${renderFormField('超额提醒','select',{options:['开启','关闭']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存上限设置</button></div></div>`;
  const dedupPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置客户查重规则，避免重复建档。</div><div class="grid-2">${renderFormField('查重字段','select',{options:['公司名称','邮箱后缀','联系电话']})}${renderFormField('查重范围','select',{options:['全库','我的客户','私海+公海']})}${renderFormField('重复处理','select',{options:['提示人工合并','自动合并','阻止建档']})}${renderFormField('模糊匹配','select',{options:['开启','关闭']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存查重设置</button></div></div>`;
  const dynPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置客户动态记录范围与显示。</div><div class="grid-2">${renderFormField('记录动态类型','select',{options:['全部','邮件+跟进','仅跟进']})}${renderFormField('AI 动态生成','select',{options:['开启','关闭']})}${renderFormField('动态保留时长','select',{options:['永久','1年','6个月']})}${renderFormField('同步邮件动态','select',{options:['开启','关闭']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存动态设置</button></div></div>`;
  const writeFollowPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置写跟进的模板与必填项。</div><div class="grid-2">${renderFormField('跟进模板','select',{options:['默认模板','外呼模板','拜访模板']})}${renderFormField('必填跟进方式','select',{options:['否','是']})}${renderFormField('必填下次跟进时间','select',{options:['否','是']})}${renderFormField('AI 写跟进','select',{options:['开启','关闭']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存写跟进设置</button></div></div>`;
  const layoutPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置客户详情页布局与卡片显示。</div>${renderTable(['布局区域','是否显示','操作'],[['客户主卡','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['AI 客户分析','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['关联联系人','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['进行中商机','<span class="table-tag">隐藏</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:4})}</div>`;
  const fieldRulePanel = `<div class="card"><div class="text-sm text-muted mb-12">配置客户字段的必填、显隐与联动规则。</div>${renderTable(['字段名称','字段类型','必填','显示','操作'],[['公司名称','文本','是','是','<button class="btn btn-sm btn-text">编辑</button>'],['国家地区','下拉','否','是','<button class="btn btn-sm btn-text">编辑</button>'],['客户等级','下拉','否','是','<button class="btn btn-sm btn-text">编辑</button>'],['广告UTM','文本','否','是','<button class="btn btn-sm btn-text">编辑</button>']],{total:45})}</div>`;
  return `
    <div class="page-header"><h1 class="page-title">客户设置</h1></div>
    ${renderTabs([{label:'客户阶段'},{label:'客户类型'},{label:'公海管理'},{label:'客户跟进规则'},{label:'客户成交规则'},{label:'建档黑名单'},{label:'客户上限'},{label:'客户查重设置'},{label:'动态设置'},{label:'写跟进设置'},{label:'布局设置'},{label:'字段规则'}], 0, g)}
    ${renderTabPanels(g, [stagePanel,typePanel,publicPanel,followPanel,dealPanel,blacklistPanel,limitPanel,dedupPanel,dynPanel,writeFollowPanel,layoutPanel,fieldRulePanel])}
  `;
};

// Enterprise management pages with proper content
PAGE_RENDERERS['ent-translate'] = () => `
  <div class="page-header"><h1 class="page-title">翻译设置</h1></div>
  <div class="card">
    <div class="text-sm text-muted mb-12">配置系统翻译引擎和默认语言对</div>
    ${renderFormField('翻译引擎', 'select', {options:['Google 翻译','DeepL','百度翻译']})}
    ${renderFormField('默认源语言', 'select', {options:['自动检测','英文','中文','日文','韩文']})}
    ${renderFormField('默认目标语言', 'select', {options:['中文','英文','日文','韩文']})}
    <label class="form-switch mt-12"><input type="checkbox" checked /> 邮件自动翻译</label><br>
    <label class="form-switch mt-12"><input type="checkbox" /> 聊天自动翻译</label>
    <div class="mt-12"><button class="btn btn-primary">保存设置</button></div>
  </div>
`;

PAGE_RENDERERS['ent-field-display'] = () => `
  <div class="page-header"><h1 class="page-title">字段显示</h1></div>
  ${renderTabs([{label:'线索字段'},{label:'客户字段'},{label:'商机字段'},{label:'联系人字段'},{label:'订单字段'}])}
  <div class="alert alert-info mb-12">💡 配置各模块的字段显示/隐藏和顺序，影响列表页和详情页展示</div>
  <div class="card">
    ${renderTable(['字段名称','字段类型','是否必填','显示','排序','操作'],
      [['公司名称','文本','是','<span class="switch-track on switch-sm"></span>','1','<button class="btn btn-sm btn-text">编辑</button>'],
       ['国家地区','下拉选择','否','<span class="switch-track on switch-sm"></span>','2','<button class="btn btn-sm btn-text">编辑</button>'],
       ['客户来源','下拉选择','否','<span class="switch-track on switch-sm"></span>','3','<button class="btn btn-sm btn-text">编辑</button>'],
       ['客户等级','下拉选择','否','<span class="switch-track switch-sm"></span>','4','<button class="btn btn-sm btn-text">编辑</button>'],
       ['广告UTM','文本','否','<span class="switch-track on switch-sm"></span>','5','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:45})}
  </div>
`;

PAGE_RENDERERS['ent-lead-settings'] = () => {
  const g = 'entLeadSet';
  const statusPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">线索状态管理</span><button class="btn btn-sm btn-primary">+ 新增状态</button></div>${renderTable(['状态名称','排序','默认','操作'],[['待处理','1','是','<button class="btn btn-sm btn-text">编辑</button>'],['完善信息','2','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['初步触达','3','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['联系互动','4','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],{total:4})}</div>`;
  const sourcePanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">线索来源管理</span><button class="btn btn-sm btn-primary">+ 新增来源</button></div>${renderTable(['来源名称','来源分类','排序','操作'],[['主动开发','渠道获客','1','<button class="btn btn-sm btn-text">编辑</button>'],['官网询盘','线上询盘','2','<button class="btn btn-sm btn-text">编辑</button>'],['阿里巴巴','线上询盘','3','<button class="btn btn-sm btn-text">编辑</button>'],['展会','线下','4','<button class="btn btn-sm btn-text">编辑</button>']],{total:4})}</div>`;
  const tagPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">线索标签管理</span><button class="btn btn-sm btn-primary">+ 新增标签</button></div>${renderTable(['标签名称','标签颜色','使用数','操作'],[['高意向','红','15','<button class="btn btn-sm btn-text">编辑</button>'],['新询盘','蓝','30','<button class="btn btn-sm btn-text">编辑</button>'],['活跃客户','绿','22','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const assignPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置线索自动分配规则。</div><div class="grid-2">${renderFormField('分配方式','select',{options:['轮询分配','按区域分配','按职级分配','手动分配']})}${renderFormField('默认接收人','select',{options:['张伟','李娜','Bambi']})}${renderFormField('超额提醒','select',{options:['开启','关闭']})}${renderFormField('分配范围','select',{options:['全部线索','未分配线索']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存分配规则</button></div></div>`;
  const scorePanel = `<div class="card"><div class="text-sm text-muted mb-12">配置线索评分规则，自动计算意向分。</div>${renderTable(['评分维度','条件','分值','操作'],[['邮件打开','打开任意邮件','+10','<button class="btn btn-sm btn-text">编辑</button>'],['询盘行为','提交询盘表单','+30','<button class="btn btn-sm btn-text">编辑</button>'],['网站访问','浏览产品页','+5','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const convertPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置线索转化为客户的规则与字段映射。</div><div class="grid-2">${renderFormField('转化条件','select',{options:['手动转化','达到评分阈值自动转化']})}${renderFormField('转化阈值','text',{value:'60'})}${renderFormField('转化后线索状态','select',{options:['已完成','删除']})}${renderFormField('自动建联系人','select',{options:['是','否']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存转化规则</button></div></div>`;
  return `
    <div class="page-header"><h1 class="page-title">线索设置</h1></div>
    ${renderTabs([{label:'线索状态'},{label:'线索来源'},{label:'线索标签'},{label:'分配规则'},{label:'评分规则'},{label:'转化规则'}], 0, g)}
    ${renderTabPanels(g, [statusPanel,sourcePanel,tagPanel,assignPanel,scorePanel,convertPanel])}
  `;
};

PAGE_RENDERERS['ent-biz-settings'] = () => {
  const g = 'entBizSet';
  const flowPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">销售流程管理</span><button class="btn btn-sm btn-primary">+ 新建销售流程</button></div>${renderTable(['流程名称','阶段数','商机数','创建时间','状态','操作'],[['开发销售标准流程','6','3,200','2024-01-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>'],['维护销售标准流程','8','1,986','2024-01-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:2})}</div>`;
  const lostPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">输单原因管理</span><button class="btn btn-sm btn-primary">+ 新增原因</button></div>${renderTable(['原因名称','分类','使用次数','操作'],[['价格过高','价格','128','<button class="btn btn-sm btn-text">编辑</button>'],['选择竞品','竞品','95','<button class="btn btn-sm btn-text">编辑</button>'],['需求取消','客户','42','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const tagPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">商机标签管理</span><button class="btn btn-sm btn-primary">+ 新增标签</button></div>${renderTable(['标签名称','颜色','使用数','操作'],[['高意向','红','56','<button class="btn btn-sm btn-text">编辑</button>'],['复购机会','蓝','34','<button class="btn btn-sm btn-text">编辑</button>'],['紧急','橙','18','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const layoutPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置商机详情页布局与字段显示。</div>${renderTable(['布局区域','是否显示','操作'],[['商机主卡','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['阶段进度条','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['交易 Tab','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['关联联系人','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:4})}</div>`;
  return `
    <div class="page-header"><h1 class="page-title">商机设置</h1></div>
    ${renderTabs([{label:'销售流程'},{label:'输单原因'},{label:'商机标签'},{label:'布局设置'}], 0, g)}
    ${renderTabPanels(g, [flowPanel,lostPanel,tagPanel,layoutPanel])}
  `;
};

PAGE_RENDERERS['ent-source-settings'] = () => `
  <div class="page-header"><h1 class="page-title">来源设置</h1></div>
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="text-xs text-muted" style="padding:8px 16px">来源分类</div>
      <div class="tree-item active">全部来源</div>
      <div class="tree-item">线上询盘</div>
      <div class="tree-item">渠道获客</div>
      <div class="tree-item">线下渠道</div>
      <div class="flex gap-8" style="padding:8px 16px"><button class="btn btn-sm">+ 新增分类</button></div>
    </div>
    <div class="right-content px-16">
      <div class="flex-between mb-12"><span class="card-title mb-0">客户/线索来源字典</span><button class="btn btn-sm btn-primary" onclick="openEditSourceModal()">+ 新增来源</button></div>
      <div class="text-sm text-muted mb-12">来源分类与来源项支持联动：选择分类后右侧仅显示该分类下的来源；来源项可设置子来源与默认跟进规则。</div>
      ${renderTable(['来源名称','来源分类','子来源数','默认跟进规则','排序','操作'],
        [['主动开发','渠道获客','3','24h 内首次联系','1','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'主动开发\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
         ['官网询盘','线上询盘','2','自动分配并 12h 内联系','2','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'官网询盘\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
         ['阿里巴巴','线上询盘','5','自动分配并 24h 内联系','3','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'阿里巴巴\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
         ['社媒','渠道获客','4','48h 内首次联系','4','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'社媒\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
         ['展会','线下渠道','2','展会后 3 天内复盘','5','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'展会\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
         ['TM 咨询','线上询盘','1','实时分配','6','<button class="btn btn-sm btn-text" onclick="openEditSourceModal(\'TM 咨询\')">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
        {total:6})}
    </div>
  </div>
`;

function openEditSourceModal(name) {
  openModal(name ? '编辑来源' : '新增来源', `
    ${renderFormField('来源名称', 'text', {value: name || '', placeholder:'来源名称'})}
    ${renderFormField('来源分类', 'select', {options:['线上询盘','渠道获客','线下渠道']})}
    ${renderFormField('默认跟进规则', 'select', {options:['24h 内首次联系','12h 内首次联系','48h 内首次联系','展会后 3 天复盘','实时分配','不自动跟进']})}
    <div class="form-section">
      <div class="form-section-title">子来源</div>
      <div class="text-sm text-muted mb-8">该来源下的子来源项</div>
      <input class="form-input mb-8" placeholder="输入子来源后回车添加" />
      <div class="flex gap-8 flex-wrap">${['官网表单','落地页','Google Ads'].map(s => `<span class="table-tag primary">${s} <a style="margin-left:4px;cursor:pointer">×</a></span>`).join('')}</div>
    </div>
    ${renderFormField('排序', 'text', {value:'1'})}
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>');
}

PAGE_RENDERERS['ent-dedup-settings'] = () => {
  const tabs = [{label:'客户判重'},{label:'线索判重'},{label:'联系人判重'}];
  const custPanel = `<div class="text-sm text-muted mb-12">设置新建客户时的查重字段与处理方式</div>
    <div class="flex-between mb-12"><span class="card-title mb-0">查重字段</span><button class="btn btn-sm btn-primary">+ 新增字段</button></div>
    ${renderTable(['字段名称','字段类型','匹配方式','启用','操作'],
      [['公司名称','文本','精确匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['邮箱后缀','文本','后缀匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['公司网址','文本','域名匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['联系电话','文本','精确匹配','<span class="switch-track switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
      {total:8})}
    <div class="card mt-16">
      <div class="card-title mb-8">判重处理与范围</div>
      <div class="grid-2">
        ${renderFormField('重复处理方式','select',{options:['提示人工合并','自动合并','阻止建档']})}
        ${renderFormField('判重范围','select',{options:['全公司','我的客户','私海+公海']})}
        ${renderFormField('模糊匹配','select',{options:['关闭','开启']})}
        ${renderFormField('合并后保留','select',{options:['保留较新数据','保留较全数据']})}
      </div>
      <div class="mt-12"><button class="btn btn-primary btn-sm">保存判重设置</button></div>
    </div>`;
  const leadPanel = `<div class="text-sm text-muted mb-12">设置新建线索时的查重字段与处理方式</div>
    <div class="flex-between mb-12"><span class="card-title mb-0">查重字段</span><button class="btn btn-sm btn-primary">+ 新增字段</button></div>
    ${renderTable(['字段名称','字段类型','匹配方式','启用','操作'],
      [['联系人邮箱','文本','精确匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['联系人手机号','文本','精确匹配','<span class="switch-track switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['公司名称','文本','模糊匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
      {total:5})}
    <div class="card mt-16">
      <div class="card-title mb-8">判重处理与范围</div>
      <div class="grid-2">
        ${renderFormField('重复处理方式','select',{options:['提示人工合并','阻止建档','自动合并']})}
        ${renderFormField('判重范围','select',{options:['全公司','我的线索']})}
      </div>
      <div class="mt-12"><button class="btn btn-primary btn-sm">保存判重设置</button></div>
    </div>`;
  const contactPanel = `<div class="text-sm text-muted mb-12">设置联系人查重字段，避免同一联系人重复建档</div>
    ${renderTable(['字段名称','字段类型','匹配方式','启用','操作'],
      [['邮箱','文本','精确匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
       ['手机号','文本','精确匹配','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
      {total:2})}`;
  return `
    <div class="page-header"><h1 class="page-title">判重设置</h1></div>
    ${renderTabs(tabs, 0, 'entDedup')}
    <div id="entDedup_panels">
      ${renderTabPanels('entDedup', [custPanel, leadPanel, contactPanel])}
    </div>
  `;
};


PAGE_RENDERERS['ent-product-settings'] = () => {
  const g = 'entProdSet';
  const groupPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">产品分组管理</span><div class="btn-group"><button class="btn btn-sm">导入分组</button><button class="btn btn-sm btn-primary">+ 新建分组</button></div></div><div class="text-sm text-muted mb-12">产品分组可以对所选产品线的产品进行分类整理，便于业务员检索。</div>${renderTable(['分组名称','可见范围','操作'],[['男块','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],['女装','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button>'],['辅料','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button>'],['未分组','全部','--']],{total:4})}</div>`;
  const syncPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置产品与外部平台（阿里国际站/独立站）的同步规则。</div><div class="grid-2">${renderFormField('同步平台','select',{options:['阿里国际站','独立站','不同步']})}${renderFormField('同步方向','select',{options:['双向','仅上行','仅下行']})}${renderFormField('自动同步','select',{options:['开启','关闭']})}${renderFormField('同步频率','select',{options:['实时','每小时','每天']})}</div><div class="mt-12"><button class="btn btn-primary btn-sm">保存同步设置</button> <button class="btn btn-sm" onclick="showToast('立即同步')">立即同步</button></div></div>`;
  const fieldPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置产品字段的必填、显隐与排序。</div>${renderTable(['字段名称','字段类型','必填','显示','操作'],[['产品名称','文本','是','是','<button class="btn btn-sm btn-text">编辑</button>'],['产品编号','文本','否','是','<button class="btn btn-sm btn-text">编辑</button>'],['离岸价','金额','否','是','<button class="btn btn-sm btn-text">编辑</button>'],['海关编码','文本','否','是','<button class="btn btn-sm btn-text">编辑</button>']],{total:18})}</div>`;
  const specPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置多规格产品的规格名与规格值模板。</div><div class="flex-between mb-12"><span class="card-title mb-0">规格模板</span><button class="btn btn-sm btn-primary">+ 新增规格</button></div>${renderTable(['规格名','规格值','使用产品数','操作'],[['颜色','#1,#1B,#2,#4,#6','120','<button class="btn btn-sm btn-text">编辑</button>'],['长度','6,8,10,12,14 inches','86','<button class="btn btn-sm btn-text">编辑</button>'],['尺寸','6*1,6*2,6*1.5','45','<button class="btn btn-sm btn-text">编辑</button>']],{total:3})}</div>`;
  const layoutPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置产品详情页与列表页布局。</div>${renderTable(['布局区域','是否显示','操作'],[['产品主图','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['产品规格','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['配件清单','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['报关信息','<span class="table-tag">隐藏</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:4})}</div>`;
  return `
    <div class="page-header"><h1 class="page-title">产品设置</h1></div>
    ${renderTabs([{label:'产品分组设置'},{label:'产品同步'},{label:'产品字段设置'},{label:'产品规格设置'},{label:'布局设置'}], 0, g)}
    ${renderTabPanels(g, [groupPanel,syncPanel,fieldPanel,specPanel,layoutPanel])}
  `;
};

PAGE_RENDERERS['ent-order-settings'] = () => {
  const g = 'entOrderSet';
  const noPanel = `<div class="card"><div class="card-title">订单编号规则</div>${renderFormField('编号前缀', 'text', {value:'2026BONO-'})}${renderFormField('编号格式', 'select', {options:['年份+前缀+序号','前缀+日期+序号','自定义']})}${renderFormField('序号位数', 'select', {options:['4位','5位','6位']})}<div class="text-sm text-muted mt-12">预览: 2026BONO-0001</div><button class="btn btn-primary mt-12">保存设置</button></div>`;
  const fieldPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置销售订单字段的必填与显隐。</div>${renderTable(['字段名称','字段类型','必填','显示','操作'],[['订单名称','文本','是','是','<button class="btn btn-sm btn-text">编辑</button>'],['客户','关联','是','是','<button class="btn btn-sm btn-text">编辑</button>'],['订单金额','金额','是','是','<button class="btn btn-sm btn-text">编辑</button>'],['备注','多行文本','否','是','<button class="btn btn-sm btn-text">编辑</button>']],{total:22})}</div>`;
  const statusPanel = `<div class="card"><div class="flex-between mb-12"><span class="card-title mb-0">订单状态管理</span><button class="btn btn-sm btn-primary">+ 新增状态</button></div>${renderTable(['状态名称','排序','是否启用','操作'],[['草稿','1','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],['待收款','2','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],['待发货','3','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],['交易成功','4','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:4})}</div>`;
  const layoutPanel = `<div class="card"><div class="text-sm text-muted mb-12">配置订单详情页 tab 与布局。</div>${renderTable(['Tab 名称','是否显示','操作'],[['订单详情','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['回款单','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['备货','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>'],['出运','<span class="table-tag success">显示</span>','<button class="btn btn-sm btn-text">编辑</button>']],{total:8})}</div>`;
  return `
    <div class="page-header"><h1 class="page-title">销售订单设置</h1></div>
    ${renderTabs([{label:'订单编号规则'},{label:'订单字段设置'},{label:'订单状态'},{label:'布局设置'}], 0, g)}
    ${renderTabPanels(g, [noPanel,fieldPanel,statusPanel,layoutPanel])}
  `;
};

PAGE_RENDERERS['ent-rate-settings'] = () => `
  <div class="page-header"><h1 class="page-title">汇率设置</h1><div class="page-actions"><button class="btn btn-sm">同步实时汇率</button><button class="btn btn-primary">+ 新增币种</button></div></div>
  <div class="card">
    <div class="alert alert-info mb-12">💡 汇率设置影响商机金额换算和订单结算，请保持汇率更新</div>
    ${renderTable(['币种','币种代码','汇率 (对 CNY)','最近更新','操作'],
      [['美元','USD','7.2500','2026-06-21','<button class="btn btn-sm btn-text">编辑</button>'],
       ['欧元','EUR','7.8900','2026-06-21','<button class="btn btn-sm btn-text">编辑</button>'],
       ['英镑','GBP','9.1200','2026-06-21','<button class="btn btn-sm btn-text">编辑</button>'],
       ['日元','JPY','0.0480','2026-06-21','<button class="btn btn-sm btn-text">编辑</button>'],
       ['巴西雷亚尔','BRL','1.2800','2026-06-21','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:5})}
  </div>
`;

PAGE_RENDERERS['ent-mail-mgmt'] = () => `
  <div class="page-header"><h1 class="page-title">邮箱管理</h1><div class="page-actions"><button class="btn btn-primary">+ 添加邮箱</button></div></div>
  ${renderTabs([{label:'邮箱账号'},{label:'邮件分发规则'},{label:'邮件签名'},{label:'邮件模板'}])}
  <div class="card">
    ${renderTable(['邮箱地址','邮箱类型','绑定人','每日发送上限','已发送','状态','操作'],
      [['service@company.com','企业邮箱','全部','500','45','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>'],
       ['sales@company.com','企业邮箱','Bambi','200','23','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>'],
       ['info@bonohair.com','企业邮箱','Camila','200','12','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>']],
      {total:3})}
  </div>
`;

PAGE_RENDERERS['ent-marketing-settings'] = () => `
  <div class="page-header"><h1 class="page-title">营销设置</h1></div>
  ${renderTabs([{label:'营销邮件设置'},{label:'退订管理'},{label:'发送频率限制'}])}
  <div class="card">
    <div class="card-title">营销邮件设置</div>
    <label class="form-switch mb-12"><input type="checkbox" checked /> 启用营销邮件</label><br>
    ${renderFormField('每日营销邮件上限', 'text', {value:'1000'})}
    ${renderFormField('同一客户营销间隔', 'select', {options:['7天','14天','30天']})}
    <label class="form-switch mb-12"><input type="checkbox" checked /> 自动添加退订链接</label><br>
    <label class="form-switch mb-12"><input type="checkbox" /> 营销邮件需审批</label>
    <button class="btn btn-primary mt-12">保存设置</button>
  </div>
`;

PAGE_RENDERERS['ent-guide'] = () => `
  <div class="page-header"><h1 class="page-title">谈单指南</h1><div class="page-actions"><button class="btn btn-primary">+ 新建指南</button></div></div>
  <div class="alert alert-info mb-12">💡 谈单指南帮助业务员按标准化流程推进商机，提升成单率</div>
  <div class="card">
    ${renderTable(['指南名称','适用阶段','创建人','更新时间','状态','操作'],
      [['首次跟进话术','需求确认','Admin','2025-06-20','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['报价技巧指南','谈判报价','Admin','2025-05-15','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['催单邮件模板','PI','Admin','2025-04-10','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['售后处理流程','赢单','Admin','2025-07-01','<span class="table-tag">停用</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:4})}
  </div>
`;

PAGE_RENDERERS['ent-ali-shop'] = () => `
  <div class="page-header"><h1 class="page-title">阿里店铺管理</h1><div class="page-actions"><button class="btn btn-primary">+ 绑定店铺</button></div></div>
  <div class="card">
    ${renderTable(['店铺名称','店铺ID','绑定时间','同步状态','最近同步','操作'],
      [['Bono Hair Store','SH12345678','2024-06-15','<span class="table-tag success">正常</span>','2026-06-21 08:00','<button class="btn btn-sm btn-text">设置</button> <button class="btn btn-sm btn-text">同步</button>']],
      {total:1})}
  </div>
`;

PAGE_RENDERERS['ent-site-mgmt'] = () => `
  <div class="page-header"><h1 class="page-title">独立站管理</h1><div class="page-actions"><button class="btn btn-primary">+ 绑定独立站</button></div></div>
  <div class="card">
    <div class="text-sm text-muted mb-12">绑定独立站后，系统可自动采集网站访客行为和表单数据，生成线索</div>
    ${renderTable(['站点名称','域名','绑定时间','追踪代码','状态','操作'],
      [['Bono Hair 官网','bonohair.com','2024-03-20','已安装','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>']],
      {total:1})}
  </div>
`;

PAGE_RENDERERS['ent-social-mgmt'] = () => `
  <div class="page-header"><h1 class="page-title">社媒管理</h1><div class="page-actions"><button class="btn btn-primary">+ 绑定社媒账号</button></div></div>
  <div class="card">
    ${renderTable(['平台','账号名称','绑定时间','粉丝数','状态','操作'],
      [['Facebook','Bono Hair Official','2024-05-10','12,500','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>'],
       ['Instagram','@bonohair','2024-05-10','8,200','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>'],
       ['LinkedIn','Bono Hair International','2024-06-01','3,500','<span class="table-tag success">正常</span>','<button class="btn btn-sm btn-text">设置</button>']],
      {total:3})}
  </div>
`;

PAGE_RENDERERS['ent-work-report-tpl'] = () => `
  <div class="page-header"><h1 class="page-title">工作报告模版</h1><div class="page-actions"><button class="btn btn-primary">+ 新建模板</button></div></div>
  <div class="card">
    ${renderTable(['模板名称','报告类型','提交频率','截止时间','推送方式','状态','操作'],
      [['开发日报','日报','每天','17:30','系统+钉钉','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['周报','周报','每周五','18:00','系统','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['月报','月报','每月最后一天','18:00','系统','<span class="table-tag">停用</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:3})}
  </div>
`;

PAGE_RENDERERS['ent-goal-mgmt'] = () => `
  <div class="page-header"><h1 class="page-title">目标管理</h1><div class="page-actions"><button class="btn btn-primary">+ 新建目标</button></div></div>
  <div class="card">
    <div class="text-sm text-muted mb-12">设置团队和个人的业务目标，支持按月/季度/年设定</div>
    ${renderTable(['目标名称','目标类型','统计方式','目标周期','适用范围','状态','操作'],
      [['成交订单金额','结果目标','订单结算','月度','全部门','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['赢单商机金额','结果目标','商机结算','月度','全部门','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['每日邮件发送数','过程目标','自动统计','日度','业务部','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['新建客户数','结果目标','自动统计','月度','全部门','<span class="table-tag">停用</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:4})}
  </div>
`;

PAGE_RENDERERS['ent-automation'] = () => `
  <div class="page-header"><h1 class="page-title">自动化配置</h1><div class="page-actions"><button class="btn btn-primary">+ 新建自动化规则</button></div></div>
  <div class="alert alert-info mb-12">💡 配置自动化规则，让系统自动执行重复性操作，提升工作效率</div>
  <div class="card">
    ${renderTable(['规则名称','触发条件','执行动作','创建时间','状态','操作'],
      [['新询盘自动分配','收到新询盘邮件','自动分配给对应业务员','2025-01-15','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['客户自动打标签','客户首次成交','自动添加"已成交"标签','2025-02-20','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['商机超期提醒','商机阶段停留超7天','发送提醒给负责人','2025-03-10','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:3})}
  </div>
`;

PAGE_RENDERERS['ent-workflow'] = () => `
  <div class="page-header"><h1 class="page-title">工作流管理</h1><div class="page-actions"><button class="btn btn-primary">+ 新建工作流</button></div></div>
  <div class="card">
    <div class="text-sm text-muted mb-12">工作流用于定义业务流程自动化，支持条件分支和多步骤操作</div>
    ${renderTable(['工作流名称','触发对象','触发事件','执行次数','最近执行','状态','操作'],
      [['新客户欢迎邮件','客户','新建客户','156','2026-06-20','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['线索转客户通知','线索','线索转化','89','2026-06-19','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['订单状态变更通知','订单','状态变更','1,234','2026-06-21','<span class="table-tag success">启用</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:3})}
  </div>
`;

PAGE_RENDERERS['ent-export'] = () => {
  const tabs = [{label:'客户导出'},{label:'线索导出'},{label:'商机导出'},{label:'订单导出'}];
  const custRows = [['全部客户导出','全部客户 (356)','全部字段','Admin','2026-06-20','2.5MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>'],['公海客户导出','公海客户 (523)','基本字段','Bambi','2026-06-18','1.8MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>'],['VIP 客户导出','VIP 客户 (42)','全部字段','Camila','2026-06-15','320KB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>']];
  const leadRows = [['未跟进线索导出','30天未跟进 (128)','基本字段','Admin','2026-06-19','1.2MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>'],['阿里询盘线索','阿里询盘 (89)','全部字段','Bambi','2026-06-17','980KB','<span class="table-tag warning">生成中</span>','<button class="btn btn-sm btn-text">刷新</button>']];
  const bizRows = [['本月赢单商机','赢单 (38)','全部字段','Admin','2026-06-20','410KB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>']];
  const orderRows = [['本月订单导出','成交订单 (87)','全部字段','Admin','2026-06-21','1.1MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>']];
  const cols = ['任务名称','导出范围','导出字段','创建人','创建时间','文件大小','状态','操作'];
  const panel = (rows,total) => `<div class="flex-between mb-12"><div class="text-sm text-muted">查看和管理导出任务</div><button class="btn btn-sm btn-primary" onclick="openNewExportModal()">+ 新建导出</button></div>${renderTable(cols, rows, {total})}`;
  return `
    <div class="page-header"><h1 class="page-title">客户导出</h1></div>
    ${renderTabs(tabs, 0, 'entExport')}
    <div id="entExport_panels">
      ${renderTabPanels('entExport', [panel(custRows,3), panel(leadRows,2), panel(bizRows,1), panel(orderRows,1)])}
    </div>
  `;
};

function openNewExportModal() {
  openModal('新建导出任务', `
    ${renderFormField('导出范围', 'select', {options:['全部客户','公海客户','VIP 客户','我的客户']})}
    ${renderFormField('导出字段', 'select', {options:['全部字段','基本字段','自定义字段']})}
    <div class="form-row">
      ${renderFormField('数据格式', 'select', {options:['Excel (.xlsx)','CSV','PDF']})}
      ${renderFormField('是否含跟进动态', 'select', {options:['不含','包含']})}
    </div>
    <div class="text-sm text-muted">导出任务将在后台生成，完成后可在列表下载。</div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">开始导出</button>');
}

PAGE_RENDERERS['ent-recycle'] = () => {
  const tabs = [{label:'客户'},{label:'线索'},{label:'商机'},{label:'联系人'},{label:'订单'}];
  const cols = ['名称','删除人','删除时间','剩余保留','操作'];
  const rows = {
    '客户': [['Test Company','Bambi','2026-06-15','25 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>'],['Old Customer Inc','Camila','2026-06-10','20 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>']],
    '线索': [['Sample Lead','Camila','2026-06-12','23 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>'],['Spam Lead','Bambi','2026-06-05','16 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>']],
    '商机': [['Test Biz Opp','Jade','2026-06-08','19 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>']],
    '联系人': [['John Doe','Bambi','2026-06-14','24 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>']],
    '订单': [['TEST-ORDER-001','Admin','2026-06-11','22 天','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text text-danger">永久删除</button>']],
  };
  return `
    <div class="page-header"><h1 class="page-title">回收箱</h1></div>
    <div class="alert alert-warning mb-12">⚠️ 回收箱数据保留 30 天，超过 30 天将自动永久删除</div>
    ${renderTabs(tabs, 0, 'entRecycle')}
    <div id="entRecycle_panels">
      ${renderTabPanels('entRecycle', tabs.map(t => renderTable(cols, rows[t.label], {total: rows[t.label].length})))}
    </div>
  `;
};

PAGE_RENDERERS['ent-custom-report'] = () => `
  <div class="page-header"><h1 class="page-title">自定义报表</h1><div class="page-actions"><button class="btn btn-primary" onclick="openNewCustomReportModal()">+ 新建报表</button></div></div>
  <div class="text-sm text-muted mb-12">创建自定义报表，灵活配置数据维度和展示方式</div>
  ${renderTable(['报表名称','数据源','图表类型','创建人','最近查看','共享范围','操作'],
    [['月度销售趋势','订单','折线图','Admin','2026-06-21','全部门','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
     ['客户来源分析','客户','饼图','Admin','2026-06-20','本部门','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
     ['商机转化漏斗','商机','漏斗图','Admin','2026-06-19','全部门','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
     ['业务员业绩排行','订单','柱状图','Admin','2026-06-18','全部门','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>']],
    {total:4})}
`;

function openNewCustomReportModal() {
  openModal('新建自定义报表', `
    ${renderFormField('报表名称', 'text', {placeholder:'报表名称'})}
    <div class="form-row">
      ${renderFormField('数据源', 'select', {options:['客户','线索','商机','订单','邮件','产品']})}
      ${renderFormField('图表类型', 'select', {options:['折线图','柱状图','饼图','漏斗图','表格','地图']})}
    </div>
    <div class="form-row">
      ${renderFormField('时间维度', 'select', {options:['日','周','月','季度','年']})}
      ${renderFormField('统计维度', 'select', {options:['按成员','按部门','按地区','按来源','按产品']})}
    </div>
    ${renderFormField('共享范围', 'select', {options:['仅自己','本部门','全部门']})}
    <div class="text-sm text-muted">创建后可在报表编辑器中拖拽配置图表字段。</div>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">创建</button>');
}


// Override approval flow with more detail
PAGE_RENDERERS['ent-approval-flow'] = () => `
  <div class="page-header">
    <h1 class="page-title">审批流管理</h1>
    <div class="page-actions"><button class="btn btn-primary" onclick="openNewApprovalFlowModal()">+ 新建审批流</button></div>
  </div>
  <div class="text-sm text-muted mb-12">通过定义对象的审批触发规则和审批流程，保证管理流程标准化</div>
  <div class="alert alert-info mb-12">💡 指定对象后，可拖拽排序；同一对象触发条件相同时优先级序号小的先触发。</div>
  <div class="filter-bar mb-12"><select class="filter-select"><option>全部审批对象</option><option>销售订单</option><option>报价单</option><option>付款单</option><option>费用单</option></select></div>
  ${renderTable(
    ['优先级','审批流名称','审批对象','触发事件','最新编辑时间','状态','操作'],
    [
      ['⠿ 1','其他审批','自定义','--','2025-08-01','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['⠿ 1','报价单状态变更审批','报价单','状态变更','2025-06-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['⠿ 1','采购付款单审批','付款单','状态变更','2025-07-20','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['⠿ 1','回款登记审批','回款登记','状态变更','2025-05-10','<span class="table-tag">已停用</span>','<button class="btn btn-sm btn-text">启用</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['⠿ 1','费用单审批','费用单','状态变更','2025-04-08','<span class="table-tag">已停用</span>','<button class="btn btn-sm btn-text">启用</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
    ],
    { total: 5 }
  )}
`;

function openNewApprovalFlowModal() {
  openModal('新建审批流 · 步骤 1/2 基本信息配置', `
    <div class="flex gap-8 mb-12"><span class="table-tag primary">1 基本信息配置</span><span class="table-tag">2 审批步骤配置</span></div>
    ${renderFormField('审批流名称', 'text', {placeholder:'审批流名称'})}
    ${renderFormField('审批流描述', 'textarea', {placeholder:'审批流描述'})}
    <div class="divider"></div>
    <div class="card-title mb-8">审批条件</div>
    <div class="text-sm text-muted mb-8">当</div>
    <div class="grid-2 mb-12">
      ${renderFormField('触发对象', 'select', {options:['销售订单','报价单','付款单','回款登记','费用单','自定义']})}
      ${renderFormField('触发事件', 'select', {options:['请选择触发事件','状态变更','金额超限','新建']})}
    </div>
    <div class="text-sm text-muted mb-8">时</div>
    <div class="card-title mb-8">条件规则</div>
    <div class="flex gap-12 mb-12">
      <label><input type="radio" name="cond" checked /> 无条件执行</label>
      <label><input type="radio" name="cond" /> 满足以下所有条件（AND）</label>
      <label><input type="radio" name="cond" /> 满足以下任一条件（OR）</label>
      <label><input type="radio" name="cond" /> 自定义</label>
    </div>
    <div class="filter-bar mb-8">
      <select class="filter-select"><option>选择字段</option><option>订单金额</option><option>客户等级</option></select>
      <select class="filter-select"><option>等于</option><option>大于</option><option>小于</option><option>包含</option></select>
      <input class="filter-input" placeholder="值" />
      <button class="btn btn-sm">+ 添加条件</button>
    </div>
  `, '<button class="btn" onclick="closeModal()">退出</button><button class="btn btn-primary" onclick="closeModal()">下一步</button>');
}

PAGE_RENDERERS['ent-task-settings'] = () => `
  <div class="page-header">
    <h1 class="page-title">任务设置</h1>
    <div class="page-actions"><button class="btn btn-primary" onclick="navigateTo('enterprise','ent-task-tpl')">+ 新建任务规则</button></div>
  </div>
  ${renderTable(
    ['任务规则名称','任务规则描述','任务类型','创建人','创建时间','最后修改时间','启用状态','操作'],
    [
      ['24小时内回复阿里询盘','要求及时处理阿里询盘','回复邮件','Admin','2025-01-15','2025-06-20','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['成交客户30天至少跟进1次','对成交客户设置周期性跟进','跟进客户','Admin','2025-01-15','2025-06-18','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['客户邮件在24小时内回复','约束客户邮件回复时效','回复邮件','Admin','2025-02-01','2025-06-15','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['成交客户的邮件12小时内回复','对成交客户邮件设置更严格回复时效','回复邮件','Admin','2025-02-10','2025-06-12','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
      ['询盘客户60天至少跟进1次','对询盘客户设置周期性跟进','跟进客户','Admin','2025-03-10','2025-05-20','<span class="switch-track on switch-sm" onclick="this.classList.toggle(\'on\')"></span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text text-danger">删除</button>'],
    ],
    { total: 5 }
  )}
`;

PAGE_RENDERERS['ent-task-tpl'] = () => {
  const tabs = [{label:'跟进客户'},{label:'回复邮件'},{label:'回复TM'}];
  const followTpls = [['久未成交的成交客户15天至少跟进1次','对久未成交的成交客户设置周期跟进'],['询盘客户30天至少跟进1次','对询盘客户设置30天周期跟进'],['目标客户90天未联系提醒','目标客户长时间未联系自动提醒']];
  const mailTpls = [['新业务员收到的客户邮件在12小时内回复','对新业务员邮件设置时效'],['成交客户的邮件6小时内回复','对成交客户邮件设置更严格时效']];
  const tmTpls = [['指定业务员在24小时内回复所有TM消息','对指定业务员 TM 消息设置时效'],['指定业务员在12小时内回复阿里询盘','对阿里询盘 TM 设置时效']];
  const card = (rows) => rows.map(r => `<div class="card">
    <div class="text-bold mb-4">${r[0]}</div>
    <div class="text-sm text-muted mb-8">${r[1]}</div>
    <button class="btn btn-sm btn-text">使用此模版新建任务规则</button>
  </div>`).join('');
  return `
    <div class="page-header">
      <h1 class="page-title">新建任务规则</h1>
      <div class="page-actions"><button class="btn btn-sm" onclick="navigateTo('enterprise','ent-task-settings')">返回</button></div>
    </div>
    <div class="toggle-group mb-16">
      <button class="toggle-btn active" onclick="switchToggle(this)">自定义新建</button>
      <button class="toggle-btn" onclick="switchToggle(this)">使用模板新建</button>
    </div>
    ${renderTabs(tabs, 0, 'entTaskTpl')}
    <div id="entTaskTpl_panels">
      ${renderTabPanels('entTaskTpl', [`<div class="grid-3">${card(followTpls)}</div>`, `<div class="grid-3">${card(mailTpls)}</div>`, `<div class="grid-3">${card(tmTpls)}</div>`])}
    </div>
  `;
};


// ===== AI 业务助理（需求缺口分析：在现有 CRM/ERP 之上做一套 AI 助理 + 自动待办 + 线索处理 + ERP 回写辅助系统）=====

// ---- AI 助理：待办状态（用于 todo 卡片本地交互）----
let aiTodoFilter = 'all'; // all | urgent | customer | mail | biz | order

// P0-1 全局 AI 待办中心
PAGE_RENDERERS['ai-todo'] = () => {
  const todos = [
    { type:'紧急', icon:'🔥', tag:'danger', customer:'Marco Rossi', country:'🇮🇹 意大利', reason:'AI 判定：客户 3 次询问报价未回复，疑似被竞对跟进', stage:'报价', last:'2 小时前', action:'立即跟进', suggest:'可主动让步 2% 并附上限时 PI，挽回谈判' },
    { type:'新询盘', icon:'✨', tag:'primary', customer:'Ana Silva', country:'🇧🇷 巴西', reason:'网站表单提交：户外储能电源 500W 询价', stage:'新询盘', last:'12 分钟前', action:'分配并跟进', suggest:'巴西市场偏好便携款，推荐 EP-500 便携系列' },
    { type:'未回复邮件', icon:'📧', tag:'warning', customer:'Hans Müller', country:'🇩🇪 德国', reason:'客户 36 小时前询问 MOQ 与交期，尚未回复', stage:'已联系', last:'36 小时前', action:'回复邮件', suggest:'德国客户重视交期准确度，建议明确 25 天船期' },
    { type:'二次咨询', icon:'🔁', tag:'info', customer:'Linda Chen', country:'🇸🇬 新加坡', reason:'同一客户第二次咨询同款产品，复购意向强', stage:'报价', last:'1 小时前', action:'推荐升级款', suggest:'上次购买 EP-300，可推 EP-500 升级款 + 老客户折扣' },
    { type:'长时间未跟进', icon:'⏰', tag:'muted', customer:'James Brown', country:'🇺🇸 美国', reason:'已 18 天未跟进，距离上次报价无进展', stage:'报价', last:'18 天前', action:'回访激活', suggest:'可发新品图册 + 限时返场优惠试探意向' },
    { type:'商机停滞', icon:'⚠️', tag:'warning', customer:'DLBV 特单', country:'🇫🇷 法国', reason:'商机停留在「谈判报价」已 12 天，金额 ¥120,000', stage:'谈判报价', last:'12 天前', action:'推动赢单', suggest:'客户已确认款式，可催付定金锁定产能' },
    { type:'已付款待下单', icon:'💳', tag:'success', customer:'Pedro Gomez', country:'🇪🇸 西班牙', reason:'已收到 30% 定金 $13,500，待创建生产订单', stage:'已付款', last:'今天', action:'创建订单', suggest:'尾款约定发货前付清，建议同步建 PI 与排产单' },
    { type:'已签收待回访', icon:'📦', tag:'success', customer:'Yuki Tanaka', country:'🇯🇵 日本', reason:'订单已签收 7 天，进入复购回访窗口', stage:'已签收', last:'7 天前', action:'回访 + 推新品', suggest:'日本客户复购周期约 45 天，可推同系列新款' },
    { type:'网站再次访问', icon:'👀', tag:'info', customer:'Fatima Ali', country:'🇦🇪 阿联酋', reason:'客户再次访问官网并查看储能电源详情页 3 次', stage:'需求确认', last:'25 分钟前', action:'主动触达', suggest:'高意向信号，可直接发报价单 + WhatsApp 沟通' },
  ];
  const statCards = [
    { label:'今日待办', value:'9', sub:'较昨日 +3', icon:'📋', cls:'primary' },
    { label:'紧急跟进', value:'1', sub:'需立即处理', icon:'🔥', cls:'danger' },
    { label:'新询盘', value:'1', sub:'12 分钟内', icon:'✨', cls:'success' },
    { label:'待回款/下单', value:'2', sub:'需动作', icon:'💳', cls:'warning' },
  ];
  const filterBtns = [
    {k:'all',label:'全部',n:9},{k:'urgent',label:'紧急',n:1},{k:'customer',label:'客户跟进',n:4},
    {k:'mail',label:'邮件',n:1},{k:'biz',label:'商机',n:1},{k:'order',label:'订单/回访',n:2},
  ];
  const matchType = (t) => {
    if (aiTodoFilter === 'all') return true;
    if (aiTodoFilter === 'urgent') return t.tag === 'danger';
    if (aiTodoFilter === 'customer') return ['紧急','新询盘','二次咨询','长时间未跟进','网站再次访问'].includes(t.type);
    if (aiTodoFilter === 'mail') return t.type === '未回复邮件';
    if (aiTodoFilter === 'biz') return t.type === '商机停滞';
    if (aiTodoFilter === 'order') return ['已付款待下单','已签收待回访'].includes(t.type);
    return true;
  };
  const list = todos.filter(matchType);
  return `
    <div class="page-header">
      <h1 class="page-title">全局 AI 待办中心 <span class="ai-badge">AI</span></h1>
      <div class="page-actions">
        <button class="btn btn-sm" onclick="showToast('已按 AI 优先级重排')">🔄 AI 重排优先级</button>
        <button class="btn btn-sm btn-primary" onclick="showToast('已开始批量执行待办')">⚡ 一键处理今日待办</button>
      </div>
    </div>
    <div class="text-sm text-muted mb-16">AI 汇总新询盘、未回复邮件、商机停滞、已付款未下单、已签收待回访、客户再次访问等全部信号，按优先级排序，业务员只需看这一个列表。</div>
    <div class="grid-4 mb-16">
      ${statCards.map(s => `<div class="card stat-card stat-${s.cls}"><div class="stat-icon">${s.icon}</div><div><div class="stat-value">${s.value}</div><div class="stat-label">${s.label}</div><div class="text-sm text-muted">${s.sub}</div></div></div>`).join('')}
    </div>
    <div class="card">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">今日跟进列表</div>
        <div class="btn-group">
          ${filterBtns.map(f => `<button class="btn btn-sm ${aiTodoFilter===f.k?'btn-primary':''}" onclick="setAiTodoFilter('${f.k}')">${f.label}(${f.n})</button>`).join('')}
        </div>
      </div>
      ${list.length === 0 ? `<div style="text-align:center;padding:60px;color:var(--text-muted)">🎉 当前筛选下暂无待办</div>` : list.map((t,i) => `
        <div class="ai-todo-card ${t.tag}">
          <div class="ai-todo-left">
            <div class="ai-todo-icon">${t.icon}</div>
            <div>
              <div class="ai-todo-title">
                <span class="table-tag ${t.tag}">${t.type}</span>
                <span class="text-bold">${t.customer}</span>
                <span class="text-sm text-muted">${t.country} · ${t.stage}</span>
                <span class="text-sm text-muted">· ${t.last}</span>
              </div>
              <div class="text-sm" style="margin-top:6px;color:var(--text-secondary)">${t.reason}</div>
              <div class="ai-todo-suggest"><span class="ai-badge">AI 建议</span> ${t.suggest}</div>
              <div class="ai-todo-actions">
                <button class="btn btn-sm btn-primary" onclick="openAiTodoAction('${t.action}','${t.customer}')">${t.action}</button>
                <button class="btn btn-sm" onclick="openAiTodoCoach('${t.customer}',\`${t.suggest.replace(/`/g,'')}\`)">📝 话术建议</button>
                <button class="btn btn-sm btn-text" onclick="showToast('已暂缓该待办，明日再提醒')">暂缓</button>
                <button class="btn btn-sm btn-text" onclick="showToast('已忽略该待办')">忽略</button>
              </div>
            </div>
          </div>
          <div class="ai-todo-prio">#${i+1}</div>
        </div>
      `).join('')}
    </div>
  `;
};

function setAiTodoFilter(k) { aiTodoFilter = k; renderContent(); }

function openAiTodoAction(action, customer) {
  openDrawer(action + ' · ' + customer, `
    <div class="alert alert-info mb-16">💡 AI 已根据该客户历史聊天、邮件与订单数据生成跟进草稿，可直接编辑后发送。</div>
    ${renderFormField('跟进渠道','select',{options:['邮件','WhatsApp','站内信','电话']})}
    ${renderFormField('主题','text',{placeholder:'AI 自动生成：关于您上次询价的报价方案'})}
    <div class="form-group">
      <label class="form-label">AI 跟进草稿 <span class="ai-badge">AI</span></label>
      <textarea class="form-textarea" style="min-height:160px">您好 ${customer}，感谢您对我们产品的关注。基于您上次的询价需求，我们准备了专属报价方案，附件为正式 PI。为保障交期，建议本周内确认订单，期待您的回复。</textarea>
    </div>
    <div class="text-sm text-muted mt-12">该草稿已参考客户偏好：重视交期、价格敏感度中等、偏好简洁直入主题。</div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn" onclick="closeDrawer();showToast('已保存草稿')">存草稿</button><button class="btn btn-primary" onclick="closeDrawer();showToast('已发送并自动生成跟进记录')">发送</button>`);
}

function openAiTodoCoach(customer, suggest) {
  openDrawer('AI 跟进话术 · ' + customer, `
    <div class="card" style="background:var(--primary-light)">
      <div class="text-bold mb-8">为什么要跟进</div>
      <div class="text-sm">AI 综合聊天频次、报价停留时长、网站访问行为判断该客户当前处于决策窗口期，延迟跟进流失风险高。</div>
    </div>
    <div class="card mt-12">
      <div class="text-bold mb-8">客户最近聊了什么</div>
      <div class="text-sm text-secondary">· 询问了 500W 储能电源的 MOQ 与交期<br/>· 提到竞对报价比我方低 5%<br/>· 关心售后与质保政策</div>
    </div>
    <div class="card mt-12">
      <div class="text-bold mb-8">推荐回复方向 <span class="ai-badge">AI</span></div>
      <div class="text-sm">${suggest}</div>
    </div>
    <div class="card mt-12">
      <div class="text-bold mb-8">注意事项</div>
      <div class="text-sm text-secondary">· 该客户不喜欢模板化话术，建议个性化开头<br/>· 历史沟通偏好邮件 + WhatsApp 双通道<br/>· 已多次询价未成交，避免频繁催促</div>
    </div>
  `, `<button class="btn" onclick="closeDrawer()">关闭</button><button class="btn btn-primary" onclick="closeDrawer();navigateTo('ai-assistant','ai-reply-coach')">进入话术工作台</button>`);
}

// P0-2 线索自动处理链路
PAGE_RENDERERS['ai-lead-pipeline'] = () => {
  const steps = [
    { n:1, title:'网站表单提交', desc:'客户在独立站提交询盘表单', icon:'📝', status:'done', detail:'表单字段：邮箱、电话、店铺名、社媒、国家、城市、产品兴趣' },
    { n:2, title:'自动提取信息', desc:'AI 提取邮箱/电话/店铺名/社媒/国家/城市', icon:'🔍', status:'done', detail:'ana.silva@xxx.com · +55-11-xxxx · Loja Ana · Instagram@ana.silva · 巴西·圣保罗' },
    { n:3, title:'自动背调', desc:'抓取官网/FB/IG/LinkedIn/Google/店铺页面', icon:'🌐', status:'done', detail:'店铺规模：中型 · 主营户外电源 · 年采购约 $200K · 真实买家 ✓' },
    { n:4, title:'查重 / 去重', desc:'按邮箱+电话+店铺名查重', icon:'🔄', status:'done', detail:'查重结果：系统中无匹配客户 → 判定为新客户' },
    { n:5, title:'建档 / 更新动态', desc:'新客户自动建档，老客户更新动态并提醒负责人', icon:'📇', status:'active', detail:'新建客户「Ana Silva」· 自动填充背调信息 · 关联产品兴趣' },
    { n:6, title:'自动分配业务员', desc:'按国家/客户类型/产品/业务规则分配', icon:'🎯', status:'pending', detail:'规则：巴西市场 + 户外电源 → 分配给 Camila（拉美区负责）' },
    { n:7, title:'生成跟进待办', desc:'自动创建首次跟进待办并入待办中心', icon:'✅', status:'pending', detail:'待办：30 分钟内首询回复 · 推荐便携款 EP-500' },
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">线索自动处理链路 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm" onclick="openAiLeadRuleDrawer()">⚙ 分配规则配置</button></div>
    </div>
    <div class="text-sm text-muted mb-16">网站表单 → 自动背调 → 查重去重 → 建档/更新 → 自动分配 → 生成待办，全链路自动化，减少客服与业务重复查重建档。</div>
    <div class="card mb-16">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">实时处理示例 · Ana Silva（巴西新询盘）</div>
        <div class="btn-group">
          <button class="btn btn-sm" onclick="showToast('已重放该线索处理流程')">▶ 重放链路</button>
          <button class="btn btn-sm btn-primary" onclick="showToast('已确认建档并分配给 Camila')">确认分配</button>
        </div>
      </div>
      <div class="ai-pipeline">
        ${steps.map((s,idx) => `
          <div class="ai-pipeline-step ${s.status}">
            <div class="ai-pipeline-node">
              <div class="ai-pipeline-icon">${s.icon}</div>
              ${idx < steps.length-1 ? '<div class="ai-pipeline-line"></div>' : ''}
            </div>
            <div class="ai-pipeline-body">
              <div class="ai-pipeline-title"><span class="ai-pipeline-num">${s.n}</span> ${s.title} ${s.status==='done'?'<span class="table-tag success">已完成</span>':s.status==='active'?'<span class="table-tag primary">处理中</span>':'<span class="table-tag muted">待执行</span>'}</div>
              <div class="text-sm text-muted">${s.desc}</div>
              <div class="ai-pipeline-detail">${s.detail}</div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">今日线索处理统计</div>
      ${renderTable(
        ['来源渠道','新线索','自动建档','查重合并','已分配','平均响应'],
        [
          ['独立站表单','12','10','2','10','3 分钟'],
          ['阿里询盘','8','7','1','7','5 分钟'],
          ['展会扫码','3','3','0','3','12 分钟'],
          ['邮件询盘','5','4','1','4','8 分钟'],
        ],
        { total:28, pageSize:20 }
      )}
    </div>
  `;
};

function openAiLeadRuleDrawer() {
  openDrawer('线索自动分配规则', `
    <div class="alert alert-info mb-16">💡 规则按从上到下顺序匹配，命中即停。支持按国家、客户类型、产品兴趣、业务员负载分配。</div>
    ${renderTable(
      ['优先级','匹配条件','分配给','状态'],
      [
        ['1','国家=巴西 AND 产品=户外电源','Camila','<span class="table-tag success">启用</span>'],
        ['2','国家=美国 AND 客户类型=批发','张伟','<span class="table-tag success">启用</span>'],
        ['3','国家=德国','Hans','<span class="table-tag success">启用</span>'],
        ['4','客户类型=C端','公共客服组','<span class="table-tag muted">暂停</span>'],
        ['5','兜底：按业务员负载轮询','负载最低者','<span class="table-tag success">启用</span>'],
      ],
      { total:5, pageSize:20 }
    )}
    <div class="mt-12"><button class="btn btn-sm btn-primary">+ 新增规则</button></div>
  `, `<button class="btn" onclick="closeDrawer()">关闭</button><button class="btn btn-primary" onclick="closeDrawer();showToast('规则已保存')">保存规则</button>`);
}

// P0-3 CRM 与 ERP 深度打通
PAGE_RENDERERS['ai-erp-sync'] = () => {
  const fields = [
    ['订单','tx-order','已同步 1,240 单','success'],
    ['发票','tx-invoice','已同步 980 张','success'],
    ['付款','ai-payment-ledger','已同步 856 笔','success'],
    ['预售发票号','erp','待打通','warning'],
    ['实际成交金额','erp','已同步，与商机金额比对中','info'],
    ['产品明细 / SPU-SKU','tx-product','已同步 3,200 个','success'],
    ['款式 / 颜色 / 网底','erp','已同步','success'],
    ['男款 / 女款','erp','已同步','success'],
    ['发货状态','erp','已同步 1,180 单','success'],
    ['物流状态','erp','已对接 4 家物流商','success'],
    ['签收状态','erp','已同步 1,050 单','success'],
    ['退换货记录','erp','已同步 32 条','success'],
  ];
  const tabs = [
    {label:'同步字段',count:12},{label:'同步日志'},{label:'异常对账'},
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">CRM 与 ERP 深度打通 <span class="ai-badge">AI</span></h1>
      <div class="page-actions">
        <button class="btn btn-sm" onclick="showToast('已触发全量同步')">🔄 立即全量同步</button>
        <button class="btn btn-sm btn-primary" onclick="openAiErpConnDrawer()">⚙ 连接配置</button>
      </div>
    </div>
    <div class="text-sm text-muted mb-16">打通 ERP 订单、发票、付款、产品明细、物流签收、退换货等关键数据，业务员在 CRM 即可看到客户完整交易链路。</div>
    <div class="grid-3 mb-16">
      <div class="card stat-card stat-success"><div class="stat-icon">🔗</div><div><div class="stat-value">12</div><div class="stat-label">已打通字段</div></div></div>
      <div class="card stat-card stat-primary"><div class="stat-icon">⏱</div><div><div class="stat-value">3 分钟</div><div class="stat-label">同步频率</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">⚠️</div><div><div class="stat-value">1</div><div class="stat-label">待打通字段</div></div></div>
    </div>
    <div class="card">
      ${renderTabs(tabs, 0, 'aiErp')}
      ${renderTabPanels('aiErp', [
        `<div class="mt-12">${renderTable(
          ['数据类型','对应模块','同步状态','操作'],
          fields.map(f => [f[0], `<span class="text-primary">${f[1]}</span>`, `<span class="table-tag ${f[3]}">${f[2].startsWith('已同步')?'已同步':f[2].startsWith('待')?'待打通':'同步中'}</span><div class="text-sm text-muted">${f[2]}</div>`, `<button class="btn btn-sm btn-text" onclick="showToast('已手动同步 ${f[0]}')">立即同步</button>`]),
          { total:12, pageSize:20 }
        )}</div>`,
        `<div class="mt-12">${renderTable(
          ['时间','数据类型','方向','记录数','结果'],
          [
            ['10:32:05','订单','ERP→CRM','45','<span class="table-tag success">成功</span>'],
            ['10:29:11','付款','ERP→CRM','12','<span class="table-tag success">成功</span>'],
            ['10:26:03','物流','ERP→CRM','88','<span class="table-tag success">成功</span>'],
            ['10:23:00','预售发票号','ERP→CRM','0','<span class="table-tag warning">字段缺失</span>'],
          ],
          { total:4, pageSize:20 }
        )}</div>`,
        `<div class="mt-12"><div class="alert alert-warning mb-12">⚠ 检测到 1 处异常：商机金额 $45,000 与 ERP 实际成交 $43,200 不一致，需业务确认。</div>${renderTable(
          ['客户','商机金额','ERP 成交','差异','状态'],
          [
            ['Hair Extensions 整柜','$45,000','$43,200','-$1,800','<span class="table-tag warning">待确认</span>'],
            ['DLBV 特单','¥120,000','¥120,000','¥0','<span class="table-tag success">一致</span>'],
            ['ABC Company','$78,000','$78,000','$0','<span class="table-tag success">一致</span>'],
          ],
          { total:3, pageSize:20 }
        )}</div>`,
      ])}
    </div>
  `;
};

function openAiErpConnDrawer() {
  openDrawer('ERP 连接配置', `
    ${renderFormField('ERP 系统','select',{options:['用友 U8','金蝶 K3','SAP B1','自研 ERP']})}
    ${renderFormField('API 地址','text',{placeholder:'https://erp.company.com/api'})}
    ${renderFormField('同步频率','select',{options:['实时','每 3 分钟','每 10 分钟','每小时','每天']})}
    ${renderFormField('自动回写商机','select',{options:['开启 · ERP 成交后自动赢单并更新金额','关闭 · 人工确认']})}
    <div class="alert alert-info mt-12">💡 开启自动回写后，ERP 订单成交将自动把对应商机标记为赢单，并用实际成交金额覆盖预计金额。</div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('连接配置已保存')">保存</button>`);
}

// P0-4 商机自动流转
PAGE_RENDERERS['ai-biz-auto'] = () => {
  const rules = [
    { trigger:'聊天中出现「报价/PI/付款链接/确认需求」', action:'自动创建商机', enabled:true },
    { trigger:'AI 识别客户确认报价', action:'推进到「谈判报价」', enabled:true },
    { trigger:'ERP 生成订单/收到付款', action:'自动标记赢单', enabled:true },
    { trigger:'ERP 实际成交金额入账', action:'自动更新商机金额', enabled:true },
    { trigger:'AI 金额 vs ERP 金额不一致', action:'提醒业务确认', enabled:true },
    { trigger:'商机停滞超 10 天', action:'进入待办提醒', enabled:true },
    { trigger:'客户明确拒绝', action:'自动标记输单', enabled:false },
  ];
  const stages = ['新询盘','已联系','需求确认','报价','PI','已付款','已下单','已发货','已签收'];
  return `
    <div class="page-header">
      <h1 class="page-title">商机自动流转 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiBizRuleDrawer()">+ 新建自动规则</button></div>
    </div>
    <div class="text-sm text-muted mb-16">AI 根据聊天/邮件/ERP 订单自动创建商机、推进阶段、赢单并更新实际成交金额，让商机看板真实反映销售进展。</div>
    <div class="card mb-16">
      <div class="card-title mb-12">商机阶段自动推进路径</div>
      <div class="ai-stage-flow">
        ${stages.map((s,i) => `<div class="ai-stage-node">${s}</div>${i<stages.length-1?'<div class="ai-stage-arrow">→</div>':''}`).join('')}
      </div>
      <div class="text-sm text-muted mt-12">每个阶段的推进由 AI 自动判定，无需人工拖拽。点击阶段查看触发条件。</div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">自动化规则</div>
      ${renderTable(
        ['触发条件','自动动作','状态','操作'],
        rules.map(r => [
          r.trigger,
          `<span class="text-primary">${r.action}</span>`,
          r.enabled ? '<span class="table-tag success">启用</span>' : '<span class="table-tag muted">停用</span>',
          `<div class="btn-group"><button class="btn btn-sm btn-text" onclick="showToast('已${r.enabled?'停用':'启用'}该规则')">${r.enabled?'停用':'启用'}</button><button class="btn btn-sm btn-text" onclick="showToast('编辑规则')">编辑</button></div>`,
        ]),
        { total:7, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">近期自动流转记录</div>
      ${renderTable(
        ['时间','商机','自动动作','来源','结果'],
        [
          ['10:40','Hair Extensions 整柜','推进：需求确认 → 报价','AI 识别报价确认','<span class="table-tag success">成功</span>'],
          ['10:15','ABC Company','自动赢单 + 金额更新为 $78,000','ERP 订单成交','<span class="table-tag success">成功</span>'],
          ['09:52','DLBV 特单','金额异常提醒','AI vs ERP 不一致','<span class="table-tag warning">待确认</span>'],
          ['09:30','Pedro 整柜','自动创建商机','AI 识别 PI 确认','<span class="table-tag success">成功</span>'],
        ],
        { total:4, pageSize:20 }
      )}
    </div>
  `;
};

function openAiBizRuleDrawer() {
  openDrawer('新建商机自动规则', `
    ${renderFormField('规则名称','text',{placeholder:'如：收到付款自动赢单'})}
    <div class="form-group">
      <label class="form-label">触发条件</label>
      <select class="form-select">
        <option>AI 识别聊天中确认报价</option>
        <option>AI 识别发送 PI / 付款链接</option>
        <option>ERP 生成订单</option>
        <option>ERP 收到付款</option>
        <option>商机停滞 N 天</option>
        <option>客户明确拒绝</option>
      </select>
    </div>
    <div class="form-group">
      <label class="form-label">自动动作</label>
      <select class="form-select">
        <option>自动创建商机</option>
        <option>推进到指定阶段</option>
        <option>自动标记赢单</option>
        <option>更新商机金额</option>
        <option>提醒业务确认</option>
        <option>标记输单</option>
      </select>
    </div>
    ${renderFormField('金额异常阈值','text',{placeholder:'差异 > 5% 时提醒业务确认'})}
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('规则已创建并启用')">创建规则</button>`);
}

// P0-5 收款台账 / 个人收款表线上化
PAGE_RENDERERS['ai-payment-ledger'] = () => {
  const tabs = [
    {label:'全部收款',count:856},{label:'待对账',count:12,badge:true},{label:'已对账',count:832},{label:'异常提醒',count:5,badge:true},
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">收款台账 <span class="ai-badge">AI</span></h1>
      <div class="page-actions">
        <button class="btn btn-sm" onclick="openAiPaymentImportDrawer()">📥 同步支付渠道</button>
        <button class="btn btn-sm btn-primary" onclick="openAiPaymentAddDrawer()">+ 手动录入收款</button>
      </div>
    </div>
    <div class="text-sm text-muted mb-16">替代业务员各自维护的 Excel 收款表，支持手动录入 + 支付渠道自动同步，关联客户/订单/发票，自动对账并异常提醒。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-success"><div class="stat-icon">💰</div><div><div class="stat-value">$1.2M</div><div class="stat-label">本月收款</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">⏳</div><div><div class="stat-value">12</div><div class="stat-label">待对账</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">⚠️</div><div><div class="stat-value">5</div><div class="stat-label">异常提醒</div></div></div>
      <div class="card stat-card stat-primary"><div class="stat-icon">🔗</div><div><div class="stat-value">856</div><div class="stat-label">已关联订单</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="alert alert-danger mb-12">⚠ 异常提醒：Marco Rossi 称已付 $13,500 但系统未到账；Pedro Gomez 到账 $13,500 未关联订单；财务漏记 1 笔。</div>
      ${renderTable(
        ['客户','金额','收款时间','支付方式','渠道','关联订单','对账状态'],
        [
          ['ABC Company','$78,000','06-22','T/T','汇丰银行','SO-2024-1023','<span class="table-tag success">已对账</span>'],
          ['Pedro Gomez','$13,500','06-22','Alibaba Pay','阿里国际站','未关联','<span class="table-tag warning">待关联</span>'],
          ['Marco Rossi','$13,500','—','西联','—','—','<span class="table-tag danger">未到账</span>'],
          ['Yuki Tanaka','¥86,000','06-21','T/T','三菱银行','SO-2024-0987','<span class="table-tag success">已对账</span>'],
          ['Linda Chen','$22,000','06-20','PayPal','PayPal','SO-2024-0976','<span class="table-tag success">已对账</span>'],
          ['Fatima Ali','$45,000','06-20','T/T','迪拜银行','SO-2024-0965','<span class="table-tag success">已对账</span>'],
        ],
        { total:856, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">与财务 / ERP 收款对账</div>
      ${renderTabs(tabs, 0, 'aiPay')}
      <div class="text-sm text-muted mt-12">AI 自动比对系统收款与财务台账、ERP 收款数据，标记差异项供业务与财务协同处理。</div>
    </div>
  `;
};

function openAiPaymentAddDrawer() {
  openDrawer('手动录入收款', `
    ${renderFormField('客户','text',{placeholder:'搜索客户名称',required:true})}
    ${renderFormField('收款金额','text',{placeholder:'USD 13,500',required:true})}
    <div class="grid-2">
      ${renderFormField('收款时间','date',{value:'2026-06-23'})}
      ${renderFormField('币种','select',{options:['USD','EUR','GBP','CNY','JPY']})}
    </div>
    <div class="grid-2">
      ${renderFormField('支付方式','select',{options:['T/T','Alibaba Pay','PayPal','西联','信用卡']})}
      ${renderFormField('支付渠道','select',{options:['汇丰银行','阿里国际站','PayPal','三菱银行','迪拜银行']})}
    </div>
    ${renderFormField('关联订单','text',{placeholder:'SO-2024-1023（支持多选）'})}
    ${renderFormField('关联发票','text',{placeholder:'INV-2024-0567（支持多选）'})}
    ${renderFormField('备注','textarea',{placeholder:'一笔款可对应多个订单/发票'})}
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('收款已录入并进入待对账')">保存</button>`);
}

function openAiPaymentImportDrawer() {
  openDrawer('同步支付渠道收款', `
    <div class="text-sm text-muted mb-12">勾选要自动同步的支付渠道，系统将定时拉取到账记录并自动匹配客户与订单。</div>
    ${['汇丰银行（T/T）','阿里国际站（Alibaba Pay）','PayPal','三菱银行','迪拜银行','西联汇款'].map(c => `
      <div class="ai-sync-row"><input type="checkbox" checked /> <span>${c}</span> <span class="text-sm text-muted" style="margin-left:auto">上次同步 3 分钟前</span></div>
    `).join('')}
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('已立即同步各渠道收款')">立即同步</button>`);
}

// P1-1 AI 自动维护客户画像
PAGE_RENDERERS['ai-customer-profile'] = () => {
  const profile = [
    ['客户类型','批发商','订单/聊天/表单 AI 提取'],['国家/城市','巴西·圣保罗','表单自动填充'],
    ['店铺规模','中型（年采购 ~$200K）','官网+店铺页背调'],['是否批发','是','订单结构判定'],
    ['是否 C 端','否','客单价判定'],['客户性别','女','聊天称呼推断'],
    ['年龄段','35-45','社媒头像+背景推断'],['客户职位','采购负责人','LinkedIn 背调'],
    ['客户性格','务实、重交期','聊天语气分析'],['是否只谈产品','否','聊天主题分布'],
    ['是否价格敏感','中等','议价频次分析'],['活跃时间','工作日 9-12 点','邮件/消息时间分布'],
    ['最佳联系时间','周二/四 上午','回复率统计'],['购买周期','约 45 天','历史订单间隔'],
    ['复购可能性','高','同系列二次询价'],
  ];
  const prefs = [['款式偏好','便携款 > 固定款'],['颜色偏好','黑/橙'],['网底偏好','硅胶防滑'],
    ['男款/女款偏好','中性款为主'],['产品偏好','户外储能电源 300-500W']];
  return `
    <div class="page-header">
      <h1 class="page-title">AI 自动维护客户画像 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="showToast('AI 已重新扫描全部客户画像')">🔄 全量刷新画像</button></div>
    </div>
    <div class="text-sm text-muted mb-16">AI 从聊天记录、网站行为、订单数据、客户资料中自动提取并更新客户画像字段，无需人工维护。</div>
    <div class="card mb-16">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">客户画像示例 · Ana Silva</div>
        <div class="btn-group">
          <button class="btn btn-sm" onclick="navigateTo('customers','customers-detail')">查看客户详情</button>
          <button class="btn btn-sm" onclick="showToast('已人工修正画像字段')">📝 人工修正</button>
        </div>
      </div>
      <div class="text-sm text-muted mb-12">画像字段后标注来源，所有字段均可点击查看 AI 推断依据。</div>
      ${renderTable(
        ['画像字段','AI 识别值','数据来源'],
        profile.map(p => [p[0], `<span class="text-primary">${p[1]}</span>`, `<span class="text-sm text-muted">${p[2]} <a class="text-primary text-sm" onclick="showToast('查看 AI 推断依据与置信度')">查看依据</a></span>`]),
        { total:15, pageSize:20 }
      )}
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">产品偏好维度 <span class="ai-badge">AI</span></div>
      ${renderTable(['偏好维度','AI 识别结果'], prefs.map(p => [p[0], `<span class="table-tag primary">${p[1]}</span>`]), { total:5, pageSize:20 })}
    </div>
    <div class="card">
      <div class="card-title mb-12">画像维护日志</div>
      ${renderTable(
        ['时间','客户','更新字段','来源','置信度'],
        [
          ['10:40','Ana Silva','复购可能性 → 高','二次询价行为','92%'],
          ['09:15','Marco Rossi','价格敏感度 → 高','3 次议价','88%'],
          ['昨日','Yuki Tanaka','最佳联系时间 → 周一上午','回复率统计','95%'],
        ],
        { total:128, pageSize:20 }
      )}
    </div>
  `;
};

// P1-2 标签体系治理
PAGE_RENDERERS['ai-tag-governance'] = () => {
  const tags = [
    ['A 类客户','公司级','高价值、年采购 > $100K','张伟、李娜、Camila','启用'],
    ['B 类客户','公司级','中等价值、稳定复购','全员','启用'],
    ['C 类客户','公司级','低频或单次成交','全员','启用'],
    ['价格敏感','个人','Camila 个人定义：议价 ≥2 次','Camila','待对齐'],
    ['重交期','公司级','关注交期多于价格','全员','启用'],
    ['便携偏好','AI 标签','偏好便携款产品','AI 自动','启用'],
    ['拉美区','公司级','国家属拉美','全员','启用'],
    ['my-A','个人','张伟个人 ABC 标准（与公司不一致）','张伟','待对齐'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">标签体系治理 <span class="ai-badge">AI</span></h1>
      <div class="page-actions">
        <button class="btn btn-sm" onclick="showToast('已发起标签释义对齐流程')">🔗 对齐个人标签</button>
        <button class="btn btn-sm btn-primary" onclick="openAiTagAddDrawer()">+ 新建标签</button>
      </div>
    </div>
    <div class="text-sm text-muted mb-16">建立公司级/个人/AI 三类标签治理：释义、适用场景、创建权限、合并清理，并复制优秀业务员的标签体系，AI 可读标签含义。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">🏷</div><div><div class="stat-value">128</div><div class="stat-label">公司级标签</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">👤</div><div><div class="stat-value">36</div><div class="stat-label">个人标签</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">🤖</div><div><div class="stat-value">52</div><div class="stat-label">AI 标签</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">⚠️</div><div><div class="stat-value">7</div><div class="stat-label">待对齐/合并</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">标签清单</div>
      ${renderTable(
        ['标签名','类型','释义 / 适用场景','使用人','状态','操作'],
        tags.map(t => [t[0], `<span class="table-tag ${t[1]==='公司级'?'primary':t[1]==='AI 标签'?'success':'warning'}">${t[1]}</span>`, t[2], t[3], t[4]==='启用'?'<span class="table-tag success">启用</span>':'<span class="table-tag warning">'+t[4]+'</span>', `<div class="btn-group"><button class="btn btn-sm btn-text" onclick="openAiTagExplainDrawer('${t[0]}')">释义</button><button class="btn btn-sm btn-text" onclick="showToast('已发起标签合并')">合并</button></div>`]),
        { total:128, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">优秀业务员标签体系复制</div>
      <div class="text-sm text-muted mb-12">将业绩 Top 业务员的个人标签体系沉淀为公司级标准，供新人复用。</div>
      <div class="grid-3">
        ${['Camila（拉美区销冠）','张伟（北美区销冠）','Yuki（日韩区销冠）'].map(n => `
          <div class="card" style="border:1px solid var(--border)">
            <div class="text-bold mb-8">${n}</div>
            <div class="text-sm text-muted mb-12">含 12 个分层标签 + 释义</div>
            <button class="btn btn-sm btn-primary" onclick="showToast('已复制 ${n} 的标签体系为新模板')">复制为模板</button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
};

function openAiTagAddDrawer() {
  openDrawer('新建标签', `
    ${renderFormField('标签名','text',{placeholder:'如：高价值批发客户'})}
    <div class="form-group"><label class="form-label">标签类型</label><select class="form-select"><option>公司级（全员可见）</option><option>个人（仅本人）</option><option>AI 标签（自动生成）</option></select></div>
    ${renderFormField('标签释义','textarea',{placeholder:'该标签的含义，AI 会读取此释义理解标签'})}
    ${renderFormField('适用场景','text',{placeholder:'如：适用于年采购 > $100K 的批发客户'})}
    <div class="form-group"><label class="form-label">创建权限</label><select class="form-select"><option>仅管理员</option><option>主管及以上</option><option>全员可建</option></select></div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('标签已创建')">创建</button>`);
}

function openAiTagExplainDrawer(name) {
  openDrawer('标签释义 · ' + name, `
    <div class="card mb-12"><div class="text-bold mb-8">释义</div><div class="text-sm text-secondary">该标签用于标记公司认定的高价值批发客户，判定标准为年采购额超过 $100K 且复购 ≥2 次。</div></div>
    <div class="card mb-12"><div class="text-bold mb-8">适用场景</div><div class="text-sm text-secondary">用于客户分层、优先跟进、专属折扣与年度返利计算。</div></div>
    <div class="card mb-12"><div class="text-bold mb-8">AI 可读说明 <span class="ai-badge">AI</span></div><div class="text-sm text-secondary">AI 在生成跟进建议时会读取该释义，对 A 类客户优先推荐高客单新品并保留专属话术。</div></div>
    <div class="card"><div class="text-bold mb-8">使用统计</div><div class="text-sm text-secondary">当前共 86 个客户使用该标签 · 近 30 天新增 12 个。</div></div>
  `, `<button class="btn" onclick="closeDrawer()">关闭</button>`);
}

// P1-3 AI 回复建议 / 跟进话术
PAGE_RENDERERS['ai-reply-coach'] = () => {
  const todos = [
    { customer:'Marco Rossi', stage:'报价', reason:'3 次询价未回复，疑似被竞对跟进' },
    { customer:'Ana Silva', stage:'新询盘', reason:'网站表单首询，需 30 分钟内回复' },
    { customer:'Hans Müller', stage:'已联系', reason:'36 小时未回复 MOQ 询问' },
  ];
  const current = todos[0];
  return `
    <div class="page-header">
      <h1 class="page-title">AI 回复建议 / 跟进话术 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="showToast('已应用话术并发送')">📨 应用并发送</button></div>
    </div>
    <div class="text-sm text-muted mb-16">每个待办附带：为什么跟进、最近聊了什么、当前阶段、推荐回复方向、可编辑草稿、相关产品推荐与注意事项。</div>
    <div class="ai-coach-layout">
      <div class="card ai-coach-list">
        <div class="card-title mb-12">待生成话术的跟进</div>
        ${todos.map((t,i) => `
          <div class="ai-coach-item ${i===0?'active':''}" onclick="selectAiCoachItem(${i})">
            <div class="text-bold">${t.customer}</div>
            <div class="text-sm text-muted">${t.stage} · ${t.reason}</div>
          </div>
        `).join('')}
      </div>
      <div class="card ai-coach-main">
        <div class="flex-between mb-12">
          <div class="card-title mb-0">${current.customer} · 话术工作台</div>
          <div class="btn-group">
            <button class="btn btn-sm" onclick="showToast('AI 已重新生成话术')">🔄 重新生成</button>
            <button class="btn btn-sm" onclick="showToast('已切换为 WhatsApp 话术')">切换渠道</button>
          </div>
        </div>
        <div class="grid-2 mb-16">
          <div class="card" style="background:var(--primary-light);margin:0"><div class="text-bold mb-8">为什么跟进</div><div class="text-sm">${current.reason}，AI 判定处于决策窗口期，延迟跟进流失风险高。</div></div>
          <div class="card m-0"><div class="text-bold mb-8">客户最近聊了什么</div><div class="text-sm text-secondary">· 询问 500W 储能 MOQ 与交期<br/>· 提到竞对低 5%<br/>· 关心售后质保</div></div>
        </div>
        <div class="card mb-16" style="margin:0"><div class="text-bold mb-8">推荐回复方向 <span class="ai-badge">AI</span></div><div class="text-sm">主动让步 2% 并附限时 PI 挽回谈判，强调我方交期与售后优势对冲价格差异。</div></div>
        <div class="form-group">
          <label class="form-label">可编辑邮件草稿 <span class="ai-badge">AI 生成</span></label>
          <textarea class="form-textarea" style="min-height:160px">Hi Marco，感谢您对我们储能产品的持续关注。针对您提到的价格问题，我们可提供专属 2% 让步，并为本次订单提供加急交期（25 天内出货）与延长至 24 个月的质保。附件为限时 PI，有效期至本周末，期待尽快确认。</textarea>
        </div>
        <div class="card" style="margin:0;background:var(--warning-light)"><div class="text-bold mb-8" style="color:#92400e">⚠ 注意事项</div><div class="text-sm" style="color:#92400e">· 该客户不喜欢模板化话术，建议个性化开头<br/>· 偏好邮件+WhatsApp 双通道<br/>· 已多次询价未成交，避免频繁催促</div></div>
      </div>
    </div>
  `;
};

function selectAiCoachItem(i) {
  document.querySelectorAll('.ai-coach-item').forEach((el,idx) => el.classList.toggle('active', idx===i));
  showToast('已切换到该跟进的话术（原型演示）');
}

// P1-4 客户阶段自动判断
PAGE_RENDERERS['ai-stage-detect'] = () => {
  const stages = ['新询盘','已联系','需求确认','报价','PI','已付款','已下单','已发货','已签收','复购跟进','沉睡','过期','流失'];
  const customers = [
    ['Ana Silva','新询盘','表单首询，未联系','98%','<span class="table-tag primary">新询盘</span>'],
    ['Marco Rossi','报价','3 次询价未回复','85%','<span class="table-tag warning">报价</span>'],
    ['Pedro Gomez','已付款','已收 30% 定金','100%','<span class="table-tag success">已付款</span>'],
    ['James Brown','沉睡','18 天未跟进','90%','<span class="table-tag muted">沉睡</span>'],
    ['Yuki Tanaka','复购跟进','签收 7 天进入复购窗口','92%','<span class="table-tag info">复购跟进</span>'],
    ['Linda Chen','报价','二次咨询同款','80%','<span class="table-tag warning">报价</span>'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">客户阶段自动判断 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="showToast('AI 已重新判定全部客户阶段')">🔄 全量重判</button></div>
    </div>
    <div class="text-sm text-muted mb-16">AI 根据聊天、邮件、订单、行为自动判断客户所处阶段，无需人工拖拽。</div>
    <div class="card mb-16">
      <div class="card-title mb-12">阶段定义</div>
      <div class="ai-stage-flow">
        ${stages.map((s,i) => `<div class="ai-stage-node ${i>=10?'':''}" style="${i>=10?'background:#f3f4f6;color:var(--text-muted)':''}">${s}</div>${i<stages.length-1?'<div class="ai-stage-arrow">→</div>':''}`).join('')}
      </div>
      <div class="text-sm text-muted mt-12">前 9 个为活跃推进阶段，后 4 个为衰退阶段（沉睡/过期/流失），进入衰退阶段自动生成激活待办。</div>
    </div>
    <div class="card">
      <div class="card-title mb-12">AI 阶段判定结果</div>
      ${renderTable(
        ['客户','AI 判定阶段','判定依据','置信度','阶段'],
        customers,
        { total:6, pageSize:20 }
      )}
    </div>
  `;
};

// P1-5 付款与订单/发票匹配
PAGE_RENDERERS['ai-payment-match'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">付款与订单/发票匹配 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiPayMatchDrawer()">+ 手动匹配</button></div>
    </div>
    <div class="text-sm text-muted mb-16">支持一笔款对应一个/多个订单或发票；金额不一致自动提醒；AI 识别付款截图与聊天记录中的付款说明，业务最终确认归属。</div>
    <div class="grid-3 mb-16">
      <div class="card stat-card stat-success"><div class="stat-icon">✅</div><div><div class="stat-value">832</div><div class="stat-label">已匹配</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">⏳</div><div><div class="stat-value">12</div><div class="stat-label">待确认</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">⚠️</div><div><div class="stat-value">3</div><div class="stat-label">金额不一致</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="alert alert-warning mb-12">⚠ AI 识别到 3 笔付款金额与订单金额不一致，需业务确认归属。</div>
      ${renderTable(
        ['收款','客户','金额','AI 建议关联','匹配类型','状态','操作'],
        [
          ['PAY-0622-01','Pedro Gomez','$13,500','SO-2024-1023 / SO-2024-1024','一笔款 → 多订单','<span class="table-tag warning">待确认</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'已确认匹配\')">确认</button>'],
          ['PAY-0622-02','ABC Company','$78,000','SO-2024-1015','一笔款 → 一订单','<span class="table-tag success">已匹配</span>','—'],
          ['PAY-0621-03','Marco Rossi','$13,200','SO-2024-0998（差额 -$300）','金额不一致','<span class="table-tag danger">待确认</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'已确认差额为手续费\')">确认</button>'],
          ['PAY-0620-04','Linda Chen','$22,000','INV-2024-0567 / INV-2024-0568','一笔款 → 多发票','<span class="table-tag success">已匹配</span>','—'],
        ],
        { total:12, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">AI 付款识别</div>
      <div class="grid-2">
        <div class="card m-0"><div class="text-bold mb-8">📸 付款截图识别</div><div class="text-sm text-muted">上传客户付款截图，AI 自动识别金额、币种、渠道与流水号，并匹配订单。</div><button class="btn btn-sm mt-12" onclick="showToast('请上传付款截图')">上传截图识别</button></div>
        <div class="card m-0"><div class="text-bold mb-8">💬 聊天记录识别</div><div class="text-sm text-muted">AI 自动扫描聊天记录中"已付/转账/水单"等关键词，提取付款说明并提示匹配。</div><button class="btn btn-sm mt-12" onclick="showToast('AI 已扫描近 7 天聊天记录，发现 2 条付款说明')">扫描聊天记录</button></div>
      </div>
    </div>
  `;
};

function openAiPayMatchDrawer() {
  openDrawer('手动匹配付款', `
    ${renderFormField('选择收款','select',{options:['PAY-0622-01 · Pedro Gomez · $13,500']})}
    ${renderFormField('关联订单','text',{placeholder:'可输入多个订单号，逗号分隔'})}
    ${renderFormField('关联发票','text',{placeholder:'可输入多个发票号，逗号分隔'})}
    <div class="alert alert-info mt-12">💡 一笔款可对应多个订单或多个发票，系统会自动校验金额合计是否一致。</div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('匹配已提交，待业务确认')">提交匹配</button>`);
}

// P1-6 物流/签收/回访提醒
PAGE_RENDERERS['ai-logistics-followup'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">物流 / 签收 / 回访提醒 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm" onclick="openAiLogisticsRuleDrawer()">⚙ 提醒规则</button></div>
    </div>
    <div class="text-sm text-muted mb-16">根据 ERP/物流数据自动生成待办：已发货提醒、物流异常、已签收、签收后 N 天回访、客户未回复提醒、AI 辅助回复订单状态。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">🚚</div><div><div class="stat-value">18</div><div class="stat-label">在途</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">⚠️</div><div><div class="stat-value">2</div><div class="stat-label">物流异常</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">📦</div><div><div class="stat-value">5</div><div class="stat-label">待回访</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">🔔</div><div><div class="stat-value">7</div><div class="stat-label">客户未回复</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">物流待办列表</div>
      ${renderTable(
        ['类型','客户','订单','物流状态','AI 动作','操作'],
        [
          ['已发货','Marco Rossi','SO-2024-1023','已发货 3 天 · 预计 06-28 到达','<span class="ai-badge">AI</span> 主动告知客户预计到达','<button class="btn btn-sm btn-text" onclick="showToast(\'AI 已生成物流通知\')">通知客户</button>'],
          ['物流异常','Fatima Ali','SO-2024-1018','清关延误 2 天','<span class="ai-badge">AI</span> 提醒业务跟进清关','<button class="btn btn-sm btn-text" onclick="showToast(\'已联系货代\')">跟进</button>'],
          ['已签收','Yuki Tanaka','SO-2024-0987','已签收 7 天','<span class="ai-badge">AI</span> 进入复购回访窗口','<button class="btn btn-sm btn-text" onclick="showToast(\'已生成回访待办\')">回访</button>'],
          ['未回复','James Brown','SO-2024-0976','已签收 3 天，回访未回复','<span class="ai-badge">AI</span> 二次回访提醒','<button class="btn btn-sm btn-text" onclick="showToast(\'已发送二次回访\')">再次回访</button>'],
        ],
        { total:7, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">AI 辅助回复订单状态</div>
      <div class="text-sm text-muted mb-12">客户询问订单状态时，AI 自动查询物流并生成回复草稿。</div>
      <div class="card" style="margin:0;background:var(--bg)"><div class="text-sm text-secondary">客户：<i>"我的货到了吗？"</i></div><div class="text-sm mt-8 text-secondary">AI 回复草稿：</div><div class="text-sm mt-8">您好 Yuki，您的订单 SO-2024-0987 已于 06-16 签收，物流单号 SF1234567890。如有任何售后问题随时联系我们。</div></div>
    </div>
  `;
};

function openAiLogisticsRuleDrawer() {
  openDrawer('物流提醒规则', `
    ${renderTable(
      ['规则','触发','动作','状态'],
      [
        ['已发货提醒','订单标记已发货','通知客户预计到达','<span class="table-tag success">启用</span>'],
        ['物流异常','清关延误 / 滞留 > 24h','提醒业务跟进','<span class="table-tag success">启用</span>'],
        ['已签收提醒','物流签收','通知客户并生成回访待办','<span class="table-tag success">启用</span>'],
        ['签收后回访','签收后 N 天','生成复购回访待办','<span class="table-tag success">启用</span>'],
        ['客户未回复','回访后 3 天未回复','二次回访提醒','<span class="table-tag success">启用</span>'],
      ],
      { total:5, pageSize:20 }
    )}
    <div class="form-group mt-12"><label class="form-label">签收后回访天数</label><input class="form-input" type="number" value="7" /></div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('规则已保存')">保存</button>`);
}

// P1-7 客户知识库 / 备调资料在线编辑
PAGE_RENDERERS['ai-customer-kb'] = () => {
  const docs = [
    { title:'客户备调资料', icon:'🌐', time:'2 小时前编辑', desc:'官网/社媒/店铺背调汇总' },
    { title:'客户特殊要求', icon:'📌', time:'昨日编辑', desc:'包装、标签、认证等特殊要求' },
    { title:'客户名词解释', icon:'📖', time:'3 天前编辑', desc:'客户常用术语与对应我方产品' },
    { title:'客户产品偏好', icon:'🎯', time:'5 天前编辑', desc:'款式/颜色/网底偏好记录' },
    { title:'客户历史问题', icon:'🐛', time:'1 周前编辑', desc:'历史客诉与解决方案' },
    { title:'交接说明', icon:'📤', time:'2 周前编辑', desc:'业务交接时的注意事项' },
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">客户知识库 / 在线编辑 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiKbNewDrawer()">+ 新建文档</button></div>
    </div>
    <div class="text-sm text-muted mb-16">客户级在线知识库：备调资料、特殊要求、名词解释、产品偏好、历史问题、交接说明。支持在线编辑、修改记录与权限控制，无需反复上传文档。</div>
    <div class="flex-between mb-12">
      ${renderFormField('当前客户','select',{options:['Ana Silva · 巴西 · 批发','Marco Rossi · 意大利 · 批发','Pedro Gomez · 西班牙 · 批发']})}
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">知识库文档</div>
      <div class="grid-3">
        ${docs.map(d => `
          <div class="card ai-kb-doc" style="border:1px solid var(--border);cursor:pointer" onclick="openAiKbEditDrawer('${d.title}')">
            <div style="font-size:28px;margin-bottom:8px">${d.icon}</div>
            <div class="text-bold mb-4">${d.title}</div>
            <div class="text-sm text-muted mb-12">${d.desc}</div>
            <div class="flex-between">
              <span class="text-sm text-muted">${d.time}</span>
              <span class="text-primary text-sm">编辑 →</span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">修改记录</div>
      ${renderTable(
        ['时间','文档','操作人','改动','版本'],
        [
          ['10:40','客户特殊要求','Camila','新增：需提供 CE 认证','v3'],
          ['昨日','客户备调资料','AI 自动','更新店铺规模与主营品类','v5'],
          ['3 天前','交接说明','张伟','从 Marco 交接给 Camila','v2'],
        ],
        { total:18, pageSize:20 }
      )}
    </div>

    <div class="card" style="margin-top:16px">
      <div class="flex-between mb-4">
        <div class="card-title">产品偏好维度 <span class="ai-badge">AI</span></div>
        <button class="btn btn-sm" onclick="navigateTo('ai-assistant','ai-customer-profile')">查看客户画像 →</button>
      </div>
      <div class="text-sm text-muted mb-16">在客户层沉淀产品维度数据：买过/询过哪些产品、款式/颜色/网底/男女款偏好、国家区域产品偏好、客户产品标签。AI 自动从订单与询价结构中识别偏好维度。</div>
      <div class="grid-2 mb-16">
        <div class="card" style="margin:0;border:1px solid var(--border-light)">
          <div class="card-title mb-12">买过的产品</div>
          ${renderTable(
            ['产品','SPU','SKU','数量','金额'],
            [
              ['户外储能电源 EP-300','EP-300','EP-300-BLK','50','$15,000'],
              ['户外储能电源 EP-500','EP-500','EP-500-ORG','30','$13,500'],
            ],
            { total:2, pageSize:20 }
          )}
        </div>
        <div class="card" style="margin:0;border:1px solid var(--border-light)">
          <div class="card-title mb-12">询过未买的产品</div>
          ${renderTable(
            ['产品','SPU','询价次数','最近询价'],
            [
              ['户外储能电源 EP-1000','EP-1000','2','3 天前'],
              ['便携太阳能板','SP-100','1','1 周前'],
            ],
            { total:2, pageSize:20 }
          )}
        </div>
      </div>
      <div class="card" style="margin:0 0 16px;border:1px solid var(--border-light)">
        <div class="card-title mb-12">偏好维度 <span class="ai-badge">AI 自动识别</span></div>
        ${renderTable(
          ['偏好维度','偏好值','数据来源'],
          [
            ['款式偏好','便携款 > 固定款','订单+询价结构'],
            ['颜色偏好','黑 / 橙','订单 SKU 分析'],
            ['网底偏好','硅胶防滑','订单属性'],
            ['男款/女款偏好','中性款为主','订单属性'],
            ['国家区域偏好','拉美市场偏好便携中容量','区域订单聚合'],
          ],
          { total:5, pageSize:20 }
        )}
      </div>
      <div class="card" style="margin:0;border:1px solid var(--border-light)">
        <div class="card-title mb-12">区域产品偏好分析</div>
        <div class="text-sm text-muted mb-12">按国家/区域聚合客户产品偏好，指导备货与新品开发。</div>
        ${renderTable(
          ['区域','热门品类','热门款式','热门颜色','平均客单'],
          [
            ['拉美','户外储能电源','便携款 300-500W','黑/橙','$450'],
            ['北美','家用储能','固定款 1-3KW','黑/白','$1,200'],
            ['日韩','便携储能','便携款 300W','白/粉','$380'],
            ['欧洲','家用储能','固定款 3-5KW','黑','$2,100'],
          ],
          { total:4, pageSize:20 }
        )}
      </div>
    </div>
  `;
};

function openAiKbEditDrawer(title) {
  openDrawer('在线编辑 · ' + title, `
    <div class="flex-between mb-12">
      <div class="text-sm text-muted">支持多人协同编辑，自动保存修改记录</div>
      <div class="btn-group"><button class="btn btn-sm" onclick="showToast('已查看修改记录')">📜 修改记录</button><button class="btn btn-sm" onclick="showToast('已设置文档权限')">🔒 权限</button></div>
    </div>
    <div class="form-group">
      <label class="form-label">文档内容（云文档式在线编辑）</label>
      <textarea class="form-textarea" style="min-height:240px">【${title}】

1. 客户主营户外储能电源，年采购约 $200K
2. 重视交期，偏好 25 天内出货
3. 价格敏感度中等，可接受 2-3% 让步
4. 需提供 CE 认证与英文包装
5. 最佳联系时间：周二/四 上午（当地时间）</textarea>
    </div>
    <div class="text-sm text-muted">✓ 已自动保存至云端，团队成员可实时查看最新版本。</div>
  `, `<button class="btn" onclick="closeDrawer()">关闭</button><button class="btn btn-primary" onclick="closeDrawer();showToast('已保存并通知协作成员')">保存并通知</button>`);
}

function openAiKbNewDrawer() {
  openDrawer('新建知识库文档', `
    ${renderFormField('文档标题','text',{placeholder:'如：客户认证要求'})}
    <div class="form-group"><label class="form-label">文档类型</label><select class="form-select"><option>备调资料</option><option>特殊要求</option><option>名词解释</option><option>产品偏好</option><option>历史问题</option><option>交接说明</option><option>自定义</option></select></div>
    <div class="form-group"><label class="form-label">可见范围</label><select class="form-select"><option>仅负责人与主管</option><option>本团队</option><option>全员</option></select></div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('文档已创建')">创建</button>`);
}

// P1-8 字段清理与合并
PAGE_RENDERERS['ai-field-governance'] = () => {
  const fields = [
    ['客户名称','当前 CRM','高频','必填','正常'],
    ['客户代号','询盘云迁移','高频','必填','正常'],
    ['国家','当前 CRM','高频','必填','正常'],
    ['联系人电话','询盘云迁移','高频','非必填','与「手机号」重复'],
    ['手机号','当前 CRM','高频','非必填','与「联系人电话」重复'],
    ['客户星级','当前 CRM','中频','非必填','正常'],
    ['主营品类','新增自定义','中频','非必填','正常'],
    ['business_type','询盘云迁移','低频','非必填','建议归档'],
    ['old_source','询盘云迁移','低频','非必填','与「来源」重复'],
    ['来源','当前 CRM','高频','必填','正常'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">字段清理与合并 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="showToast('AI 已重新统计字段使用频率')">🔄 重新统计</button></div>
    </div>
    <div class="text-sm text-muted mb-16">治理询盘云迁移老字段、当前系统字段与新增自定义字段间的重复/口径不一致：使用频率统计、重复合并、历史迁移、字段归档与释义，新建客户页只展示必要字段。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">📋</div><div><div class="stat-value">86</div><div class="stat-label">总字段</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">🔁</div><div><div class="stat-value">8</div><div class="stat-label">重复字段</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">📦</div><div><div class="stat-value">14</div><div class="stat-label">建议归档</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">✨</div><div><div class="stat-value">32</div><div class="stat-label">新建页必填</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">字段清单（含来源系统与使用频率）</div>
      ${renderTable(
        ['字段','来源系统','使用频率','必填','治理建议','操作'],
        fields.map(f => [f[0], `<span class="table-tag ${f[1]==='询盘云迁移'?'warning':f[1]==='新增自定义'?'info':'primary'}">${f[1]}</span>`, `<span class="text-sm">${f[2]}</span>`, f[3], f[4]==='正常'?'<span class="table-tag success">正常</span>':`<span class="table-tag ${f[4].includes('重复')?'danger':'warning'}">${f[4]}</span>`, `<div class="btn-group"><button class="btn btn-sm btn-text" onclick="showToast('已发起字段合并')">合并</button><button class="btn btn-sm btn-text" onclick="showToast('已归档字段，历史数据保留')">归档</button></div>`]),
        { total:86, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">新建客户页字段精简</div>
      <div class="text-sm text-muted mb-12">新建客户页面只展示真正必要字段，其余字段在详情页按需补充。</div>
      <div class="ai-field-chips">${['客户名称','客户代号','国家','来源','手机号','客户星级'].map(f => `<span class="table-tag primary">${f}</span>`).join('')} <span class="text-sm text-muted">+ 26 个非必填字段默认隐藏</span></div>
    </div>
  `;
};

// P1-10 邮件打印（阅读面板内的打印抽屉）
function openMailPrintDrawer() {
  openDrawer('邮件打印', `
    <div class="flex-between mb-12">
      <div class="text-sm text-muted">一键打印当前邮件、导出 PDF，或打印客户沟通明细与订单相关邮件。</div>
      <div class="btn-group">
        <button class="btn btn-sm" onclick="showToast('已导出 PDF')">📄 导出 PDF</button>
        <button class="btn btn-sm btn-primary" onclick="showToast('已调用浏览器打印')">🖨 一键打印</button>
      </div>
    </div>
    <div class="card" style="margin:0 0 16px">
      <div class="flex-between mb-12">
        <div class="card-title mb-0">邮件预览（打印效果）</div>
        <div class="btn-group">
          <button class="btn btn-sm" onclick="showToast('已切换为 A4 纵向')">A4 纵向</button>
          <button class="btn btn-sm" onclick="showToast('已切换为 A4 横向')">A4 横向</button>
        </div>
      </div>
      <div class="ai-print-preview">
        <div class="ai-print-head">crm · 邮件打印</div>
        <div class="ai-print-row"><span>发件人：</span>John Smith &lt;john@example.com&gt;</div>
        <div class="ai-print-row"><span>收件人：</span>service@company.com</div>
        <div class="ai-print-row"><span>主题：</span>Re: Product Catalog Request</div>
        <div class="ai-print-row"><span>时间：</span>今天 14:30</div>
        <hr/>
        <div class="ai-print-body">Hi,<br/><br/>I would like to request your latest product catalog for hair products. We are particularly interested in:<br/><br/>· Men's toupee<br/>· Women's wigs<br/>· Hair extensions<br/><br/>Please send me the catalog along with your best prices for bulk orders.<br/><br/>Best regards,<br/>John Smith</div>
      </div>
    </div>
    <div class="card m-0">
      <div class="card-title mb-12">批量打印</div>
      <div class="grid-2">
        <div class="card m-0"><div class="text-bold mb-8">📋 客户沟通明细</div><div class="text-sm text-muted mb-12">按客户汇总一段时间内的全部邮件往来，打印成沟通档案。</div><button class="btn btn-sm btn-primary" onclick="showToast('已生成客户沟通明细 PDF')">生成沟通档案</button></div>
        <div class="card m-0"><div class="text-bold mb-8">📦 订单相关邮件</div><div class="text-sm text-muted mb-12">按订单关联的报价/PI/付款确认邮件打包打印，便于随订单归档。</div><button class="btn btn-sm btn-primary" onclick="showToast('已生成订单邮件 PDF 包')">生成订单邮件包</button></div>
      </div>
    </div>
  `, '<button class="btn" onclick="closeDrawer()">关闭</button>');
}

// P1-11 邮件已处理状态更直观
PAGE_RENDERERS['mail-status'] = () => {
  const tabs = [
    {label:'未处理',count:8,badge:true},{label:'已回复',count:3},{label:'已处理',count:24},{label:'全部',count:35},
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">邮件已处理状态 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm" onclick="showToast('已将全部未处理邮件标记已处理')">✓ 全部标记已处理</button></div>
    </div>
    <div class="text-sm text-muted mb-16">类似询盘云：回复后自动显示「已回复」，处理完成后显示「已处理」，未处理更突出，已处理自动从待办消失。</div>
    <div class="card">
      ${renderTabs(tabs, 0, 'aiMailStatus')}
      ${renderTabPanels('aiMailStatus', [
        `<div class="mt-12">${renderTable(
          ['状态','发件人','主题','时间','操作'],
          [
            ['<span class="table-tag danger">● 未处理</span>','Hans Müller','MOQ 与交期询问','36 小时前','<button class="btn btn-sm btn-primary" onclick="navigateTo(\'mail\',\'mail-inbox\')">立即回复</button>'],
            ['<span class="table-tag danger">● 未处理</span>','Fatima Ali','再次询价 EP-500','25 分钟前','<button class="btn btn-sm btn-primary" onclick="navigateTo(\'mail\',\'mail-inbox\')">立即回复</button>'],
            ['<span class="table-tag warning">↩ 已回复</span>','Ana Silva','网站表单首询','1 小时前','<button class="btn btn-sm" onclick="showToast(\'标记为已处理\')">标记已处理</button>'],
            ['<span class="table-tag success">✓ 已处理</span>','Linda Chen','确认订单','3 小时前','—'],
            ['<span class="table-tag success">✓ 已处理</span>','Pedro Gomez','付款水单','5 小时前','—'],
          ],
          { total:8, pageSize:20 }
        )}</div>`,
        `<div class="mt-12 text-muted placeholder-card">已回复邮件列表（原型占位）</div>`,
        `<div class="mt-12 text-muted placeholder-card">已处理邮件列表（原型占位）</div>`,
        `<div class="mt-12 text-muted placeholder-card">全部邮件列表（原型占位）</div>`,
      ])}
      <div class="text-sm text-muted mt-12">💡 规则：业务回复后自动标记「已回复」；业务点击「标记已处理」或 AI 识别无需再跟进后标记「已处理」，自动从待办消失。</div>
    </div>
  `;
};

// P1-12 自研获客策略
PAGE_RENDERERS['ai-acquisition'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">自研获客策略 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiAcqDrawer()">+ 新建获客任务</button></div>
    </div>
    <div class="text-sm text-muted mb-16">基于自身业务做获客：按目标画像/国家城市/产品偏好/已成交客户相似度找客户，接入 LinkedIn、Google、社媒、网站等高质量数据源，对线索做质量评分。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">🎯</div><div><div class="stat-value">8</div><div class="stat-label">运行中任务</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">📊</div><div><div class="stat-value">1,280</div><div class="stat-label">本周新线索</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">⭐</div><div><div class="stat-value">76</div><div class="stat-label">高质量线索</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">📈</div><div><div class="stat-value">12%</div><div class="stat-label">线索转化率</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">获客策略任务</div>
      ${renderTable(
        ['任务名','筛选条件','数据源','本周线索','平均质量','操作'],
        [
          ['拉美便携储能买家','区域=拉美 + 品类=户外储能 + 画像=批发','LinkedIn / Google / 社媒','420','<span class="table-tag success">高</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'查看线索\')">查看</button>'],
          ['欧美竞对客户相似','相似于 Top10 成交客户','网站 / Google','310','<span class="table-tag warning">中</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'查看线索\')">查看</button>'],
          ['日韩便携储能买家','区域=日韩 + 品类=便携储能','LinkedIn / 社媒','280','<span class="table-tag success">高</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'查看线索\')">查看</button>'],
          ['中东家用储能','区域=中东 + 品类=家用储能','Google / 网站','270','<span class="table-tag warning">中</span>','<button class="btn btn-sm btn-text" onclick="showToast(\'查看线索\')">查看</button>'],
        ],
        { total:8, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">数据源接入</div>
      ${renderTable(
        ['数据源','状态','本周贡献线索','质量评分','操作'],
        [
          ['LinkedIn','<span class="table-tag success">已接入</span>','520','⭐⭐⭐⭐⭐','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['Google 搜索','<span class="table-tag success">已接入</span>','380','⭐⭐⭐⭐','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['社媒（FB/IG）','<span class="table-tag success">已接入</span>','240','⭐⭐⭐','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['独立站表单','<span class="table-tag success">已接入</span>','140','⭐⭐⭐⭐⭐','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['海关贸易数据','<span class="table-tag muted">待接入</span>','—','—','<button class="btn btn-sm btn-primary" onclick="showToast(\'开始接入\')">接入</button>'],
        ],
        { total:5, pageSize:20 }
      )}
    </div>
  `;
};

function openAiAcqDrawer() {
  openDrawer('新建获客任务', `
    ${renderFormField('任务名称','text',{placeholder:'如：拉美便携储能买家'})}
    <div class="form-group"><label class="form-label">目标画像</label><select class="form-select"><option>相似于已成交 Top10 客户</option><option>自定义画像</option><option>按国家+品类</option></select></div>
    <div class="grid-2">
      ${renderFormField('目标国家/城市','text',{placeholder:'巴西 / 圣保罗'})}
      ${renderFormField('产品偏好','text',{placeholder:'户外储能电源'})}
    </div>
    <div class="form-group"><label class="form-label">数据源（多选）</label><div class="ai-sync-row"><input type="checkbox" checked /> LinkedIn</div><div class="ai-sync-row"><input type="checkbox" checked /> Google</div><div class="ai-sync-row"><input type="checkbox" checked /> 社媒</div><div class="ai-sync-row"><input type="checkbox" /> 海关数据</div></div>
    ${renderFormField('质量评分阈值','select',{options:['仅保留质量 ≥ 3 星','仅保留质量 ≥ 4 星','全部保留']})}
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('获客任务已创建并开始运行')">创建任务</button>`);
}

// P2-1 全球客户地图 / 热力图
PAGE_RENDERERS['ai-global-map'] = () => {
  const regions = [
    { region:'拉美', count:86, pct:'32%', top:'户外储能', color:'#2563eb' },
    { region:'北美', count:64, pct:'24%', top:'家用储能', color:'#16a34a' },
    { region:'欧洲', count:52, pct:'19%', top:'家用储能', color:'#ea8c00' },
    { region:'日韩', count:38, pct:'14%', top:'便携储能', color:'#0ea5e9' },
    { region:'中东', count:18, pct:'7%', top:'家用储能', color:'#dc2626' },
    { region:'其他', count:12, pct:'4%', top:'—', color:'#94a0b8' },
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">全球客户地图 / 热力图 <span class="ai-badge">AI</span></h1>
      <div class="page-actions">
        <div class="btn-group">
          <button class="btn btn-sm btn-primary" onclick="showToast('已切换为客户分布')">客户分布</button>
          <button class="btn btn-sm" onclick="showToast('已切换为成交额热力')">成交额</button>
          <button class="btn btn-sm" onclick="showToast('已切换为空白市场')">空白市场</button>
        </div>
      </div>
    </div>
    <div class="text-sm text-muted mb-16">在地图上展示已成交/询盘/潜在客户分布、国家与城市分布、产品类型与男女款占比、客户密集区与空白市场，辅助从散点获客转向区域策略获客。</div>
    <div class="grid-2 mb-16">
      <div class="card">
        <div class="card-title mb-12">全球客户热力图</div>
        <div class="ai-map">
          <svg viewBox="0 0 400 200" style="width:100%;height:auto">
            <rect x="0" y="0" width="400" height="200" fill="#f0f2f7"/>
            <!-- 简化大洲轮廓 -->
            <path d="M30 70 Q60 50 90 60 L100 110 Q70 120 40 110 Z" fill="#dbeafe" stroke="#bfdbfe"/>
            <path d="M110 50 Q160 40 200 55 L195 120 Q150 125 115 110 Z" fill="#dbeafe" stroke="#bfdbfe"/>
            <path d="M210 55 Q260 45 300 60 L295 115 Q250 120 215 105 Z" fill="#dbeafe" stroke="#bfdbfe"/>
            <path d="M310 65 Q350 55 380 75 L375 120 Q335 125 315 110 Z" fill="#dbeafe" stroke="#bfdbfe"/>
            <!-- 热力点 -->
            <circle cx="130" cy="130" r="22" fill="rgba(37,99,235,.45)"/>
            <circle cx="130" cy="130" r="10" fill="#2563eb"/>
            <circle cx="165" cy="80" r="18" fill="rgba(22,163,74,.45)"/>
            <circle cx="165" cy="80" r="9" fill="#16a34a"/>
            <circle cx="245" cy="75" r="16" fill="rgba(234,140,0,.45)"/>
            <circle cx="245" cy="75" r="8" fill="#ea8c00"/>
            <circle cx="285" cy="95" r="14" fill="rgba(14,165,233,.45)"/>
            <circle cx="285" cy="95" r="7" fill="#0ea5e9"/>
            <circle cx="255" cy="115" r="10" fill="rgba(220,38,38,.45)"/>
            <circle cx="255" cy="115" r="5" fill="#dc2626"/>
          </svg>
          <div class="ai-map-legend">
            ${regions.map(r => `<div class="ai-map-legend-item"><span style="background:${r.color}"></span>${r.region} ${r.count} (${r.pct})</div>`).join('')}
          </div>
        </div>
      </div>
      <div class="card">
        <div class="card-title mb-12">区域分布明细</div>
        ${renderTable(
          ['区域','客户数','占比','热门品类','男女款占比'],
          regions.map(r => [r.region, r.count, r.pct, r.top, '<span class="text-sm">男 55% / 女 45%</span>']),
          { total:6, pageSize:20 }
        )}
        <div class="card-title mt-16 mb-12">空白市场</div>
        <div class="text-sm text-muted mb-8">以下区域有相关需求但尚无成交客户，建议主动开发：</div>
        <div class="ai-field-chips">${['东南亚','非洲','东欧','南亚'].map(r => `<span class="table-tag warning">${r}</span>`).join('')}</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">城市级密集度 TOP</div>
      ${renderTable(
        ['城市','国家','客户数','成交额','热门品类'],
        [
          ['圣保罗','巴西','24','$280K','户外储能'],
          ['洛杉矶','美国','18','$420K','家用储能'],
          ['东京','日本','16','$95K','便携储能'],
          ['柏林','德国','14','$520K','家用储能'],
          ['迪拜','阿联酋','12','$310K','家用储能'],
        ],
        { total:5, pageSize:20 }
      )}
    </div>
  `;
};

// P2-2 地图式产品推荐与市场开发
PAGE_RENDERERS['ai-map-recommend'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">地图式产品推荐与市场开发 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="showToast('已生成区域开发方案')">📋 生成开发方案</button></div>
    </div>
    <div class="text-sm text-muted mb-16">根据某地区历史成交数据，分析该地区更喜欢的品类、主要客户类型、周边未开发客户、新客户来自该地区时推荐什么产品、空白区域是否值得开发。</div>
    <div class="flex-between mb-12">${renderFormField('选择区域','select',{options:['巴西·圣保罗','美国·洛杉矶','日本·东京','德国·柏林','阿联酋·迪拜']})}</div>
    <div class="grid-3 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">📊</div><div><div class="stat-value">86</div><div class="stat-label">该区域客户</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">💰</div><div><div class="stat-value">$1.2M</div><div class="stat-label">区域成交额</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">🎯</div><div><div class="stat-value">18</div><div class="stat-label">周边未开发</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">区域偏好分析 <span class="ai-badge">AI</span></div>
      ${renderTable(
        ['分析维度','结果','依据'],
        [
          ['更喜欢的品类','户外储能电源（占 68%）','历史订单品类分布'],
          ['主要客户类型','批发商（72%），C 端 18%','客户类型聚合'],
          ['热门款式','便携款 300-500W','订单 SKU 分析'],
          ['热门颜色','黑 / 橙','订单属性'],
          ['平均客单','$450','订单金额统计'],
          ['复购周期','约 45 天','订单间隔分析'],
        ],
        { total:6, pageSize:20 }
      )}
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">新客户来自该地区时推荐产品</div>
      <div class="ai-field-chips mb-12">${['EP-500 便携款','EP-300 便携款','便携太阳能板 SP-100'].map(p => `<span class="table-tag primary">${p}</span>`).join('')} <span class="text-sm text-muted">+ 拉美区专属配件包</span></div>
      <div class="text-sm text-muted">AI 根据该区域历史成交偏好，为来自该区域的新客户自动生成首推产品清单与话术。</div>
    </div>
    <div class="card">
      <div class="card-title mb-12">周边未开发客户</div>
      ${renderTable(
        ['客户','城市','相似度','推荐切入产品','操作'],
        [
          ['EcoPower Ltd','库里蒂巴','92%','EP-500 便携款','<button class="btn btn-sm btn-primary" onclick="showToast(\'已加入获客任务\')">加入获客</button>'],
          ['GreenStore','里约热内卢','88%','EP-300 + SP-100','<button class="btn btn-sm btn-primary" onclick="showToast(\'已加入获客任务\')">加入获客</button>'],
          ['SolarMax BR','贝洛奥里藏特','81%','EP-500','<button class="btn btn-sm btn-primary" onclick="showToast(\'已加入获客任务\')">加入获客</button>'],
        ],
        { total:18, pageSize:20 }
      )}
    </div>
  `;
};

// P2-3 短信触达 / 新品订阅
PAGE_RENDERERS['ai-sms-subscribe'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">短信触达 / 新品订阅 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiSmsSendDrawer()">📱 发起触达</button></div>
    </div>
    <div class="text-sm text-muted mb-16">客户订阅新品通知，按偏好推送新品；区分短信/邮件/社媒触达，控制发送频率，记录打开/回复/转化。</div>
    <div class="grid-4 mb-16">
      <div class="card stat-card stat-primary"><div class="stat-icon">🔔</div><div><div class="stat-value">1,240</div><div class="stat-label">订阅客户</div></div></div>
      <div class="card stat-card stat-success"><div class="stat-icon">📱</div><div><div class="stat-value">8</div><div class="stat-label">本月触达</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">📨</div><div><div class="stat-value">42%</div><div class="stat-label">打开率</div></div></div>
      <div class="card stat-card stat-danger"><div class="stat-icon">📈</div><div><div class="stat-value">6.8%</div><div class="stat-label">转化率</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">订阅偏好设置（客户侧）</div>
      ${renderTable(
        ['客户','订阅品类','偏好渠道','发送频率','状态'],
        [
          ['Ana Silva','户外储能 300-500W','短信 + WhatsApp','每周 1 次','<span class="table-tag success">已订阅</span>'],
          ['Yuki Tanaka','便携储能 300W','邮件','每月 2 次','<span class="table-tag success">已订阅</span>'],
          ['Fatima Ali','家用储能','短信','每月 1 次','<span class="table-tag success">已订阅</span>'],
          ['James Brown','—','—','—','<span class="table-tag muted">未订阅</span>'],
        ],
        { total:1240, pageSize:20 }
      )}
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">触达记录</div>
      ${renderTable(
        ['时间','新品','触达渠道','触达数','打开','回复','转化'],
        [
          ['06-22','EP-1000 家用储能','短信','420','198','32','24'],
          ['06-20','SP-100 便携太阳能板','WhatsApp','380','210','45','28'],
          ['06-18','EP-300 升级款','邮件','440','168','22','18'],
        ],
        { total:8, pageSize:20 }
      )}
    </div>
    <div class="card">
      <div class="card-title mb-12">发送频率控制</div>
      <div class="alert alert-info mb-12">💡 系统按客户订阅频率自动排队触达，避免过度打扰；C 端客户默认更适合短信触达。</div>
      <div class="ai-field-chips">${['短信：每月 ≤4 条','WhatsApp：每周 ≤1 条','邮件：每月 ≤2 封','社媒：按平台规则'].map(r => `<span class="table-tag primary">${r}</span>`).join('')}</div>
    </div>
  `;
};

function openAiSmsSendDrawer() {
  openDrawer('发起新品触达', `
    ${renderFormField('新品','select',{options:['EP-1000 家用储能','SP-100 便携太阳能板','EP-300 升级款']})}
    <div class="form-group"><label class="form-label">触达渠道（多选）</label><div class="ai-sync-row"><input type="checkbox" checked /> 短信</div><div class="ai-sync-row"><input type="checkbox" checked /> WhatsApp</div><div class="ai-sync-row"><input type="checkbox" /> 邮件</div><div class="ai-sync-row"><input type="checkbox" /> 社媒</div></div>
    ${renderFormField('目标客户','select',{options:['按新品品类匹配订阅客户（1,240）','按区域筛选','按客户标签筛选']})}
    <div class="form-group"><label class="form-label">短信内容 <span class="ai-badge">AI 生成</span></label><textarea class="form-textarea" style="min-height:120px">【OKKI】新品上架：EP-1000 家用储能电源，支持太阳能充电，限时下单享 8 折。回复 Y 了解详情，退订回 TD。</textarea></div>
    <div class="alert alert-info mt-12">预计触达 1,240 人，将遵守各客户订阅频率限制。</div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('已发起触达，可在触达记录查看效果')">立即发送</button>`);
}

// P2-4 LinkedIn / 高质量渠道数据接入
PAGE_RENDERERS['ai-linkedin-data'] = () => {
  return `
    <div class="page-header">
      <h1 class="page-title">LinkedIn / 高质量渠道数据接入 <span class="ai-badge">AI</span></h1>
      <div class="page-actions"><button class="btn btn-sm btn-primary" onclick="openAiLinkedInConnDrawer()">⚙ 接入配置</button></div>
    </div>
    <div class="text-sm text-muted mb-16">线索背调时查询 LinkedIn：识别客户职位、公司规模、客户真实性，补充 Google 搜不到的高质量客户信息。</div>
    <div class="grid-3 mb-16">
      <div class="card stat-card stat-success"><div class="stat-icon">🔗</div><div><div class="stat-value">已接入</div><div class="stat-label">LinkedIn API</div></div></div>
      <div class="card stat-card stat-primary"><div class="stat-icon">👤</div><div><div class="stat-value">860</div><div class="stat-label">已背调客户</div></div></div>
      <div class="card stat-card stat-warning"><div class="stat-icon">✓</div><div><div class="stat-value">94%</div><div class="stat-label">真实性识别率</div></div></div>
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">LinkedIn 背调结果示例</div>
      ${renderTable(
        ['客户','LinkedIn 职位','公司规模','真实性','补充信息','操作'],
        [
          ['Ana Silva','采购经理','50-200 人','<span class="table-tag success">真实买家</span>','主营户外电源，年采购 ~$200K','<button class="btn btn-sm btn-text" onclick="showToast(\'查看完整背调\')">查看</button>'],
          ['Marco Rossi','CEO','10-50 人','<span class="table-tag success">真实买家</span>','同时经营零售与批发','<button class="btn btn-sm btn-text" onclick="showToast(\'查看完整背调\')">查看</button>'],
          ['Unknown X','未找到','—','<span class="table-tag warning">待核实</span>','Google 无记录，LinkedIn 无匹配','<button class="btn btn-sm btn-text" onclick="showToast(\'建议人工核实\')">核实</button>'],
          ['Pedro Gomez','采购总监','200-500 人','<span class="table-tag success">真实买家</span>','连锁零售商采购负责人','<button class="btn btn-sm btn-text" onclick="showToast(\'查看完整背调\')">查看</button>'],
        ],
        { total:860, pageSize:20 }
      )}
    </div>
    <div class="card mb-16">
      <div class="card-title mb-12">背调流程</div>
      <div class="ai-stage-flow">
        <div class="ai-stage-node">线索进入</div><div class="ai-stage-arrow">→</div>
        <div class="ai-stage-node">查询 LinkedIn</div><div class="ai-stage-arrow">→</div>
        <div class="ai-stage-node">识别职位/规模</div><div class="ai-stage-arrow">→</div>
        <div class="ai-stage-node">真实性判定</div><div class="ai-stage-arrow">→</div>
        <div class="ai-stage-node">补充画像</div><div class="ai-stage-arrow">→</div>
        <div class="ai-stage-node">回写客户</div>
      </div>
    </div>
    <div class="card">
      <div class="card-title mb-12">已接入高质量渠道</div>
      ${renderTable(
        ['渠道','用途','状态','本周贡献','操作'],
        [
          ['LinkedIn','职位/规模/真实性识别','<span class="table-tag success">已接入</span>','420','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['Crunchbase','公司融资/规模','<span class="table-tag success">已接入</span>','180','<button class="btn btn-sm btn-text" onclick="showToast(\'配置\')">配置</button>'],
          ['海关贸易数据','真实采购记录','<span class="table-tag muted">待接入</span>','—','<button class="btn btn-sm btn-primary" onclick="showToast(\'开始接入\')">接入</button>'],
        ],
        { total:3, pageSize:20 }
      )}
    </div>
  `;
};

function openAiLinkedInConnDrawer() {
  openDrawer('LinkedIn 接入配置', `
    ${renderFormField('接入方式','select',{options:['LinkedIn 官方 API','Sales Navigator 数据','第三方合规数据源']})}
    ${renderFormField('API Key','text',{placeholder:'输入 LinkedIn API Key'})}
    ${renderFormField('背调触发时机','select',{options:['新线索进入时自动背调','人工点击背调','仅标记存疑时背调']})}
    <div class="form-group"><label class="form-label">识别字段（多选）</label><div class="ai-sync-row"><input type="checkbox" checked /> 职位</div><div class="ai-sync-row"><input type="checkbox" checked /> 公司规模</div><div class="ai-sync-row"><input type="checkbox" checked /> 真实性</div><div class="ai-sync-row"><input type="checkbox" /> 行业标签</div></div>
    <div class="alert alert-info mt-12">💡 数据使用需符合 LinkedIn 与当地隐私法规，仅用于 B2B 商务背调。</div>
  `, `<button class="btn" onclick="closeDrawer()">取消</button><button class="btn btn-primary" onclick="closeDrawer();showToast('LinkedIn 接入配置已保存')">保存</button>`);
}

// ===== Favorites =====
PAGE_RENDERERS['favorites'] = () => `
  <div class="page-header"><h1 class="page-title">常用入口</h1></div>
  <div class="grid-4">
    ${[
      {icon:'📊',label:'工作台',route:'dashboard'},
      {icon:'📧',label:'收件箱',route:'mail/mail-inbox'},
      {icon:'🔍',label:'线索列表',route:'leads/leads-list'},
      {icon:'👥',label:'客户列表',route:'customers/customers-list'},
      {icon:'💼',label:'商机列表',route:'business/business-list'},
      {icon:'📦',label:'销售订单',route:'transaction/tx-order'},
      {icon:'📅',label:'日程',route:'collaboration/collab-schedule'},
      {icon:'📈',label:'目标完成',route:'team-data/td-completion'},
    ].map(f => `
      <div class="card" style="text-align:center;cursor:pointer" onclick="navigateTo('${f.route.split('/')[0]}','${f.route.split('/')[1] || ''}')">
        <div style="font-size:32px;margin-bottom:8px">${f.icon}</div>
        <div class="text-bold">${f.label}</div>
      </div>
    `).join('')}
  </div>
`;
