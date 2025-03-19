import { ShopRepository } from "core/repositories/ShopRepository";
import { ShopifyShop } from "core/entities/Shop";
import { ShopModel } from "infrastructure/db/models/Shop";

export class ShopRepositoryImpl implements ShopRepository {
  async createShop(data: ShopifyShop): Promise<void> {
    await ShopModel.create(data);
  }
  async getShops(): Promise<ShopifyShop[]> {
    return <ShopifyShop[]>await ShopModel.find();
  }
  async getShop(id: string): Promise<ShopifyShop | null> {
    const shop = await ShopModel.findOne({ _id: id });
    return shop;
  }

  async updateShop(id: string, data: Partial<ShopifyShop>): Promise<ShopifyShop | null> {
    const rs = await ShopModel.findByIdAndUpdate(id, { ...data }, { new: true });
    return rs;
  }
}