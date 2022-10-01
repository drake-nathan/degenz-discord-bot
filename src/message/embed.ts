import { EmbedBuilder } from 'discord.js';
import { getAllFloors } from './helpers';

export const getEmbed = async () => {
  const message = await getAllFloors();

  const embed = new EmbedBuilder()
    .setTitle('Degenz/OSF Floor Prices')
    .setThumbnail(
      'https://i.seadn.io/gcs/files/0d5f1b200a067938f507cbe12bbbabc2.jpg?auto=format&w=3840',
    )
    .setFooter({ text: 'Last updated:' })
    .setTimestamp()
    .setDescription(message);

  return embed;
};
