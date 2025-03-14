import { TextField } from "@shopify/polaris";

export const InitialDisplayLines = () => {
    return <TextField label="Initial display lines" autoComplete="off" placeholder="Hide" helpText="If the lines of the table of contents is greater than this number, a Show all button will display. Set to empty if you want to show all." />;
};