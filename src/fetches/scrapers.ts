import axios, { AxiosError } from 'axios';
import * as cheerio from 'cheerio';

export const scrapeToken = async (contractAddress?: string, tokenId?: number) => {
  const rootUrl = 'https://opensea.io/assets/ethereum';
  const url = `${rootUrl}/${contractAddress}/${tokenId}`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const price = $('.Price--amount').first().text();
    return price;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 503) {
        console.error('Scraping was blocked by Cloudflare.');
        return 'N/A';
      }
      console.error(axiosError.response?.data);
    }
    console.error(error);
  }
};

export const scrapeTrait = async (collectionSlug: string, traitQueryString: string) => {
  const rootUrl = 'https://opensea.io/collection';
  const url = `${rootUrl}/${collectionSlug}/${traitQueryString}`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const price = $('.Price--amount').first().text();
    return price;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response?.status === 503) {
        console.error('Scraping was blocked by Cloudflare.');
        return 'N/A';
      }
      console.error(axiosError.response?.data);
    }
    console.error(error);
  }
};

// export const scrapeSuperRare = async (collectionSlug?: string) => {
//   const url =
//     'https://proxy.scrapeops.io/v1/?api_key=52039e45-cd20-4775-a458-cfad151347c1&url=https://superrare.com/osf&render_js=true';
//   // const url = `${rootUrl}/${collectionSlug}`;

//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const price = $('.Currency-sc-rngy06-0').text();
//     return price;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error as AxiosError;
//       if (axiosError.response?.status === 503) {
//         console.error('Scraping was blocked by Cloudflare.');
//         return 'N/A';
//       }
//       console.error(axiosError.response?.data);
//     }
//     console.error(error);
//   }
// };

// scrapeSuperRare().then(console.info);
