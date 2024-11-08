import React from 'react';
import styled from 'styled-components';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import ScrollToTop from './components/shared/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContainer>
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </MainContainer>
      <ScrollToTop />
    </div>
  );
}

const MainContainer = styled.main`
  background: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  padding-top: 70px;
`;

export default App;