import React, { useState } from 'react';

import { ThemeProvider } from '../components/provider/ThemeContext';
import App from './App';
import merge from '../utils/merge';

const mainTheme = {
  colors: {
    primary: '#2a65f9',
  },
};

export default () => {
  const dark = {
    colors: {
      background: '#03060b',
      foreground: '#fff',
      cardBackground: '#070610',
    },
  };
  const light = {
    background: '#fff',
    foreground: '#03060b',
    cardBackground: '#f5f5f5',
  };
  const [isDark, setDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ? merge(mainTheme, dark) : merge(mainTheme, light)}>
      <App setDark={setDark} isDark={isDark} />
    </ThemeProvider>
  );
};
