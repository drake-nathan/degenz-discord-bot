import { ethers } from 'ethers';
import provider from './provider';

export const getContract = (abi: any, address: string) =>
  new ethers.Contract(address, abi, provider);
