import { ShopRepository } from "core/repositories/ShopRepository";
import { ShopifyShop } from "core/entities/Shop";

export class UpdateShop {
  constructor(private repository: ShopRepository) { }
  async execute(id: string, data: Partial<ShopifyShop>) {
    return await this.repository.updateShop(id, data);
  }
}