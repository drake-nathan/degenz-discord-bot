/* eslint-disable @typescript-eslint/no-loop-func */
/* eslint-disable no-await-in-loop */
import puppeteer from 'puppeteer';

// const scrapeItems = async (
//   page: Page,
//   extractor: () => string[],
//   itemCount: number,
//   scrollDelay = 800,
// ) => {
//   let items = [];
//   try {
//     let previousHeight: number;
//     while (items.length < itemCount) {
//       items = await page.evaluate(extractor);
//       previousHeight = (await page.evaluate('document.body.scrollHeight')) as number;
//       await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
//       await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
//       await page.waitForTimeout(scrollDelay);
//     }
//   } catch (error) {
//     console.error(error);
//   }
//   return items;
// };

const scrapePuppeteer = async (itemCount: number) => {
  const browser = await puppeteer.launch({
    headless: true,
  });
  const page = await browser.newPage();
  await page.setUserAgent(
    'Mozilla/5.0 (Windows NT 5.1; rv:5.0) Gecko/20100101 Firefox/5.0',
  );
  page.setViewport({ width: 1280, height: 926 });

  await page.goto('https://opensea.io/collection/rektguy', {
    waitUntil: 'networkidle2',
  });

  let items = [];
  let previousHeight: number;

  while (items.length < itemCount) {
    items = await page.evaluate(() => {
      const res = document.querySelectorAll('.Price--amount');
      const text = Array.from(res).map((v) => v.textContent);
      return text;
    });
    previousHeight = (await page.evaluate('document.body.scrollHeight')) as number;
    await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
    await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
    await page.waitForTimeout(800);
  }

  await browser.close();

  return items;
};

scrapePuppeteer(20).then(console.info).catch(console.error);
