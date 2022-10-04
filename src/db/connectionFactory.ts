import { createConnection } from 'mongoose';
import * as dotenv from 'dotenv';
import { nftSchema } from './schema';

export const connectionFactory = async () => {
  dotenv.config();
  const dbConnectionString = process.env.DB_CONNECTION_STRING as string;

  if (!dbConnectionString) {
    throw new Error('DB_CONNECTION_STRING not found in .env');
  }

  const conn = await createConnection(dbConnectionString).asPromise();

  conn.addListener('error', (error: any) => {
    console.error(error);
  });

  conn.model('Nft', nftSchema);

  return conn;
};
