import axios from 'axios';

export const fetchOpenSeaCollectionFloor = async (collectionSlug: string) => {
  const url = `https://api.opensea.io/api/v1/collection/${collectionSlug}/stats`;

  try {
    const { data } = await axios.get(url);

    return data.stats.floor_price as string;
  } catch (error) {
    console.error(error);
  }
};

export const fetchPepe = async (collectionSlug: string) => {
  const url = `https://api.pepe.wtf/api/asset/${collectionSlug}`;

  try {
    const { data } = await axios.get(url);

    return data.floor.eth as number;
  } catch (error) {
    console.error(error);
  }
};

export const fetchDex = async (address: string) => {
  const url = `https://api.dexscreener.com/latest/dex/pairs/ethereum/${address}`;

  try {
    const { data } = await axios.get(url);

    return data.pairs[0].priceUsd as string;
  } catch (error) {
    console.error(error);
  }
};
