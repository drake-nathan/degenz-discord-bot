import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { fetchCollectionFloor } from './logic/fetchCollectionFloor';
import { getEmbed } from './message/embed';

dotenv.config();
const token = process.env.TOKEN;

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once('ready', async () => {
  console.info('Ready!');

  const embed = await getEmbed();

  const channel = (await client.channels.fetch('931293519518249001')) as TextChannel;

  const lastMsg = (await channel.messages.fetch({ limit: 1 })).first();

  lastMsg.edit({ embeds: [embed] });

  // const message = await channel.send({
  //   embeds: [embed],
  // });
});

client.login(token);
