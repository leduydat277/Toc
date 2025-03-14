import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const PaddingRight = () => {
    const [value, setValue] = useState('0');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Padding Right"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
