import { Select } from "@shopify/polaris";
import { linkHoverStyleOptions } from "app/constant/options";
import { useState, useCallback } from "react";
import { useTOCStore } from "state/stores";

export const LinkHoverStyle = () => {
    const [underlineStyle, setUnderlineStyle] = useTOCStore((state) => [
        state.underlineStyle,
        state.setUnderlineStyle,
    ]);

    console.log("underlineStyle", underlineStyle);

    return (
        <Select
            label="Underline style for link (On hover)"
            options={linkHoverStyleOptions}
            onChange={setUnderlineStyle}
            value={underlineStyle}
        />
    );
};
