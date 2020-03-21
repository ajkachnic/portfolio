import React, { useState } from 'react';

import { ThemeProvider } from '../components/provider/ThemeContext';
import App from './App';

export default () => {
  const dark = {
    colors: {
      background: '#03060b',
      foreground: '#fff',
      cardBackground: '#070610',
      primary: '#2a65f9',
    },
  };
  const light = {
    colors: {
      background: '#fff',
      foreground: '#03060b',
      cardBackground: '#f5f5f5',
      primary: '#2a65f9',
    }
  };
  const [isDark, setDark] = useState(true);
  return (
    <ThemeProvider theme={isDark ?  dark : light}>
      <App setDark={setDark} isDark={isDark} />
    </ThemeProvider>
  );
};
