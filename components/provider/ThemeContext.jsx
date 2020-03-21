import React, { createContext } from 'react';

const ThemeContext = createContext({
  colors: {
    background: '#03060b',
    foreground: '#fff',
    cardBackground: '#070610',
    primary: '#2a65f9',
  },
});
const ThemeProvider = ({ theme, children }) => (
  <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
);

export { ThemeContext, ThemeProvider };
