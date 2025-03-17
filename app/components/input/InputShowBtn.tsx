import { TextField } from "@shopify/polaris";
import { useTOCStore } from "state/stores";

export const InputShowBtn = () => {
    const [setShowButtonName, showButtonName] = useTOCStore((state) => [state.setShowButtonName, state.showButtonName]);
    console.log('showButtonName', showButtonName)
    return <TextField label="Show button name"
        value={showButtonName}
        onChange={setShowButtonName}
        autoComplete="off"
        placeholder="Show"
        helpText='It is displayed when the table of contents is close.' />;
};