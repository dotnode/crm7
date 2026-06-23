// 验证数据分析沟通情况分组
const { chromium } = require('playwright');
const DIR = process.cwd() + '/test-artifacts/frontend-test-artifacts-20260623-033236';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 1100 } });
  await page.goto('http://localhost:8123/#customers/customers-detail', { waitUntil: 'load' });
  await page.waitForTimeout(500);
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_main"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('数据分析')>=0) t.click(); }});
  await page.waitForTimeout(400);
  // 切到沟通情况分组
  await page.evaluate(() => { const ts = document.querySelectorAll('.tabs[data-tab-group="cust_analysis_group"] .tab-item'); for (const t of ts){ if (t.innerText.indexOf('沟通情况')>=0) t.click(); }});
  await page.waitForTimeout(400);
  await page.screenshot({ path: DIR + '/05b-tab-analysis-comm.png' });
  const cards = await page.evaluate(() => {
    const panel = Array.from(document.querySelectorAll('.tab-panel:not(.hidden)')).find(p => p.innerText.indexOf('沟通情况')>=0 || p.innerText.indexOf('E')>=0);
    const txt = document.querySelector('#contentArea').innerText;
    return ['客户跟进趋势','邮件收发趋势','客户EDM发送趋势'].filter(c=>txt.indexOf(c)>=0);
  });
  console.log('COMMUNICATION_CARDS:' + JSON.stringify(cards));
  await browser.close();
})();