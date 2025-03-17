import { Icon, Select } from '@shopify/polaris';
import {
    TextAlignLeftIcon
} from '@shopify/polaris-icons';
import { useTOCStore } from "../../../state/stores";

export const InputIndentation = () => {
    const [isIndentation, setIsIndentation] = useTOCStore((state) => [state.isIndentation, state.setIsIndentation]);
    console.log("isIndentation", isIndentation);

    const options = [
        { label: 'Off', value: 'false', prefix: <Icon source={TextAlignLeftIcon} />, },
        { label: 'On', value: 'true', prefix: <Icon source={TextAlignLeftIcon} />, },

    ];
    console.log("isIndentation", isIndentation);

    return (
        <Select
            label="Text alignment"
            options={options}
            onChange={(selected) => setIsIndentation(selected === 'true')}
            value={isIndentation ? 'true' : 'false'}
            helpText="Specifies the horizontal alignment of text. If you specify other than left-alignment, indentation and numbering will be disabled."
        />
    );
}