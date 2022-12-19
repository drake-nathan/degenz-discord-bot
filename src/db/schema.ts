import { Schema } from 'mongoose';
import { Nft } from './types';

export const nftSchema = new Schema<Nft>({
  name: { type: String, required: true },
  collectionSlug: { type: String },
  address: { type: String },
  contractType: { type: String, required: true },
  fetchMethod: { type: String, required: true },
  server: { type: String, required: true },
  sectionSlug: { type: String, required: true },
  price: { type: String },
  supply: { type: Number },
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
      supply: { type: Number },
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
      cliccSection: { type: String },
    },
  ],
  rugs: [
    {
      name: { type: String, required: true },
      openseaSlug: { type: String, required: true },
      roles: [
        {
          rugName: { type: String, required: true },
          roleName: { type: String, required: true },
          price: { type: String },
          supply: { type: Number },
          lastUpdated: { type: Date },
        },
      ],
    },
  ],
});
