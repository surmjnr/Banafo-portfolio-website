import { motion } from 'framer-motion';
import styled from 'styled-components';

function ProjectCard({ project, visitLabel = "Visit Site", index }) {
  return (
    <Card
      as={motion.article}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <ProjectImage src={project.image} alt={project.title} />
      <ProjectContent>
        <ProjectTitle>{project.title}</ProjectTitle>
        <ProjectDescription>{project.description}</ProjectDescription>
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechTag key={index}>{tech}</TechTag>
          ))}
        </TechStack>
        <ProjectLinks>
          <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github" /> View Code
          </ProjectLink>
          <ProjectLink href={project.live} target="_blank" rel="noopener noreferrer" primary>
            {visitLabel} <i className="fas fa-external-link-alt" />
          </ProjectLink>
        </ProjectLinks>
      </ProjectContent>
    </Card>
  );
}

const Card = styled.article`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.875rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.25rem 0.75rem;
  border-radius: 50px;
  font-size: 0.75rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  border-radius: 50px;
  font-size: 0.875rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme, primary }) => primary ? theme.colors.primary : theme.colors.secondary}20;
  }
`;

export default ProjectCard;
