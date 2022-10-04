import axios, { AxiosError } from 'axios';
import * as cheerio from 'cheerio';

export const scrape1155 = async (contractAddress: string, tokenId: number) => {
  const rootUrl = 'https://opensea.io/assets/ethereum';
  const url = `${rootUrl}/${contractAddress}/${tokenId}`;

  try {
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

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
    const html = await axios.get(url);
    const $ = cheerio.load(html.data);

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
