import { Select } from '@shopify/polaris';
import { sectionLineOptions } from 'app/constant/options';

import { useTOCStore } from "../../../state/stores";

export const InputSectionLine = () => {
    const [isSectionLine, setIsSectionLine] = useTOCStore((state) => [state.isSectionLine, state.setIsSectionLine]);
    console.log("isSectionLine", isSectionLine);




    return (
        <Select
            label="Section Line"
            options={sectionLineOptions}
            onChange={(selected) => setIsSectionLine(selected === 'true')}
            value={isSectionLine ? 'true' : 'false'}
        />
    );
}