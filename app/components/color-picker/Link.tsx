import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';
import styles from '../../styles/color-picker.module.scss'

export const Link = () => {
    const [linkColor, setLinkColor] = useTOCStore((state) => [
        state.linkColor,
        state.setLinkColor
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(linkColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setLinkColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setLinkColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log('setLinkColor', linkColor)
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        className={styles.colorPreview}
                        onClick={togglePopover}
                        style={{
                            backgroundColor: linkColor,
                        }}
                    />
                }
                onClose={togglePopover}
                preferredPosition="below"
            >
                <Card>
                    <BlockStack gap="400">
                        <ColorPicker onChange={handleColorChange} color={tempColor} fullWidth />
                        <InlineStack gap="150">
                            <div
                                lassName={styles.colorPreviewSmall}
                                style={{
                                    backgroundColor: linkColor,
                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete='off'
                                value={linkColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">Link</Text>
                <Text variant="bodyMd" as="p">{linkColor}</Text>
            </BlockStack>
        </InlineStack>
    );
};
