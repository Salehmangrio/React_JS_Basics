import { useMemo, useState, useCallback } from "react";
import { Button } from "react-bootstrap";

function UseMemo() {
    //
    const [count, setCount] = useState(1);
    const [item, setItem] = useState(1);

    //For adding functionality darkmode in website
    const [darkMode, setDarkMode] = useState(true);

    const countUpdate = useCallback(
        () => setCount(count * 12), [count]);

    const itemUpdate = useCallback(
        () => setItem(item * 2), [item]);

    const multiCountMemo = useMemo(
        () => {
            console.log("MultiCount Called...");
            return count * 10;
        }, [count]);

    const theme = useMemo(
        () => {
            return {
                background: darkMode ? 'black' : 'white',
                color: darkMode ? 'white' : 'black',
                variant: darkMode ? 'light' : 'dark',
            };
        }, [darkMode]);

    return (
        <div style={theme}>
            <h1>Use Memo Example</h1>
            <h2>Count : {count}</h2>
            <h2>Item : {item}</h2>
            <h2>MultiCount: {multiCountMemo}</h2>

            <Button variant={theme.variant}
                onClick={countUpdate}>COUNT UPDATE</Button>
            <br />
            <br />
            <Button variant={theme.variant}
                onClick={itemUpdate}>ITEM UPDATE</Button>
            <br />
            <br />
            <Button variant={theme.variant}
                onClick={() => setDarkMode(!darkMode)}>Toggle Theme</Button>
        </div>
    );
}

export default UseMemo;
