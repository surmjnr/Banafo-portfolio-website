import styled from 'styled-components';
import { motion } from 'framer-motion';

function SkillsContent() {
  const mainSkills = [
    { name: 'Frontend Development', level: 90 },
    { name: 'Backend Development', level: 85 },
    { name: 'React & React Native', level: 95 },
    { name: 'Node.js', level: 88 },
  ];

  const otherSkills = [
    'TypeScript',
    'GraphQL',
    'Docker',
    'AWS',
    'MongoDB',
    'PostgreSQL',
    'Git',
    'CI/CD',
  ];

  return (
    <SkillsContainer>
      <SkillsGrid>
        {mainSkills.map((skill, index) => (
          <CategoryCard
            key={skill.name}
            as={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <SkillHeader>
              <SkillName>{skill.name}</SkillName>
              <SkillLevel>{skill.level}%</SkillLevel>
            </SkillHeader>
            <ProgressBarContainer>
              <ProgressBar>
                <Progress value={skill.level} />
              </ProgressBar>
            </ProgressBarContainer>
          </CategoryCard>
        ))}
      </SkillsGrid>

      <ExtraSkills>
        <SubTitle>Other Technologies</SubTitle>
        <TagCloud>
          {otherSkills.map((skill, index) => (
            <Tag key={index}>{skill}</Tag>
          ))}
        </TagCloud>
      </ExtraSkills>
    </SkillsContainer>
  );
}

const SkillsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: clamp(26px, 5vw, 32px);
  margin-bottom: 50px;
  text-align: center;

  &:after {
    content: '';
    display: block;
    width: 100px;
    height: 2px;
    background: ${({ theme }) => theme.colors.secondary};
    margin: 10px auto 0;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  padding: 0 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const CategoryCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  padding: 2rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 20px;
  margin-bottom: 25px;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const SkillItem = styled.div``;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 14px;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
`;

const ProgressBarContainer = styled.div`
  background: rgba(100, 255, 218, 0.1);
  border-radius: 999px;
  height: 6px;
  overflow: hidden;
`;

const ProgressBar = styled.div`
  background: rgba(62, 197, 204, 0.1);
  height: 6px;
  border-radius: 999px;
  overflow: hidden;
`;

const Progress = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background: ${({ theme }) => theme.colors.secondary};
  transition: width 1s ease;
`;

const ExtraSkills = styled.div`
  margin-top: 50px;
  text-align: center;
`;

const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 24px;
  margin-bottom: 30px;
`;

const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
`;

const Tag = styled.span`
  color: ${({ theme }) => theme.colors.text};
  background: rgba(100, 255, 218, 0.1);
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

export default SkillsContent;