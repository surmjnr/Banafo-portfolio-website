import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      // Handle navbar background
      setScrolled(window.scrollY > 20);

      // Handle active section
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setCurrentSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <NavContainer scrolled={scrolled}>
      <NavContent>
        <LogoContainer
          as={motion.div}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection('home')}
        >
          <Logo>
            <span>&lt;</span>
            AKB
            <span>/&gt;</span>
          </Logo>
        </LogoContainer>

        <DesktopMenu>
          <NavLinks>
            {menuItems.map((item) => (
              <NavItem
                key={item}
                as={motion.button}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                onClick={() => scrollToSection(item.toLowerCase())}
                active={currentSection === item.toLowerCase()}
              >
                {item}
                {currentSection === item.toLowerCase() && (
                  <ActiveIndicator
                    as={motion.div}
                    layoutId="activeIndicator"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </NavItem>
            ))}
          </NavLinks>
        </DesktopMenu>

        <MenuButton onClick={() => setIsOpen(!isOpen)} isOpen={isOpen}>
          <MenuButtonLine isOpen={isOpen} />
          <MenuButtonLine isOpen={isOpen} />
          <MenuButtonLine isOpen={isOpen} />
        </MenuButton>
      </NavContent>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavLinks>
              {menuItems.map((item, index) => (
                <MobileMenuItem
                  key={item}
                  as={motion.button}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  active={currentSection === item.toLowerCase()}
                >
                  {item}
                </MobileMenuItem>
              ))}
            </MobileNavLinks>
          </MobileMenu>
        )}
      </AnimatePresence>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${({ scrolled, theme }) => 
    scrolled ? `${theme.colors.background}ee` : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${({ scrolled }) => 
    scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.3)' : 'none'};
`;

const NavContent = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: 0 auto;
  padding: 0 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 30px;
  }
`;

const LogoContainer = styled.div`
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;

  &:hover {
    opacity: 0.9;
  }
`;

const Logo = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 28px;
  font-weight: bold;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  gap: 2px;
  
  span {
    color: ${({ theme }) => theme.colors.secondary};
    transition: color 0.3s ease;
  }
  
  &:hover span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MenuButton = styled.button`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 1001;
  padding: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: flex;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background};
  padding: 20px;
  display: none;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const MobileNavLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

const MobileMenuItem = styled.button`
  color: ${({ theme, active }) => 
    active ? theme.colors.secondary : theme.colors.textLight};
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding: 15px;
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.colors.hover};
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const DesktopMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-right: 15px;
`;

const NavItem = styled.button`
  margin-bottom: 20px;
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const MenuButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary};
  transition: all 0.3s ease;
  
  &:nth-child(1) {
    transform: ${({ isOpen }) => 
      isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'};
  }
  
  &:nth-child(2) {
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    transform: ${({ isOpen }) => 
      isOpen ? 'translateX(20px)' : 'none'};
  }
  
  &:nth-child(3) {
    transform: ${({ isOpen }) => 
      isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'};
  }
`;

const ActiveIndicator = styled.div`
  width: 100%;
  height: 2px;
  background: ${({ theme }) => theme.colors.secondary};
  transition: width 0.1s ease;
`;

const SocialBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 20px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialLine = styled.div`
  width: 1px;
  height: 90px;
  background: ${({ theme }) => theme.colors.textLight};
`;

const EmailBar = styled.div`
  position: fixed;
  bottom: 0;
  right: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: none;
  }
`;

const EmailLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
  writing-mode: vertical-rl;
  text-orientation: mixed;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const EmailLine = styled(SocialLine)``;

const MobileSocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;

const MobileSocialLink = styled(SocialLink)`
  font-size: 24px;
`;

const MobileNavItem = styled(NavItem)`
  font-size: 18px;
  width: 100%;
  text-align: center;
  padding: 15px;
  
  &:hover {
    background: ${({ theme }) => theme.colors.hover};
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  i {
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  &:hover i {
    transform: translateY(2px);
  }
`;

export default Navbar;
