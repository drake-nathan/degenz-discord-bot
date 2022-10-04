import { Schema } from 'mongoose';
import { Nft } from './types';

export const nftSchema = new Schema<Nft>({
  name: { type: String, required: true },
  collectionSlug: { type: String, required: true },
  address: { type: String, required: true },
  contractType: { type: String, required: true },
  fetchMethod: { type: String, required: true },
  sectionSlug: { type: String, required: true },
  price: { type: String },
  lastUpdated: { type: Date },
  isRldDrop: { type: Boolean },
  tokenId: { type: Number },
  lastSoldDate: { type: Date },
  lastSoldPrice: { type: String },
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
      tokenId: { type: Number },
      name: { type: String, required: true },
      rldDropNumber: { type: Number },
      mintDate: { type: Date },
      price: { type: String },
      lastUpdated: { type: Date },
    },
  ],
});
