import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';

export const ShowBtnName = () => {
    const [showButtonColor, setShowButtonColor] = useTOCStore((state) => [
        state.showButtonColor,
        state.setShowButtonColor
    ]);

    const [popoverActive, setPopoverActive] = useState(false);
    const [tempColor, setTempColor] = useState(rgbToHsb(showButtonColor));

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    const handleColorChange = (color: Color) => {
        setTempColor(color);
        setShowButtonColor(hsbToRgb(color));
    };

    const handleInputChange = (value: string) => {
        setShowButtonColor(value);
        setTempColor(rgbToHsb(value));
    };
    console.log('setShowButtonColor', showButtonColor)
    return (
        <InlineStack gap="200">
            <Popover
                active={popoverActive}
                activator={
                    <div
                        onClick={togglePopover}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: showButtonColor,
                            border: '1px solid #ccc',
                            cursor: 'pointer',
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
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '20%',
                                    backgroundColor: showButtonColor,
                                    border: '1px solid #ccc',
                                    cursor: 'pointer',
                                }}
                            />
                            <TextField
                                label={null}
                                autoComplete='off'
                                value={showButtonColor}
                                onChange={handleInputChange}
                            />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap="025">
                <Text variant="headingSm" as="h6">Show button name</Text>
                <Text variant="bodyMd" as="p">{showButtonColor}</Text>
            </BlockStack>
        </InlineStack>
    );
};
