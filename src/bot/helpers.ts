/* eslint-disable no-param-reassign */
import { Role, Nft } from '../db/types';

export const addRolesToRugs = (rugNfts: Nft[]) =>
  rugNfts.map((nft) => {
    if (nft.rugs) {
      nft.rugs = nft.rugs.map((rug) => ({
        ...rug,
        roles: [
          {
            rugName: rug.name,
            roleName: 'Standard',
          },
          {
            rugName: rug.name,
            roleName: 'Scarce 2',
          },
          {
            rugName: rug.name,
            roleName: 'Scarce 1',
          },
          {
            rugName: rug.name,
            roleName: 'Rare 2',
          },
        ],
      }));
    }
    return nft;
  });

export const formatEthPrice = (price: string, name?: string): string => {
  const numPrice = Number(price);

  if (Number.isNaN(numPrice)) return price;
  if (name && name === 'purgatorio' && numPrice < 1) {
    return `420.69, probs`;
  }

  const isWholeNum = numPrice % 1 === 0;
  if (isWholeNum) return `${numPrice.toFixed(1)} ETH`;

  let formattedPrice: string;

  if (numPrice < 0.1) formattedPrice = `${parseFloat(numPrice.toFixed(3))} ETH`;
  formattedPrice = `${parseFloat(numPrice.toFixed(2))} ETH`;

  return formattedPrice;
};

export const formatUsdPrice = (price: string): string => {
  const numPrice = Number(price);

  if (Number.isNaN(numPrice)) return price;

  const usdPrice = Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(numPrice);
  const centsPrice = parseFloat((numPrice * 100).toFixed(1));
  const pennyPrice = parseFloat(numPrice.toFixed(5));

  let finalFormattedPrice = `${usdPrice} \u200b (${centsPrice} cents)`;

  if (numPrice < 0.01) finalFormattedPrice = `$${pennyPrice}`;

  return finalFormattedPrice;
};

export const mapRolesByRole = (roles: Role[], role: string) =>
  roles.find((r) => r.roleName === role);

export const sortPriceDesc = (a, b) => parseFloat(b.price) - parseFloat(a.price);

export const sortPriceAsc = (a, b) => parseFloat(a.price) - parseFloat(b.price);
