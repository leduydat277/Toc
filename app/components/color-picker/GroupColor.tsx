import { BackgroundColor } from "./Background";
import { BorderColor } from "./Border";
import { Link } from "./Link";
import { SectionLine } from "./SectionLine";
import { TitleColor } from "./Title";
import { Text } from '@shopify/polaris';

export const GroupColor = () => {
    return (
        <>
            <Text variant="headingMd" as="h5">Color</Text>
            <BackgroundColor />
            <BorderColor />
            <SectionLine />
            <TitleColor />
            <Link />
        </>
    )
};