/* eslint-disable no-restricted-syntax */
import { nfts } from '../data/nfts';
import { fetchCollectionFloor } from '../logic/fetchCollectionFloor';
import { getPrice } from '../logic/scraper';

export const formatPrice = (name: string, price: string) => {
  const numPrice = Number(price);
  if (Number.isNaN(numPrice)) return price;
  if (name === 'purgatorio' && numPrice < 1) {
    return `420.69 ETH, probs`;
  }
  if (numPrice < 0.1) return `${numPrice.toFixed(3)} ETH`;
  if (numPrice >= 1) return `${numPrice.toFixed(1)} ETH`;
  return `${numPrice.toFixed(2)} ETH`;
};

export const getAllFloors = async () => {
  let message = '';

  for await (const nft of nfts) {
    const { name, slug, address, type, elevenFiftyFiveTokens } = nft;

    if (type === 'ERC1155' && elevenFiftyFiveTokens) {
      message += `\n__**${name}**__\n`;

      for await (const token of elevenFiftyFiveTokens) {
        const { tokenId, name: tokenName } = token;
        const floor = await getPrice(address, tokenId);
        const displayFloor = formatPrice(tokenName, floor);

        message += ` - ${tokenName} : ${displayFloor}\n`;
      }
    } else {
      const floor = await fetchCollectionFloor(slug);
      const displayFloor = formatPrice(name, floor);

      message += `**${name}:** ${displayFloor}\n`;
    }
  }

  return message;
};

// getAllFloors().then((message) => console.log(message));
