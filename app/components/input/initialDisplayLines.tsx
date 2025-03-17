import { TextField } from "@shopify/polaris";
import { useTOCStore } from "../../../state/stores";
export const InitialDisplayLines = () => {
    const [setInitialDisplayLines, initialDisplayLines] =  useTOCStore((state) => [state.setInitialDisplayLines, state.initialDisplayLines]);
    return( <TextField label="Initial display lines"
     autoComplete="off"
     value={initialDisplayLines}
     onChange={setInitialDisplayLines}
      placeholder="Hide" helpText="If the lines of the table of contents is greater than this number, a Show all button will display. Set to empty if you want to show all." />
    );
};