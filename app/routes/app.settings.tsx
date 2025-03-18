import {
    Box,
    Card,
    Page,
    BlockStack,
    InlineGrid,
    SkeletonBodyText,
} from "@shopify/polaris";
import styles from "./../styles/sticky-right.module.scss";
import { SaveBar } from "@shopify/app-bridge-react";
import { TOCForm } from "app/components/toc-form";
import { PreviewTOC } from "app/components/preview/Index";
import { useLoaderData } from "@remix-run/react";
import { authenticate } from "app/shopify.server";
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useSettingsLogic } from "app/hooks/useSettingsLogic";
import { useEffect } from "react";
import { getTableOfContents, updateTableOfContents } from "app/services/tableOfContentsService";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    await authenticate.admin(request);
    const _id = "67d9262a905c285fbea3b899";
    const tableOfContents = await getTableOfContents(_id);
    return tableOfContents;
};

export const action = async ({ request }: LoaderFunctionArgs) => {
    const updateData = await request.json();
    const data = JSON.parse(updateData.tableOfContents)
    const _id = "67d9262a905c285fbea3b899";
    const tableOfContents = await updateTableOfContents(_id, data);
    return json({ success: true });
};

function Settings() {
    const tableOfContent = useLoaderData<typeof loader>();
    console.log("tableOfContent", tableOfContent);
    const { onSave, onDiscard, handleBack, hasChanged } = useSettingsLogic();
    useEffect(() => {
        if (hasChanged) {
            shopify.saveBar.show("my-save-bar");
        }
    }, [hasChanged]);

    return (
        <Page
            backAction={{
                content: "Customize the table of contents",
                onAction: handleBack,
            }}
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
                                    <Box border="divider" borderRadius="base" minHeight="2rem" />

                                    <Box border="divider" borderRadius="base" minHeight="2rem" />

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
