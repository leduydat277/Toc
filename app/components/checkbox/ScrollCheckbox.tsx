import { Checkbox, Text } from '@shopify/polaris';
import { useState, useCallback } from 'react';

export const ScrollCheckbox = () => {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback(
        (newChecked: boolean) => setChecked(newChecked),
        [],
    );

    return (
        <>
            <Text >Scroll</Text>
            <Checkbox
                label="Enable animation for scroll"
                checked={checked}
                onChange={handleChange}
            />
        </>
    );
}