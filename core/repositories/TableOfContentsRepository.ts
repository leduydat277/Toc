
import { TableOfContents } from '../entities/TableOfContents';

export interface TableOfContentsRepository {
    get(): Promise<TableOfContents>;
    update(id: string, data: Partial<TableOfContents>): Promise<TableOfContents>;
}
