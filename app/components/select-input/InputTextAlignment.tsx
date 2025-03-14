import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const InputTextAlignment = () => {
    const [selected, setSelected] = useState('left');

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
            label="Text alignment"
            options={options}
            onChange={handleSelectChange}
            value={selected}
            helpText="Specifies the horizontal alignment of text. If you specify other than left-alignment, indentation and numbering will be disabled."
        />
    );
}