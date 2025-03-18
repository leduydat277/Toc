import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';
import styles from '../../styles/color-picker.module.scss'

export const LinkHover = () => {
    const [hoverColor, setHoverColor] = useTOCStore((state) => [
        state.hoverColor,
        state.setHoverColor
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(hoverColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setHoverColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setHoverColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log('setHoverColor', hoverColor)
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        className={styles.colorPreview}
                        onClick={togglePopover}
                        style={{
                            backgroundColor: hoverColor,
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
                                    backgroundColor: hoverColor,
                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete='off'
                                value={hoverColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">Link(On Hover)</Text>
                <Text variant="bodyMd" as="p">{hoverColor}</Text>
            </BlockStack>
        </InlineStack>
    );
};
