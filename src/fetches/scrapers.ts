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

    const supply = $('p.sc-bdnxRM').first().text().replace(/\D/g, '');
    const prices = $('.Price--amount')
      .toArray()
      .map((element) => $(element).text());

    const floorPrice = prices[0];

    return { price: floorPrice, supply: Number(supply) };
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

export const scrapeRug = async (
  collectionSlug: string,
  role: string,
  memeSlug: string,
) => {
  const roleSlugs = ['Standard', 'Scarce%202', 'Scarce%201', 'Rare%202', 'Rare%201'];
  const roleMap = {
    Standard: roleSlugs[0],
    'Scarce 2': roleSlugs[1],
    'Scarce 1': roleSlugs[2],
    'Rare 2': roleSlugs[3],
    'Rare 1': roleSlugs[4],
  };

  const url = `https://opensea.io/collection/${collectionSlug}?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Role&search[stringTraits][0][values][0]=${roleMap[role]}&search[stringTraits][1][name]=Meme&search[stringTraits][1][values][0]=${memeSlug}`;

  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const supply = $('p.sc-bdnxRM').first().text().replace(/\D/g, '');
    const price = $('.Price--amount').first().text();
    return { price, supply: Number(supply) };
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

scrapeTrait(
  'rektguy',
  '?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Hoody&search[stringTraits][0][values][0]=Tiedye',
).then(console.info);
