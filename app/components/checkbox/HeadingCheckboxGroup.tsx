import { BlockStack, Checkbox, Text } from '@shopify/polaris';
import { useState } from 'react';
import { useTOCStore } from "../../../state/stores";

export const HeadingCheckboxGroup = () => {
    const [tag, setTag] = useTOCStore((state) => [state.tag, state.setTag]);
    const [selectedHeadings, setSelectedHeadings] = useState<string[]>(['h1']);
    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const handleCheckboxChange = (heading: string) => {
        setSelectedHeadings((prev) =>
            prev.includes(heading)
                ? prev.filter((h) => h !== heading)
                : [...prev, heading]
        );
    };
    setTag(selectedHeadings)



    return (
        <>
            <Text >Headings</Text>
            <BlockStack >
                {headings.map((heading) => (
                    <Checkbox
                        key={heading}
                        label={heading.toUpperCase()}
                        checked={selectedHeadings.includes(heading)}
                        onChange={() => handleCheckboxChange(heading)}
                    />
                ))}
            </BlockStack>
        </>
    );
};
