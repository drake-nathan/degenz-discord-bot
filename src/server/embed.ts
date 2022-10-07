import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../db/connectionFactory';
import { getAllNfts } from '../db/queries';
import { Section } from '../db/types';
import { getEthPrice, getGasPrice } from '../fetches/etherscan';
import { formatPrice } from './helpers';

export const getEmbed = async () => {
  console.info('Updating embed...');

  const conn = await connectionFactory();

  const nfts = await getAllNfts(conn);

  const gasPrice = await getGasPrice();
  const ethPrice = await getEthPrice();

  const singles = nfts.filter((nft) => nft.sectionSlug === Section.singles);
  singles.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  const rektguy = nfts.filter((nft) => nft.sectionSlug === Section.rektguy);
  const rektguyTraits = rektguy[0].specialTraitFloors.filter(
    (trait) => trait.price !== undefined,
  );
  rektguyTraits.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  const rld = nfts.filter((nft) => nft.name === 'Red Lite District')[0];
  const rldEditions = nfts.filter(
    (nft) => nft.sectionSlug === Section.rld && nft.name !== 'Red Lite District',
  );
  const rldEditionsFullSetPrice = rldEditions[0].tokens
    .reduce((acc, token) => acc + parseFloat(token.price), 0)
    .toString();
  const sevenDeadlySins = nfts.filter(
    (nft) => nft.sectionSlug === Section.sevenDeadlySins,
  )[0];
  const editions = nfts.filter((nft) => nft.sectionSlug === Section.editions);
  editions.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
  // const oneOfOnes = nfts.filter((nft) => nft.sectionSlug === Section.oneOfOnes);

  let message: string = '';

  message += `ETH: \u200b ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(ethPrice)} \u200b \u200b Gas: \u200b ${gasPrice} wei\n`;

  message += `\n${singles
    .map((nft) => `**${nft.name}:** \u200b ${formatPrice(nft.price)}`)
    .join('\n')}\n`;

  message += `\n**${rektguy[0].name}:** \u200b ${formatPrice(rektguy[0].price)}`;
  message += `\n${rektguyTraits
    .map((trait) => `- ${trait.name}: \u200b ${formatPrice(trait.price)}`)
    .join('\n')}\n`;

  message += `\n**${rld.name}:** \u200b ${formatPrice(rld.price)}`;
  message += `\n**RLD Editions:** \u200b ${formatPrice(
    rldEditionsFullSetPrice,
  )} (Full Set)`;
  message += `\n${rldEditions[0].tokens
    .map(
      (edition, i) => `${i + 1}. ${edition.name}: \u200b ${formatPrice(edition.price)}`,
    )
    .join('\n')}\n`;

  message += `\n**7 Deadly Sins:**`;
  message += `\n${sevenDeadlySins.tokens
    .map((sin) => `- ${sin.name}: \u200b ${formatPrice(sin.price, sin.name)}`)
    .join('\n')}\n`;

  message += `\n**Misc Editions:**`;
  message += `\n${editions
    .map((nft) => `- ${nft.name}: \u200b ${formatPrice(nft.price)}`)
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
