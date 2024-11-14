import styled from 'styled-components';

function SkillCard({ category, skills }) {
  return (
    <Card>
      <CategoryTitle>{category}</CategoryTitle>
      <SkillsList>
        {skills.map((skill, index) => (
          <SkillItem key={index}>
            <SkillName>{skill.name}</SkillName>
            <ProgressBarContainer>
              <ProgressBar width={skill.level} />
            </ProgressBarContainer>
            <SkillLevel>{skill.level}%</SkillLevel>
          </SkillItem>
        ))}
      </SkillsList>
    </Card>
  );
}

const Card = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
`;

const CategoryTitle = styled.h3`
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const SkillsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SkillItem = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr 50px;
  align-items: center;
  gap: 1rem;
`;

const SkillName = styled.span`
  color: ${({ theme }) => theme.colors.textLight};
`;

const ProgressBarContainer = styled.div`
  background: rgba(100, 255, 218, 0.1);
  border-radius: 999px;
  height: 8px;
  width: 100%;
`;

const ProgressBar = styled.div`
  background: ${({ theme }) => theme.colors.secondary};
  border-radius: 999px;
  height: 100%;
  width: ${({ width }) => width}%;
  transition: width 1s ease-in-out;
`;

const SkillLevel = styled.span`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  text-align: right;
`;

export default SkillCard; 