import React, { useRef, useState } from "react";

export default function UseRef() {
    const inputRef = useRef();
    const [copiedText, setCopiedText] = useState("");

    const handleInput = async () => {
        try {
            const txt = inputRef.current.value;
            inputRef.current.select();
            await window.navigator.clipboard.writeText(txt);
        } catch (e) {
            console.log("Error copying:", e);
        }
    };

    const paste = async () => {
        try {
            const clipboardText = await window.navigator.clipboard.readText();
            setCopiedText(clipboardText);
        } catch (e) {

        }
    }
        return (
            <>
                <h1>useRef Hook</h1>
                <input type="text" ref={inputRef} placeholder="Type something..." />
                <br />
                <br />
                <button onClick={handleInput}>Click Me</button>
                <br />
                <br />
                <button onClick={paste}>Paste What Ever Is</button>
                <h1>{copiedText}</h1>
            </>
        );
    }
