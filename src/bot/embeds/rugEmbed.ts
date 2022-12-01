import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../../db/connectionFactory';
import { getRugNfts } from '../../db/queries';
import { Nft, Section } from '../../db/types';
import {
  formatEthPrice,
  formatRugSection,
  formatUsdPrice,
  mapRolesByRole,
  sortPriceAsc,
} from '../helpers';
import { Etherscan } from '../types';

export const getRugEmbed = async (etherscan: Etherscan) => {
  console.info('Updating Rug embed...');

  let nfts: Nft[];

  try {
    const conn = await connectionFactory();
    nfts = await getRugNfts(conn);
    await conn.close();
  } catch (error) {
    console.error(error);
    return;
  }

  const { ethPrice, gasPrice } = etherscan;

  const membershipPass = nfts.find((nft) => nft.name === 'Membership Pass');
  const rugToken = nfts.find((nft) => nft.name === '$RUG Token');

  const rugCollection = nfts.filter((nft) => nft.sectionSlug === Section.rugs)[0];
  const { rugs } = rugCollection;

  const standardFloor = rugCollection.price;
  const { price: scarce2Floor, supply: scarce2Supply } =
    rugCollection.specialTraitFloors.find((trait) => trait.name === 'Scarce 2');
  const { price: scarce1Floor, supply: scarce1Supply } =
    rugCollection.specialTraitFloors.find((trait) => trait.name === 'Scarce 1');
  const { price: rare2Floor, supply: rare2Supply } =
    rugCollection.specialTraitFloors.find((trait) => trait.name === 'Rare 2');
  const { price: rare1Floor, supply: rare1Supply } =
    rugCollection.specialTraitFloors.find((trait) => trait.name === 'Rare 1');

  const standard = rugs
    .map((rug) => mapRolesByRole(rug.roles, 'Standard'))
    .filter((r) => r.price >= standardFloor)
    .sort(sortPriceAsc);
  const scarce2 = rugs
    .map((rug) => mapRolesByRole(rug.roles, 'Scarce 2'))
    .filter((r) => r.price >= scarce2Floor)
    .sort(sortPriceAsc);
  const scarce1 = rugs
    .map((rug) => mapRolesByRole(rug.roles, 'Scarce 1'))
    .filter((r) => r.price >= scarce1Floor)
    .sort(sortPriceAsc);
  const rare2 = rugs
    .map((rug) => mapRolesByRole(rug.roles, 'Rare 2'))
    .filter((r) => r.price >= rare2Floor)
    .sort(sortPriceAsc);

  let message: string = '';

  message += `ETH: \u200b ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(ethPrice)} \u200b \u200b Gas: \u200b ${gasPrice} gwei\n`;

  message += `\n**Membership Pass:** \u200b ${formatEthPrice(membershipPass.price)}`;
  message += `\n**$RUG Token:** \u200b ${formatUsdPrice(rugToken.price)}\n`;

  message += `\n**Genesis NFT**`;
  message += `\n**Standard:** \u200b ${formatEthPrice(standardFloor)}`;
  message += `\n**Scarce 2:** \u200b ${formatEthPrice(scarce2Floor)}`;
  message += `\n**Scarce 1:** \u200b ${formatEthPrice(scarce1Floor)}`;
  message += `\n**Rare 2:** \u200b ${formatEthPrice(rare2Floor)}`;
  message += `\n**Rare 1:** \u200b ${formatEthPrice(rare1Floor)}\n`;

  message += `\n**Standard:**`;
  message += formatRugSection(standard);

  message += `\n**Scarce 2:**`;
  message += `\n${scarce2
    .map((rug) => `- ${rug.rugName}: \u200b ${formatEthPrice(rug.price)} \u200b`)
    .join('\n')}\n`;

  message += `\n**Scarce 1:**`;
  message += `\n${scarce1
    .map((rug) => `- ${rug.rugName}: \u200b ${formatEthPrice(rug.price)} \u200b`)
    .join('\n')}\n`;

  message += `\n**Rare 2:**`;
  message += `\n${rare2
    .map((rug) => `- ${rug.rugName}: \u200b ${formatEthPrice(rug.price)} \u200b `)
    .join('\n')}\n`;

  const embed = new EmbedBuilder()
    .setTitle('Rug Radio Dashboard')
    .setThumbnail(
      'https://pbs.twimg.com/profile_images/1486145967338528770/cOJU1VVc_400x400.jpg',
    )
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message)
    .setColor('#4dc3fb');

  return embed;
};
