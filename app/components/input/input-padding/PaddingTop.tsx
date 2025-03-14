import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const PaddingTop = () => {
    const [value, setValue] = useState('16');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Padding Top"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
