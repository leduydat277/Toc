import { TextField } from "@shopify/polaris";

import { useState, useCallback } from 'react';
import { useTOCStore } from "../../../state/stores";

export const TitleInput = () => {

    const [title, setTitle] = useTOCStore((state) => [state.title, state.setTitle]);
    console.log('Title:', title);



    return (
        <TextField
            label="Table Of Contents Title"
            value={title}
            onChange={setTitle}
            autoComplete="off"
            helpText="If you do not need a Header, leave it blank."
            placeholder="Table of Contents"
        />
    );
};
