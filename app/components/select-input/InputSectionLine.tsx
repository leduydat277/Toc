import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputSectionLine = () => {
    const [selected, setSelected] = useState('off');

    const handleSelectChange = useCallback(
        (value: string) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Off', value: 'off' },
        { label: 'On', value: 'on' },
    ];

    return (
        <Select
            label="Section Line"
            options={options}
            onChange={handleSelectChange}
            value={selected}
        />
    );
}