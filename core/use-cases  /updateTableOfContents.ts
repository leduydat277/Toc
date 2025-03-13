

import { TableOfContentsRepository } from '../repositories/TableOfContentsRepository';
import { TableOfContents } from '../entities/TableOfContents';

export class UpdateTableOfContents {
    constructor(private repository: TableOfContentsRepository) { }

    async execute(id: string, data: TableOfContents) {
        return await this.repository.update(id, data);
    }
}
