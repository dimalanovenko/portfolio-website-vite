import React, { createContext, useState, useContext } from 'react';

// create context
const ThemeContext = createContext()
// create proider
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
    }

    // here return the provider that contains any child elements
    return (
        <ThemeContext.Provider 
            value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

// custom hook
export const useTheme = () => useContext(ThemeContext) // required