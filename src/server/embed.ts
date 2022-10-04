import { EmbedBuilder } from 'discord.js';
import { updateFloorsInDb } from './helpers';

export const getEmbed = async () => {
  console.info('Updating floors embed...');

  const message = await updateFloorsInDb();

  const embed = new EmbedBuilder()
    .setTitle('Degenz/OSF Floor Prices')
    .setThumbnail(
      'https://i.seadn.io/gcs/files/0d5f1b200a067938f507cbe12bbbabc2.jpg?auto=format',
    )
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message);

  return embed;
};
