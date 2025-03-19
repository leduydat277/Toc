import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export interface IShop extends Document {
  shopId: string;
  name: string;
  email: string;
  myshopifyDomain: string;
  primaryDomain: {
    url: string;
  };
  plan: {
    displayName: string;
  };
  currencyCode: string;
  enabledPresentmentCurrencies: string[];
  createdAt: Date;
}

const ShopSchema = new Schema<IShop>({
  shopId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
  myshopifyDomain: { type: String, required: true },
  primaryDomain: {
    url: { type: String, required: true }
  },
  plan: {
    displayName: { type: String, required: true }
  },
  currencyCode: { type: String, required: true },
  enabledPresentmentCurrencies: { type: [String], required: true },
  createdAt: { type: Date, required: true },
});

export const ShopModel = models.Shop || model<IShop>("Shop", ShopSchema);