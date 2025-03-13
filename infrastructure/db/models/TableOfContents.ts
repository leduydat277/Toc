
import { Schema, model } from 'mongoose';
import { TableOfContents } from '~/../core/entities/TableOfContents';

const PaddingSchema = new Schema({
    top: { type: Number, default: 0 },
    bottom: { type: Number, default: 0 },
    left: { type: Number, default: 0 },
    right: { type: Number, default: 0 },
});

const TableOfContentsSchema = new Schema<TableOfContents>({
    titleSettings: {
        content: { type: String, default: '' },
        alignment: { type: String, enum: ['left', 'center', 'right'], default: 'left' },
        fontSize: { type: Number, default: 14 },
        color: { type: String, default: '#000000' },
        padding: PaddingSchema,
    },
    headingSettings: {
        tag: { type: [String], default: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] },
        numbering: { type: String, enum: ['numbers', 'none'], default: 'numbers' },
        sectionLine: { type: Boolean, default: true },
        indentation: { type: Boolean, default: false },
        fontSize: { type: Number, default: 14 },
        color: { type: String, default: '#000000' },
        padding: PaddingSchema,
    },
    appearanceSettings: {
        scrollAnimation: { type: Boolean, default: false },
        scrollOffset: { type: Number, default: 0 },
        padding: PaddingSchema,
        maxWidth: { type: Number, default: 0 },
        displayAlignment: { type: String, enum: ['center', 'left', 'right'], default: 'center' },
    },
    buttonSettings: {
        showHideButton: { type: Boolean, default: true },
        hideButtonName: { type: String, default: 'hide' },
        showButtonName: { type: String, default: 'show' },
        initialDisplayLines: { type: Number, default: null },
        showAllButtonName: { type: String, default: 'show all' },
    },
    linkSettings: {
        customLinkHover: { type: Boolean, default: false },
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const TableOfContentsModel = model<TableOfContents>('TableOfContents', TableOfContentsSchema);
