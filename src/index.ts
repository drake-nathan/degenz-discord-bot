import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import { getEmbed } from './server/embed';
import { updateFloorsInDb } from './server/updateFloorsInDb';
import { buildDb, clearDb } from './db/queries';
import { connectionFactory } from './db/connectionFactory';
import { nfts } from './db/data';

dotenv.config();
const token = process.env.TOKEN;

if (!token) {
  throw new Error('No discord token found!');
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const updateEmbed = async () => {
  const channelId = process.env.CHANNEL_ID;
  const channel = (await client.channels.fetch(channelId)) as TextChannel;

  const embed = await getEmbed();

  const messages = await channel.messages.fetch();
  const lastMsg = messages.filter((m) => m.author.id === client.user?.id).first();

  if (lastMsg) {
    lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated embed at ${new Date()}`);
};

const updateDbCron = new CronJob('*/5 * * * *', async () => {
  await updateFloorsInDb();
});

const updateEmbedCron = new CronJob('*/5 * * * *', async () => {
  await updateEmbed();
});

client.once('ready', async () => {
  console.info('Bot online!');

  const conn = await connectionFactory();
  await clearDb(conn);
  console.info('Cleared db');
  await buildDb(conn, nfts);
  console.info('Built db');
  await conn.close();

  await updateFloorsInDb();
  console.info('Fetched prices, added to db');
  await updateEmbed();

  updateDbCron.start();
  updateEmbedCron.start();
});

client.login(token);

client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
