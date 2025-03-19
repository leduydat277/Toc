import { ShopRepository } from "core/repositories/ShopRepository";
import { ShopifyShop } from "core/entities/Shop";

export class GetShop {
  constructor(private repository: ShopRepository) { }

  async execute(id: string) {
    return <ShopifyShop | null>await this.repository.getShop(id);
  }
}