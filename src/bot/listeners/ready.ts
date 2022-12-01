import { CronJob } from 'cron';
import { Client } from 'discord.js';
import { connectionFactory } from '../../db/connectionFactory';
import { clearDb, buildDb } from '../../db/queries';
import { updateRektEmbed, updateRugEmbed } from '../embeds/updateEmbeds';
import { updateFloorsInDb } from '../updateFloorsInDb';
import { rektNfts } from '../../nfts/rektData';
import { rugNfts } from '../../nfts/rugData';
import { addRolesToRugs } from '../helpers';
import { getEtherscan } from '../../fetches/etherscan';
import { Etherscan } from '../types';

export const ready = async (client: Client) => {
  const updateDbCron = new CronJob('*/10 * * * *', async () => {
    try {
      await updateFloorsInDb();
    } catch (error) {
      console.error(error);
    }
  });

  const updateEmbedCron = new CronJob('*/1 * * * *', async () => {
    try {
      const etherscan = await getEtherscan();

      await updateRektEmbed(client, etherscan);
      await updateRugEmbed(client, etherscan);
    } catch (error) {
      console.error(error);
    }
  });

  client.once('ready', async () => {
    console.info('Bot online!');

    try {
      // const conn = await connectionFactory();
      // await clearDb(conn);
      // console.info('Cleared db');
      // await buildDb(conn, rektNfts);
      // await buildDb(conn, addRolesToRugs(rugNfts));
      // console.info('Built db');
      // await conn.close();

      const etherscan = await getEtherscan();

      await updateFloorsInDb();
      console.info('Fetched prices, added to db');
      await updateRektEmbed(client, etherscan);
      await updateRugEmbed(client, etherscan);
    } catch (error) {
      console.error(error);
    }

    updateDbCron.start();
    updateEmbedCron.start();
  });
};
