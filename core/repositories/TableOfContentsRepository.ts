
import { TableOfContents } from '../entities/TableOfContents';

export interface TableOfContentsRepository {
    create(data: TableOfContents): Promise<void>;
    get(shopId: string): Promise<TableOfContents | null>;
    update(id: string, data: Partial<TableOfContents>): Promise<TableOfContents | null>;
}
