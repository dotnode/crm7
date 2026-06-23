// ========== OKKI CRM H5 Prototype ==========

// ===== Navigation Config =====
const NAV_ITEMS = [
  { id: 'favorites', label: '常用', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>' },
  { id: 'dashboard', label: '工作台', icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>' },
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
    html += `<tr><td colspan="${cols.length + (opts.checkbox ? 1 : 0)}" style="text-align:center;padding:40px;color:var(--text-muted)">暂无数据</td></tr>`;
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
    <span class="page-btn">‹</span>
    ${Array.from({length: Math.min(pages, 5)}, (_, i) => `<span class="page-btn ${i === 0 ? 'active' : ''}">${i + 1}</span>`).join('')}
    ${pages > 5 ? '<span>...</span>' : ''}
    <span class="page-btn">›</span>
    <select>${[10,20,50].map(n => `<option ${n===pageSize?'selected':''}>${n} 条/页</option>`).join('')}</select>
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
  let input = '';
  switch (type) {
    case 'text': input = `<input class="form-input" type="text" placeholder="${opts.placeholder || ''}" value="${opts.value || ''}" />`; break;
    case 'select': input = `<select class="form-select">${(opts.options || []).map(o => `<option>${o}</option>`).join('')}</select>`; break;
    case 'textarea': input = `<textarea class="form-textarea" placeholder="${opts.placeholder || ''}">${opts.value || ''}</textarea>`; break;
    case 'date': input = `<input class="form-input" type="date" value="${opts.value || ''}" />`; break;
    default: input = `<input class="form-input" type="text" placeholder="${opts.placeholder || ''}" />`;
  }
  return `<div class="form-group"><label class="form-label">${label}${req}</label>${input}</div>`;
}

// ===== Drawer & Modal =====
// 写跟进入口展开为完整表单（客户/线索/商机详情页共用）
// 按 spec 6.5 动态 Tab：写题、AI写跟进、选择模板、跟进类型、快捷文本分组、正文、跟进联系人、关联业务、下次跟进日程
function expandFollowUp(el) {
  var uid = 'fu_' + Math.random().toString(36).slice(2, 8);
  el.outerHTML =
    '<div class="card mb-12 follow-up-form" id="' + uid + '">' +
      '<div class="flex-between mb-12">' +
        '<div class="form-section-title" style="margin-bottom:0">写跟进</div>' +
        '<div class="flex gap-8">' +
          '<button class="btn btn-sm" onclick="alert(\'AI 正在根据沟通记录生成跟进内容…\')">✨ AI写跟进</button>' +
          '<button class="btn btn-sm" onclick="alert(\'从跟进模板中带入标准化内容\')">📋 选择模板</button>' +
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
          '<button class="btn btn-sm btn-text" onclick="alert(\'在正文中提及成员或对象\')">@ 提及</button>' +
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
  document.getElementById('modalHeader').innerHTML = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('modalFooter').innerHTML = footerHtml || '';
  document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('active');
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
          <div style="font-size:18px;font-weight:600">Hi，欢迎回来 👋</div>
          <div class="text-muted text-sm mt-12">UTC+8 ${new Date().toLocaleString('zh-CN')}</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-sm">汇率计算器</button>
          <button class="btn btn-sm">工作台配置</button>
        </div>
      </div>
    </div>
    <div class="card mb-16">
      <div class="flex-between mb-12">
        <div class="card-title" style="margin-bottom:0">日程</div>
        <div class="btn-group">
          <button class="btn btn-sm btn-primary" onclick="openNewScheduleModal()">+ 新建日程</button>
          <div class="toggle-group">
            <button class="toggle-btn active">周</button>
            <button class="toggle-btn">月</button>
            <button class="toggle-btn">列表</button>
          </div>
          <button class="btn btn-sm">‹ 上一段</button>
          <button class="btn btn-sm">今天</button>
          <button class="btn btn-sm">下一段 ›</button>
        </div>
      </div>
      <div class="calendar-grid">
        ${['周一','周二','周三','周四','周五','周六','周日'].map(d => `<div class="calendar-day-header">${d}</div>`).join('')}
        ${Array.from({length:7}, (_, i) => {
          const d = new Date(); d.setDate(d.getDate() - d.getDay() + 1 + i);
          const isToday = d.toDateString() === new Date().toDateString();
          return `<div class="calendar-cell ${isToday ? 'today' : ''}"><div class="cell-date">${d.getMonth()+1}/${d.getDate()}</div></div>`;
        }).join('')}
      </div>
    </div>
    <div class="card">
      <div class="flex-between mb-12">
        <div>
          <div class="card-title" style="margin-bottom:0">跟进任务 <span class="ai-badge">AI</span></div>
          <div class="text-sm text-muted" style="margin-top:4px">基于 AI 分析与管理者配置，为你推荐以下跟进任务。立即行动，持续提升业绩！</div>
        </div>
        <div class="btn-group">
          <button class="btn btn-sm">显示设置</button>
          <button class="btn btn-sm">全部已读</button>
          <button class="btn btn-sm">全部忽略</button>
        </div>
      </div>
      ${[
        {title:'建议跟进客户 ABC Company', desc:'该客户15天未联系，建议尽快跟进', source:'AI 推荐'},
        {title:'回复邮件: Re: Product Inquiry', desc:'收到新询盘邮件，建议24小时内回复', source:'管理者规则'},
        {title:'商机推进: DLBV 特单', desc:'商机停留在谈判报价阶段已超过7天', source:'AI 推荐'},
      ].map(task => `
        <div class="card mb-8" style="border:1px solid var(--border-light);box-shadow:none">
          <div class="flex-between">
            <div>
              <div style="font-weight:500;margin-bottom:4px">${task.title}</div>
              <div class="text-sm text-muted">${task.desc}</div>
              <div class="text-sm" style="margin-top:4px"><span class="table-tag primary">${task.source}</span></div>
            </div>
            <div class="btn-group">
              <button class="btn btn-sm btn-primary">生成话术</button>
              <button class="btn btn-sm">生成邮件</button>
              <button class="btn btn-sm">忽略</button>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
};

// ===== 2. Mail / 邮件模块 =====
PAGE_RENDERERS['mail-inbox'] = () => {
  const emails = [
    ['John Smith', 'john@example.com', 'Re: Product Catalog Request', 'Hi, I would like to request your latest product catalog...', '14:30', '已分发邮件'],
    ['Sarah Lee', 'sarah@buyer.com', 'Order Confirmation #12345', 'Thank you for your order. Please find attached...', '11:20', ''],
    ['Mike Wilson', 'mike@trade.co', 'Re: Shipping Update', 'The shipment has been dispatched via DHL...', '09:15', '接收分发邮件'],
    ['Alice Chen', 'alice@partner.cn', 'Meeting Tomorrow', 'Hi, just confirming our meeting tomorrow at 3pm...', '昨天', ''],
    ['Bob Johnson', 'bob@corp.us', 'RFQ: Custom Products', 'We are looking for a supplier of custom...', '昨天', ''],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">收件箱</h1>
      <div class="page-actions">
        <button class="btn">高级搜索</button>
        <button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button>
      </div>
    </div>
    ${renderTabs([
      {label:'全部'}, {label:'客户'}, {label:'同事'}, {label:'通讯录'}, {label:'其他'}
    ])}
    <div class="alert alert-info mb-12">💡 使用 App 即刻处理邮件，随时随地高效办公</div>
    <div class="table-info mb-8">共 156 封 / 8 页</div>
    <div class="text-sm text-muted mb-8" style="font-weight:500">今天</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','时间','标签'],
      emails.map(e => [
        `<span class="table-link" onclick="showMailDetail()">${e[0]}</span>`,
        `<span class="text-muted">${e[1]}</span>`,
        `<span class="table-link" onclick="showMailDetail()">${e[2]}</span>`,
        `<span class="text-muted text-sm">${e[3].substring(0,30)}...</span>`,
        e[4],
        e[5] ? `<span class="table-tag primary">${e[5]}</span>` : ''
      ]),
      { checkbox: true, total: 156 }
    )}
  `;
};

PAGE_RENDERERS['mail-compose'] = () => `
  <div class="page-header">
    <h1 class="page-title">写邮件</h1>
    <div class="page-actions">
      <button class="btn btn-primary">发送</button>
      <button class="btn">存草稿</button>
      <button class="btn">预览</button>
      <button class="btn">提交审批</button>
      <button class="btn" onclick="navigateTo('mail','mail-inbox')">取消</button>
    </div>
  </div>
  <div class="card">
    ${renderFormField('发件人', 'select', {options:['service@company.com','sales@company.com']})}
    ${renderFormField('收件人', 'text', {placeholder:'输入收件人邮箱'})}
    <div class="flex gap-8 mb-8"><a class="btn-text btn-sm">+ 抄送</a><a class="btn-text btn-sm">+ 密送</a><a class="btn-text btn-sm">群发单显</a></div>
    ${renderFormField('主题', 'text', {placeholder:'邮件主题'})}
    <div class="flex-between mb-8">
      <button class="btn btn-sm" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none">✨ AI 邮件创作</button>
    </div>
    <div style="border:1px solid var(--border);border-radius:var(--radius);min-height:300px;padding:12px">
      <div style="border-bottom:1px solid var(--border-light);padding-bottom:8px;margin-bottom:12px;display:flex;gap:8px;flex-wrap:wrap">
        ${['B','I','U','S','左','中','右','H1','H2','列表','表格','链接','😀'].map(b => `<button class="btn btn-sm btn-icon" style="min-width:28px;height:28px;padding:2px">${b}</button>`).join('')}
      </div>
      <div contenteditable="true" style="min-height:200px;outline:none;color:var(--text-muted)">在此输入邮件正文...</div>
    </div>
    <div class="flex gap-8 mt-12" style="flex-wrap:wrap">
      ${['附件','云文档','模板','图片','快速文本','产品','单据','收款'].map(b => `<button class="btn btn-sm">${b}</button>`).join('')}
    </div>
    <div class="divider"></div>
    <div class="flex gap-16" style="font-size:12px;color:var(--text-secondary)">
      <span>邮件大小: 0KB</span>
      <span>签名: 默认签名</span>
    </div>
    <div class="flex gap-12 mt-12">
      <label class="form-switch"><input type="checkbox" /> 紧急</label>
      <label class="form-switch"><input type="checkbox" /> 回执</label>
      <label class="form-switch"><input type="checkbox" /> 追踪邮件</label>
      <label class="form-switch"><input type="checkbox" /> 定时发送</label>
      <label class="form-switch"><input type="checkbox" /> 标记为待处理</label>
    </div>
  </div>
`;

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
      <button class="btn btn-sm" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none">✨ AI 邮件创作</button>
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
      <button class="btn btn-sm" style="margin-left:auto">不发送</button>
      <button class="btn btn-sm btn-primary">发送</button>
    </div>
  `, '<button class="btn" onclick="closeDrawer()">关闭</button>');
}

// Mail sub-pages with mock data
PAGE_RENDERERS['mail-pending'] = () => {
  const emails = [
    ['Sarah Lee','sarah@buyer.com','Order Confirmation #12345','Thank you for your order. Please find attached the confirmation...','今天 11:20','待回复'],
    ['Bob Johnson','bob@corp.us','RFQ: Custom Products','We are looking for a supplier of custom hair products...','昨天 15:30','待回复'],
    ['Alice Chen','alice@partner.cn','Partnership Proposal','We would like to propose a strategic partnership...','昨天 09:00','待跟进'],
    ['Mike Wilson','mike@trade.co','Urgent: Shipping Delay','There has been a delay in the shipment. The new ETA is...','06-19','待处理'],
  ];
  return `
    <div class="page-header"><h1 class="page-title">待处理邮件</h1><div class="page-actions"><button class="btn" onclick="markAllProcessed()">全部标记已处理</button><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="alert alert-warning mb-12">📌 您有 ${emails.length} 封邮件待处理</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','时间','状态','操作'],
      emails.map(e => [
        '<span class="table-link" onclick="showMailDetail()">' + e[0] + '</span>',
        '<span class="text-muted">' + e[1] + '</span>',
        '<span class="table-link" onclick="showMailDetail()">' + e[2] + '</span>',
        '<span class="text-muted text-sm">' + e[3].substring(0,35) + '...</span>',
        e[4],
        '<span class="table-tag warning">' + e[5] + '</span>',
        '<button class="btn btn-sm btn-primary" onclick="showMailDetail()">处理</button> <button class="btn btn-sm" onclick="ignoreMail(this)">忽略</button>'
      ]),
      { checkbox: true, total: emails.length }
    )}
  `;
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
  return `
    <div class="page-header"><h1 class="page-title">未读邮件</h1><div class="page-actions"><button class="btn">全部标记已读</button><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="table-info mb-8">共 ${emails.length} 封未读邮件</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','时间','操作'],
      emails.map(e => [
        '<span class="table-link" onclick="showMailDetail()"><strong>' + e[0] + '</strong></span>',
        '<span class="text-muted">' + e[1] + '</span>',
        '<span class="table-link" onclick="showMailDetail()"><strong>' + e[2] + '</strong></span>',
        '<span class="text-muted text-sm">' + e[3].substring(0,35) + '...</span>',
        e[4],
        '<button class="btn btn-sm" onclick="showMailDetail()">查看</button>'
      ]),
      { checkbox: true, total: emails.length }
    )}
  `;
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
        '<button class="btn btn-sm btn-primary" onclick="openDraft()">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'
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
    <div class="page-header"><h1 class="page-title">已删除邮件</h1><div class="page-actions"><button class="btn btn-text" style="color:var(--danger)" onclick="openClearDeletedModal()">清空</button><button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写信</button></div></div>
    <div class="alert alert-warning mb-12">⚠️ 已删除邮件将在 30 天后自动永久删除</div>
    ${renderTable(
      ['发件人','邮箱','主题','摘要','删除时间','删除方式','操作'],
      deleted.map(e => [
        e[0], '<span class="text-muted">' + e[1] + '</span>',
        e[2], '<span class="text-muted text-sm">' + e[3] + '</span>',
        e[4], '<span class="table-tag">' + e[5] + '</span>',
        '<button class="btn btn-sm">恢复</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">永久删除</button>'
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
        '<button class="btn btn-sm">非垃圾邮件</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'
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
    <div class="right-content" style="padding:0 16px">
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
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--danger);margin-right:6px"></span>紧急 <span class="count">5</span></div>
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--warning);margin-right:6px"></span>重要 <span class="count">12</span></div>
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--success);margin-right:6px"></span>已处理 <span class="count">45</span></div>
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--primary);margin-right:6px"></span>询盘 <span class="count">28</span></div>
      <div class="tree-item tree-indent"><span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:#999;margin-right:6px"></span>其他 <span class="count">10</span></div>
    </div>
    <div class="right-content" style="padding:0 16px">
      <div class="table-info mb-8">标签: 紧急 · 5 封</div>
      ${renderTable(
        ['标签','发件人','主题','时间'],
        [['<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--danger);margin-right:6px"></span>紧急','Mike Wilson','Urgent: Shipping Delay','06-19'],
         ['<span style="display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--danger);margin-right:6px"></span>紧急','Bob Johnson','RFQ: Custom Products - Deadline Tomorrow','06-18']],
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
Object.keys(SUBMENUS).includes('communication') || (PAGE_RENDERERS['communication'] = renderCommunicationPage);

function renderCommunicationPage() {
  return `
    <div class="page-header"><h1 class="page-title">沟通</h1></div>
    ${renderTabs([
      {label:'WhatsApp企业版'}, {label:'Facebook聊天'}, {label:'Instagram'}, {label:'网站聊天'}, {label:'TM'}, {label:'WhatsApp'}
    ])}
    <div class="flex gap-8 mb-16">
      <button class="btn">营销数据</button>
      <button class="btn">社媒管理</button>
      <button class="btn">使用指南</button>
    </div>
    <div class="card">
      <div style="text-align:center;padding:40px">
        <div style="font-size:32px;margin-bottom:16px">📱</div>
        <h2 style="margin-bottom:8px">WhatsApp 官方群发</h2>
        <p class="text-muted mb-16">一键触达全球海量客户 · 批量营销信息 · 官方群发通道 · 企业账号统一管理</p>
        <div class="grid-3" style="max-width:600px;margin:0 auto;gap:24px">
          <div class="card" style="border:1px solid var(--border-light)">
            <div class="text-primary text-bold mb-8">Step 1</div>
            <div class="text-sm">准备可用的 Facebook 账号和手机号</div>
          </div>
          <div class="card" style="border:1px solid var(--border-light)">
            <div class="text-primary text-bold mb-8">Step 2</div>
            <div class="text-sm">授权绑定 WABA 账号<br><span class="text-muted">预计耗时 5 分钟</span></div>
            <div class="mt-12"><a class="text-primary text-sm">查看操作指南</a></div>
            <button class="btn btn-primary btn-sm mt-12">立即创建</button>
          </div>
          <div class="card" style="border:1px solid var(--border-light)">
            <div class="text-primary text-bold mb-8">Step 3</div>
            <div class="text-sm">等待官方审核，通过后即可使用</div>
          </div>
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
      <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的线索</button><button class="toggle-btn" onclick="switchToggle(this)">团队线索</button></div>
      <div class="page-actions">
        <button class="btn btn-sm" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none" onclick="openAILeadAssistant()">🤖 AI 数据助理</button>
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
      <div class="right-content" style="padding:0 16px">
        <div class="flex-between mb-12">
          <span class="table-info">共 128 条线索</span>
          <div class="flex gap-8">
            <button class="btn btn-sm text-primary" onclick="navigateTo('leads','leads-incubation')">查看孵化建议</button>
            <span class="text-sm text-muted">最近联系时间</span>
            <select class="filter-select" style="width:120px"><option>最近 7 天内</option><option>最近 30 天内</option><option>未联系</option></select>
          </div>
        </div>
        ${renderTable(
          ['线索名称','邮箱','线索状态','系统标签','访问来源','来源方式','线索来源','创建时间','操作'],
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

// New Lead Drawer
function openNewLeadDrawer() {
  openDrawer('新建线索', `
    <div class="alert alert-info mb-12">💡 线索增强：系统将自动补全公司信息和联系方式</div>
    <div class="form-section">
      <div class="form-section-title">常用信息 <a class="btn-text btn-sm" style="margin-left:auto">显示设置</a></div>
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
        <button class="toggle-btn active" onclick="switchToggle(this);document.getElementById('lead_dyn_wrap').style.display='';">历史动态</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('lead_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 聊天旅程：暂无数据</div>';">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('lead_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 谈单卡点：暂无卡点</div>';">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="lead_dyn_wrap">
      ${renderTabs([{label:'全部',count:5},{label:'询盘',count:1},{label:'网站行为',count:1},{label:'跟进记录',count:1},{label:'往来邮件',count:2}], 0, dynFilter)}
      ${renderTabPanels(dynFilter, [
        timelineAll,
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 Contact Us 填写并提交表单</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览了产品页面 - Men\'s Hair Toupee Collection</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-18 16:45</div><div class="tl-title">快速记录</div><div class="tl-desc">初次联系，客户对产品感兴趣，需要报价单</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2026-06-20 14:30</div><div class="tl-title">收到邮件</div><div class="tl-desc">info@wilson.com → service@company.com</div></div><div class="timeline-item"><div class="tl-time">2026-06-19 10:00</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@company.com → info@wilson.com</div></div></div>'
      ])}
    </div>`;

  const panelProfile = `
    <div class="card">
      <div class="form-section-title">基本信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['线索名称','Wilson Corp'],['公司名称','Wilson Corporation'],['公司网址','wilson.com'],['国家地区','美国'],
          ['线索来源','个人询盘'],['来源方式','网站--直接访问'],['线索状态','初步触达'],['线索评分','⭐⭐⭐'],
          ['跟进人','当前用户'],['编号','L20260001'],['创建时间','2026-06-17 09:00'],['更新时间','2026-06-20 14:30'],
        ])}
      </div>
    </div>`;

  const panelBg = `
    <div class="card mb-12">
      <div class="card-title">客户背景 <span class="ai-badge">AI</span></div>
      <div class="alert alert-info mb-12">💡 AI 自动收集公开信息，帮助你快速了解客户</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['公司全称','Wilson Corporation'],['行业','贸易/进出口'],['地区','New York, USA'],
          ['公司规模','50-200人'],['成立时间','2010'],['官网','wilson.com'],
        ])}
      </div>
      <div class="mt-12"><button class="btn btn-sm btn-primary" onclick="openBackgroundCheckModal()">发起背调</button></div>
    </div>`;

  const panelHistory = `
    <div class="card">
      <div class="card-title">操作历史</div>
      <div class="timeline">
        <div class="timeline-item"><div class="tl-time">2026-06-20 14:30</div><div class="tl-title">收到邮件</div><div class="tl-desc">info@wilson.com 发送邮件</div></div>
        <div class="timeline-item"><div class="tl-time">2026-06-18 16:45</div><div class="tl-title">修改线索状态</div><div class="tl-desc">待处理 → 初步触达</div></div>
        <div class="timeline-item"><div class="tl-time">2026-06-17 09:00</div><div class="tl-title">新建线索</div><div class="tl-desc">系统自动创建线索，来源: 网站表单</div></div>
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
          <div class="grid-2" style="gap:8px">
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
    '<button class="btn w-full" style="color:var(--danger)" onclick="closeModal()">标记为无效</button>' +
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
      <div class="grid-2" style="gap:8px">
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
  <div class="page-header"><h1 class="page-title">线索智能孵化</h1><button class="btn btn-sm" onclick="openFeedbackModal()">使用反馈</button></div>
  <div class="card mb-16">
    <div class="flex-between mb-12">
      <div class="card-title" style="margin-bottom:0">私海线索分布情况</div>
      <input type="date" class="filter-input" value="2026-06-21" style="width:150px" />
    </div>
    <div class="stat-cards">
      <div class="stat-card"><div class="stat-label">线索总数</div><div class="stat-value">128</div></div>
      <div class="stat-card" style="border-left:3px solid var(--danger)"><div class="stat-label">无联系信息</div><div class="stat-value text-danger">15</div></div>
      <div class="stat-card" style="border-left:3px solid var(--warning)"><div class="stat-label">待建联</div><div class="stat-value text-warning">45</div></div>
      <div class="stat-card" style="border-left:3px solid var(--info)"><div class="stat-label">已回复</div><div class="stat-value text-primary">38</div></div>
      <div class="stat-card" style="border-left:3px solid var(--success)"><div class="stat-label">已询盘</div><div class="stat-value text-success">30</div></div>
    </div>
    <div class="alert alert-info">💡 总结分析：待补全建议开启智能背调，待建联建议尽快初步联系，已回复建议加强沟通，已询盘建议优先分发或转化为客户。</div>
  </div>
  <div class="card mb-16">
    <div class="card-title">行动建议</div>
    <button class="btn btn-sm btn-primary mb-12" onclick="scrollToIncubationResult()">查看孵化结果</button>
    <div class="grid-2" style="gap:16px">
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="flex-between mb-8"><span class="text-bold">无联系方式 (15)</span><button class="btn btn-sm btn-primary" onclick="openBackgroundCheckModal()">智能补充背调</button></div>
        <div class="text-sm text-muted">这些线索无联系方式，可通过智能背调补充企业、联系人和公司信息。</div>
      </div>
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="flex-between mb-8"><span class="text-bold">待建联 (45)</span><button class="btn btn-sm btn-primary" onclick="openMassMarketingModal()">一键营销</button></div>
        <div class="text-sm text-muted">从未联系、建档超30天、已营销但未回复。</div>
        <div class="mt-12 text-sm text-primary">为您精选，建议优先跟进：</div>
        <div class="mt-8">${['buyer1@trade.com','contact@newcorp.de'].map(e => `<div class="flex-between mb-4"><span class="text-sm">${e}</span><button class="btn btn-sm" onclick="openMassMarketingModal()">一键营销</button></div>`).join('')}</div>
      </div>
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="flex-between mb-8"><span class="text-bold">已回复 (38)</span><button class="btn btn-sm btn-primary" onclick="navigateTo('mail','mail-compose')">立即沟通</button></div>
        <div class="text-sm text-muted">线索已获回复，需要持续跟进并挖掘诉求。</div>
      </div>
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="flex-between mb-8"><span class="text-bold">已询盘 (30)</span><div class="btn-group"><button class="btn btn-sm" onclick="openDistributeLeadModal()">分配线索</button><button class="btn btn-sm btn-primary" onclick="openConvertToCustomerModal()">转化客户</button></div></div>
        <div class="text-sm text-muted">识别询盘诉求明确、疑似无效询盘、推荐标签和精选线索。</div>
      </div>
    </div>
  </div>
  <div class="card">
    <div class="card-title">孵化结果</div>
    <div class="grid-3">
      <div class="stat-card"><div class="stat-label">线索补充 - 已补充公司网址</div><div class="stat-value">12</div></div>
      <div class="stat-card"><div class="stat-label">线索营销 - 总营销</div><div class="stat-value">56</div></div>
      <div class="stat-card"><div class="stat-label">线索转化 - 总转化</div><div class="stat-value">8</div></div>
    </div>
    <div class="text-sm text-muted mt-12">系统累计补充 12 条公司信息，完成 56 次营销触达，成功转化 8 条线索为客户。</div>
  </div>
`;

// ===== 5. Customer / 客户模块 =====
PAGE_RENDERERS['customers-list'] = () => {
  const customers = [
    ['Bono Hair Intl', '2025-03-21', '德国', 'hair wig', 'Google Ads', '网站--直接访问', '官网询盘'],
    ['SWISS HAIR CLUB', '2025-11-26', '巴基斯坦', '', '', '社媒--自然', '社媒'],
    ['Beauty Supply Co', '2026-01-15', '美国', 'extension', '', '主动开发', '主动开发'],
    ['Hair World Trading', '2026-03-08', '英国', '', 'Facebook', '社媒--付费', '社媒'],
    ['Glamour Wigs Ltd', '2026-05-20', '澳大利亚', 'wig', '', '展会', '展会'],
  ];
  return `
    <div class="page-header">
      <h1 class="page-title">客户列表</h1>
      <div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的客户</button><button class="toggle-btn" onclick="switchToggle(this)">团队客户</button></div>
      <div class="page-actions">
        <button class="btn btn-sm btn-icon" onclick="openCustomerSettingsModal()">⚙</button>
        <button class="btn btn-primary" onclick="openNewCustomerDrawer()">+ 新建客户</button>
      </div>
    </div>
    <div class="page-with-sidebar">
      <div class="left-panel">
        ${renderTabs([{label:'客群'},{label:'AI 客群'}], 0)}
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
        <div class="tree-item tree-indent" onclick="filterCustomerTree(this,'亚洲',65)">亚洲 <span class="count">65</span></div>
      </div>
      <div class="right-content" style="padding:0 16px">
        <div class="flex-between mb-12">
          <span class="table-info">全部客户 · 356 个客户</span>
          <div class="flex gap-8"><button class="btn btn-sm btn-icon" onclick="openCustomerSearchModal()">🔍</button><button class="btn btn-sm btn-icon" onclick="openCustomerSettingsModal()">⚙</button></div>
        </div>
        ${renderTable(
          ['公司名称','首次询盘时间','国家地区','谷歌广告-关键词','谷歌广告-广告组','来源方式','客户来源','操作'],
          customers.map(c => [
            '<span class="table-link" onclick="navigateTo(\'customers\',\'customers-detail\')">' + c[0] + '</span>',
            c[1], c[2], c[3], c[4], c[5], c[6],
            '<button class="btn btn-sm btn-text" onclick="openCustomerRowMenu(this)">操作 ▾</button>'
          ]),
          { checkbox: true, total: 356 }
        )}
      </div>
    </div>
  `;
};

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
      <div class="form-section-title">公司常用信息 <a class="btn-text btn-sm" style="margin-left:auto">显示设置</a></div>
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
    <div class="flex gap-12 mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchToggle(this);document.getElementById('cust_dyn_wrap').style.display='';">历史动态</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('cust_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 聊天旅程：根据沟通记录自动生成客户对话时间线</div>';">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('cust_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 谈单卡点：暂无卡点数据</div>';">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="cust_dyn_wrap">
      ${renderTabs([{label:'全部',count:12},{label:'跟进记录',count:1},{label:'往来邮件',count:7},{label:'聊天记录',count:0},{label:'其它',count:4}], 0, dynFilterId)}
      ${renderTabPanels(dynFilterId, [
        timelineHtml,
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-04-12 09:59</div><div class="tl-title">快速记录</div><div class="tl-desc">操作人 Bambi，记录 250412，关联联系人 Erik Kirste</div></div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-07-17 14:24</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@bonohair.com → Erik Kirste</div></div><div class="timeline-item"><div class="tl-time">2025-07-17 11:53</div><div class="tl-title">收到邮件</div><div class="tl-desc">Erik → Bonohair</div></div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-icon">💬</div><div class="empty-text">暂无聊天记录</div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览 Mens Hairpiece Supplies</div></div><div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 login - Bono Hair 填写并提交表单</div></div></div>'
      ])}
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
        <div class="card-title" style="margin-bottom:0">商机</div>
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
        <div class="card-title" style="margin-bottom:0">销售订单</div>
        ${renderTabs([{label:'全部',count:0}], 0, 'cust_order_tab')}
      </div>
      ${renderTable(['订单编号','订单名称','当前阶段','订单金额','订单日期','产品项目数','已生效回款金额','未回款金额','符合目标规则','创建人','业绩归属人'],
        [], {total:0, pageSize:20})}
    </div>
    <div class="card">
      <div class="flex-between mb-12">
        <div class="card-title" style="margin-bottom:0">产品</div>
        <div class="text-sm text-muted">子分类：成交的产品</div>
      </div>
      ${renderTable(['产品','销售订单','报价单','商机','操作'],
        [], {total:0, pageSize:20})}
    </div>`;

  const panelTips = `
    <div class="card mb-12">
      <div class="card-title">谈单指南 <span class="ai-badge">AI</span></div>
      <div class="text-sm text-muted mb-12">AI 根据客户背景和沟通历史，为您推荐以下谈单要点</div>
      ${['了解客户经营品类，重点推荐 Men Toupee 系列产品','客户来自德国，注意欧盟产品合规要求','建议提供小批量样品订单，降低客户试错成本','客户通过官网询盘进入，说明有主动采购意向，可适当加快跟进节奏'].map((t, i) =>
        '<div class="flex gap-8 mb-8" style="padding:8px 12px;background:var(--bg);border-radius:var(--radius)"><span class="text-primary text-bold">' + (i+1) + '.</span><span class="text-sm">' + t + '</span></div>'
      ).join('')}
    </div>`;

  const panelAI = `
    <div class="alert alert-info mb-12">⚠ 当前账号下未出现独立的 AI 公司背调报告，此 Tab 与动态 Tab 结构一致，呈现历史动态、AI 聊天旅程与 AI 谈单卡点。完整背调报告待权限/数据满足后生成。</div>
    <div class="follow-up-input" onclick="expandFollowUp(this)">点击这里记录跟进细节，同步最新进展。</div>
    <div class="flex gap-12 mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchToggle(this);document.getElementById('cust_ai_wrap').style.display='';">历史动态</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('cust_ai_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 聊天旅程：当前样例未见具体聊天记录</div>';">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('cust_ai_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 谈单卡点：0</div>';">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="cust_ai_wrap">
      ${renderTabs([{label:'全部',count:12},{label:'跟进记录',count:1},{label:'往来邮件',count:7},{label:'聊天记录',count:0},{label:'其它',count:4}], 0, 'cust_ai_filter')}
      <div class="card">
        <div class="form-section-title">2025 年动态</div>
        <div class="timeline">
          <div class="timeline-item"><div class="tl-time">2025-07-17 14:24</div><div class="tl-title">发送邮件</div><div class="tl-desc">service@bonohair.com → Erik Kirste &lt;kirste.erik@gmail.com&gt;<br>主题: Re: Your Bono Hair order is now complete</div></div>
          <div class="timeline-item"><div class="tl-time">2025-07-17 11:53</div><div class="tl-title">收到邮件</div><div class="tl-desc">Erik &lt;kirste.erik@gmail.com&gt; → Bonohair &lt;info@bonohair.com&gt;</div></div>
          <div class="timeline-item"><div class="tl-time">2025-04-12 09:59</div><div class="tl-title">快速记录</div><div class="tl-desc">操作人 Bambi，记录 250412，关联联系人 Erik Kirste</div></div>
          <div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">网站行为</div><div class="tl-desc">浏览 Mens Hairpiece Supplies | Best Lace Hair Toupee Price | Bono Hair</div></div>
          <div class="timeline-item"><div class="tl-time">2025-03-21 20:39</div><div class="tl-title">表单行为</div><div class="tl-desc">在页面 login - Bono Hair 填写并提交表单 <span class="table-tag warning">疑似无效询盘</span> <a class="text-primary text-sm">查看详情</a></div></div>
        </div>
      </div>
    </div>
    <div class="text-sm text-muted mt-16 text-center">AI 背调内容（聊天旅程、谈单卡点）由 AI 生成</div>`;

  const panelAnalysis = `
    <div class="card mb-12">
      <div class="flex gap-12 mb-12" style="flex-wrap:wrap;align-items:center">
        <div class="form-group" style="margin:0;flex:1;min-width:200px"><label class="form-label">时间区间</label><div class="flex gap-8"><input class="form-input" type="date" value="2025-06-22" /><span>～</span><input class="form-input" type="date" value="2026-06-22" /></div></div>
        <div class="form-group" style="margin:0;min-width:120px"><label class="form-label">周期</label><select class="form-select"><option>按月</option><option>按周</option><option>按季</option><option>按年</option></select></div>
        <div class="form-group" style="margin:0;min-width:140px"><label class="form-label">成交数据来源</label><select class="form-select"><option>销售订单</option><option>回款</option></select></div>
        <div class="form-group" style="margin:0;min-width:120px"><label class="form-label">范围</label><select class="form-select"><option>全部</option></select></div>
        <div class="form-group" style="margin:0;align-self:flex-end"><button class="btn btn-sm" onclick="openAnalysisSortPopover(this)">⚙ 排序设置</button></div>
      </div>
      ${renderTabs([{label:'销售情况'},{label:'沟通情况'}], 0, 'cust_analysis_group')}
      ${renderTabPanels('cust_analysis_group', [
        '<div class="grid-2 mt-12">' +
          analysisCard('客户销售趋势', ['成交订单金额：USD 0','平均成交订单金额：USD 0','成交订单数：0','平均成交订单间隔天数：--'], true) +
          analysisCard('产品销售排行', ['产品数量、产品金额、关联销售订单数'], true) +
          analysisCard('产品销售趋势对比', ['对比不同产品销售趋势，受时间区间和成交数据来源影响'], true) +
        '</div>',
        '<div class="grid-2 mt-12">' +
          analysisCard('客户跟进趋势', ['发送聊天数：0','发送邮件数：1','发送EDM数：0','写跟进数：0'], true, true) +
          analysisCard('邮件收发趋势', ['收到邮件数：2','发送邮件数：1'], true) +
          analysisCard('客户EDM发送趋势', ['已发送数：0','送达数：0','打开数：0','回复数：0'], true) +
        '</div>'
      ])}
    </div>`;

  const panelDocs = `
    <div class="card">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">全部文档</div><button class="btn btn-sm btn-primary">上传文档</button></div>
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
          <span class="contact-tag" style="background:var(--success-light);color:var(--success)">主</span>
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
    <div class="detail-page">
      <div class="detail-main">
        <div class="card mb-12">
          <div class="card-title">AI 客户分析 <span class="ai-badge">AI</span></div>
          <div class="text-sm text-muted">数据不足，暂无法生成完整分析。持续跟进后将自动生成客户分析。</div>
          <a class="text-primary text-sm" onclick="switchTab('${mainTabId}',4)">查看完整分析 →</a>
        </div>
        ${renderTabs([{label:'动态'},{label:'资料'},{label:'商机&交易'},{label:'Tips'},{label:'AI 背调'},{label:'数据分析'},{label:'文档'},{label:'操作历史'}], 0, mainTabId)}
        ${renderTabPanels(mainTabId, [panelDynamic, panelProfile, panelBizTx, panelTips, panelAI, panelAnalysis, panelDocs, panelHistory])}
      </div>
      <div class="detail-sidebar">
        <div class="detail-card">
          <div class="card-title">客户分组</div>
          <div class="flex gap-8" style="flex-wrap:wrap">
            <span class="table-tag primary">VIP 欧洲客户</span>
            <span class="table-tag">假发行业</span>
            <span class="table-tag">Google 渠道</span>
          </div>
          <button class="btn btn-sm w-full mt-12" onclick="openEditGroupModal()">编辑分组</button>
        </div>
        <div class="detail-card">
          <div class="flex-between"><span class="card-title" style="margin-bottom:0">进行中的商机 (0)</span><button class="btn btn-sm" onclick="openNewBusinessDrawer()">+ 添加</button></div>
        </div>
        <div class="detail-card">
          <div class="flex-between"><span class="card-title" style="margin-bottom:0">计划日程 (0)</span><button class="btn btn-sm" onclick="openNewScheduleModal()">+ 添加</button></div>
        </div>
      </div>
    </div>
  `;
};

// 数据分析 Tab 图表卡 helper（客户详情）
function analysisCard(title, metrics, withDetail, isNew) {
  var newTag = isNew ? ' <span class="table-tag primary">新</span>' : '';
  var metricsHtml = metrics.map(function(m) { return '<div class="text-sm text-muted">' + m + '</div>'; }).join('');
  return '<div class="card mb-12" style="margin:0">' +
    '<div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">' + title + newTag + '</div>' +
      (withDetail ? '<a class="text-primary text-sm" onclick="alert(\'查看详情：图表详情区聚焦（原型未设计独立弹层）\')">查看详情</a>' : '') +
    '</div>' +
    '<div class="chart-placeholder" style="min-height:140px">暂无数据</div>' +
    '<div style="margin-top:12px">' + metricsHtml + '</div>' +
  '</div>';
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
      '<div class="flex-between mb-12"><div class="form-section-title" style="margin-bottom:0">' + name + (isMain?' <span class="contact-tag" style="background:var(--success-light);color:var(--success)">主联系人</span>':'') + '</div>' +
      '<button class="btn btn-sm btn-text" style="color:var(--danger)" onclick="alert(\'移除联系人块\')">移除</button></div>' +
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
      '<div class="flex-between mb-12"><div class="form-section-title" style="margin-bottom:0">公司常用信息</div>' +
      '<button class="btn btn-sm btn-text" onclick="alert(\'显示设置：调整编辑抽屉内字段显示\')"><span>⚙</span> 显示设置</button></div>' +
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
        '<div class="form-section-title" style="margin-bottom:0">公司其它信息 <span class="caret">▾</span></div>' +
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
    '<button class="btn w-full" style="color:var(--danger)" onclick="closeModal()">删除客户</button>' +
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
    renderTabs([{label:'客群'},{label:'AI 客群'}], 0) +
    '<div class="tree-item active" onclick="filterPublicCustomerTree(this,\'全部客户\',523)">全部客户 <span class="count">523</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'90天内掉公海\',45)">90天内掉公海 <span class="count">45</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'AiReach 盘活交付\',12)">AiReach 盘活交付 <span class="count">12</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'AiReach 挖掘交付\',8)">AiReach 挖掘交付 <span class="count">8</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'已成交掉公海\',34)">已成交掉公海 <span class="count">34</span></div>' +
    '<div class="tree-item" onclick="filterPublicCustomerTree(this,\'当月询盘掉公海\',15)">当月询盘掉公海 <span class="count">15</span></div>' +
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
    '<div class="right-content" style="padding:0 16px">' +
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
  openModal('领取客户',
    '<div style="margin-bottom:16px">确定领取 <b>' + companyName + '</b> 到我的客户吗？</div>' +
    renderFormField('跟进人', 'select', {options:['我自己','Bambi','Camila','Jade']}) +
    renderFormField('备注', 'textarea', {placeholder:'可选，填写领取原因'}),
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确认领取</button>'
  );
}

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
    <div class="toggle-group"><button class="toggle-btn active">我的建档建议</button></div>
    <div class="page-actions"><button class="btn btn-primary" onclick="openConfirmArchiveModal()">建为客户</button></div>
  </div>
  <div class="table-info mb-12">共 5 条数据</div>
  ${renderTable(
    ['置信度','联系人邮箱','联系人名称','建议关联公司','建议跟进人','最近邮件','最近联系时间'],
    [
      ['<span class="table-tag success">高</span>','alex@newbuyer.com','Alex Brown','NewBuyer Ltd','Bambi','Re: Quotation Request','2026-06-20'],
      ['<span class="table-tag success">高</span>','info@trade.co','Trade Manager','Trade Co','Camila','Product Inquiry','2026-06-19'],
      ['<span class="table-tag warning">中</span>','buyer@mall.com','Mall Buyer','Mall Corp','Jade','Bulk Order','2026-06-18'],
      ['<span class="table-tag warning">中</span>','sales@vendor.de','Hans Mueller','Vendor GmbH','Bambi','Partnership','2026-06-17'],
      ['<span class="table-tag">低</span>','test@sample.com','Sample User','Sample Inc','Camila','General Inquiry','2026-06-15'],
    ],
    { checkbox: true, total: 5 }
  )}
`;

// Confirm Archive Modal
function openConfirmArchiveModal() {
  openModal('建为客户', '确定将这 1 条建为客户吗？',
    '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">确定</button>'
  );
}

// Customer Dedup
PAGE_RENDERERS['customers-dedup'] = () => `
  <div class="page-header"><h1 class="page-title">客户查重</h1></div>
  <div class="card mb-16">
    <div class="flex gap-8">
      <select class="filter-select" style="width:160px">
        <option>全部</option><option>公司名称/简称</option><option>客户编号</option><option>邮箱</option><option>邮箱后缀</option><option>联系人名称</option><option>联系电话</option><option>社交账号</option>
      </select>
      <input class="filter-input" style="flex:1" placeholder="输入公司名称/简称、客户编号、邮箱地址等" />
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
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="text-bold mb-4">询盘客户180天未成交</div>
        <div class="text-sm text-muted">移入条件: 180 天未成交</div>
        <div class="text-sm text-muted">生效客群: 私海未成交客户（部门）</div>
      </div>
      <div class="card" style="border:1px solid var(--border-light);box-shadow:none">
        <div class="text-bold mb-4">目标客户90天未联系</div>
        <div class="text-sm text-muted">移入条件: 90 天未联系</div>
        <div class="text-sm text-muted">生效客群: 非个人未成交（部门）</div>
      </div>
    </div>
  </div>
`;

// ===== 6. Business / 商机模块 =====
PAGE_RENDERERS['business-list'] = function() {
  return '<div class="page-header">' +
    '<h1 class="page-title">商机</h1>' +
    '<div class="toggle-group"><button class="toggle-btn active" onclick="switchToggle(this)">我的商机</button><button class="toggle-btn" onclick="switchToggle(this)">团队商机</button></div>' +
    '<div class="page-actions">' +
    '<button class="btn btn-sm" onclick="openAIAnalysis()">AI 商机转化分析</button>' +
    '<button class="btn btn-sm" onclick="navigateTo(\'business\',\'business-ai-config\')">AI 商机自动化配置</button>' +
    '<button class="btn btn-primary" onclick="openNewBusinessDrawer()">+ 新建商机</button>' +
    '</div></div>' +
    '<div class="ai-banner"><div>' +
    '<div class="ai-title">✨ 智能识商机，AI自推进，AI商机全面升级！</div>' +
    '<div class="ai-desc">汇总全渠道沟通数据，OKKI AI 智能新建/推进商机，分析谈单卡点，推动谈单转化</div>' +
    '</div><button class="btn">了解更多</button></div>' +
    '<div class="flex-between mb-12"><div class="flex gap-8">' +
    '<span class="table-info">共 5186 个商机</span>' +
    '<select class="filter-select"><option>创建时间</option></select>' +
    '<select class="filter-select"><option>降序</option><option>升序</option></select>' +
    '<select class="filter-select"><option>开发销售标准流程</option></select>' +
    '<select class="filter-select"><option>未归档</option></select>' +
    '</div></div>' +
    '<div class="alert alert-warning mb-12">💡 近30天未录入历史商机 <strong>12</strong> 个 <a class="text-primary" style="margin-left:8px">前往配置</a></div>' +
    '<div class="stat-cards mb-16">' +
    '<div class="stat-card"><div class="stat-label">总销售金额 (USD)</div><div class="stat-value">2,411,309</div></div>' +
    '<div class="stat-card"><div class="stat-label">进行中金额</div><div class="stat-value">202,533</div></div>' +
    '<div class="stat-card"><div class="stat-label">赢单金额</div><div class="stat-value">1,911,210</div></div>' +
    '</div>' +
    '<div class="biz-pipeline" id="bizPipeline"></div>' +
    '<div class="kanban" id="bizKanban"></div>';
};

var BIZ_KANBAN_DATA = {
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
  var stageOrder = ['需求确认','谈判报价','PI','样品单','赢单','输单'];

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
      <div class="form-section-title">基本信息 <a class="btn-text btn-sm" style="margin-left:auto">显示设置</a></div>
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
    <div class="flex gap-12 mb-12">
      <div class="toggle-group">
        <button class="toggle-btn active" onclick="switchToggle(this);document.getElementById('biz_dyn_wrap').style.display='';">历史动态</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('biz_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 聊天旅程：暂无数据</div>';">AI 聊天旅程</button>
        <button class="toggle-btn" onclick="switchToggle(this);document.getElementById('biz_dyn_wrap').innerHTML='<div class=\\'card\\' style=\\'padding:40px;text-align:center\\'>AI 谈单卡点：暂无卡点</div>';">AI 谈单卡点 (0)</button>
      </div>
    </div>
    <div id="biz_dyn_wrap">
      ${renderTabs([{label:'全部',count:1},{label:'跟进记录',count:0},{label:'往来邮件',count:0},{label:'聊天记录',count:0},{label:'其它',count:1}], 0, dynFilter)}
      ${renderTabPanels(dynFilter, [
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">商机</div><div class="tl-desc">Camila 新建了一个商机<br>商机金额: USD 100.00 | 商机阶段: 客户背调 | 结束日期: 2026-04-29</div></div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无跟进记录</div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无往来邮件</div></div>',
        '<div class="empty-state" style="padding:30px"><div class="empty-text">暂无聊天记录</div></div>',
        '<div class="timeline"><div class="timeline-item"><div class="tl-time">03-30 16:07</div><div class="tl-title">商机</div><div class="tl-desc">Camila 新建了一个商机</div></div></div>'
      ])}
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
        ])}
      </div>
    </div>
    <div class="card">
      <div class="form-section-title">系统信息</div>
      <div class="grid-2">
        ${renderDetailFields([
          ['创建时间','2026-03-30 16:07:03'],['创建方式','手动创建'],['创建人','Camila'],
          ['更新时间','2026-03-30 16:07:03'],['当前阶段停留时间','83 天 10 小时 2 分钟'],
        ])}
      </div>
    </div>`;

  const panelTx = `
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">商机产品</div><button class="btn btn-sm">选择产品</button></div>
      ${renderTable(['产品编号','产品名称','产品型号','产品价格','产品规格','产品数量','其他费用','产品金额','产品备注'], [], {total:0})}
    </div>
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">销售订单</div></div>
      ${renderTable(['名称','金额','状态'], [], {total:0})}
    </div>
    <div class="card mb-12">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">报价单</div></div>
      ${renderTable(['名称','金额','状态'], [], {total:0})}
    </div>
    <div class="card">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">回款单</div></div>
      <div class="empty-state" style="padding:20px"><div class="empty-text">暂无数据</div></div>
    </div>`;

  const panelDocs = `
    <div class="card">
      <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">全部文档</div><button class="btn btn-sm btn-primary">上传文档</button></div>
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
        <button class="btn btn-primary" onclick="navigateTo('mail','mail-compose')">✉ 写邮件</button>
        <button class="btn" onclick="openTransferModal()">转移</button>
      </div>
    </div>
    <div class="detail-header">
      <div class="detail-name">巴基斯坦wig <button class="btn btn-sm btn-icon" onclick="this.textContent=this.textContent==='☆'?'★':'☆'">☆</button></div>
      <div class="detail-meta">
        <span class="detail-meta-item">编号: O13428</span>
        <span class="detail-meta-item">客户: <a class="text-primary" onclick="navigateTo('customers','customers-detail')">SWISS HAIR CLUB</a></span>
        <span class="detail-meta-item">负责人: Camila</span>
        <span class="detail-meta-item">销售流程: 维护销售标准流程</span>
        <span class="detail-meta-item">销售金额: USD 100.00</span>
        <span class="detail-meta-item">结束日期: 2026-04-29</span>
        <span class="detail-meta-item">当前阶段停留: 83天10小时2分钟</span>
      </div>
    </div>
    <div class="stage-bar mb-16">
      <div class="stage-item active">客户背调</div>
      <div class="stage-item">商机</div>
      <div class="stage-item">需求确认</div>
      <div class="stage-item">谈判报价</div>
      <div class="stage-item">PI</div>
      <div class="stage-item">样品单</div>
      <div class="stage-item">赢单</div>
      <div class="stage-item">输单</div>
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

PAGE_RENDERERS['business-ai-analysis'] = PAGE_RENDERERS['business-list'];

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
      <div class="card" style="border:1px solid var(--border-light)">
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
      <input class="filter-input" style="flex:1" placeholder="输入关键词搜索全球企业，如 hair wig supplier" />
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
      <input class="filter-input" style="flex:1" placeholder="输入 HS 编码或产品关键词" />
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
        <div class="card" style="border:1px solid var(--border-light)">
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
      <input class="filter-input" style="flex:1" placeholder="输入地区或行业关键词，如 hair salon New York" />
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
    <div class="card mb-8" style="border:1px solid var(--border-light);box-shadow:none">
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
    <div class="card mb-8" style="border:1px solid var(--border-light);box-shadow:none">
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
PAGE_RENDERERS['tx-process'] = () => `
  <div class="page-header"><h1 class="page-title">跟单流程</h1></div>
  <div class="card">
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:2px;text-align:center">
      ${[
        {role:'业务', nodes:['询盘','报价单','销售订单']},
        {role:'采购', nodes:['询价任务','采购任务','采购订单','以销定购','供应商管理']},
        {role:'跟单', nodes:['出运单']},
        {role:'财务', nodes:['费用单','付款单','回款单','回款登记']},
        {role:'仓管', nodes:['入库任务','出库任务','采购入库','销售出库']},
      ].map(lane => `
        <div class="flow-lane">
          <div class="flow-lane-title">${lane.role}</div>
          ${lane.nodes.map(n => `
            <div class="flow-node">${n}</div>
            <div class="flow-arrow">↓</div>
          `).join('')}
        </div>
      `).join('')}
    </div>
    <div class="divider"></div>
    <div class="flex gap-12 justify-center" style="justify-content:center">
      <div class="flow-node" style="background:var(--primary-light);color:var(--primary)">订单毛利</div>
      <div class="flow-node" style="background:var(--primary-light);color:var(--primary)">数据分析</div>
    </div>
  </div>
`;

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
      <button class="btn btn-sm" style="margin-left:auto">我知道了</button>
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
      <div class="right-content" style="padding:0 16px">
        <div class="flex-between mb-12">
          <span class="table-info">共 156 个产品</span>
          <div class="btn-group">
            <button class="btn btn-sm">下载</button>
            <button class="btn btn-sm">导入 ▾</button>
            <button class="btn btn-sm btn-primary">新建 ▾</button>
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

// Ali Products
PAGE_RENDERERS['tx-ali-product'] = () => `
  <div class="page-header">
    <h1 class="page-title">阿里商品</h1>
    <div class="page-actions">
      <label class="form-switch"><span class="switch-track on"></span> 自动匹配</label>
      <button class="btn btn-sm">生成本地产品</button>
      <button class="btn btn-sm">同步</button>
      <button class="btn btn-sm">批量匹配 ▾</button>
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
      ['🖼️','Lace Front Wig 22inch<br><span class="text-muted text-sm">ID: 1234567891</span>','Bono Hair Store','LFW22','8','','2026-06-20','','<span class="table-tag warning">未匹配</span>','<button class="btn btn-sm btn-text">生成本地产品</button>'],
    ],
    { checkbox: true, total: 89 }
  )}
`;

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
        <button class="btn btn-sm" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff;border:none">🤖 AI 数据助理</button>
        <button class="btn btn-sm">识别PI</button>
        <button class="btn btn-primary">+ 新建销售订单</button>
      </div>
    </div>
    <div class="flex gap-8 mb-12">
      <div class="toggle-group"><button class="toggle-btn active">全部订单</button><button class="toggle-btn">阿里信保</button></div>
    </div>
    ${renderTabs([{label:'全部'},{label:'草稿'},{label:'待收款'},{label:'待发货'},{label:'已发货'},{label:'售后'},{label:'交易成功'},{label:'交易取消'},{label:'更多'}])}
    <div class="stat-cards mb-16">
      <div class="stat-card"><div class="stat-label">订单金额</div><div class="stat-value">USD 1,234,567</div></div>
      <div class="stat-card"><div class="stat-label">已回款金额</div><div class="stat-value">USD 987,654</div></div>
      <div class="stat-card"><div class="stat-label">待回款金额</div><div class="stat-value">USD 246,913</div></div>
      <div class="stat-card"><div class="stat-label">产品总金额</div><div class="stat-value">USD 1,100,000</div></div>
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
      <button class="btn">变更</button>
      <button class="btn">变更状态</button>
      <button class="btn">关联生成 ▾</button>
      <button class="btn">发起任务 ▾</button>
      <button class="btn">更多 ▾</button>
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
  ${renderTabs([{label:'订单详情'},{label:'回款单'},{label:'备货'},{label:'出运'},{label:'出库'},{label:'费用单'},{label:'相关'},{label:'操作历史'}])}
  <div class="card">
    <div class="form-section-title">基本信息</div>
    <div class="grid-2">
      ${renderDetailFields([
        ['订单名称','2026BONO-WPWS0011'],['客户','Hair World'],['商机','--'],['联系人','John'],
        ['价格条款','FOB'],['币种','USD'],['汇率','100USD = 675.771CNY'],['订单金额','USD 123.60'],
        ['付款方式','T/T'],['是否退税','是'],['订单日期','2026-06-18'],['交货期','30天'],
      ])}
    </div>
    <div class="divider"></div>
    <div class="form-section-title">订单产品</div>
    ${renderTable(
      ['序号','产品信息','单价','数量','其他费用','包装数','描述','备注','海关编码','增值税率','退税率'],
      [['1','Men Hair Toupee BH4L<br><span class="text-muted">编号: P001 | 型号: BH4L</span>','USD 41.20','3','0','1','6*8 inches toupee','','6704200000','13%','13%']],
      {}
    )}
    <div class="flex-between mt-12" style="padding:0 16px">
      <span>产品总数量: 3</span><span>产品总金额: USD 123.60</span><span>订单金额: USD 123.60</span>
    </div>
    <div class="divider"></div>
    <div class="form-section-title">系统信息</div>
    <div class="grid-2">
      ${renderDetailFields([['创建日期','2026-06-18'],['创建人','Bambi'],['创建方式','ERP 同步'],['更新日期','2026-06-20']])}
    </div>
  </div>
`;

PAGE_RENDERERS['tx-alipay'] = () => `
  <div class="page-header"><h1 class="page-title">Alibaba.com Pay</h1></div>
  <div class="card"><div class="empty-state"><div class="empty-icon">💳</div><div class="empty-text">Alibaba.com Pay 模块</div><div class="text-sm text-muted mt-8">收款/支付记录管理</div></div></div>
`;

// ===== 9. Team Data / 团队数据模块 =====
PAGE_RENDERERS['td-completion'] = () => `
  <div class="page-header"><h1 class="page-title">目标完成情况</h1></div>
  <div class="filter-bar mb-16">
    <select class="filter-select"><option>本月</option><option>本周</option><option>本季度</option><option>本年</option></select>
    <select class="filter-select"><option>我的企业</option></select>
  </div>
  <div class="toggle-group mb-16"><button class="toggle-btn active">结果目标</button><button class="toggle-btn">过程目标</button></div>
  <div class="stat-cards mb-16">
    ${[
      {label:'成交订单金额',value:'¥125,800',sub:'未设定目标值'},
      {label:'赢单商机金额',value:'¥89,500',sub:'未设定目标值'},
      {label:'每日赢单目标完成率',value:'45%',sub:'设置目标值'},
      {label:'新建商机数',value:'23',sub:'未设定目标值'},
    ].map(s => `<div class="stat-card"><div class="stat-label">${s.label} <a class="text-primary text-sm">规则</a></div><div class="stat-value">${s.value}</div><div class="stat-sub">${s.sub}</div></div>`).join('')}
  </div>
  <div class="toggle-group mb-12"><button class="toggle-btn active">排行榜</button><button class="toggle-btn">趋势图</button></div>
  <div class="card mb-16">
    <div class="flex-between mb-12"><div class="card-title" style="margin-bottom:0">部门排行榜</div><button class="btn btn-sm">下载Excel</button></div>
    ${renderTable(
      ['排名','部门','成交订单金额','赢单商机金额','每日赢单完成率','新建商机数'],
      [
        ['🥇','业务开发一组','¥45,200 / -- / --','¥32,100 / -- / --','-- / -- / --','8 / -- / --'],
        ['🥈','业务维护一组','¥38,900 / -- / --','¥28,500 / -- / --','-- / -- / --','6 / -- / --'],
        ['🥉','业务开发二组','¥25,700 / -- / --','¥18,900 / -- / --','-- / -- / --','5 / -- / --'],
      ],
      { total: 3 }
    )}
  </div>
`;

PAGE_RENDERERS['td-manage'] = () => `
  <div class="page-header">
    <h1 class="page-title">目标管理</h1>
    <div class="page-actions">
      <button class="btn btn-sm">目标起始月份</button>
      <button class="btn btn-sm">目标完成情况</button>
      <button class="btn btn-primary">+ 新建目标</button>
    </div>
  </div>
  <div class="alert alert-info mb-16">设置过程/结果目标后，系统可自动分析完成进度</div>
  <div class="card-title">目标设置模版</div>
  <div class="grid-3 mb-16">
    ${['成交订单金额','赢单商机金额','订单毛利','成交客户数','复购客户数','成交订单数'].map(t =>
      `<div class="card" style="border:1px solid var(--border-light);cursor:pointer"><div class="text-bold mb-4">${t}</div><div class="text-sm text-muted">以订单结算</div><button class="btn btn-sm btn-text mt-8">使用此模板</button></div>`
    ).join('')}
  </div>
`;

PAGE_RENDERERS['td-wall'] = () => `
  <div class="page-header">
    <h1 class="page-title">团队墙</h1>
    <div class="page-actions">
      <select class="filter-select"><option>本季度</option></select>
      <button class="btn btn-sm">目标设置</button>
      <button class="btn btn-sm">刷新</button>
      <button class="btn btn-sm">组件配置</button>
    </div>
  </div>
  <div class="stat-cards mb-16">
    <div class="stat-card" style="background:linear-gradient(135deg,#667eea,#764ba2);color:#fff">
      <div style="font-size:14px;opacity:.9">⏱ 离本月结束还剩</div>
      <div style="font-size:28px;font-weight:700;margin:8px 0">9 天</div>
      <div style="font-size:12px;opacity:.8">${new Date().toLocaleDateString('zh-CN')}</div>
    </div>
    <div class="stat-card"><div class="stat-label">成交订单金额</div><div class="stat-value">¥125,800</div><div class="stat-sub">目标: -- | 完成率: --</div></div>
  </div>
  <div class="grid-2 mb-16">
    <div class="card">
      <div class="card-title">成交订单金额排行榜 🏆</div>
      ${['Bambi - ¥45,200','Camila - ¥38,900','Jade - ¥25,700','Amy - ¥16,000'].map((r, i) =>
        `<div class="flex-between" style="padding:8px 0;border-bottom:1px solid var(--border-light)"><span>${['🥇','🥈','🥉','4️⃣'][i]} ${r.split(' - ')[0]}</span><span class="text-bold">${r.split(' - ')[1]}</span></div>`
      ).join('')}
    </div>
    <div class="card">
      <div class="card-title">客户邮件发送数排行榜 📧</div>
      ${['Camila - 156','Bambi - 134','Jade - 98','Amy - 67'].map((r, i) =>
        `<div class="flex-between" style="padding:8px 0;border-bottom:1px solid var(--border-light)"><span>${['🥇','🥈','🥉','4️⃣'][i]} ${r.split(' - ')[0]}</span><span class="text-bold">${r.split(' - ')[1]}</span></div>`
      ).join('')}
    </div>
  </div>
  <div class="grid-3">
    <div class="stat-card"><div class="stat-label">营销发件数</div><div class="stat-value">234</div></div>
    <div class="stat-card"><div class="stat-label">新建客户数</div><div class="stat-value">18</div></div>
    <div class="stat-card"><div class="stat-label">新建销售订单数</div><div class="stat-value">12</div></div>
  </div>
`;

PAGE_RENDERERS['td-ai-monitor'] = () => `
  <div class="page-header"><h1 class="page-title">AI 数据监测</h1></div>
  <div class="card mb-16">
    <div class="flex-between">
      <div><div class="card-title" style="margin-bottom:0">🤖 AI 数据助理</div><div class="text-sm text-muted">AI智能监测您的数据变化，利用大模型技术多视角监测数据差异</div></div>
    </div>
  </div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" />
    <select class="filter-select"><option>全部主题</option><option>客户跟进提醒</option><option>新增客户情况</option><option>商机输单分析</option></select>
    <label class="form-switch"><input type="checkbox" /> 只看未读</label>
    <button class="btn btn-sm">设置监测人员范围</button>
  </div>
  ${[
    {date:'2026-06-21',topic:'客户跟进提醒',title:'本周有 15 位客户超过 7 天未联系',desc:'建议尽快跟进以下高价值客户：SWISS HAIR CLUB（83天未联系）、Bono Hair（14天未联系）...', unread:true},
    {date:'2026-06-20',topic:'新增客户情况',title:'昨日新增 3 位客户，较上周日均增长 50%',desc:'新客户主要来源：官网询盘 2 位、社媒 1 位。建议重点关注官网渠道效果。', unread:true},
    {date:'2026-06-19',topic:'商机输单原因分析',title:'本月输单商机 8 个，主要原因为价格不匹配',desc:'价格不匹配占比 62.5%，建议调整报价策略。客户未回复占比 25%，建议加强跟进频率。', unread:false},
  ].map(c => `
    <div class="card mb-12" style="border-left:3px solid ${c.unread ? 'var(--primary)' : 'var(--border)'}">
      <div class="flex-between mb-8">
        <div class="flex gap-8"><span class="text-sm text-muted">${c.date}</span><span class="table-tag primary">${c.topic}</span>${c.unread ? '<span class="table-tag danger">未读</span>' : ''}</div>
      </div>
      <div class="text-bold mb-4">${c.title}</div>
      <div class="text-sm text-muted">${c.desc}</div>
    </div>
  `).join('')}
`;

PAGE_RENDERERS['td-ai-analysis'] = () => `
  <div class="page-header"><h1 class="page-title">AI 数据分析</h1></div>
  <div class="card mb-16">
    <div class="flex-between">
      <div><div class="card-title" style="margin-bottom:0">🤖 AI 数据助理</div><div class="text-sm text-muted">您可以问邮件、线索、客户、商机、订单相关的问题</div></div>
    </div>
    <div class="divider"></div>
    <div class="card-title">推荐问题</div>
    <div class="grid-2">
      ${['上个月各员工发送了多少封邮件？','本月新建线索数量趋势如何？','近3个月客户来源分布','各销售阶段的商机转化率','本季度订单金额排行','不同地区客户的成交率对比'].map(q =>
        `<div class="tree-item" style="border:1px solid var(--border-light);border-radius:var(--radius);margin-bottom:4px;cursor:pointer">${q}</div>`
      ).join('')}
    </div>
    <div class="divider"></div>
    <div class="flex gap-8">
      <input class="filter-input" style="flex:1" placeholder="输入您的分析问题..." />
      <button class="btn btn-primary">分析</button>
    </div>
  </div>
`;

PAGE_RENDERERS['td-ai-quality'] = () => `
  <div class="page-header"><h1 class="page-title">AI 批量质检</h1><div class="page-actions"><button class="btn btn-primary">+ 新建质检任务</button></div></div>
  <div class="alert alert-info mb-12">💡 AI 自动质检邮件沟通质量，帮助管理者发现问题并提升团队服务水平</div>
  <div class="stat-cards mb-16">
    <div class="stat-card"><div class="stat-label">待质检邮件</div><div class="stat-value">234</div></div>
    <div class="stat-card"><div class="stat-label">已质检邮件</div><div class="stat-value">1,890</div></div>
    <div class="stat-card"><div class="stat-label">问题邮件</div><div class="stat-value text-danger">45</div></div>
    <div class="stat-card"><div class="stat-label">平均质量评分</div><div class="stat-value">8.2</div></div>
  </div>
  ${renderTabs([{label:'全部'},{label:'待质检'},{label:'已通过'},{label:'有问题'}])}
  ${renderTable(['邮件主题','发件人','收件人','发送时间','质检评分','问题类型','状态'],
    [['Re: Product Inquiry','Bambi','john@buyer.com','2026-06-20','9.2','--','<span class="table-tag success">通过</span>'],
     ['Price Quotation','Camila','info@trade.de','2026-06-19','6.5','回复不及时、缺少报价细节','<span class="table-tag danger">有问题</span>'],
     ['Sample Order Confirm','Jade','buyer@mall.us','2026-06-18','8.8','--','<span class="table-tag success">通过</span>']],
    {total:234})}
`;

PAGE_RENDERERS['td-report'] = () => `
  <div class="page-header"><h1 class="page-title">系统报表</h1></div>
  ${renderTabs([{label:'客户报表'},{label:'商机报表'},{label:'邮件报表'},{label:'订单报表'},{label:'产品报表'}])}
  <div class="grid-3 mb-16">
    ${[{name:'客户新增趋势',type:'折线图'},{name:'客户来源分布',type:'饼图'},{name:'客户地区分布',type:'地图'},{name:'商机阶段分布',type:'漏斗图'},{name:'邮件收发统计',type:'柱状图'},{name:'订单金额趋势',type:'折线图'}].map(r => `
      <div class="card" style="cursor:pointer;border:1px solid var(--border-light)">
        <div class="text-bold mb-4">${r.name}</div>
        <div class="text-sm text-muted mb-8">${r.type}</div>
        <div class="chart-placeholder" style="min-height:120px">${r.type} 预览区</div>
      </div>
    `).join('')}
  </div>
`;

PAGE_RENDERERS['td-follow-dynamics'] = () => `
  <div class="page-header"><h1 class="page-title">跟进动态</h1></div>
  <div class="filter-bar mb-12">
    <select class="filter-select"><option>全部成员</option><option>Bambi</option><option>Camila</option><option>Jade</option></select>
    <select class="filter-select"><option>全部类型</option><option>邮件</option><option>跟进记录</option><option>WhatsApp</option></select>
    <input class="filter-input" type="date" />
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
PAGE_RENDERERS['td-work-report'] = () => `
  <div class="page-header">
    <h1 class="page-title">工作报告</h1>
    <div class="page-actions"><button class="btn btn-primary" onclick="openWorkReportModal()">+ 写工作报告</button></div>
  </div>
  ${renderTabs([{label:'我收到的'},{label:'我提交的'},{label:'团队提交的'},{label:'系统推送报告'},{label:'报告提交统计'},{label:'工作报告模版'}])}
  <div class="flex-between mb-12">
    <div class="flex gap-8">
      <label class="form-switch"><input type="checkbox" /> 只看未读</label>
      <select class="filter-select"><option>全部提交人</option></select>
    </div>
    <div class="btn-group"><button class="btn btn-sm">导出报告</button><button class="btn btn-sm">开启报告模版</button></div>
  </div>
  <div class="alert alert-info">💡 工作报告支持推送到钉钉群，可前往模版编辑配置</div>
  <div class="empty-state"><div class="empty-icon">📝</div><div class="empty-text">暂无工作报告</div></div>
`;

function openWorkReportModal() {
  openDrawer('写工作报告', `
    <div class="alert alert-info mb-12">💡 草稿会实时保存 | 每天 00:00 ~ 当日 17:30 为按时提交，之后为迟交</div>
    ${renderFormField('工作报告模版', 'select', {options:['开发日报','周报','月报']})}
    ${renderFormField('接收人', 'text', {placeholder:'选择接收人'})}
    ${renderFormField('报告标题', 'text', {placeholder:'报告标题'})}
    <div class="form-section">
      <div class="form-section-title">今日核心进展</div>
      <div class="text-sm text-muted mb-8">重点客户小结</div>
      <textarea class="form-textarea" placeholder="请输入今日核心进展..." style="min-height:100px"></textarea>
    </div>
    <div class="form-section">
      <div class="form-section-title">明日工作计划</div>
      <div class="text-sm text-muted mb-8">需要重点跟进的客户以及撬动点</div>
      <textarea class="form-textarea" placeholder="请输入明日计划..." style="min-height:100px"></textarea>
    </div>
    <div class="form-section">
      <div class="form-section-title">今日跟进PI</div>
      <div class="upload-area">上传附件（docx, xls, PDF, rar, zip, PNG, JPG，单个文件不超过 20MB）</div>
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
    <div class="toggle-group"><button class="toggle-btn active">我有权限查看的日程</button></div>
    <div class="page-actions"><button class="btn btn-primary" onclick="openNewScheduleModal()">+ 新建日程</button></div>
  </div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" placeholder="开始日期" />
    <input class="filter-input" type="date" placeholder="结束日期" />
    <select class="filter-select"><option>全部成员</option></select>
    <select class="filter-select"><option>全部对象类型</option><option>客户</option><option>线索</option><option>商机</option></select>
  </div>
  ${renderTable(
    ['日程主题','创建时间','创建人','参与人','重复','开始时间','结束时间','全天','对象类型','关联对象','备注'],
    [
      ['跟进 SWISS HAIR CLUB','2026-06-20','Camila','Camila, Bambi','否','2026-06-22 10:00','2026-06-22 11:00','否','客户','SWISS HAIR CLUB','确认订单细节'],
      ['周会','2026-06-18','Admin','全部成员','每周','2026-06-23 09:00','2026-06-23 10:00','否','','','团队周会'],
    ],
    { total: 2 }
  )}
`;

function openNewScheduleModal() {
  openModal('新建日程', `
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
    <a class="text-primary text-sm">完整编辑 →</a>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">保存</button>');
}

// Approval
PAGE_RENDERERS['collab-approval'] = () => `
  <div class="page-header">
    <h1 class="page-title">审批</h1>
    <div class="page-actions">
      <button class="btn btn-sm" style="color:var(--danger)">🔥 App&钉钉便捷审批</button>
      <button class="btn btn-sm" onclick="navigateTo('collaboration','collab-approval-flow')">审批流管理</button>
    </div>
  </div>
  ${renderTabs([{label:'由我审批（待办）'},{label:'由我审批（已办）'},{label:'我提交的审批'}])}
  <div class="empty-state"><div class="empty-icon">✅</div><div class="empty-text">暂无审批任务</div></div>
`;

// Cloud Drive
PAGE_RENDERERS['collab-cloud'] = () => `
  <div class="page-header"><h1 class="page-title">云盘</h1></div>
  <div class="filter-bar mb-12"><select class="filter-select"><option>全部文件类型</option></select></div>
  <div class="page-with-sidebar">
    <div class="left-panel">
      <div class="tree-item active">OKKI云文档</div>
      <div class="tree-item">我的文档</div>
      <div class="tree-item">共享文档</div>
      <div class="tree-item">成员文档</div>
    </div>
    <div class="right-content" style="padding:16px">
      <div class="empty-state"><div class="empty-icon">📁</div><div class="empty-text">暂无文档</div></div>
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
      <div class="flex gap-8" style="padding:8px 16px"><button class="btn btn-sm">修改分组</button><button class="btn btn-sm">编辑</button><button class="btn btn-sm btn-text" style="color:var(--danger)">删除成员</button></div>
    </div>
    <div class="right-content" style="padding:0 16px">
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
    <a class="text-primary text-sm">查看任务列表</a>
  `, '<button class="btn" onclick="closeModal()">取消</button><button class="btn btn-primary" onclick="closeModal()">一键导入</button>');
}

// Tasks
PAGE_RENDERERS['collab-task'] = () => `
  <div class="page-header">
    <h1 class="page-title">任务</h1>
    <div class="page-actions">
      <button class="btn btn-sm">任务完成情况</button>
      <button class="btn btn-sm">任务设置</button>
    </div>
  </div>
  <div class="text-sm text-muted mb-12">任务是由管理者设置的任务规则触发自动创建。</div>
  <div class="filter-bar mb-12">
    <input class="filter-input" type="date" placeholder="开始时间" />
    <span>~</span>
    <input class="filter-input" type="date" placeholder="结束时间" />
    <select class="filter-select"><option>全部执行人</option></select>
  </div>
  ${renderTabs([{label:'全部'},{label:'即将超时'},{label:'已超时'},{label:'已完成'},{label:'已忽略'}])}
  <div class="toggle-group mb-12"><button class="toggle-btn active">跟进客户</button><button class="toggle-btn">回复邮件</button><button class="toggle-btn">回复TM</button></div>
  ${renderTable(
    ['任务状态','公司名称','任务规则名称','执行人','最近动态','最近跟进','创建时间','最近跟进时间','截止时间','操作'],
    [
      ['<span class="table-tag danger">已超时</span>','SWISS HAIR CLUB','成交客户30天至少跟进1次','Camila','发送邮件','跟进记录','2026-06-01','2026-05-15','2026-06-15','<button class="btn btn-sm btn-text">处理</button>'],
      ['<span class="table-tag warning">即将超时</span>','Hair World','询盘客户60天至少跟进1次','Bambi','收到邮件','','2026-06-10','2026-06-18','2026-06-25','<button class="btn btn-sm btn-text">处理</button>'],
    ],
    { total: 2 }
  )}
`;

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
      ['系统管理员','<span class="text-primary">3 人</span>','<button class="btn btn-sm btn-text">查看</button>'],
      ['普通用户','<span class="text-primary">25 人</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button>'],
      ['部门管理员','<span class="text-primary">5 人</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button>'],
      ['财务管理员','<span class="text-primary">2 人</span>','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">查看</button>'],
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
      ['客户等级','下拉单选','线索、客户管理、商机','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
      ['广告UTM','文本','线索、客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
      ['需求和售后','多行文本','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
      ['付款方式1','下拉多选','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
      ['首次成交时间','日期','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
      ['谷歌广告-关键词','文本','客户管理','公司信息','<button class="btn btn-sm btn-text">编辑</button>'],
    ],
    { total: 45 }
  )}
`;

// Enterprise Customer Settings
PAGE_RENDERERS['ent-customer-settings'] = () => `
  <div class="page-header"><h1 class="page-title">客户设置</h1></div>
  ${renderTabs([{label:'客户阶段'},{label:'客户类型'},{label:'公海管理'},{label:'客户跟进规则'},{label:'客户成交规则'},{label:'建档黑名单'},{label:'客户上限'},{label:'客户查重设置'},{label:'动态设置'},{label:'写跟进设置'},{label:'布局设置'},{label:'字段规则'}])}
  <div class="card">
    <div class="text-sm text-muted mb-12">按照业务进展阶段划分客户状态，帮助业务员针对性跟进客户，提高成单率。</div>
    <button class="btn btn-primary btn-sm mb-12">+ 新增阶段</button>
    ${renderTable(['阶段名称','操作'],
      [['待跟进','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['询盘客户','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['样单客户','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['成交客户','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['复购客户','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>']],
      { total: 5 }
    )}
  </div>
`;

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
      [['公司名称','文本','是','<span class="switch-track on" style="display:inline-block;transform:scale(.6)"></span>','1','<button class="btn btn-sm btn-text">编辑</button>'],
       ['国家地区','下拉选择','否','<span class="switch-track on" style="display:inline-block;transform:scale(.6)"></span>','2','<button class="btn btn-sm btn-text">编辑</button>'],
       ['客户来源','下拉选择','否','<span class="switch-track on" style="display:inline-block;transform:scale(.6)"></span>','3','<button class="btn btn-sm btn-text">编辑</button>'],
       ['客户等级','下拉选择','否','<span class="switch-track" style="display:inline-block;transform:scale(.6)"></span>','4','<button class="btn btn-sm btn-text">编辑</button>'],
       ['广告UTM','文本','否','<span class="switch-track on" style="display:inline-block;transform:scale(.6)"></span>','5','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:45})}
  </div>
`;

PAGE_RENDERERS['ent-lead-settings'] = () => `
  <div class="page-header"><h1 class="page-title">线索设置</h1></div>
  ${renderTabs([{label:'线索状态'},{label:'线索来源'},{label:'线索标签'},{label:'分配规则'},{label:'评分规则'},{label:'转化规则'}])}
  <div class="card">
    <div class="flex-between mb-12"><span class="card-title" style="margin-bottom:0">线索状态管理</span><button class="btn btn-sm btn-primary">+ 新增状态</button></div>
    ${renderTable(['状态名称','排序','默认','操作'],
      [['待处理','1','是','<button class="btn btn-sm btn-text">编辑</button>'],
       ['完善信息','2','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['初步触达','3','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['联系互动','4','否','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>']],
      {total:4})}
  </div>
`;

PAGE_RENDERERS['ent-biz-settings'] = () => `
  <div class="page-header"><h1 class="page-title">商机设置</h1></div>
  ${renderTabs([{label:'销售流程'},{label:'输单原因'},{label:'商机标签'},{label:'布局设置'}])}
  <div class="card">
    <div class="flex-between mb-12"><span class="card-title" style="margin-bottom:0">销售流程管理</span><button class="btn btn-sm btn-primary">+ 新建销售流程</button></div>
    ${renderTable(['流程名称','阶段数','商机数','创建时间','状态','操作'],
      [['开发销售标准流程','6','3,200','2024-01-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>'],
       ['维护销售标准流程','8','1,986','2024-01-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:2})}
  </div>
`;

PAGE_RENDERERS['ent-source-settings'] = () => `
  <div class="page-header"><h1 class="page-title">来源设置</h1></div>
  <div class="card">
    <div class="flex-between mb-12"><span class="card-title" style="margin-bottom:0">客户/线索来源管理</span><button class="btn btn-sm btn-primary">+ 新增来源</button></div>
    ${renderTable(['来源名称','来源分类','排序','操作'],
      [['主动开发','渠道获客','1','<button class="btn btn-sm btn-text">编辑</button>'],
       ['官网询盘','线上询盘','2','<button class="btn btn-sm btn-text">编辑</button>'],
       ['阿里巴巴','线上询盘','3','<button class="btn btn-sm btn-text">编辑</button>'],
       ['社媒','渠道获客','4','<button class="btn btn-sm btn-text">编辑</button>'],
       ['展会','线下渠道','5','<button class="btn btn-sm btn-text">编辑</button>'],
       ['TM 咨询','线上询盘','6','<button class="btn btn-sm btn-text">编辑</button>']],
      {total:6})}
  </div>
`;

PAGE_RENDERERS['ent-dedup-settings'] = () => `
  <div class="page-header"><h1 class="page-title">判重设置</h1></div>
  <div class="card">
    <div class="card-title">判重规则配置</div>
    <div class="text-sm text-muted mb-16">设置新建客户/线索时的查重规则，避免重复建档</div>
    <div class="form-section">
      <div class="form-section-title">客户判重规则</div>
      <label class="form-switch mb-12"><input type="checkbox" checked /> 公司名称判重</label><br>
      <label class="form-switch mb-12"><input type="checkbox" checked /> 邮箱后缀判重</label><br>
      <label class="form-switch mb-12"><input type="checkbox" /> 联系电话判重</label><br>
      <label class="form-switch mb-12"><input type="checkbox" checked /> 公司网址判重</label>
    </div>
    <div class="form-section">
      <div class="form-section-title">线索判重规则</div>
      <label class="form-switch mb-12"><input type="checkbox" checked /> 联系人邮箱判重</label><br>
      <label class="form-switch mb-12"><input type="checkbox" /> 联系人手机号判重</label>
    </div>
    <div class="form-section">
      <div class="form-section-title">判重范围</div>
      <label class="form-switch mb-12"><input type="checkbox" checked /> 全公司范围判重</label><br>
      <label class="form-switch"><input type="checkbox" /> 仅个人范围判重</label>
    </div>
    <button class="btn btn-primary mt-12">保存设置</button>
  </div>
`;

PAGE_RENDERERS['ent-product-settings'] = () => `
  <div class="page-header"><h1 class="page-title">产品设置</h1></div>
  ${renderTabs([{label:'产品分组设置'},{label:'产品同步'},{label:'产品字段设置'},{label:'产品规格设置'},{label:'布局设置'}])}
  <div class="card">
    <div class="flex-between mb-12"><span class="card-title" style="margin-bottom:0">产品分组管理</span><div class="btn-group"><button class="btn btn-sm">导入分组</button><button class="btn btn-sm btn-primary">+ 新建分组</button></div></div>
    <div class="text-sm text-muted mb-12">产品分组可以对所选产品线的产品进行分类整理，便于业务员检索。</div>
    ${renderTable(['分组名称','可见范围','操作'],
      [['男块','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">删除</button>'],
       ['女装','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button>'],
       ['辅料','全部','<button class="btn btn-sm btn-text">编辑</button> <button class="btn btn-sm btn-text">新建下级分组</button>'],
       ['未分组','全部','--']],
      {total:4})}
  </div>
`;

PAGE_RENDERERS['ent-order-settings'] = () => `
  <div class="page-header"><h1 class="page-title">销售订单设置</h1></div>
  ${renderTabs([{label:'订单编号规则'},{label:'订单字段设置'},{label:'订单状态'},{label:'布局设置'}])}
  <div class="card">
    <div class="card-title">订单编号规则</div>
    ${renderFormField('编号前缀', 'text', {value:'2026BONO-'})}
    ${renderFormField('编号格式', 'select', {options:['年份+前缀+序号','前缀+日期+序号','自定义']})}
    ${renderFormField('序号位数', 'select', {options:['4位','5位','6位']})}
    <div class="text-sm text-muted mt-12">预览: 2026BONO-0001</div>
    <button class="btn btn-primary mt-12">保存设置</button>
  </div>
`;

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

PAGE_RENDERERS['ent-export'] = () => `
  <div class="page-header"><h1 class="page-title">客户导出</h1></div>
  <div class="card">
    <div class="card-title">导出任务</div>
    <div class="text-sm text-muted mb-12">查看和管理客户数据导出任务</div>
    ${renderTable(['任务名称','导出范围','导出字段','创建人','创建时间','文件大小','状态','操作'],
      [['全部客户导出','全部客户 (356)','全部字段','Admin','2026-06-20','2.5MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>'],
       ['公海客户导出','公海客户 (523)','基本字段','Bambi','2026-06-18','1.8MB','<span class="table-tag success">已完成</span>','<button class="btn btn-sm btn-text">下载</button>']],
      {total:2})}
  </div>
`;

PAGE_RENDERERS['ent-recycle'] = () => `
  <div class="page-header"><h1 class="page-title">回收箱</h1></div>
  ${renderTabs([{label:'客户'},{label:'线索'},{label:'商机'},{label:'联系人'},{label:'订单'}])}
  <div class="alert alert-warning mb-12">⚠️ 回收箱数据保留 30 天，超过 30 天将自动永久删除</div>
  <div class="card">
    ${renderTable(['名称','类型','删除人','删除时间','操作'],
      [['Test Company','客户','Bambi','2026-06-15','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">永久删除</button>'],
       ['Sample Lead','线索','Camila','2026-06-12','<button class="btn btn-sm btn-primary">恢复</button> <button class="btn btn-sm btn-text" style="color:var(--danger)">永久删除</button>']],
      {total:2})}
  </div>
`;

PAGE_RENDERERS['ent-custom-report'] = () => `
  <div class="page-header"><h1 class="page-title">自定义报表</h1><div class="page-actions"><button class="btn btn-primary">+ 新建报表</button></div></div>
  <div class="card">
    <div class="text-sm text-muted mb-12">创建自定义报表，灵活配置数据维度和展示方式</div>
    ${renderTable(['报表名称','数据源','图表类型','创建人','最近查看','操作'],
      [['月度销售趋势','订单','折线图','Admin','2026-06-21','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button>'],
       ['客户来源分析','客户','饼图','Admin','2026-06-20','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button>'],
       ['商机转化漏斗','商机','漏斗图','Admin','2026-06-19','<button class="btn btn-sm btn-text">查看</button> <button class="btn btn-sm btn-text">编辑</button>']],
      {total:3})}
  </div>
`;

// Override approval flow with more detail
PAGE_RENDERERS['ent-approval-flow'] = () => `
  <div class="page-header">
    <h1 class="page-title">审批流管理</h1>
    <div class="page-actions"><button class="btn btn-primary">+ 新建审批流</button></div>
  </div>
  <div class="text-sm text-muted mb-12">通过定义对象的审批触发规则和审批流程，保证管理流程标准化</div>
  <div class="filter-bar mb-12"><select class="filter-select"><option>全部审批对象</option><option>销售订单</option><option>报价单</option><option>付款单</option><option>费用单</option></select></div>
  ${renderTable(
    ['优先级','审批流名称','审批对象','触发事件','最新编辑时间','状态','操作'],
    [
      ['1','其他审批','自定义','--','2025-08-01','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['1','报价单状态变更审批','报价单','状态变更','2025-06-15','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['1','采购付款单审批','付款单','状态变更','2025-07-20','<span class="table-tag success">启用中</span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['1','回款登记审批','回款登记','状态变更','2025-05-10','<span class="table-tag">已停用</span>','<button class="btn btn-sm btn-text">启用</button>'],
      ['1','费用单审批','费用单','状态变更','2025-04-08','<span class="table-tag">已停用</span>','<button class="btn btn-sm btn-text">启用</button>'],
    ],
    { total: 5 }
  )}
`;

PAGE_RENDERERS['ent-task-settings'] = () => `
  <div class="page-header">
    <h1 class="page-title">任务设置</h1>
    <div class="page-actions"><button class="btn btn-primary">+ 新建任务规则</button></div>
  </div>
  ${renderTable(
    ['任务规则名称','任务规则描述','任务类型','创建人','创建时间','最后修改时间','启用状态','操作'],
    [
      ['24小时内回复阿里询盘','要求及时处理阿里询盘','回复邮件','Admin','2025-01-15','2025-06-20','<span class="switch-track on" style="display:inline-block;transform:scale(.7)"></span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['成交客户30天至少跟进1次','对成交客户设置周期性跟进','跟进客户','Admin','2025-01-15','2025-06-18','<span class="switch-track on" style="display:inline-block;transform:scale(.7)"></span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['客户邮件在24小时内回复','约束客户邮件回复时效','回复邮件','Admin','2025-02-01','2025-06-15','<span class="switch-track on" style="display:inline-block;transform:scale(.7)"></span>','<button class="btn btn-sm btn-text">编辑</button>'],
      ['询盘客户60天至少跟进1次','对询盘客户设置周期性跟进','跟进客户','Admin','2025-03-10','2025-05-20','<span class="switch-track on" style="display:inline-block;transform:scale(.7)"></span>','<button class="btn btn-sm btn-text">编辑</button>'],
    ],
    { total: 4 }
  )}
`;

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
