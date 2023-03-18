import { useState , useEffect } from "react";

export function useLocalStorage(key, fallbackValue) {
    const [value, setValue] = useState(fallbackValue);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        setValue(stored ? (stored) : fallbackValue);
    }, [fallbackValue, key]);
    return value;
}