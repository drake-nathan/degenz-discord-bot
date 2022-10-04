/* eslint-disable no-param-reassign */
import { Connection } from 'mongoose';
import { connectionFactory } from '../db/connectionFactory';
import { getAllNfts, updateNft } from '../db/queries';
import { FetchMethod, Nft } from '../db/types';
import { fetchCollectionFloor } from '../fetches/fetchCollectionFloor';
import { scrape1155, scrapeTrait } from '../fetches/scrapers';

const updateNftPriceInDb = async (conn: Connection, nft: Nft) => {
  const { fetchMethod, collectionSlug, address, tokenId, tokens, specialTraitFloors } =
    nft;
  nft.lastUpdated = new Date();

  if (fetchMethod === FetchMethod.openSeaApi) {
    const newFloor = await fetchCollectionFloor(collectionSlug);
    nft.price = newFloor;

    if (specialTraitFloors) {
      const newSpecialTraitFloors = await Promise.all(
        specialTraitFloors.map(async (trait) => {
          const newSpecialTraitFloor = await scrapeTrait(collectionSlug, trait.query);
          trait.price = newSpecialTraitFloor;
          trait.lastUpdated = new Date();
          return trait;
        }),
      );

      nft.specialTraitFloors = newSpecialTraitFloors;
    }

    return updateNft(conn, nft);
  }

  if (fetchMethod === FetchMethod.openSeaScrape) {
    if (tokenId) {
      const newFloor = await scrape1155(address, tokenId);
      nft.price = newFloor;
      return updateNft(conn, nft);
    }

    if (tokens) {
      const newTokens = await Promise.all(
        tokens.map(async (token) => {
          const newFloor = await scrape1155(address, token.tokenId);
          token.price = newFloor;
          token.lastUpdated = new Date();
          return token;
        }),
      );
      nft.tokens = newTokens;
      return updateNft(conn, nft);
    }
  }
};

export const updateFloorsInDb = async () => {
  const conn = await connectionFactory();

  const nfts = await getAllNfts(conn);

  await Promise.all(nfts.map(async (nft) => updateNftPriceInDb(conn, nft)));

  await conn.close();
};

updateFloorsInDb()
  .then(() => console.info('Done!'))
  .catch((err) => console.error(err));
