import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const PaddingTop = () => {
    const [padding, setPaddingTop] = useTOCStore((state) => [state.padding, state.setPaddingTop]);
    console.log('padding', padding)
    return (
        <TextField
            label="Padding Top"
            type="number"
            value={`${padding.top}`}
            onChange={(value) => setPaddingTop(parsePositiveNumber(value))}
            autoComplete="off"
            suffix="px"
        />
    );
}