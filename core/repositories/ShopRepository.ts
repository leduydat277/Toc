import { ShopifyShop } from "core/entities/Shop";

export interface ShopRepository {
  createShop(data: ShopifyShop): Promise<void>;
  getShops(): Promise<ShopifyShop[]>;
  getShop(id: string): Promise<ShopifyShop | null>;
  updateShop(id: string, data: Partial<ShopifyShop>): Promise<ShopifyShop | null>;
}