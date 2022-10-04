import { Connection } from 'mongoose';
import { Nft } from './types';

export const getNft = (conn: Connection, nft: Nft) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.findOne(nft).exec();
};

export const getAllNfts = (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.find({}).exec();
};

export const updateNft = async (conn: Connection, nft: Nft) => {
  const NftModel = conn.model<Nft>('Nft');

  const query = await NftModel.findOneAndUpdate({ _id: nft._id }, nft, {
    new: true,
  }).exec();

  return query;
};
