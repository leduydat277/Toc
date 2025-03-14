import {
    Box,
    Card,
    Page,
    BlockStack,
    InlineGrid,
    SkeletonDisplayText,
    Bleed,
    Divider,
    SkeletonBodyText,
    TextField,
} from "@shopify/polaris";
import styles from "./../styles/sticky-right.module.scss";
import { TitleBar } from "@shopify/app-bridge-react";
import { TitleInput } from "app/components/input/TitleInput";
import { InputTextAlignment } from "app/components/select-input/InputTextAlignment";
import { InputIndentation } from "app/components/select-input/InputIndentation";
import { HeadingCheckboxGroup } from "app/components/checkbox/HeadingCheckboxGroup";
import { ScrollCheckbox } from "app/components/checkbox/ScrollCheckbox";
import { InputNumbering } from "app/components/select-input/InputNumbering";
import { InputSectionLine } from "app/components/select-input/InputSectionLine";
import { NumberFieldWithStepper } from "app/components/input/InputScrollOffset";
import { GroupPadding } from "app/components/input/input-padding/GroupPadding";
import { InputFontSIzeOfTitle } from "app/components/input/InputFontSIzeOfTitle";
import { InputFontSizeOfHeadings } from "app/components/input/InputFontSizeOfHeadings";
import { InputTOCMaxWidth } from "app/components/input/InputTOCMaxWidth";
import { InputAlignment } from "app/components/select-input/InputAlignment";
import { GroupColor } from "app/components/color-picker/GroupColor";
import { LinkHoverStyle } from "app/components/select-input/linkHoverStyle";
import { ToggleButton } from "app/components/checkbox/ToggleButton";
import { InputHideBtn } from "app/components/input/InputHideBtn";
import { InputShowBtn } from "app/components/input/InputShowBtn";
import { ShowAllButton } from "app/components/input/InputShowAllButton";
import { LinkHover } from "app/components/color-picker/LinkHover";
import { ShowBtnName } from "app/components/color-picker/ShowBtnName";
import { HideBtnName } from "app/components/color-picker/HideBtnName";

function Settings() {
    const SkeletonLabel = (props) => {
        return (
            <Box
                background="bg-fill-tertiary"
                minHeight="1rem"
                maxWidth="5rem"
                borderRadius="base"
                {...props}
            />
        );
    };
    return (
        <Page
            backAction={{ content: "Customize the table of contents", url: "/app" }}
            title="Customize the table of contents"


        >
            <InlineGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="400">
                <BlockStack gap="400">
                    <Card roundedAbove="sm">
                        <BlockStack gap="400">
                            <TitleInput />
                            <InputTextAlignment />
                            <InputIndentation />
                            <InputNumbering />
                            <InputSectionLine />
                            <HeadingCheckboxGroup />
                            <ScrollCheckbox />
                            <NumberFieldWithStepper />
                            <InputFontSIzeOfTitle />
                            <InputFontSizeOfHeadings />
                            <GroupPadding />
                            <InputTOCMaxWidth />
                            <InputAlignment />
                            <GroupColor />
                            <LinkHoverStyle />
                            <ToggleButton />
                            <InputHideBtn />
                            <InputShowBtn />
                            <ShowAllButton />
                            <LinkHover />
                            <ShowBtnName />
                            <HideBtnName />
                        </BlockStack>
                    </Card>
                </BlockStack>


                <BlockStack gap={{ xs: "400", md: "200" }} >
                    <div className={styles.stickyRight}>
                        <Card roundedAbove="sm">
                            <BlockStack gap="400">
                                <SkeletonDisplayText size="small" />
                                <Box border="divider" borderRadius="base" minHeight="2rem" />
                                <Box>
                                    <Bleed marginInline={{ xs: 400, sm: 500 }}>
                                        <Divider />
                                    </Bleed>
                                </Box>
                                <SkeletonLabel />
                                <Divider />
                                <SkeletonBodyText />
                            </BlockStack>
                        </Card>
                        <div className={styles.cardItem}>
                            <Card roundedAbove="sm" >
                                <BlockStack gap="400">
                                    <SkeletonLabel />
                                    <Box border="divider" borderRadius="base" minHeight="2rem" />
                                    <SkeletonLabel maxWidth="4rem" />
                                    <Box border="divider" borderRadius="base" minHeight="2rem" />
                                    <SkeletonLabel />
                                    <SkeletonBodyText />
                                </BlockStack>
                            </Card>
                        </div>
                    </div>
                </BlockStack>

            </InlineGrid>
        </Page>
    )
}

export default Settings