import { Client, TextChannel } from 'discord.js';
import { Etherscan } from '../types';
import { getCliccEmbed } from './cliccEmbed';
import { getRektEmbed } from './rektEmbed';
import { getRugEmbed } from './rugEmbed';

export const updateRektEmbed = async (client: Client, etherscan: Etherscan) => {
  const channelIdRekt = process.env.CHANNEL_ID_REKT;

  if (!channelIdRekt) {
    throw new Error('No channel id found!');
  }

  const channel = (await client.channels.fetch(channelIdRekt)) as TextChannel;

  const embed = await getRektEmbed(etherscan);

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    await lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated rekt embed at ${new Date()}`);
};

export const updateRugEmbed = async (client: Client, etherscan: Etherscan) => {
  const channelIdRug = process.env.CHANNEL_ID_RUG;

  if (!channelIdRug) {
    throw new Error('No channel id found!');
  }

  const channel = (await client.channels.fetch(channelIdRug)) as TextChannel;

  const embed = await getRugEmbed(etherscan);

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    await lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated Rug embed at ${new Date()}`);
};

export const updateCliccEmbed = async (client: Client, etherscan: Etherscan) => {
  const channelIdClicc = process.env.CHANNEL_ID_CLICC;

  if (!channelIdClicc) {
    throw new Error('No channel id found!');
  }

  const channel = (await client.channels.fetch(channelIdClicc)) as TextChannel;

  const embed = await getCliccEmbed(etherscan);

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    await lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated Clicc embed at ${new Date()}`);
};
