import provider from './provider';
import { getContract } from './contract';
import { nftContracts } from '../data/nfts';

const getLatestBlock = () => provider.getBlockNumber();

const fetchTransactions = async () => {
  const { address, abi } = nftContracts[0];
  const contract = getContract(abi, address);

  const latestBlock = await getLatestBlock();
  const fromBlock = latestBlock - 1000;

  const events = await contract.queryFilter('*', fromBlock);

  return events;
};

fetchTransactions().then(async (events) => {
  const event = events[0];
  console.log(event);
  const tx = await event.getTransactionReceipt();
  console.log(tx);
});
