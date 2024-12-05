/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";

// Create a Context for theme management
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
    } else {
      // Default to light theme
      setIsDarkMode(false);
    }
  }, []);

  // Update the class on the root element based on the theme
  useEffect(() => {
    const root = document.documentElement; // Or document.body
    if (isDarkMode) {
      root.classList.add('dark'); // Add dark mode class
    } else {
      root.classList.remove('dark'); // Remove dark mode class
    }
  }, [isDarkMode]);

  // Toggle theme and store preference in localStorage
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
