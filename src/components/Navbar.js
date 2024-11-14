import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
        <LogoLink href="#home">
          <Logo>
            <span>&lt;</span>
            AKB
            <span>/&gt;</span>
          </Logo>
        </LogoLink>
        
        <NavLinks>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: ${({ theme }) => theme.colors.background};
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoLink = styled.a`
  text-decoration: none;
`;

const Logo = styled.h1`
  font-size: ${({ theme }) => theme.typography.sizes['3xl']};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.textLight};
  text-decoration: none;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 2px;
  margin: 0;
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.3s ease;
  }
  
  &:hover span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
`;

const NavLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default Navbar; 