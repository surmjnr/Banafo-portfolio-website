import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <FooterLogo>
            <motion.span whileHover={{ scale: 1.1 }}>
              YourName
            </motion.span>
          </FooterLogo>
          <FooterText>
            Creating beautiful digital experiences with clean and efficient code.
          </FooterText>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About</FooterLink>
            <FooterLink to="/projects">Projects</FooterLink>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <FooterTitle>Connect</FooterTitle>
          <SocialLinks>
            <SocialLink 
              href="https://github.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </SocialLink>
            <SocialLink 
              href="https://linkedin.com/in/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </SocialLink>
            <SocialLink 
              href="https://twitter.com/yourusername" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </SocialLink>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {currentYear} YourName. All rights reserved.
        </Copyright>
        <FooterBottomLinks>
          <FooterBottomLink href="/privacy">Privacy Policy</FooterBottomLink>
          <FooterBottomLink href="/terms">Terms of Service</FooterBottomLink>
        </FooterBottomLinks>
      </FooterBottom>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.background};
  padding: 4rem 2rem 2rem;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 4rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const FooterSection = styled.div``;

const FooterLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: 1rem;
`;

const FooterText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.6;
`;

const FooterTitle = styled.h4`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copyright = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
`;

const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
`;

const FooterBottomLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const FooterBottomLink = styled.a`
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export default Footer;
