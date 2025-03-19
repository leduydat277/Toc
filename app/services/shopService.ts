import { ShopRepositoryImpl } from "infrastructure/repositories/ShopRepositoryImpl";
import { CreateShop } from "core/use-cases/shop/createShop";
const repository = new ShopRepositoryImpl();

export const createShop = async (data: any) => {
  const useCase = new CreateShop(repository);
  return await useCase.execute(data);
};