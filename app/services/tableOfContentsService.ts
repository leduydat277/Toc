
import { TableOfContentsRepositoryImpl } from "infrastructure/repositories/TableOfContentsRepositoryImpl";
import { GetTableOfContents } from "core/use-cases/getTableOfContents";
import { UpdateTableOfContents } from "core/use-cases/updateTableOfContents";
import { CreateTableOfContents } from "core/use-cases/createTableOfContent";

const repository = new TableOfContentsRepositoryImpl();

export const createTableOfContents = async (data: any) => {
  console.log("data createTableOfContents", data);
  const useCase = new CreateTableOfContents(repository);
  return await useCase.execute(data);
}

export const getTableOfContents = async (shopId: string) => {
  const useCase = new GetTableOfContents(repository);
  return await useCase.execute(shopId);
};

export const updateTableOfContents = async (shopId: string, data: any) => {
  const useCase = new UpdateTableOfContents(repository);
  return await useCase.execute(shopId, data);
};
