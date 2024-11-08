import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

// Import logos (you can use CDN links for now)
const skillsData = {
  "Frontend Development": {
    icon: "🌐",
    skills: [
      {
        name: "HTML",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
      },
      {
        name: "CSS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
      },
      {
        name: "JavaScript",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
      },
      {
        name: "React",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      },
      {
        name: "Bootstrap",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
      }
    ]
  },
  "UI/UX Design": {
    icon: "🎨",
    skills: [
      {
        name: "Figma",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
      }
    ]
  },
  "Tools": {
    icon: "🛠️",
    skills: [
      {
        name: "Git",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
      },
      {
        name: "GitHub",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      },
      {
        name: "VS Code",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
      }
    ]
  }
};

const Skills = () => {
  return (
    <SkillsSection id="skills">
      <Container>
        <SectionTitle>Skills & Technologies</SectionTitle>
        
        <SkillsGrid>
          {Object.entries(skillsData).map(([category, { icon, skills }]) => (
            <SkillCategory
              key={category}
              as={motion.div}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <CategoryTitle>
                <span>{icon}</span> {category}
              </CategoryTitle>
              <SkillsContainer>
                {skills.map((skill) => (
                  <SkillItem
                    key={skill.name}
                    as={motion.div}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <SkillLogo src={skill.logo} alt={skill.name} />
                    <SkillName>{skill.name}</SkillName>
                  </SkillItem>
                ))}
              </SkillsContainer>
            </SkillCategory>
          ))}
        </SkillsGrid>
      </Container>
    </SkillsSection>
  );
};

const SkillsSection = styled.section`
  padding: 100px 0;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 32px;
  margin-bottom: 50px;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 28px;
    margin-bottom: 40px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    gap: 30px;
    padding: 0 20px;
  }
`;

const SkillCategory = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 24px;
  margin-bottom: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: center;
    font-size: 22px;
    margin-bottom: 20px;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 30px;
  width: 100%;
  justify-items: center;
  align-items: start;
`;

const SkillItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  max-width: 100px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const SkillLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-bottom: 8px;
  transition: transform 0.3s ease;

  ${SkillItem}:hover & {
    transform: scale(1.1);
  }
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  line-height: 1.2;
`;

export default Skills;
