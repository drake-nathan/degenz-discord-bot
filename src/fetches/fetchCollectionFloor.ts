import axios from 'axios';

export const fetchCollectionFloor = async (collectionSlug: string) => {
  const url = `https://api.opensea.io/api/v1/collection/${collectionSlug}/stats`;

  try {
    const { data } = await axios.get(url);

    return data.stats.floor_price as string;
  } catch (error) {
    console.error(error);
  }
};
