import { createWithEqualityFn } from "zustand/traditional";
import { immer } from "zustand/middleware/immer";
import {
    createJSONStorage,
    devtools,
    persist,
    subscribeWithSelector,
} from "zustand/middleware";
import { shallow } from "zustand/shallow";

type Padding = {
    top: number;
    bottom: number;
    left: number;
    right: number;
};

type TOC = {
    title: string;

    alignment: "left" | "center" | "right";
    textAlignment: "left" | "center" | "right";
    fontSize: number;
    colorHeading: string;
    padding: Padding;

    tag: string[];
    numbering: "numbers" | "none";
    isIndentation: boolean;
    isSectionLine: boolean;

    maxWidth: number;
    displayAlignment: "left" | "center" | "right";
    scrollAnimation: boolean;
    scrollOffset: number;
    isScrollAnimation: boolean;

    showHideButton: boolean;
    isHideButton: boolean;
    hideButtonName: string;
    showButtonName: string;
    showAllButtonName: string;
    initialDisplayLines: number;
    hideButtonColor: string;
    showButtonColor: string;
    showAllButtonColor: string;

    isCustomLinkHover: boolean;
    linkColor: string;
    hoverColor: string;
};

type TOCStore = TOC & {
    resetState: () => void;

    setTitle: (title: string) => void;
    setAlignment: (alignment: TOC["alignment"]) => void;
    setTextAlignment: (textAlignment: TOC["textAlignment"]) => void;
    setFontSize: (fontSize: number) => void;
    setColorHeading: (colorHeading: string) => void;
    setPaddingTop: (paddingTop: number) => void;
    setPaddingBottom: (paddingBottom: number) => void;
    setPaddingLeft: (paddingLeft: number) => void;
    setPaddingRight: (paddingRight: number) => void;
    setTag: (tag: string[]) => void;
    setNumbering: (numbering: TOC["numbering"]) => void;
    setIsIndentation: (isIndentation: boolean) => void;
    setIsSectionLine: (isSectionLine: boolean) => void;
    setMaxWidth: (maxWidth: number) => void;
    setDisplayAlignment: (displayAlignment: TOC["displayAlignment"]) => void;
    setScrollAnimation: (scrollAnimation: boolean) => void;
    setScrollOffset: (scrollOffset: number) => void;
    setShowHideButton: (showHideButton: boolean) => void;
    setIsHideButton: (isHideButton: boolean) => void;
    setHideButtonName: (hideButtonName: string) => void;
    setShowButtonName: (showButtonName: string) => void;
    setShowAllButtonName: (showAllButtonName: string) => void;
    setInitialDisplayLines: (initialDisplayLines: number) => void;
    setHideButtonColor: (hideButtonColor: string) => void;
    setShowButtonColor: (showButtonColor: string) => void;
    setShowAllButtonColor: (showAllButtonColor: string) => void;
    setIsCustomLinkHover: (isCustomLinkHover: boolean) => void;
    setLinkColor: (linkColor: string) => void;
    setHoverColor: (hoverColor: string) => void;
};

export const initTOC: TOC = {
    title: "",

    alignment: "center",
    textAlignment: "left",
    fontSize: 14,
    colorHeading: "#000000",
    padding: { top: 0, bottom: 0, left: 0, right: 0 },

    tag: [],
    numbering: "numbers",
    isIndentation: false,
    isSectionLine: true,

    maxWidth: 0,
    displayAlignment: "center",
    scrollAnimation: false,
    scrollOffset: 0,
    isScrollAnimation: false,

    showHideButton: true,
    isHideButton: true,
    hideButtonName: "hide",
    showButtonName: "show",
    showAllButtonName: "show all",
    initialDisplayLines: 1,
    hideButtonColor: "#000000",
    showButtonColor: "#000000",
    showAllButtonColor: "#000000",

    isCustomLinkHover: false,
    linkColor: "#000000",
    hoverColor: "#000000",
};

