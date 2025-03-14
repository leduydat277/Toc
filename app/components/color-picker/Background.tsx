import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb } from 'app/hooks/colorConverter';
import { useState, useCallback } from 'react';

export const BackgroundColor = () => {
    const [color, setColor] = useState({
        hue: 260,
        brightness: 1,
        saturation: 1,
    });

    const [popoverActive, setPopoverActive] = useState(false);

    const togglePopover = useCallback(() => {
        setPopoverActive((active) => !active);
    }, []);

    hsbToRgb(color);
    return (
        <InlineStack gap={"200"}>
            <Popover
                active={popoverActive}
                activator={
                    <div
                        onClick={togglePopover}
                        style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            backgroundColor: hsbToRgb(color),
                            border: '1px solid #ccc',
                            cursor: 'pointer',
                        }}
                    />

                }
                onClose={togglePopover}
                preferredPosition="below"
            >
                <Card >
                    <BlockStack gap={"400"}>
                        <ColorPicker onChange={setColor} color={color} fullWidth />

                        <InlineStack gap={"150"}>
                            <div
                                style={{
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '20%',
                                    backgroundColor: hsbToRgb(color),
                                    border: '1px solid #ccc',
                                    cursor: 'pointer',
                                }}
                            />
                            <TextField value={hsbToRgb(color)} readOnly />
                        </InlineStack>
                    </BlockStack>
                </Card>
            </Popover>
            <BlockStack gap={"10"}>
                <Text variant="headingSm" as="h6">Background</Text>
                <Text >{hsbToRgb(color)}</Text>
            </BlockStack>
        </InlineStack>

    );
};
