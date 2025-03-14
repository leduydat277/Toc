import { Checkbox, Text } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const ToggleButton = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback(
        (newChecked: boolean) => setChecked(newChecked),
        [],
    );

    return (
        <>

            <Checkbox
                label="Show show/hide button"
                checked={checked}
                onChange={handleChange}
            />
        </>
    );
}