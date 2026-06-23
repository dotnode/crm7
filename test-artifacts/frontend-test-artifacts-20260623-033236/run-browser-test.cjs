// 客户详情页走查脚本
const { chromium } = require('playwright');
const fs = require('fs');

const DIR = process.cwd() + '/test-artifacts/frontend-test-artifacts-20260623-033236';
const BASE = 'http://localhost:8123';
const shots = [];
const findings = { consoleErrors: [], pageErrors: [], failedRequests: [] };

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  page.on('console', m => { if (m.type() === 'error') findings.consoleErrors.push(m.text()); });
  page.on('pageerror', e => findings.pageErrors.push(String(e)));
  page.on('requestfailed', r => findings.failedRequests.push(r.url() + ' ' + r.failure().errorText));

  async function shot(name) {
    const p = DIR + '/' + name + '.png';
    await page.screenshot({ path: p, fullPage: false });
    shots.push(name + '.png');
  }

  await page.goto(BASE + '/#customers/customers-detail', { waitUntil: 'load' });
  await page.waitForTimeout(800);
  await shot('01-detail-default');

  // (1) 写跟进入口
  await page.evaluate(() => {
    const el = document.querySelector('.follow-up-input');
    if (el) el.click();
  });
  await page.waitForTimeout(400);
  await shot('02-write-followup-expanded');
  const fuOk = await page.evaluate(() => {
    const f = document.querySelector('.follow-up-form');
    if (!f) return '未展开';
    const txt = f.innerText;
    const need = ['写跟进','AI写跟进','选择模板','跟进类型','快捷文本分组','跟进内容','跟进联系人','关联业务数据','下次跟进日程','取消','提交'];
    return need.filter(k => txt.indexOf(k) < 0);
  });

  // 切到资料 Tab
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('资料')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await shot('03-tab-profile');
  const profileGroups = await page.evaluate(() => {
    const card = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('公司常用信息')>=0);
    if (!card) return '未找到资料面板';
    const txt = card.innerText;
    return ['公司常用信息','公司其它信息','跟进信息','系统信息'].filter(g => txt.indexOf(g)>=0);
  });

  // 切到商机&交易 Tab
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('商机')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await shot('04-tab-biztx');
  const biztxHeaders = await page.evaluate(() => {
    const panel = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('商机')>=0 && p.innerText.indexOf('销售订单')>=0);
    if (!panel) return '未找到面板';
    const ths = Array.from(panel.querySelectorAll('thead th')).map(t => t.innerText.trim());
    return { count: ths.length, ths: ths };
  });

  // 切到数据分析 Tab
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('数据分析')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await shot('05-tab-analysis');
  const analysis = await page.evaluate(() => {
    const panel = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('时间区间')>=0 || p.innerText.indexOf('排序设置')>=0);
    if (!panel) return '未找到面板';
    const txt = panel.innerText;
    const cards = ['客户销售趋势','产品销售排行','产品销售趋势对比','客户跟进趋势','邮件收发趋势','客户EDM发送趋势'].filter(c=>txt.indexOf(c)>=0);
    const groups = ['销售情况','沟通情况'].filter(g=>txt.indexOf(g)>=0);
    return { cards, groups, hasSort: txt.indexOf('排序设置')>=0 };
  });

  // 切到 AI 背调 Tab
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('AI 背调')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await shot('06-tab-ai');
  const aiTab = await page.evaluate(() => {
    const panel = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('历史动态')>=0 && p.innerText.indexOf('背调')>=0);
    if (!panel) return '未找到面板';
    const txt = panel.innerText;
    return { hasNotice: txt.indexOf('完整背调报告')>=0, hasTypes: ['AI 聊天旅程','AI 谈单卡点'].filter(t=>txt.indexOf(t)>=0), hasTimeline: txt.indexOf('2025-')>=0 };
  });

  // 切到操作历史 Tab
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('操作历史')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await shot('07-tab-history');
  const history = await page.evaluate(() => {
    const panel = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('操作历史')>=0);
    if (!panel) return '未找到面板';
    const txt = panel.innerText;
    const ths = Array.from(panel.querySelectorAll('thead th')).map(t=>t.innerText.trim());
    const filters = ['操作类型','操作人','时间范围','关键字'].filter(f=>txt.indexOf(f)>=0);
    return { filters, ths };
  });

  // (7) 编辑抽屉
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('动态')>=0) t.click(); }});
  await page.evaluate(() => {
    const btns = Array.from(document.querySelectorAll('.page-actions button'));
    const b = btns.find(x=>x.innerText.trim()==='编辑'); if (b) b.click();
  });
  await page.waitForTimeout(500);
  await shot('08-edit-drawer');
  const drawer = await page.evaluate(() => {
    const d = document.getElementById('drawerBody');
    if (!d) return '抽屉未打开';
    const txt = d.innerText;
    const has = ['公司常用信息','公司其它信息','联系人信息','显示设置','添加联系人','确定'].filter(k=>txt.indexOf(k)>=0);
    return has;
  });
  // 测试展开公司其它信息
  await page.evaluate(() => {
    const t = Array.from(document.querySelectorAll('#drawerBody .form-section-title')).find(x=>x.innerText.indexOf('公司其它信息')>=0);
    if (t) t.parentElement.click();
  });
  await page.waitForTimeout(300);
  await shot('09-edit-drawer-other-expanded');

  await shot('10-final');
  await browser.close();

  const result = {
    shots,
    writeFollowup: fuOk,
    profileGroups,
    biztxHeaders,
    analysis,
    aiTab,
    history,
    editDrawer: drawer,
    findings
  };
  fs.writeFileSync(DIR + '/browser-result.json', JSON.stringify(result, null, 2));
  console.log('RESULT:' + JSON.stringify(result));
})();