import React, { createContext, useEffect, useState } from 'react';

const defaultState = {
  isDarkTheme: false,
  toggleTheme: () => {}
};

export const ThemeContext = createContext(defaultState);

const supportsDarkMode = () =>
  window.matchMedia('(prefers-color-scheme: dark)').matches === true;

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    localStorage.setItem('isDark', JSON.stringify(!isDarkTheme));
    setDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem('isDark'));
    if (theme) {
      setDarkTheme(theme);
    } else if (supportsDarkMode()) {
      setDarkTheme(true);
    } else{
      setDarkTheme(false);
    }
  }, []);

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, toggleTheme: toggleDarkTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