export const useTOCStore = createWithEqualityFn<TOCStore>()(
    devtools(
        subscribeWithSelector(
            immer((set) => ({
                ...initTOC,

                resetState: () => set(() => ({ ...initTOC })),

                setTitle: (title) =>
                    set((state) => {
                        state.title = title;
                    }),
                setAlignment: (alignment) =>
                    set((state) => {
                        state.alignment = alignment;
                    }),
                setTextAlignment: (textAlignment) =>
                    set((state) => {
                        state.textAlignment = textAlignment;
                    }),
                setFontSize: (fontSize) =>
                    set((state) => {
                        state.fontSize = fontSize;
                    }),
                setColorHeading: (colorHeading) =>
                    set((state) => {
                        state.colorHeading = colorHeading;
                    }),
                setPaddingTop: (paddingTop) =>
                    set((state) => {
                        state.padding.top = paddingTop;
                    }),
                setPaddingBottom: (paddingBottom) =>
                    set((state) => {
                        state.padding.bottom = paddingBottom;
                    }),
                setPaddingLeft: (paddingLeft) =>
                    set((state) => {
                        state.padding.left = paddingLeft;
                    }),
                setPaddingRight: (paddingRight) =>
                    set((state) => {
                        state.padding.right = paddingRight;
                    }),
                setTag: (tag) =>
                    set((state) => {
                        state.tag = tag;
                    }),
                setNumbering: (numbering) =>
                    set((state) => {
                        state.numbering = numbering;
                    }),
                setIsIndentation: (isIndentation) =>
                    set((state) => {
                        state.isIndentation = isIndentation;
                    }),
                setIsSectionLine: (isSectionLine) =>
                    set((state) => {
                        state.isSectionLine = isSectionLine;
                    }),
                setMaxWidth: (maxWidth) =>
                    set((state) => {
                        state.maxWidth = maxWidth;
                    }),
                setDisplayAlignment: (displayAlignment) =>
                    set((state) => {
                        state.displayAlignment = displayAlignment;
                    }),
                setScrollAnimation: (scrollAnimation) =>
                    set((state) => {
                        state.scrollAnimation = scrollAnimation;
                    }),
                setScrollOffset: (scrollOffset) =>
                    set((state) => {
                        state.scrollOffset = scrollOffset;
                    }),
                setShowHideButton: (showHideButton) =>
                    set((state) => {
                        state.showHideButton = showHideButton;
                    }),
                setIsHideButton: (isHideButton) =>
                    set((state) => {
                        state.isHideButton = isHideButton;
                    }),
                setHideButtonName: (hideButtonName) =>
                    set((state) => {
                        state.hideButtonName = hideButtonName;
                    }),
                setShowButtonName: (showButtonName) =>
                    set((state) => {
                        state.showButtonName = showButtonName;
                    }),
                setShowAllButtonName: (showAllButtonName) =>
                    set((state) => {
                        state.showAllButtonName = showAllButtonName;
                    }),
                setInitialDisplayLines: (initialDisplayLines) =>
                    set((state) => {
                        state.initialDisplayLines = initialDisplayLines;
                    }),
                setHideButtonColor: (hideButtonColor) =>
                    set((state) => {
                        state.hideButtonColor = hideButtonColor;
                    }),
                setShowButtonColor: (showButtonColor) =>
                    set((state) => {
                        state.showButtonColor = showButtonColor;
                    }),
                setShowAllButtonColor: (showAllButtonColor) =>
                    set((state) => {
                        state.showAllButtonColor = showAllButtonColor;
                    }),
                setIsCustomLinkHover: (isCustomLinkHover) =>
                    set((state) => {
                        state.isCustomLinkHover = isCustomLinkHover;
                    }),
                setLinkColor: (linkColor) =>
                    set((state) => {
                        state.linkColor = linkColor;
                    }),
                setHoverColor: (hoverColor) =>
                    set((state) => {
                        state.hoverColor = hoverColor;
                    }),
            })),
        ),
    ),
    shallow,
);
