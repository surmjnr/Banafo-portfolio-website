import styled from 'styled-components';
import { motion } from 'framer-motion';

function AboutContent() {
  return (
    <ContentWrapper>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Description>
          I'm a passionate software developer with experience in building modern web applications.
          My focus is on creating clean, efficient, and user-friendly solutions that solve real-world problems.
        </Description>
      </motion.div>
    </ContentWrapper>
  );
}

const ContentWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Description = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

export default AboutContent; 