import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const PaddingLeft = () => {
    const [value, setValue] = useState('0');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Padding Left"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
