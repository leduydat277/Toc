import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { alignmentOptions } from '../../constant/options'
import { useTOCStore } from "../../../state/stores";

export const InputAlignment = () => {
    const [alignment, setAlignment] = useTOCStore((state) => [state.alignment, state.setAlignment]);

    console.log('alignment', alignment)
    return (
        <Select
            label="Alignment"
            options={alignmentOptions}
            onChange={setAlignment}
            value={alignment}
            helpText='Available when the display area is larger than max width of the table of contents'
        />
    );
}