import { BlockStack, Card, ColorPicker, InlineStack, Popover, TextField, Text } from '@shopify/polaris';
import { hsbToRgb, rgbToHsb } from 'app/hooks/colorConverter';
import { Color } from 'app/types/Color';
import { useState, useCallback } from 'react';
import { useTOCStore } from 'state/stores';
import styles from '../../styles/color-picker.module.scss'

export const BorderColor = () => {
	const [borderColor, setBorderColor] = useTOCStore((state) => [
		state.borderColor,
		state.setBorderColor
	]);

	const [popoverActive, setPopoverActive] = useState(false);
	const [tempColor, setTempColor] = useState(rgbToHsb(borderColor));

	const togglePopover = useCallback(() => {
		setPopoverActive((active) => !active);
	}, []);

	const handleColorChange = (color: Color) => {
		setTempColor(color);
		setBorderColor(hsbToRgb(color));
	};

	const handleInputChange = (value: string) => {
		setBorderColor(value);
		setTempColor(rgbToHsb(value));
	};
	console.log('borderColor', borderColor)
	return (
		<InlineStack gap="200">
			<Popover
				active={popoverActive}
				activator={
					<div
						className={styles.colorPreview}
						onClick={togglePopover}
						style={{
							backgroundColor: borderColor,
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
									backgroundColor: borderColor,
								}}
							/>
							<TextField
								label={null}
								autoComplete='off'
								value={borderColor}
								onChange={handleInputChange}
							/>
						</InlineStack>
					</BlockStack>
				</Card>
			</Popover>
			<BlockStack gap="025">
				<Text variant="headingSm" as="h6">Border</Text>
				<Text variant="bodyMd" as="p">{borderColor}</Text>
			</BlockStack>
		</InlineStack>
	);
};
