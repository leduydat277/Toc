

import { TableOfContentsRepository } from '../repositories/TableOfContentsRepository';
import { TableOfContents } from '../entities/TableOfContents';

export class GetTableOfContents {
  constructor(private repository: TableOfContentsRepository) { }

  async execute(id: string) {
    return <TableOfContents | null>await this.repository.get(id);
  }

}
