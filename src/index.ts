import { Client, GatewayIntentBits, TextChannel } from 'discord.js';
import * as dotenv from 'dotenv';
import { CronJob } from 'cron';
import { getEmbed } from './message/embed';

try {
  dotenv.config();
  const token = process.env.TOKEN;

  if (!token) {
    throw new Error('No discord token found!');
  }

  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  const updateFloorsEmbed = async () => {
    const channelId = process.env.CHANNEL_ID;
    const channel = (await client.channels.fetch(channelId)) as TextChannel;

    const embed = await getEmbed();

    const lastMsg = (await channel.messages.fetch({ limit: 1 })).first();

    if (lastMsg) {
      lastMsg.edit({ embeds: [embed] });
    } else {
      await channel.send({ embeds: [embed] });
    }

    console.info(`Updated embed at ${new Date().toISOString()}`);
  };

  const updateJob = new CronJob('*/5 * * * *', async () => {
    await updateFloorsEmbed();
  });

  client.once('ready', async () => {
    console.info('Bot online!');

    await updateFloorsEmbed();

    updateJob.start();
  });

  client.login(token);
} catch (error) {
  console.error(error);
}
