import { Checkbox, Text } from '@shopify/polaris';
import { useState, useCallback } from 'react';
import { useTOCStore } from "../../../state/stores";

export const ScrollCheckbox = () => {
    const [scrollAnimation, setScrollAnimation] = useTOCStore((state) => [state.scrollAnimation, state.setScrollAnimation]);
    console.log('scrollAnimation', scrollAnimation)

    return (
        <>
            <Text variant='headingSm' as='h6' >Scroll</Text>
            <Checkbox
                label="Enable animation for scroll"
                checked={scrollAnimation}
                onChange={setScrollAnimation}
            />
        </>
    );
}