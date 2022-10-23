import { Client, TextChannel } from 'discord.js';
import { getRektEmbed } from './rektEmbed';
import { getRugEmbed } from './rugEmbed';

export const updateRektEmbed = async (client: Client) => {
  const channelIdRekt = process.env.CHANNEL_ID_REKT;

  if (!channelIdRekt) {
    throw new Error('No channel id found!');
  }

  const channel = (await client.channels.fetch(channelIdRekt)) as TextChannel;

  const embed = await getRektEmbed();

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    await lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated rekt embed at ${new Date()}`);
};

export const updateRugEmbed = async (client: Client) => {
  const channelIdRug = process.env.CHANNEL_ID_RUG;

  if (!channelIdRug) {
    throw new Error('No channel id found!');
  }

  const channel = (await client.channels.fetch(channelIdRug)) as TextChannel;

  const embed = await getRugEmbed();

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    await lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated Rug embed at ${new Date()}`);
};
