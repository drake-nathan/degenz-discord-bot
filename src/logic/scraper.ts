import axios from 'axios';
import * as cheerio from 'cheerio';

export const getPrice = async (contractAddress: string, tokenId: number) => {
  const rootUrl = 'https://opensea.io/assets/ethereum';
  const url = `${rootUrl}/${contractAddress}/${tokenId}`;

  try {
    const html = await axios.get(url);

    const $ = cheerio.load(html.data);

    const price = $('.Price--amount').first().text();

    return price;
  } catch (error) {
    if (error.response.status === 503) {
      console.error('Scraping was blocked by Cloudflare.');
      return 'N/A';
    }
    console.error(error);
  }
};

// getPrice('0xc23a563a26afff06e945ace77173e1568f288ce5', 5);
