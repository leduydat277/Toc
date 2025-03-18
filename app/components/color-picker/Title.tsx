import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';
import styles from '../../styles/color-picker.module.scss'
export const TitleColor = () => {
    const [titleColor, setTitleColor] = useTOCStore((state) => [
        state.titleColor,
        state.setTitleColor
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(titleColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setTitleColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setTitleColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log('setTitleColor', titleColor)
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        className={styles.colorPreview}
                        onClick={togglePopover}
                        style={{
                            backgroundColor: titleColor,
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
                                className={styles.colorPreviewSmall}
                                style={{
                                    backgroundColor: titleColor,
                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete='off'
                                value={titleColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">Title</Text>
                <Text variant="bodyMd" as="p">{titleColor}</Text>
            </BlockStack>
        </InlineStack>
    );
};
