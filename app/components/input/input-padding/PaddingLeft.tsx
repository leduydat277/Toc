import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const PaddingLeft = () => {
    const [padding, setPaddingLeft] = useTOCStore((state) => [state.padding, state.setPaddingLeft]);
    console.log('padding setPaddingLeft', padding.left)
    return (
        <TextField
            label="Padding Left"
            type="number"
            value={`${padding.left}`}
            onChange={(value) => setPaddingLeft(parsePositiveNumber(value))}
            autoComplete="off"
            suffix="px"
        />
    );
}