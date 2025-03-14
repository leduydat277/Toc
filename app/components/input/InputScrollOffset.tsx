import { TextField } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const NumberFieldWithStepper = () => {
    const [value, setValue] = useState('1');

    const handleChange = useCallback((newValue: string) => {
        if (/^\d*$/.test(newValue)) {
            setValue(newValue);
        }
    }, []);

    return (
        <TextField
            label="Scroll Offset"
            type="number"
            value={value}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"

        />
    );
}
