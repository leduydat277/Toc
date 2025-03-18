import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { alignmentOptions } from '../../constant/options'
import { useTOCStore } from "../../../state/stores";

export const InputTextAlignment = () => {
    const [setTextAlignment, textAlignment] = useTOCStore((state) => [state.setTextAlignment, state.textAlignment]);
    console.log('textAlignment', textAlignment)
    // fix
    return (
        <Select
            label="Title alignment"
            options={alignmentOptions}
            onChange={setTextAlignment}
            value={textAlignment}
            helpText="Specifies the horizontal alignment of text. If you specify other than left-alignment, indentation and numbering will be disabled."
        />
    );
}