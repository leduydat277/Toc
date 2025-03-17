import { TextField } from "@shopify/polaris";
import { useTOCStore } from "state/stores";
export const ShowAllButton = () => {
    const [setShowAllButtonName, showAllButtonName] = useTOCStore((state) => [state.setShowAllButtonName, state.showAllButtonName]);
    console.log('showAllButtonName', showAllButtonName)
    return <TextField label="Show all button name"
        value={showAllButtonName}
        onChange={setShowAllButtonName}
        autoComplete="off" placeholder="Show all" helpText="It is displayed when the initial display lines of the table of contents is set." />;
};