import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputFontSIzeOfTitle = () => {
    const [value, setValue] = useState('14');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Font size of title"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
