import React, {createContext, useState, useContext, useEffect} from "react";
const ThemeContext = createContext(); // create  context

export const useThemeContext =()=>{ // use context
    return useContext(ThemeContext);
}

export const ThemeProvider =({children})=>{ // Provider where all logic lies
    const [isDarkMode, setDarkMode] = useState(false);
    const themeToggle= ()=>{
        setDarkMode((prevState)=> !prevState);
    }
    const theme = isDarkMode ? "dark" : "light"

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme", theme)
    },[isDarkMode])

    return (
        <ThemeContext.Provider value={{theme, themeToggle}}>{children}</ThemeContext.Provider>)
}

