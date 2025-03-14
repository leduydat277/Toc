import { BlockStack } from "@shopify/polaris";
import { PaddingTop } from "./PaddingTop";
import { PaddingRight } from "./PaddingRight";
import { PaddingBottom } from "./PaddingBottom";
import { PaddingLeft } from "./PaddingLeft";

export const GroupPadding = () => {
    return (
        <BlockStack>
            <PaddingTop />
            <PaddingBottom />
            <PaddingLeft />
            <PaddingRight />
        </BlockStack>
    );
};