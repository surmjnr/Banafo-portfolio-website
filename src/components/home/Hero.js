import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PrimaryButton, OutlinedButton } from '../shared/Buttons';

function Hero() {
  return (
    <HeroSection id="home">
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SmallIntro>Hi, my name is</SmallIntro>
          <Name>John Doe.</Name>
          <Title>I build things for the web.</Title>
          <Description>
            I'm a software developer specializing in building exceptional digital experiences.
            Currently, I'm focused on building accessible, human-centered products.
          </Description>
          
          <ButtonGroup>
            <PrimaryButton 
              as={motion.a}
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View My Work
            </PrimaryButton>
            
            <OutlinedButton 
              as={motion.a}
              href="/path-to-your-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Resume</span>
              <i className="fas fa-download" />
            </OutlinedButton>
          </ButtonGroup>
        </motion.div>
      </Content>
    </HeroSection>
  );
}

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 0 16px;
  }
`;

const SmallIntro = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  margin-bottom: 20px;
`;

const Name = styled.h1`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: clamp(40px, 8vw, 80px);
  margin: 0;
  line-height: 1.1;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.text};
  font-size: clamp(40px, 8vw, 80px);
  margin: 0 0 20px 0;
  line-height: 1.1;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  max-width: 540px;
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
    align-items: stretch;
    gap: 15px;
  }
`;

const Button = styled(motion.a)`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 16px 24px;
    display: flex;
    justify-content: center;
    min-width: 200px;
    box-sizing: border-box;
  }
`;

export default Hero;
