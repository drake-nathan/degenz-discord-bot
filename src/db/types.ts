import { ObjectId } from 'mongoose';

export enum FetchMethod {
  openSeaApi = 'openSeaApi',
  openSeaScrape = 'openSeaScrape',
  openSeaTraitScrape = 'openSeaTraitScrape',
  superRareScrape = 'superRareScrape',
  foundationScrape = 'foundationScrape',
}

export enum Section {
  singles = 'singles',
  rektguy = 'rektguy',
  rld = 'rld',
  sevenDeadlySins = 'sevenDeadlySins',
  editions = 'editions',
  oneOfOnes = 'oneOfOnes',
}

export interface TraitFloor {
  name: string;
  query: string;
  price?: string;
  lastUpdated?: Date;
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
  collectionSlug: string;
  address: string;
  contractType: 'ERC721' | 'ERC1155';
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
