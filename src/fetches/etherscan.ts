import * as dotenv from 'dotenv';
import axios from 'axios';
import { Etherscan } from '../bot/types';

dotenv.config();
const rootUrl = 'https://api.etherscan.io/api';
const apiKey = process.env.ETHERSCAN_API_KEY;

export const getGasPrice = async () => {
  const params = {
    module: 'gastracker',
    action: 'gasoracle',
    apikey: apiKey,
  };

  try {
    const { data } = await axios.get(rootUrl, { params });

    if (data && data.status === '1') {
      const gas = data.result.ProposeGasPrice as string;

      return Number(gas);
    }
    console.error(data);
  } catch (error) {
    console.error(error);
  }
};

export const getEthPrice = async () => {
  const params = {
    module: 'stats',
    action: 'ethprice',
    apikey: apiKey,
  };

  try {
    const { data } = await axios.get(rootUrl, { params });

    if (data && data.status === '1') {
      const gas = data.result.ethusd as string;

      return Number(gas);
    }
    console.error(data);
  } catch (error) {
    console.error(error);
  }
};

export const getEtherscan = async (): Promise<Etherscan> => {
  const ethPrice = await getEthPrice();
  const gasPrice = await getGasPrice();

  return { ethPrice, gasPrice };
};
