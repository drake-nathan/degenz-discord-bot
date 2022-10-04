import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import { getEmbed } from './server/embed';

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

  const lastMsg = (await channel.messages.fetch({ limit: 1 })).first();

  if (lastMsg) {
    lastMsg.edit({ embeds: [embed] });
  } else {
    await channel.send({ embeds: [embed] });
  }

  console.info(`Updated embed at ${new Date()}`);
};

const updateJob = new CronJob('*/5 * * * *', async () => {
  await updateEmbed();
});

client.once('ready', async () => {
  console.info('Bot online!');

  await updateEmbed();

  updateJob.start();
});

client.login(token);

client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
