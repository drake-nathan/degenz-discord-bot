import { ObjectId } from 'mongoose';

export enum FetchMethod {
  openSeaApi = 'openSeaApi',
  openSeaScrape = 'openSeaScrape',
  openSeaTraitScrape = 'openSeaTraitScrape',
  superRareScrape = 'superRareScrape',
  foundationScrape = 'foundationScrape',
  pepeApi = 'pepeApi',
  dexScreener = 'dexScreener',
}

export enum Section {
  singles = 'singles',
  rektguy = 'rektguy',
  rld = 'rld',
  sevenDeadlySins = 'sevenDeadlySins',
  distillery = 'distillery',
  editions = 'editions',
  oneOfOnes = 'oneOfOnes',
}

export enum RugRole {
  Standard = 'Standard',
  Scarce2 = 'Scarce2',
  Scarce1 = 'Scarce1',
  Rare2 = 'Rare2',
  Rare1 = 'Rare1',
}

export interface TraitFloor {
  name: string;
  query: string;
  price?: string;
  lastUpdated?: Date;
  rugRole?: RugRole;
  supply?: number;
}

export interface Token {
  tokenId: number;
  name?: string;
  rldDropNumber?: number;
  mintDate?: Date;
  price?: string;
  lastUpdated?: Date;
  lastSoldDate?: Date;
  lastSoldPrice?: string;
}

export interface Nft {
  _id?: ObjectId;
  name: string;
  collectionSlug?: string;
  address?: string;
  contractType: 'ERC721' | 'ERC1155' | 'PEPE' | 'ERC20';
  fetchMethod: FetchMethod;
  sectionSlug: string;
  mintDate?: Date;
  price?: string;
  lastUpdated?: Date;
  lastSoldDate?: Date;
  lastSoldPrice?: string;
  isRldDrop?: boolean;
  specialTraitFloors?: TraitFloor[];
  tokens?: Token[];
  tokenId?: number;
  query?: string;
}
