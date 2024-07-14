import { useState, useEffect } from "react"

export const useDebounce = (value, delay= 500)=>{
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return ()=> clearTimeout(timer)
    }, [value , delay])

    return debounceValue;
}

//when the timer run 
// if the input value doesnt change then setdounce value
//else reset the time 