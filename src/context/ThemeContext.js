import { createContext, useState, useContext } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#64ffda',
    background: '#0a192f',
    surface: '#112240',
    text: '#8892b0',
    textLight: '#ccd6f6',
    card: '#112240'
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px',
    tablet: '768px'
  },
  fonts: {
    heading: "'SF Mono', monospace",
    body: "'Inter', sans-serif"
  }
};

export function ThemeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);