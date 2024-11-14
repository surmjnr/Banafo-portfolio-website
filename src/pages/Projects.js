import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const ProjectsSection = styled.section`
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

const CategoryButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

const CategoryButton = styled.button`
  background: ${({ active, theme }) => active ? theme.colors.secondary : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.background : theme.colors.textLight};
  padding: 8px 20px;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  grid-column: ${({ featured }) => featured ? 'span 2' : 'span 1'};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-column: span 1;
  }

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

const ProjectContent = styled.div`
  padding: 20px;
`;

const ProjectTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 24px;
  margin-bottom: 15px;
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
`;

const TechTag = styled.span`
  background: ${({ theme }) => `${theme.colors.secondary}20`};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 14px;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const ProjectLink = styled.a`
  color: ${({ theme }) => theme.colors.secondary};
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover {
    text-decoration: underline;
  }

  i {
    font-size: 16px;
  }
`;

const SkillsSection = styled.section`
  margin-top: 50px;
  padding: 30px;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const SkillsTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 28px;
  margin-bottom: 20px;
  text-align: center;
  font-weight: bold;
`;

const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0;
  text-align: center;
`;

const SkillItem = styled.li`
  color: ${({ theme }) => theme.colors.text};
  font-size: 18px;
  margin: 10px 0;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 5px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.background};
    transform: scale(1.05);
  }
`;

const Projects = () => {
  const categories = ["All", "Frontend", "UI/UX"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio site that highlights my skills, experience, and projects in an engaging and user-friendly way. Includes sections for showcasing projects, skills, and contact information.",
      technologies: ["React"],
      image: `${process.env.PUBLIC_URL}/AKB.png`,
      liveDemo: "https://surmjnr.github.io/Banafo-portfolio-website/",
      github: "https://github.com/surmjnr/Banafo-portfolio-website",
      category: "Frontend",
      featured: true
    },
    {
      id: 2,
      title: "Randomized Test Assignment Tool",
      description: "A web application that assigns a set of tests to students randomly. It's designed to simplify the process of random test assignment, ensuring students receive a random set.",
      technologies: ["HTML", "CSS", "JavaScript"],
      image: `${process.env.PUBLIC_URL}/ExamSet.png`,
      liveDemo: "https://surmjnr.github.io/Ramdom-exam-set-assignment/",
      github: "https://github.com/surmjnr/Ramdom-exam-set-assignment",
      category: "Frontend"
    },
    {
      id: 3,
      title: "E-commerce Website",
      description: "An e-commerce website featuring product listings, shopping cart functionality, and a checkout process.",
      technologies: ["HTML", "CSS", "JavaScript", "React"],
      image: `${process.env.PUBLIC_URL}/GhanaStore.png`,
      liveDemo: "https://surmjnr.github.io/Ghana-Store/",
      github: "https://github.com/surmjnr/Ghana-Store",
      category: "Frontend"
    },
    {
      id: 4,
      title: "Frontend Mentor Challenges",
      description: "A collection of completed projects from Frontend Mentor, showcasing the ability to replicate designs and tackle common frontend challenges. These projects demonstrate skills in responsive design and attention to detail.",
      technologies: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
      image: `${process.env.PUBLIC_URL}/frontendmentor.png`,
      github: "https://github.com/surmjnr/front-end-mentor-projects",
      category: "Frontend"
    },
    {
      id: 5,
      title: "UI Design for Randomized Test Assignment Tool",
      description: "An intuitive UI design focused on providing a seamless experience for administrators assigning tests and students receiving them. Emphasis on accessibility, ease of use, and clarity in navigation.",
      technologies: ["Figma"],
      image: `${process.env.PUBLIC_URL}/ExamSet.png`,
      liveDemo: "https://figma.com/file/example",
      figma: "https://figma.com/file/example",
      category: "UI/UX"
    }
  ];

  return (
    <ProjectsSection id="projects">
      <Container>
        <SectionTitle>Featured Projects</SectionTitle>
        
        <CategoryButtons>
          {categories.map(category => (
            <CategoryButton
              key={category}
              active={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </CategoryButton>
          ))}
        </CategoryButtons>

        <ProjectsGrid>
          {projects
            .filter(project => activeCategory === "All" || project.category === activeCategory)
            .map(project => (
              <ProjectCard
                key={project.id}
                as={motion.div}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                featured={project.featured}
              >
                <ProjectImage src={project.image} alt={project.title} />
                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>
                  <TechStack>
                    {project.technologies.map(tech => (
                      <TechTag key={tech}>{tech}</TechTag>
                    ))}
                  </TechStack>
                  <ProjectLinks>
                    {project.liveDemo && (
                      <ProjectLink href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </ProjectLink>
                    )}
                    {project.github && (
                      <ProjectLink href={project.github} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github" /> GitHub
                      </ProjectLink>
                    )}
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
        </ProjectsGrid>

        <SkillsSection>
          <SkillsTitle>Other Skills</SkillsTitle>
          <SkillsList>
            <SkillItem>Computer Repairs</SkillItem>
            <SkillItem>Basic Networking</SkillItem>
          </SkillsList>
        </SkillsSection>
      </Container>
    </ProjectsSection>
  );
};

export default Projects;
