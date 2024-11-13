import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <SectionTitle>About Me</SectionTitle>
        <ContentWrapper>
          <TextContent>
            <TextBlock>
              <p>
                I love making digital experiences that people want to use. I began by creating straightforward, adaptable layouts, but as I progressed, I discovered that creating designs that are pleasing and intuitive truly excited me. I'm constantly learning and looking for new approaches to better align design with user requirements.
              </p>
              <p>
                My specializations include frontend development and UI/UX design, with a focus on creating visually engaging, intuitive, and accessible interfaces. I have a keen interest in optimizing user interactions and building designs that feel seamless and inviting.
              </p>
            </TextBlock>

            <Highlight>
              <HighlightTitle>Career Highlight</HighlightTitle>
              <p>
                A highlight in my career was creating the front end of an e-commerce platform, allowing me to refine my skills in responsive design and user experience. I've also had the rewarding experience of managing full projects from concept to completion, ensuring each project aligns with client goals and user needs.
              </p>
            </Highlight>

            <Philosophy>
              <PhilosophyTitle>My Approach</PhilosophyTitle>
              <p>
                My approach to problem-solving revolves around empathy and simplicity. I believe in understanding user needs first and translating those insights into designs that are innovative yet straightforward, creating solutions that make technology feel natural and accessible.
              </p>
            </Philosophy>

            <PersonalSection>
              <PersonalTitle>Beyond Work</PersonalTitle>
              <p>
                Outside of work, I'm all about finding ways to recharge and get inspired. I love exploring new places, diving into a good book, and staying active. Music is a big part of my downtime, and keeping up with design trends keeps things fresh. Life's best when there's a balance, right?
              </p>
            </PersonalSection>
          </TextContent>
        </ContentWrapper>
      </Container>
    </AboutSection>
  );
};

const AboutSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TextBlock = styled.div`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.7;
  
  p {
    margin-bottom: 20px;
  }
`;

const Highlight = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: 25px;
  border-radius: 8px;
  margin: 20px 0;
`;

const HighlightTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 15px;
`;

const Philosophy = styled.div`
  margin: 20px 0;
`;

const PhilosophyTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 15px;
`;

const PersonalSection = styled.div`
  margin: 20px 0;
`;

const PersonalTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 15px;
`;

export default About;
