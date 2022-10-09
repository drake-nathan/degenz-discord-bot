// import puppeteer from 'puppeteer';

// function extractItems() {
//   const extractedElements = document.querySelectorAll('.Price--amount > div.Price--main');
//   const items = [];
//   extractedElements.forEach((element) => items.push(element.innerHTML));
//   return items;
// }

// async function scrapeItems(page, extractItems, itemCount, scrollDelay = 800) {
//   let items = [];
//   try {
//     let previousHeight;
//     while (items.length < itemCount) {
//       items = await page.evaluate(extractItems);
//       previousHeight = await page.evaluate('document.body.scrollHeight');
//       await page.evaluate('window.scrollTo(0, document.body.scrollHeight)');
//       await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`);
//       await page.waitForTimeout(scrollDelay);
//     }
//   } catch (error) {
//     console.log(error);
//   }
//   return items;
// }

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: false,
//     args: ['--no-sandbox', '--disable-setuid-sandbox'],
//   });
//   const page = await browser.newPage();
//   page.setViewport({ width: 1280, height: 926 });

//   await page.goto('https://opensea.io/collection/rektguy');

//   const items = await scrapeItems(page, extractItems, 10);

//   await browser.close();
// })();
