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
      if (axiosError.response?.status === 503 || axiosError.response?.status === 403) {
        console.error('Scraping was blocked by Cloudflare.');
      }
      console.error(axiosError.response?.data);
      return undefined;
    }
    console.error(error);
    return undefined;
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
      if (axiosError.response?.status === 503 || axiosError.response?.status === 403) {
        console.error('Scraping was blocked by Cloudflare.');
      }
      console.error(axiosError.response?.data);
      return undefined;
    }
    console.error(error);
    return undefined;
  }
};

// export const scrapeFoundation = async () => {
//   const url = 'https://foundation.app/@OSF/foundation/131480';

//   try {
//     const response = await axios.get(url);
//     const $ = cheerio.load(response.data);

//     const price = $('h2').toArray();
//     return price;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error as AxiosError;
//       if (axiosError.response?.status === 503 || axiosError.response?.status === 403) {
//         console.error('Scraping was blocked by Cloudflare.');
//         return 'N/A';
//       }
//       console.error(axiosError.response?.data);
//     }
//     console.error(error);
//   }
// };

// scrapeFoundation().then(console.log);

// export const scrapeSuperRare = async () => {
//   dotenv.config();
//   const scraperApiKey = process.env.SCRAPER_API_KEY;

//   const url = 'https://proxy.scrapeops.io/v1/';

//   const params = {
//     api_key: scraperApiKey,
//     url: 'https://superrare.com/osf',
//     render_js: true,
//   };

//   try {
//     const response = await axios.get(url, { params });

//     // const price = $('.Currency-sc-rngy06-0').text();
//     return response.data;
//   } catch (error) {
//     if (axios.isAxiosError(error)) {
//       const axiosError = error as AxiosError;
//       if (axiosError.response?.status === 503 || axiosError.response?.status === 403) {
//         console.error('Scraping was likely blocked by Cloudflare.');
//         return 'N/A';
//       }
//       console.error(axiosError.response?.data);
//     }
//     console.error(error);
//   }
// };

// scrapeSuperRare().then(console.info);
