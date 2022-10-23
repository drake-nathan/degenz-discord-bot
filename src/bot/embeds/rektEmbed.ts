import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../../db/connectionFactory';
import { getRektNfts } from '../../db/queries';
import { Nft, Section } from '../../db/types';
import { getEthPrice, getGasPrice } from '../../fetches/etherscan';
import { formatEthPrice, sortPriceDesc } from '../helpers';

export const getRektEmbed = async () => {
  console.info('Updating rekt embed...');

  let nfts: Nft[];

  try {
    const conn = await connectionFactory();
    nfts = await getRektNfts(conn);
    await conn.close();
  } catch (error) {
    console.error(error);
    return;
  }

  const ethPrice = await getEthPrice();
  const gasPrice = await getGasPrice();

  const singles = nfts.filter((nft) => nft.sectionSlug === Section.singles);
  singles.sort(sortPriceDesc);

  const rektguy = nfts.filter((nft) => nft.sectionSlug === Section.rektguy);
  const rektguyTraits = rektguy[0].specialTraitFloors.filter(
    (trait) => trait.price !== undefined,
  );
  rektguyTraits.sort(sortPriceDesc);

  const rld = nfts.filter((nft) => nft.name === 'Red Lite District')[0];
  const rldEditions = nfts.filter(
    (nft) => nft.sectionSlug === Section.rld && nft.name !== 'Red Lite District',
  );
  const rldEditionsFullSetPrice = rldEditions[0].tokens
    .map((token) => parseFloat(token.price))
    .filter(Boolean)
    .reduce((acc, price) => acc + price, 0)
    .toString();

  const sevenDeadlySins = nfts.filter(
    (nft) => nft.sectionSlug === Section.sevenDeadlySins,
  )[0];
  const sinsFullSetPrice = sevenDeadlySins.tokens
    .map((token) => parseFloat(token.price))
    .filter(Boolean)
    .reduce((acc, price) => acc + price, 0)
    .toString();

  const distillery = nfts.filter((nft) => nft.sectionSlug === Section.distillery);

  const editions = nfts.filter((nft) => nft.sectionSlug === Section.editions);
  editions.sort(sortPriceDesc);

  // const oneOfOnes = nfts.filter((nft) => nft.sectionSlug === Section.oneOfOnes);

  let message: string = '';

  message += `ETH: \u200b ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(ethPrice)} \u200b \u200b Gas: \u200b ${gasPrice} gwei\n`;

  message += `\n${singles
    .map((nft) => `**${nft.name}:** \u200b ${formatEthPrice(nft.price)}`)
    .join('\n')}\n`;

  message += `\n**${rektguy[0].name}:** \u200b ${formatEthPrice(rektguy[0].price)}`;
  message += `\n${rektguyTraits
    .slice(0, 10)
    .map((trait) => `- ${trait.name}: \u200b ${formatEthPrice(trait.price)}`)
    .join('\n')}\n`;

  message += `\n**${rld.name}:** \u200b ${formatEthPrice(rld.price)}`;
  message += `\n**RLD Editions:** \u200b ${formatEthPrice(
    rldEditionsFullSetPrice,
  )} (Full Set)`;
  message += `\n${rldEditions[0].tokens
    .map(
      (edition, i) =>
        `${i + 1}. ${edition.name}: \u200b ${formatEthPrice(edition.price)}`,
    )
    .join('\n')}\n`;

  message += `\n**7 Deadly Sins:** \u200b ${formatEthPrice(sinsFullSetPrice)} (Full Set)`;
  message += `\n${sevenDeadlySins.tokens
    .map((sin) => `- ${sin.name}: \u200b ${formatEthPrice(sin.price, sin.name)}`)
    .join('\n')}\n`;

  message += `\n**OSF's Distillery:**`;
  message += `\n${distillery
    .map((nft) => `- ${nft.name}: \u200b ${formatEthPrice(nft.price)}`)
    .join('\n')}\n`;

  message += `\n**Misc Editions:**`;
  message += `\n${editions
    .map((nft) => `- ${nft.name}: \u200b ${formatEthPrice(nft.price)}`)
    .join('\n')}\n`;

  message += `\nOther editions and 1/1s will be added soon.`;

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
