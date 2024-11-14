import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-size: 18px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 17px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 16px;
    }
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: justify;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.textLight};
    font-family: ${({ theme }) => theme.fonts.heading};
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: ${({ theme }) => theme.transitions.default};
  }

  button {
    font-family: ${({ theme }) => theme.fonts.heading};
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
    transition: ${({ theme }) => theme.transitions.default};
  }

  section {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.xl};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.lg};
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    }
  }

  /* Common responsive container */
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${({ theme }) => theme.spacing.lg};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 ${({ theme }) => theme.spacing.md};
    }
  }

  /* Responsive typography */
  html {
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
      font-size: 15px;
    }
    
    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
      font-size: 14px;
    }
  }
`;

export default GlobalStyles;
