import React, { useEffect, useState } from "react";

interface ThemeContextType {
    theme: "light" | "dark";
    toggleTheme: () => void;
}

export const ThemeContext = React.createContext({} as ThemeContextType);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<"light" | "dark">(localStorage.getItem('theme') as "light" | "dark" || 'light');
    
    function setStoredTheme(theme: "light" | "dark") {
        localStorage.setItem('theme', theme);
        document.documentElement.setAttribute("data-theme", theme);
    }

    function toggleTheme() {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        setStoredTheme(newTheme);
    }

    useEffect(() => {
        if (!("theme" in localStorage)) {
            setStoredTheme('light');
        } else {
            document.documentElement.setAttribute("data-theme", theme);
        }
    }, [theme]);
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}