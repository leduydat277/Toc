
import { TableOfContentsRepositoryImpl } from "infrastructure/repositories/TableOfContentsRepositoryImpl";
import { GetTableOfContents } from "core/use-cases/getTableOfContents";
import { UpdateTableOfContents } from "core/use-cases/updateTableOfContents";

const repository = new TableOfContentsRepositoryImpl();

export const getTableOfContents = async (_id: string) => {
  const useCase = new GetTableOfContents(repository);
  return await useCase.execute(_id);
};

export const updateTableOfContents = async (_id: string, data: any) => {
  const useCase = new UpdateTableOfContents(repository);
  return await useCase.execute(_id, data);
};
