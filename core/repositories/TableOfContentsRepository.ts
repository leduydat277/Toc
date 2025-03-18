
import { TableOfContents } from '../entities/TableOfContents';

export interface TableOfContentsRepository {
    get(id: string): Promise<TableOfContents | null>;
    update(id: string, data: Partial<TableOfContents>): Promise<TableOfContents | null>;
}
