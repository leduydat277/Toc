import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputAlignment = () => {
    const [selected, setSelected] = useState('center');

    const handleSelectChange = useCallback(
        (value: string) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Left', value: 'left' },
        { label: 'Center', value: 'center' },
        { label: 'Right', value: 'right' },
    ];

    return (
        <Select
            label="Alignment"
            options={options}
            onChange={handleSelectChange}
            value={selected}
            helpText='Available when the display area is larger than max width of the table of contents'
        />
    );
}