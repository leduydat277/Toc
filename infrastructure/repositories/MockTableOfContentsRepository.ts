
import { TableOfContents } from 'core/entities/TableOfContents';
import { TableOfContentsRepository } from 'core/repositories/TableOfContentsRepository';

export class MockTableOfContentsRepository implements TableOfContentsRepository {
  async get(id: string): Promise<any> {
    console.log(`Mock get() called with id: ${id}`);
    return {
      title: "",

      alignment: "center",
      textAlignment: "left",
      fontSize: 14,
      colorHeading: "#000000",
      padding: { top: 0, bottom: 0, left: 0, right: 0 },

      backgroundColor: 'rgb(255, 255, 255)',
      borderColor: 'rgb(0, 0, 0)',
      sectionLineColor: 'rgb(0, 0, 0)',
      titleColor: 'rgb(0, 0, 0)',

      tag: [],
      numbering: "numbers",
      isIndentation: false,
      isSectionLine: true,
      fontSizeHeading: 14,

      maxWidth: 0,
      displayAlignment: "center",
      scrollAnimation: false,
      scrollOffset: 0,
      isScrollAnimation: false,

      showHideButton: true,
      isHideButton: true,
      hideButtonName: "Hide",
      showButtonName: "Show",
      showAllButtonName: "Show all",
      initialDisplayLines: 1,
      hideButtonColor: "rgb(0, 0, 0)",
      showButtonColor: "rgb(0, 0, 0)",
      showAllButtonColor: "rgb(0, 0, 0)",

      isCustomLinkHover: false,
      linkColor: "rgb(0, 0, 0)",
      hoverColor: "rgb(0, 0, 0)",
      underlineStyle: "solid",
    } as unknown as TableOfContents;
  }

  async update(id: string, data: Partial<TableOfContents>): Promise<TableOfContents> {
    console.log(`Mock update() called with id: ${id}, data:`, data);

    return {
      id,
      ...data, // Merge dữ liệu mới với mock data cũ
    } as TableOfContents;
  }
}
