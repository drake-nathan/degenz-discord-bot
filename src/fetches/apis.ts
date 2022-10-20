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
