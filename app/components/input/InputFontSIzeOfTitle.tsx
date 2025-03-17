import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useTOCStore } from "../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const InputFontSIzeOfTitle = () => {
    const [fontSize, setFontSize] = useTOCStore((state) => [
        state.fontSize,
        state.setFontSize,
    ]);

    const handleChange = (value: string) => {
        setFontSize(parsePositiveNumber(value));
    };
    console.log('fontSize', fontSize)


    return (
        <TextField
            label="Font size of title"
            type="number"
            value={`${fontSize}`}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
