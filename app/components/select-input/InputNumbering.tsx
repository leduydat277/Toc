import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputNumbering = () => {
    const [selected, setSelected] = useState('none');

    const handleSelectChange = useCallback(
        (value: string) => setSelected(value),
        [],
    );

    const options = [
        { label: 'numbers', value: 'numbers' },
        { label: 'dots', value: 'dots' },
        { label: 'none', value: 'none' },
    ];

    return (
        <Select
            label="Numbering"
            options={options}
            onChange={handleSelectChange}
            value={selected}
        />
    );
}