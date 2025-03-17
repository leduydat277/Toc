import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../state/stores";
import { parsePositiveNumber } from "app/hooks/numberConverter";

export const InputTOCMaxWidth = () => {

    const [maxWidth, setMaxWidth] = useTOCStore((state) => [state.maxWidth, state.setMaxWidth]);
    console.log('maxWidth ', maxWidth)
    return (
        <TextField
            label="Max Width Of Table Of Contents"
            type="number"
            value={`${maxWidth}`}
            onChange={(value) => setMaxWidth(parsePositiveNumber(value))}
            autoComplete="off"
            suffix="px"
        />
    );
}
