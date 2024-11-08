import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

// Define all styled components before the main component
const HomeSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const HomeContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
`;

const Greeting = styled.h2`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 18px;
  }
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 10px;
  line-height: 1.1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 60px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 40px;
  }
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 30px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 32px;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 24px;
  }
`;

const TagLine = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 24px;
  max-width: 800px;
  margin-bottom: 20px;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  max-width: 540px;
  margin-bottom: 50px;
  line-height: 1.5;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: 20px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const CTAButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.secondary};
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  padding: 20px 28px;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => `${theme.colors.secondary}10`};
  }
`;

const DownloadButton = styled.a`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.background};
  padding: 15px 28px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;
  display: inline-block;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    opacity: 0.9;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }
`;

const ButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    letter-spacing: 0.5px;
  }

  i {
    font-size: 16px;
    transition: transform 0.3s ease;
  }

  ${DownloadButton}:hover & i {
    transform: translateY(2px);
  }
`;

function Home() {
  return (
    <HomeSection id="home">
      <HomeContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>Hi, I'm</Greeting>
          <Name>Abberteh Kofi Banafo</Name>
          <Title>Frontend Developer and UI/UX Designer</Title>
          
          <TagLine>
            Creating purposeful designs that foster meaningful interactions. Each project is crafted to connect, engage, and leave a lasting impact.
          </TagLine>
          
          <Description>
            I'm a front-end developer and UI/UX designer focused on creating interfaces that are engaging and easy to use. Combining technical skills with design acumen, I deliver functional and enjoyable solutions.
          </Description>

          <ButtonGroup>
            <DownloadButton
              as={motion.a}
              href={`${process.env.PUBLIC_URL}/Abberteh_Banafo_Resume.pdf`}
              download="Abberteh_Banafo_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ButtonContent>
                <span>Download Resume</span>
                <i className="fas fa-download" />
              </ButtonContent>
            </DownloadButton>
            
            <CTAButton
              as={motion.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Create Something Great
            </CTAButton>
          </ButtonGroup>
        </motion.div>
      </HomeContent>
    </HomeSection>
  );
}

export default Home;
