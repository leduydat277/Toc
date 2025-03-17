import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const PaddingRight = () => {
    const [padding, setPaddingRight] = useTOCStore((state) => [state.padding, state.setPaddingRight]);
    console.log('padding setPaddingright', padding?.right)
    return (
        <TextField
            label="Padding Right"
            type="number"
            value={`${padding.right}`}
            onChange={(value) => setPaddingRight(parsePositiveNumber(value))}
            autoComplete="off"
            suffix="px"
        />
    );
}