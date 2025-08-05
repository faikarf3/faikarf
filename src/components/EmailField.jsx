import { useState } from "react";
import { Copy } from 'lucide-react';
export default function EmailField() {
    const email = "faikarfazazaman8@gmail.com";
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email);
            setCopied(true);
            setTimeout(() => setCopied(false), 1500);
        } catch (err) {
            console.error("Failed to copy!", err);
        }
    }
    return (
        <div className="email-container">
        <input
            className="email-field"
            type="text"
            value={email}
            readOnly
        />
        <button className="copy-button" onClick={handleCopy} title="Copy email">
            <Copy/>
        </button>
        {copied && <span >Copied!</span>}
        </div>
    )
    };

