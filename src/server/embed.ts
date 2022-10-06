import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../db/connectionFactory';
import { getAllNfts } from '../db/queries';
import { Section } from '../db/types';
import { formatPrice } from './helpers';

export const getEmbed = async () => {
  console.info('Updating floors embed...');

  const conn = await connectionFactory();

  const nfts = await getAllNfts(conn);

  const singles = nfts.filter((nft) => nft.sectionSlug === Section.singles);
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
  // const oneOfOnes = nfts.filter((nft) => nft.sectionSlug === Section.oneOfOnes);

  let message: string = '';

  message += `${singles
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
    .setTitle('Degenz/OSF Floor Prices')
    .setThumbnail(
      'https://i.seadn.io/gcs/files/0d5f1b200a067938f507cbe12bbbabc2.jpg?auto=format',
    )
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message)
    .setColor('#e3e360');

  return embed;
};
