import { Schema } from 'mongoose';
import { Nft } from './types';

export const nftSchema = new Schema<Nft>({
  name: { type: String, required: true },
  collectionSlug: { type: String, required: true },
  address: { type: String },
  contractType: { type: String, required: true },
  fetchMethod: { type: String, required: true },
  sectionSlug: { type: String, required: true },
  price: { type: String },
  lastUpdated: { type: Date },
  isRldDrop: { type: Boolean },
  tokenId: { type: Number },
  lastSoldDate: { type: Date },
  lastSoldPrice: { type: String },
  query: { type: String },
  specialTraitFloors: [
    {
      name: { type: String, required: true },
      query: { type: String, required: true },
      price: { type: String },
      lastUpdated: { type: Date },
    },
  ],
  tokens: [
    {
      tokenId: { type: Number, required: true },
      name: { type: String },
      rldDropNumber: { type: Number },
      mintDate: { type: Date },
      price: { type: String },
      lastUpdated: { type: Date },
      lastSoldDate: { type: Date },
      lastSoldPrice: { type: String },
    },
  ],
});
