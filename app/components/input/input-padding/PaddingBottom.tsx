import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const PaddingBottom = () => {
    const [padding, setPaddingBottom] = useTOCStore((state) => [state.padding, state.setPaddingBottom]);
    console.log('padding bottom', padding.bottom)
    return (
        <TextField
            label="Padding Bottom"
            type="number"
            value={`${padding.bottom}`}
            onChange={(value) => setPaddingBottom(parsePositiveNumber(value))}
            autoComplete="off"
            suffix="px"
        />
    );
}