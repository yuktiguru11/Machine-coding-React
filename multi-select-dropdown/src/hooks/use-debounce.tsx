import { useState, useEffect } from "react";

const useDebounce=(value : string, delay = 500)=>{
    const[debounceValue, setDebounceValue] = useState<string>("");

    useEffect(()=>{
        const setTimer = setTimeout(()=>{
            setDebounceValue(value);
        },delay);
        return clearTimeout(setTimer);

    },[value, delay])
    return debounceValue;
}

export default useDebounce;