import mongoose from "mongoose";

const { Schema, model, models } = mongoose;
const PaddingSchema = new Schema({
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 },
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
});

const TableOfContentsSchema = new Schema({
    title: { type: String, default: "" },
    textAlignment: {
        alignment: {
            type: String,
            enum: ["left", "center", "right"],
            default: "left",
        },
    },
    headingSettings: {
        tag: {
            type: [String],
            enum: ["h1", "h2", "h3", "h4", "h5", "h6"],
            default: ["h1", "h2", "h3", "h4", "h5", "h6"]
        },
        numbering: {
            type: String,
            enum: ["numbers", "none", "bullets", "disc"],
            default: "numbers"
        },
        isSectionLine: { type: Boolean, default: true },
        isIndentation: { type: Boolean, default: false },
        fontSize: { type: Number, default: 14 },
        color: { type: String, default: "#000000" },
        padding: PaddingSchema,
    },
    appearanceSettings: {
        isScrollAnimation: { type: Boolean, default: false },
        scrollOffset: { type: Number, default: 0 },
        maxWidth: { type: Number, default: 0 },
        displayAlignment: {
            type: String,
            enum: ["center", "left", "right"],
            default: "center",
        },
    },
    buttonSettings: {
        isHideButton: { type: Boolean, default: true },
        hideButtonName: { type: String, default: "Hide" },
        hideButtonColor: { type: String, default: "#000000" },

        showButtonName: { type: String, default: "Show" },
        showButtonColor: { type: String, default: "#FFFFFF" },

        initialDisplayLines: { type: Number, default: null },

        showAllButtonName: { type: String, default: "Show All" },
        showAllButtonColor: { type: String, default: "#FF0000" },
    },
    linkSettings: {
        isCustomLinkHover: { type: Boolean, default: false },
        linkColor: { type: String, default: "#0000FF" },
        hoverColor: { type: String, default: "#FF0000" },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const TableOfContentsModel = models.TableOfContents || model("TableOfContents", TableOfContentsSchema);
