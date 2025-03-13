
export interface Padding {
    top: number;
    bottom: number;
    left: number;
    right: number;
}

export interface TitleSettings {
    content: string;
    alignment: 'left' | 'center' | 'right';
    fontSize: number;
    color: string;
    padding: Padding;
}


export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface HeadingSettings {
    tag: HeadingTag[];
    numbering: 'numbers' | 'none' | 'bullets' | 'dots';
    sectionLine: boolean;
    indentation: boolean; // Thụt lề
    fontSize: number;
    color: string;
    padding: Padding;
}


export interface AppearanceSettings {
    scrollAnimation: boolean; // Hiệu ứng cuộn
    scrollOffset: number; // Độ lệch cuộn
    padding: Padding;
    maxWidth: number; // Chiều rộng tối đa
    displayAlignment: 'center' | 'left' | 'right'; // Căn chỉnh hiển thị
}

// Button settings (nút bấm ẩn/hiện ToC)
export interface ButtonSettings {
    showHideButton: boolean;
    hideButtonName: string;
    showButtonName: string;
    initialDisplayLines: number | null;
    showAllButtonName: string;
}

// Link settings (cài đặt liên kết)
export interface LinkSettings {
    customLinkHover: boolean;
}


export interface TableOfContents {
    id: string;
    titleSettings: TitleSettings;
    headingSettings: HeadingSettings;
    appearanceSettings: AppearanceSettings;
    buttonSettings: ButtonSettings;
    linkSettings: LinkSettings;
    createdAt: Date;
    updatedAt: Date;

    // methods
    getTableOfContents(): TableOfContents;
    updateTableOfContents(data: Partial<TableOfContents>): void;

}

