import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputFontSizeOfHeadings = () => {
    const [value, setValue] = useState('3');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Font size of headings"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
