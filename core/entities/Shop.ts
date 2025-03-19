export interface ShopifyShop {
  shopId: string;
  name: string;
  accessToken: string;
  createShop(data: ShopifyShop): void;
  getShops(): ShopifyShop[];
  getShop(): ShopifyShop;
  updateShop(data: Partial<ShopifyShop>): void;
}
