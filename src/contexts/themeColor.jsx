import React, { useState, createContext } from 'react';

const ThemeContext = createContext();

function ThemeContextHOC({ children }) {
    const [theme, setTheme] = useState('light');

    /**
     * 
     * @param {string} t theme
     * 
     * l = light
     * 
     * d = dark 
     */
    const changeTheme = () => {
        const _theme = theme === 'light' ? 'dark' : 'light'
        setTheme(_theme);
    }

    return(
        <ThemeContext.Provider value={{ theme, changeTheme }} >
            { children }
        </ThemeContext.Provider>
    )

}

export {
    ThemeContext,
    ThemeContextHOC
}