import { TableOfContentsRepository } from "../../core/repositories/TableOfContentsRepository";
import { TableOfContents } from "../../core/entities/TableOfContents";
import { TableOfContentsModel } from "infrastructure/db/models/TableOfContents";

export class TableOfContentsRepositoryImpl
  implements TableOfContentsRepository {
  async create(data: TableOfContents): Promise<void> {
    return await TableOfContentsModel.create(data);
  }

  async get(shopId: string): Promise<TableOfContents | null> {
    const tableOfContents = await TableOfContentsModel.findOne({ shopId });
    return tableOfContents;
  }

  async update(
    shopId: string,
    data: Partial<TableOfContents>,
  ): Promise<TableOfContents | null> {
    const rs = await TableOfContentsModel.findOneAndUpdate(
      { shopId },
      { ...data },
      { new: true },
    );
    return rs;
  }
}
