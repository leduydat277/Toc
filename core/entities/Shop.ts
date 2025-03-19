export interface ShopifyShop {
  id: string;
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
  createdAt: string;
  createShop(data: ShopifyShop): void;
  getShops(): ShopifyShop[];
  getShop(): ShopifyShop;
  updateShop(data: Partial<ShopifyShop>): void;
}
