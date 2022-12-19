import { Connection } from 'mongoose';
import { Nft, Token, Server } from './types';

export const getNft = (conn: Connection, nft: Nft) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.findOne(nft).exec();
};

export const getAllNfts = (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.find({}).exec();
};

export const getRektNfts = (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.find({ server: Server.rekt }).exec();
};

export const getRugNfts = (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.find({ server: Server.rug }).exec();
};

export const getCliccNfts = (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  return NftModel.find({ server: Server.clicc }).exec();
};

export const updateNft = async (conn: Connection, nft: Nft) => {
  const NftModel = conn.model<Nft>('Nft');

  const query = await NftModel.findOneAndUpdate({ _id: nft._id }, nft, {
    new: true,
  }).exec();

  return query;
};

export const buildDb = async (conn: Connection, nfts: Nft[]) => {
  const NftModel = conn.model<Nft>('Nft');

  const query = await NftModel.create(nfts);

  return query;
};

export const clearDb = async (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  await NftModel.deleteMany({}).exec();
};

export const getAqRektguys = async (conn: Connection) => {
  const NftModel = conn.model<Nft>('Nft');

  const rektguy = await NftModel.findOne({ collectionSlug: 'rektguy' }).exec();

  return rektguy?.tokens || null;
};

export const updateAqRektguys = async (conn: Connection, tokens: Token[]) => {
  const NftModel = conn.model<Nft>('Nft');

  const query = NftModel.findOneAndUpdate({ collectionSlug: 'rektguy' }, tokens, {
    new: true,
  }).exec();

  return query;
};
