import { motion } from 'framer-motion';
import styled from 'styled-components';
import { PrimaryButton, OutlinedButton } from '../shared/Buttons';

function ProjectsContent() {
  const projects = [
    {
      title: "Project 1",
      description: "Description here",
      image: "/path-to-image.jpg",
      tags: ["React", "Node.js"],
      github: "https://github.com",
      live: "https://example.com"
    }
    // Add more projects as needed
  ];

  return (
    <ProjectsContainer>
      <SectionTitle>Some Things I've Built</SectionTitle>
      
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          as={motion.div}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          <ProjectContent>
            <ProjectImage>
              <img src={project.image} alt={project.title} />
              <ImageOverlay />
            </ProjectImage>
            
            <ProjectInfo>
              <ProjectHeader>
                <FeaturedProject>Featured Project</FeaturedProject>
                <ProjectTitle>{project.title}</ProjectTitle>
              </ProjectHeader>
              
              <ProjectDescription>
                <p>{project.description}</p>
              </ProjectDescription>
              
              <ProjectTechList>
                {project.tags.map((tag, i) => (
                  <TechTag key={i}>{tag}</TechTag>
                ))}
              </ProjectTechList>
              
              <ProjectLinks>
                <OutlinedButton
                  as="a"
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github" />
                  <span>View Code</span>
                </OutlinedButton>
                
                <PrimaryButton
                  as="a"
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Live Demo</span>
                  <i className="fas fa-external-link-alt" />
                </PrimaryButton>
              </ProjectLinks>
            </ProjectInfo>
          </ProjectContent>
        </ProjectCard>
      ))}
    </ProjectsContainer>
  );
}

const ProjectsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;
`;

const SectionTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: clamp(26px, 5vw, 32px);
  margin-bottom: 40px;
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

const ProjectCard = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectContent = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const ProjectImage = styled.div`
  grid-area: 1 / 1 / -1 / 8;
  position: relative;
  z-index: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: 1 / 1 / -1 / -1;
    opacity: 0.25;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 4px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 25, 47, 0.7);
  border-radius: 4px;
  transition: background 0.3s ease;

  ${ProjectImage}:hover & {
    background: rgba(10, 25, 47, 0.2);
  }
`;

const ProjectInfo = styled.div`
  grid-area: 1 / 6 / -1 / -1;
  position: relative;
  z-index: 2;
  text-align: right;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-area: 1 / 1 / -1 / -1;
    padding: 40px 0;
    text-align: left;
    background: transparent;
  }

  padding: 2rem;
  background: linear-gradient(
    to bottom,
    ${({ theme }) => theme.colors.surface},
    ${({ theme }) => theme.colors.primary}
  );
`;

const ProjectHeader = styled.div`
  margin-bottom: 20px;
`;

const FeaturedProject = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 13px;
  margin-bottom: 10px;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1.5rem;
  margin-bottom: 1rem;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ProjectDescription = styled.div`
  position: relative;
  padding: 25px;
  border-radius: 4px;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  font-size: 14px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    background: rgba(10, 25, 47, 0.85);
    padding: 20px;
  }
`;

const ProjectTechList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  margin: 25px 0;
  justify-content: flex-end;
`;

const TechTag = styled.span`
  background: rgba(62, 197, 204, 0.1);
  color: ${({ theme }) => theme.colors.secondary};
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-size: 0.875rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default ProjectsContent; 