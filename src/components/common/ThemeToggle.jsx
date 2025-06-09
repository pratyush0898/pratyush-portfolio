"use client";
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import "./styles/themeToggle.css";

const ThemeToggle = () => {
    const [isDark, setIsDark] = React.useState(false);

    React.useEffect(() => {
        const theme = localStorage.getItem('theme') || 'light';
        setIsDark(theme === 'dark');
        document.documentElement.setAttribute('data-theme', theme);
    }, []);

    const toggleTheme = () => {
        const newTheme = isDark ? 'light' : 'dark';
        setIsDark(!isDark);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    return (
        <button 
            className="theme-toggle" 
            onClick={toggleTheme}
            aria-label="Toggle theme"
        >
            <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
        </button>
    );
};

export default ThemeToggle;