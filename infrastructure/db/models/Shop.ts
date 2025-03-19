import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

export interface IShop extends Document {
  shopId: string;
  name: string;
  accessToken: string;
}

const ShopSchema = new Schema<IShop>({
  shopId: { type: String, required: true },
  name: { type: String, required: true },
  accessToken: { type: String, required: true },
});

export const ShopModel = models.Shop || model<IShop>("Shop", ShopSchema);