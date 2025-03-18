import {
    BlockStack,
    Card,
    ColorPicker,
    InlineStack,
    Popover,
    TextField,
    Text,
} from "@shopify/polaris";
import { hsbToRgb, rgbToHsb } from "app/hooks/colorConverter";
import { Color } from "app/types/Color";
import { useState, useCallback } from "react";
import { useTOCStore } from "state/stores";
import styles from "../../styles/color-picker.module.scss";

export const SectionLine = () => {
    const [sectionLineColor, setSectionLineColor] = useTOCStore((state) => [
        state.sectionLineColor,
        state.setSectionLineColor,
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(sectionLineColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setSectionLineColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setSectionLineColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log("setSectionLineColor", sectionLineColor);
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        className={styles.colorPreview}
                        onClick={togglePopover}
                        style={{
                            backgroundColor: sectionLineColor,
                        }}
                    />
                }
                onClose={togglePopover}
                preferredPosition="below"
            >
                <Card>
                    <BlockStack gap="400">
                        <ColorPicker
                            onChange={handleColorChange}
                            color={tempColor}
                            fullWidth
                        />
                        <InlineStack gap="150">
                            <div
                                className={styles.colorPreviewSmall}
                                style={{
                                    backgroundColor: sectionLineColor,
                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete="off"
                                value={sectionLineColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">
                    Section Line
                </Text>
                <Text variant="bodyMd" as="p">
                    {sectionLineColor}
                </Text>
            </BlockStack>
        </InlineStack>
    );
};
