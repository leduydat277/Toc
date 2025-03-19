export interface Padding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}



export interface TextAlignment {
    alignment: 'left' | 'center' | 'right';
}

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingSettings {
    tag: HeadingTag[];
    numbering: 'numbers' | 'none' | 'bullets' | 'disc';
    isSectionLine: boolean;
    isIndentation: boolean; // Thụt lề
    fontSize: number;
    color: string;
    padding: Padding;
}

export interface AppearanceSettings {
    isScrollAnimation: boolean; // Hiệu ứng cuộn (Sửa lỗi chính tả)
    scrollOffset: number; // Độ lệch cuộn
    maxWidth: number; // Chiều rộng tối đa
    displayAlignment: 'center' | 'left' | 'right'; // Căn chỉnh hiển thị
}

export interface ButtonSettings {
    isHideButton: boolean;
    hideButtonName: string;
    hideButtonColor: string; // Màu cho nút ẩn

    showButtonName: string;
    showButtonColor: string; // Màu cho nút hiện

    initialDisplayLines: number | null;

    showAllButtonName: string;
    showAllButtonColor: string; // Màu cho nút hiển thị tất cả
}

export interface LinkSettings {
    isCustomLinkHover: boolean; // Bật/tắt custom hover
    linkColor: string; // Màu của liên kết
    hoverColor: string; // Màu khi hover chuột vào liên kết
}

export interface TableOfContents {
    id: string;
    shopId: string;
    title: string;
    textAlignment: TextAlignment;
    headingSettings: HeadingSettings;
    appearanceSettings: AppearanceSettings;
    buttonSettings: ButtonSettings;
    linkSettings: LinkSettings;
    createdAt: Date;
    updatedAt: Date;

    // methods
    createTableOfContents(data: TableOfContents): Promise<void>;
    getTableOfContents(): Promise<TableOfContents>;
    updateTableOfContents(data: Partial<TableOfContents>): Promise<void>;
}
