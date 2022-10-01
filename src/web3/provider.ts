import { ethers } from 'ethers';
import * as dotenv from 'dotenv';

dotenv.config();
const rpc = process.env.RPC;

const provider = new ethers.providers.JsonRpcProvider(rpc);

export default provider;
