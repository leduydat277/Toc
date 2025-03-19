import { TableOfContentsRepository } from "../../core/repositories/TableOfContentsRepository";
import { TableOfContents } from "../../core/entities/TableOfContents";
import { TableOfContentsModel } from "infrastructure/db/models/TableOfContents";

export class TableOfContentsRepositoryImpl implements TableOfContentsRepository {

  async get(id: string): Promise<TableOfContents | null> {
    const tableOfContents = await TableOfContentsModel.findOne({ _id: id });
    return tableOfContents;
  }

  async update(id: string, data: Partial<TableOfContents>): Promise<TableOfContents | null> {
    const rs = await TableOfContentsModel.findByIdAndUpdate(id, { ...data }, { new: true });
    return rs;
  }
}
