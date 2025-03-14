import { BlockStack, Checkbox, Text } from '@shopify/polaris';
import { useState } from 'react';

export const HeadingCheckboxGroup = () => {
    const [selectedHeadings, setSelectedHeadings] = useState<string[]>([]);

    const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

    const handleCheckboxChange = (heading: string) => {
        setSelectedHeadings((prev) =>
            prev.includes(heading)
                ? prev.filter((h) => h !== heading)
                : [...prev, heading]
        );
    };
    console.log(selectedHeadings);


    return (
        <>
            <Text >Headings</Text>
            <BlockStack vertical>
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
