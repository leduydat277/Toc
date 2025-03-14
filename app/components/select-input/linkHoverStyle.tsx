import { Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const LinkHoverStyle = () => {
    const [selected, setSelected] = useState('none');

    const handleSelectChange = useCallback(
        (value: string) => setSelected(value),
        [],
    );

    const options = [
        { label: 'None', value: 'none' },
        { label: 'Underline (Solid)', value: 'solid' },
        { label: 'Underline (Dotted)', value: 'dotted' },
    ];

    return (
        <Select
            label="Underline style for link (On hover)"
            options={options}
            onChange={handleSelectChange}
            value={selected}

        />
    );
}