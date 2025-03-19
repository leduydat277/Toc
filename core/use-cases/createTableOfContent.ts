import { TableOfContentsRepository } from '../repositories/TableOfContentsRepository';
import { TableOfContents } from '../entities/TableOfContents';

export class CreateTableOfContents {
  constructor(private repository: TableOfContentsRepository) { }
  execute(data: TableOfContents): Promise<void> {
    return this.repository.create(data);
  }
}