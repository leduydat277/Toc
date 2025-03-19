import { ShopRepository } from "core/repositories/ShopRepository";
import { ShopifyShop } from "core/entities/Shop";

export class CreateShop {
  constructor(private repository: ShopRepository) { }
  async execute(data: ShopifyShop) {
    return await this.repository.createShop(data);
  }
}