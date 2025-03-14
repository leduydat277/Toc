import { Icon, Select } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import {
    TextAlignLeftIcon
} from '@shopify/polaris-icons';

export const InputIndentation = () => {
    const [selected, setSelected] = useState('off');

    const handleSelectChange = useCallback(
        (value: string) => setSelected(value),
        [],
    );

    const options = [
        { label: 'Off', value: 'off', prefix: <Icon source={TextAlignLeftIcon} />, },
        { label: 'On', value: 'on', prefix: <Icon source={TextAlignLeftIcon} />, },

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