import { Checkbox, Text } from '@shopify/polaris';
import { useTOCStore } from "state/stores";
export const ToggleButton = () => {
    const [setIsHideButton, isHidebButton] = useTOCStore((state) => [state.setIsHideButton, state.isHideButton]);

    console.log('isHidebButton', isHidebButton)
    return (
        <>

            <Checkbox
                label="Show show/hide button"
                checked={isHidebButton}
                onChange={setIsHideButton}
            />
        </>
    );
}