import { Connection } from 'mongoose';
import { connectionFactory } from './connectionFactory';
import { nfts } from './data';
import { Nft } from './types';

export const addToDb = async (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  const query = await NftModel.create(nfts);
  return query;
};

connectionFactory()
  .then((conn) => {
    addToDb(conn);
  })
  .then((res) => console.info(res))
  .catch((e) => console.error(e));
