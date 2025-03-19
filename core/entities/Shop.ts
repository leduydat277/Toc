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
  getShops(): ShopifyShop[];
  getShop(): ShopifyShop;
  updateShop(data: Partial<ShopifyShop>): void;
}
