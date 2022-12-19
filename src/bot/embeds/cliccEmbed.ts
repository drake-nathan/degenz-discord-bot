import { EmbedBuilder } from 'discord.js';
import { connectionFactory } from '../../db/connectionFactory';
import { getCliccNfts } from '../../db/queries';
import { CliccSection, Nft } from '../../db/types';
import { formatEthPrice, sortPriceDesc } from '../helpers';
import { Etherscan } from '../types';

export const getCliccEmbed = async (etherscan: Etherscan) => {
  let nfts: Nft[];

  try {
    const conn = await connectionFactory();
    nfts = await getCliccNfts(conn);
    await conn.close();
  } catch (error) {
    console.error(error);
    return;
  }

  const { ethPrice, gasPrice } = etherscan;

  const cliccCollection = nfts.find((nft) => nft.name === 'Clicc');
  const passes = cliccCollection.tokens.filter(
    (token) => token.cliccSection === CliccSection.passes,
  );
  const season1 = cliccCollection.tokens
    .filter((token) => token.cliccSection === CliccSection.season1)
    .sort(sortPriceDesc);
  const season2 = cliccCollection.tokens
    .filter((token) => token.cliccSection === CliccSection.season2)
    .sort(sortPriceDesc);

  // console.info('cliccCollection', cliccCollection);
  // console.info('passes', passes);
  // console.info('season1', season1);
  // console.info('season2', season2);

  let message: string = '';

  message += `ETH: \u200b ${new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(ethPrice)} \u200b \u200b Gas: \u200b ${gasPrice} gwei\n`;

  message += `\n**clicc card:** \u200b ${
    passes[0].price ? formatEthPrice(passes[0].price) : 'None listed'
  }`;
  message += `\n**clicc portal:** \u200b ${
    passes[1].price ? formatEthPrice(passes[1].price) : 'None listed'
  }\n`;

  message += `\n**Season 1:**`;
  message += `\n${season1
    .map(
      (token) =>
        `- ${token.name}: \u200b ${
          token.price ? formatEthPrice(token.price) : 'None listed'
        } \u200b`,
    )
    .join('\n')}\n`;

  message += `\n**Season 2:**`;
  message += `\n${season2
    .map(
      (token) =>
        `- ${token.name}: \u200b ${
          token.price ? formatEthPrice(token.price) : 'None listed'
        } \u200b`,
    )
    .join('\n')}\n`;

  const embed = new EmbedBuilder()
    .setTitle('Money Clicc Dashboard')
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message)
    .setColor('#ffffff');

  return embed;
};
