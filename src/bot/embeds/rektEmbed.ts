import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../../db/connectionFactory';
import { getRektNfts } from '../../db/queries';
import { Nft, Section } from '../../db/types';
import { formatEthPrice, sortPriceDesc } from '../helpers';
import { Etherscan } from '../types';

export const getRektEmbed = async (etherscan: Etherscan) => {
  // let nfts: Nft[];

  // try {
  //   const conn = await connectionFactory();
  //   nfts = await getRektNfts(conn);
  //   await conn.close();
  // } catch (error) {
  //   console.error(error);
  //   return;
  // }

  // const { ethPrice, gasPrice } = etherscan;

  // const singles = nfts.filter((nft) => nft.sectionSlug === Section.singles);
  // singles.sort(sortPriceDesc);

  // const rektguy = nfts.filter((nft) => nft.sectionSlug === Section.rektguy);
  // const rektguyTraits = rektguy[0].specialTraitFloors.filter(
  //   (trait) => trait.price !== undefined && Number(trait.price) < 20,
  // );
  // rektguyTraits.sort(sortPriceDesc);

  // const rld = nfts.filter((nft) => nft.name === 'Red Lite District')[0];
  // const rldEditions = nfts.filter(
  //   (nft) => nft.sectionSlug === Section.rld && nft.name !== 'Red Lite District',
  // );
  // const rldEditionsFullSetPrice = rldEditions[0].tokens
  //   .map((token) => parseFloat(token.price))
  //   .filter(Boolean)
  //   .reduce((acc, price) => acc + price, 0)
  //   .toString();

  // const sevenDeadlySins = nfts.filter(
  //   (nft) => nft.sectionSlug === Section.sevenDeadlySins,
  // )[0];
  // const sinsFullSetPrice = sevenDeadlySins.tokens
  //   .filter((sin) => sin.name !== 'purgatorio')
  //   .map((token) => parseFloat(token.price))
  //   .filter(Boolean)
  //   .reduce((acc, price) => acc + price, 0)
  //   .toString();

  // const distillery = nfts.filter((nft) => nft.sectionSlug === Section.distillery);

  // const cities = nfts.filter((nft) => nft.sectionSlug === Section.cities);
  // cities.sort(sortPriceDesc);
  // const citiesFullSetPrice = cities
  //   .map((city) => parseFloat(city.price))
  //   .filter(Boolean)
  //   .reduce((acc, price) => acc + price, 0)
  //   .toString();

  // const editions = nfts.filter((nft) => nft.sectionSlug === Section.editions);
  // editions.sort(sortPriceDesc);

  // const theKeeperReturns = nfts.find((nft) => nft.sectionSlug === Section.keeper).tokens;
  // const theKeeperReturnsFullSetPrice = theKeeperReturns
  //   .map((nft) => parseFloat(nft.price))
  //   .filter(Boolean)
  //   .reduce((acc, price) => acc + price, 0)
  //   .toString();

  // let message: string = '';

  // message += `ETH: \u200b ${new Intl.NumberFormat('en-US', {
  //   style: 'currency',
  //   currency: 'USD',
  // }).format(ethPrice)} \u200b \u200b Gas: \u200b ${gasPrice} gwei\n`;

  // message += `\n${singles
  //   .map((nft) => `**${nft.name}:** \u200b ${formatEthPrice(nft.price)}`)
  //   .join('\n')}\n`;

  // message += `\n**${rektguy[0].name}:** \u200b ${formatEthPrice(rektguy[0].price)}`;
  // message += `\n${rektguyTraits
  //   .slice(0, 15)
  //   .map((trait) => `- ${trait.name}: \u200b ${formatEthPrice(trait.price)}`)
  //   .join('\n')}\n`;

  // message += `\n**${rld.name}:** \u200b ${formatEthPrice(rld.price)}`;
  // message += `\n**RLD Editions:** \u200b ${formatEthPrice(
  //   rldEditionsFullSetPrice,
  // )} (Full Set)`;
  // message += `\n${rldEditions[0].tokens
  //   .map(
  //     (edition, i) =>
  //       `${i + 1}. ${edition.name}: \u200b ${formatEthPrice(edition.price)}`,
  //   )
  //   .join('\n')}\n`;

  // message += `\n**7 Deadly Sins:** \u200b ${formatEthPrice(sinsFullSetPrice)} (Full Set)`;
  // message += `\n${sevenDeadlySins.tokens
  //   .map((sin) => `- ${sin.name}: \u200b ${formatEthPrice(sin.price, sin.name)}`)
  //   .join('\n')}\n`;

  // message += `\n**The Keeper Returns:** \u200b ${formatEthPrice(
  //   theKeeperReturnsFullSetPrice,
  // )} (Full Set)`;
  // message += `\n${theKeeperReturns
  //   .map((nft) => `- ${nft.name}: \u200b ${formatEthPrice(nft.price)}`)
  //   .join('\n')}\n`;

  // message += `\n**OSF's Distillery:**`;
  // message += `\n${distillery
  //   .map((nft) => `- ${nft.name}: \u200b ${formatEthPrice(nft.price)}`)
  //   .join('\n')}\n`;

  // message += `\n**Rekt Cities:** \u200b ${formatEthPrice(citiesFullSetPrice)} (Full Set)`;
  // message += `\n${cities
  //   .map(
  //     (city) =>
  //       `- ${city.name}: \u200b ${formatEthPrice(city.price)} \u200b (${
  //         city.supply
  //       }) \u200b ${(parseFloat(city.price) * city.supply).toFixed(1)}e`,
  //   )
  //   .join('\n')}\n`;

  // message += `\n**Misc Editions:**`;
  // message += `\n${editions
  //   .map((nft) => `- ${nft.name}: \u200b ${formatEthPrice(nft.price)}`)
  //   .join('\n')}\n`;

  const message =
    "Unfortunately, the floor bot is going to be down for the time being. I've been running it on an old laptop at my house, and I'm going to be moving soon. Once I get re-settled, I'm going to do a much needed overhaul to the bot so that it can run on cloud servers and not rely on an old laptop like it's 1999 and hoping no one closes the lid. I'm hoping to get it back up mid-summer, and I'm counting on the prices to moon between now and then. NFA.";

  const embed = new EmbedBuilder()
    .setTitle('Degenz Dashboard')
    .setThumbnail(
      'https://i.seadn.io/gcs/files/0d5f1b200a067938f507cbe12bbbabc2.jpg?auto=format',
    )
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message)
    .setColor('#e3e360');

  return embed;
};
