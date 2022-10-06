/* eslint-disable no-param-reassign */
import { Connection } from 'mongoose';
import { connectionFactory } from '../db/connectionFactory';
import { getAllNfts, updateNft } from '../db/queries';
import { FetchMethod, Nft } from '../db/types';
import { fetchCollectionFloor } from '../fetches/fetchCollectionFloor';
import { scrapeToken, scrapeTrait } from '../fetches/scrapers';

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
      const newFloor = await scrapeToken(address, tokenId);
      nft.price = newFloor;
      return updateNft(conn, nft);
    }

    if (tokens) {
      const newTokens = await Promise.all(
        tokens.map(async (token) => {
          const newFloor = await scrapeToken(address, token.tokenId);
          token.price = newFloor;
          token.lastUpdated = new Date();
          return token;
        }),
      );
      nft.tokens = newTokens;
      return updateNft(conn, nft);
    }
  }

  if (fetchMethod === FetchMethod.openSeaTraitScrape) {
    const newFloor = await scrapeTrait(collectionSlug, nft.query);
    if (newFloor) nft.price = newFloor;
    nft.lastUpdated = new Date();
    return updateNft(conn, nft);
  }
};

export const updateFloorsInDb = async () => {
  const conn = await connectionFactory();

  const nfts = await getAllNfts(conn);

  await Promise.all(nfts.map(async (nft) => updateNftPriceInDb(conn, nft)));

  await conn.close();
};

// export const update1of1sInDb = async () => {
//   const conn = await connectionFactory();

//   const nfts = await getAllNfts(conn);

//   const oneOfOnes = nfts.filter((nft) => nft.sectionSlug === 'oneOfOnes');

//   await Promise.all(oneOfOnes.map(async (nft) => updateNftPriceInDb(conn, nft)));

//   await conn.close();
// };

// export const updateAqsInDb = async () => {
//   const conn = await connectionFactory();

//   const aqRektguys = await getAqRektguys(conn);

//   await updateAqRektguys(conn, aqRektguys);

//   await conn.close();
// };
