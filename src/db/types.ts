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

export enum Server {
  rekt = 'rekt',
  rug = 'rug',
}

export enum Section {
  singles = 'singles',
  rektguy = 'rektguy',
  rld = 'rld',
  sevenDeadlySins = 'sevenDeadlySins',
  distillery = 'distillery',
  editions = 'editions',
  oneOfOnes = 'oneOfOnes',
  rugs = 'rugs',
  cities = 'cities',
}

export interface TraitFloor {
  name: string;
  query: string;
  price?: string;
  lastUpdated?: Date;
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

export type RoleName = 'Standard' | 'Scarce 2' | 'Scarce 1' | 'Rare 2' | 'Rare 1';

export interface Role {
  _id?: ObjectId;
  rugName: string;
  roleName: RoleName;
  price?: string;
  supply?: number;
  lastUpdated?: Date;
}

export interface Rug {
  name: string;
  openseaSlug: string;
  roles?: Role[];
}

export type ContractType = 'ERC20' | 'ERC721' | 'ERC1155' | 'PEPE';

export interface Nft {
  _id?: ObjectId;
  name: string;
  collectionSlug?: string;
  address?: string;
  contractType: ContractType;
  fetchMethod: FetchMethod;
  server: Server;
  sectionSlug: string;
  mintDate?: Date;
  price?: string;
  supply?: number;
  lastUpdated?: Date;
  lastSoldDate?: Date;
  lastSoldPrice?: string;
  isRldDrop?: boolean;
  specialTraitFloors?: TraitFloor[];
  tokens?: Token[];
  rugs?: Rug[];
  tokenId?: number;
  query?: string;
}
