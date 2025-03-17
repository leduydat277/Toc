import { Select } from '@shopify/polaris';
import { numberingOptions } from 'app/constant/options';
import { useState, useCallback } from 'react';
import { useTOCStore } from "../../../state/stores";

export const InputNumbering = () => {
    const [numbering, setNumbering] = useTOCStore((state) => [state.numbering, state.setNumbering]);
    console.log('numbering', numbering)

    return (
        <Select
            label="Numbering"
            options={numberingOptions}
            onChange={setNumbering}
            value={numbering}
        />
    );
}