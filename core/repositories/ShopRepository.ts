import { ShopifyShop } from "core/entities/Shop";

export interface ShopRepository {
  getShops(): Promise<ShopifyShop[]>;
  getShop(id: string): Promise<ShopifyShop | null>;
  updateShop(id: string, data: Partial<ShopifyShop>): Promise<ShopifyShop | null>;
}