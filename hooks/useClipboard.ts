import { useState } from 'react';

export const useCopyToClipboard = (text: string) => {
    const [copied, setCopied] = useState(false);

    const copy = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return { copied, copy };
};