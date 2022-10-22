import { Client, GatewayIntentBits } from 'discord.js';
import * as dotenv from 'dotenv';
import { ready } from './bot/listeners/ready';

dotenv.config();
const token = process.env.TOKEN;

if (!token) {
  throw new Error('No discord token found!');
}

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

ready(client);

client.login(token);

client.on('error', (e) => console.error(e));
client.on('warn', (e) => console.warn(e));
client.on('debug', (e) => console.info(e));
