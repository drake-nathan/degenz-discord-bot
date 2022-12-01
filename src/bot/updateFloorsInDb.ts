/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
import { Connection } from 'mongoose';
import { connectionFactory } from '../db/connectionFactory';
import { getAllNfts, updateNft } from '../db/queries';
import { FetchMethod, Nft } from '../db/types';
import { fetchDex, fetchOpenSeaCollectionFloor, fetchPepe } from '../fetches/apis';
import { scrapeRug, scrapeToken, scrapeTrait } from '../fetches/scrapers';

const updateNftPriceInDb = async (conn: Connection, nft: Nft) => {
  const {
    fetchMethod,
    collectionSlug,
    address,
    tokenId,
    tokens,
    specialTraitFloors,
    rugs,
  } = nft;

  nft.lastUpdated = new Date();

  if (fetchMethod === FetchMethod.openSeaApi) {
    const newFloor = await fetchOpenSeaCollectionFloor(collectionSlug);
    if (newFloor) nft.price = newFloor;

    if (specialTraitFloors) {
      for await (const trait of specialTraitFloors) {
        let shouldUpdateTrait: boolean = true;

        if (trait.lastUpdated) {
          shouldUpdateTrait =
            new Date().getTime() - new Date(specialTraitFloors[0].lastUpdated).getTime() >
            1000 * 60 * 30;
        }

        if (shouldUpdateTrait) {
          const newSpecialTraitFloor = await scrapeTrait(collectionSlug, trait.query);
          if (newSpecialTraitFloor) {
            // make sure a trait floor is higher than collection floor due to scrape error
            if (Number(newSpecialTraitFloor.price) > Number(newFloor)) {
              trait.price = newSpecialTraitFloor.price;
              trait.supply = newSpecialTraitFloor.supply;
            }
            trait.lastUpdated = new Date();
          }
        }
      }
    }

    if (rugs) {
      for await (const rug of rugs) {
        const { openseaSlug, roles } = rug;

        for await (const role of roles) {
          let shouldUpdateRole: boolean = true;

          if (role.lastUpdated) {
            shouldUpdateRole =
              new Date().getTime() - new Date(role.lastUpdated).getTime() >
              1000 * 60 * 30;
          }

          if (shouldUpdateRole) {
            const newRole = await scrapeRug(collectionSlug, role.roleName, openseaSlug);
            if (newRole) {
              role.price = newRole.price;
              role.supply = newRole.supply;
              role.lastUpdated = new Date();
            }
          }
        }
      }
    }

    return updateNft(conn, nft);
  }

  if (fetchMethod === FetchMethod.openSeaScrape) {
    if (tokenId) {
      const newFloor = await scrapeToken(address, tokenId);
      if (newFloor) {
        nft.price = newFloor;
        nft.lastUpdated = new Date();
      }
      return updateNft(conn, nft);
    }

    if (tokens) {
      const newTokens = await Promise.all(
        tokens.map(async (token) => {
          const newFloor = await scrapeToken(address, token.tokenId);
          if (newFloor) {
            token.price = newFloor;
            token.lastUpdated = new Date();
          }
          return token;
        }),
      );
      nft.tokens = newTokens;
      return updateNft(conn, nft);
    }
  }

  if (fetchMethod === FetchMethod.openSeaTraitScrape) {
    const newFloor = await scrapeTrait(collectionSlug, nft.query);
    if (newFloor) {
      nft.price = newFloor.price;
      nft.lastUpdated = new Date();
    }
    return updateNft(conn, nft);
  }

  if (fetchMethod === FetchMethod.pepeApi) {
    const newFloor = await fetchPepe(collectionSlug);
    if (newFloor) {
      nft.price = newFloor.toString();
      nft.lastUpdated = new Date();
    }
    return updateNft(conn, nft);
  }

  if (fetchMethod === FetchMethod.dexScreener) {
    const newFloor = await fetchDex(address);
    if (newFloor) {
      nft.price = newFloor.toString();
      nft.lastUpdated = new Date();
    }
    return updateNft(conn, nft);
  }
};

export const updateFloorsInDb = async () => {
  console.info('Updating floors in db');

  const conn = await connectionFactory();

  const nfts = await getAllNfts(conn);

  for await (const nft of nfts) {
    await updateNftPriceInDb(conn, nft);
  }

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
