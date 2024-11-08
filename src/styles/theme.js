export const theme = {
  colors: {
    primary: '#0a192f',
    secondary: '#64ffda',
    background: '#0a192f',
    surface: '#112240',
    text: '#8892b0',
    textLight: '#ccd6f6',
    card: '#112240',
    hover: '#233554',
    overlay: 'rgba(10, 25, 47, 0.85)',
    gradient: 'linear-gradient(120deg, #112240 0%, #0a192f 100%)'
  },
  breakpoints: {
    xs: '320px',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },
  fonts: {
    heading: "'SF Mono', 'Fira Code', monospace",
    body: "'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', sans-serif"
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    xxl: '48px',
  },
  transitions: {
    default: 'all 0.3s ease',
    slow: 'all 0.5s ease',
    fast: 'all 0.2s ease'
  },
  typography: {
    sizes: {
      xs: '0.75rem',    // 12px at base 16px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem',// 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    }
  }
};
