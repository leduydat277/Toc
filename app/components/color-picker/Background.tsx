import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';
import styles from '../../styles/color-picker.module.scss'

export const BackgroundColor = () => {
    const [backgroundColor, setBackgroundColor] = useTOCStore((state) => [
        state.backgroundColor,
        state.setBackgroundColor
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(backgroundColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setBackgroundColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setBackgroundColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log('backgroundColor', backgroundColor)
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        className={styles.colorPreview}
                        onClick={togglePopover}
                        style={{
                            backgroundColor: backgroundColor,
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
                                    backgroundColor: backgroundColor,

                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete='off'
                                value={backgroundColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">Background</Text>
                <Text variant="bodyMd" as="p">{backgroundColor}</Text>
            </BlockStack>
        </InlineStack>
    );
};
