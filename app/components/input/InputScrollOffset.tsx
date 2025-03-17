import { TextField } from "@shopify/polaris";
import { useState, useCallback } from "react";
import { useTOCStore } from "../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";


export const NumberFieldWithStepper = () => {
    const [scrollOffset, setScrollOffset] = useTOCStore((state) => [
        state.scrollOffset,
        state.setScrollOffset,
    ]);

    const handleChange = (value: string) => {
        setScrollOffset(parsePositiveNumber(value));
    };
    console.log('scrollOffset', scrollOffset)

    return (
        <TextField
            label="Scroll Offset"
            type="number"
            value={`${scrollOffset}`}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
};
