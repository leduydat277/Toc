import { TextField } from '@shopify/polaris';
import { useTOCStore } from "../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const InputFontSizeOfHeadings = () => {
    const [fontSizeHeading, setFontSizeHeading] = useTOCStore((state) => [
        state.fontSizeHeading,
        state.setFontSizeHeading,
    ]);

    const handleChange = (value: string) => {
        setFontSizeHeading(parsePositiveNumber(value));
    };
    console.log('fontSizeHeading', fontSizeHeading)

    return (

        < TextField
            label="Font size of headings"
            type="number"
            value={fontSizeHeading.toString()}
            onChange={handleChange}
            autoComplete="off"
            suffix="px"
        />
    );
}
