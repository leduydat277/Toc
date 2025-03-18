import {
    Box,
    Card,
    Page,
    BlockStack,
    InlineGrid,
    SkeletonBodyText,
} from "@shopify/polaris";
import styles from "./../styles/sticky-right.module.scss";
import { SaveBar, useAppBridge } from "@shopify/app-bridge-react";

import { TOCForm } from "app/components/toc-form";
import { useSubscribeToAllChanges } from "state/stores/use-save-bar-store";
import { useTOCStore } from "state/stores";
import { useNavigate } from "@remix-run/react";
import { PreviewTOC } from "app/components/preview/Index";



function Settings() {
    const { hasChanged, setHasChanged } = useSubscribeToAllChanges();
    const resetState = useTOCStore.getState().resetState;
    const navigate = useNavigate();
    console.log("hasChanged", hasChanged);
    const shopify = useAppBridge();
    const onSave = () => { };
    const onDiscard = () => {
        resetState();
        setHasChanged(false);
        shopify.saveBar.hide("my-save-bar");
    };
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
    if (hasChanged === true) {
        shopify.saveBar.show("my-save-bar");
    }
    const handleBack = () => {
        shopify.saveBar.leaveConfirmation().then(() => {
            navigate("/app");
        });
    };
    return (
        <Page
            backAction={{ content: "Customize the table of contents", onAction: handleBack }}
            title="Customize the table of contents"
        >
            <>
                <SaveBar id="my-save-bar">
                    <button variant="primary" onClick={onSave}></button>
                    <button onClick={onDiscard}></button>
                </SaveBar>
            </>
            <InlineGrid columns={{ xs: 1, md: "2fr 1fr" }} gap="400">
                <BlockStack gap="400">
                    <Card roundedAbove="sm">
                        <TOCForm />
                    </Card>
                </BlockStack>

                <BlockStack gap={{ xs: "400", md: "200" }}>
                    <div className={styles.stickyRight}>
                        <Card roundedAbove="sm">
                            <PreviewTOC />
                        </Card>
                        <div className={styles.cardItem}>
                            <Card roundedAbove="sm">
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
    );
}

export default Settings;
