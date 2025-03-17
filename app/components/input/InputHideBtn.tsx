import { TextField } from "@shopify/polaris";
import { c } from "node_modules/vite/dist/node/types.d-aGj9QkWt";
import { useTOCStore } from "state/stores";
export const InputHideBtn = () => {
    const [setHideButtonName, hideButtonName] = useTOCStore((state) => [state.setHideButtonName, state.hideButtonName]);
    console.log('hideButtonName', hideButtonName)
    return <TextField label="Hide button name"
        value={hideButtonName}
        onChange={setHideButtonName}
        autoComplete="off" placeholder="Hide"
        helpText="It is displayed when the table of contents is open." />;
};