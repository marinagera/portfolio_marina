import { LayoutContainer } from '../layout/LayoutStyled';
import { LayoutWrapperProjects, ProjectsTitle, ProjectsDescription, ProjectsWrapper, ProjectDescription, ProjectTechnologies  } from './ProjectsStyled';
import {
  CardsWrapper,
  CardGrid,
  ProjectCard,
  ProjectImage,
  ProjectTitle,
  ProjectLink
} from './ProjectsStyled';

import ShopImage from '../../assets/images/Shop.png';
import ClipsImage from '../../assets/images/Clips.png';
import Miami from '../../assets/images/Miami_landing.png';

const projectData = [
  {
    id: 1,
    title: 'Clielo Apparel Shop',
    description: 'A clothing store website built with HTML and CSS.',
    image: ShopImage,
    technologies: 'HTML, CSS',
    link: 'https://marinagera.github.io/project_shop/index.html',
  },
  {
    id: 2,
    title: 'Clips',
    description: 'A web application that allows users to create and share short video clips.',
    image: ClipsImage,
    technologies: 'Angular, TypeScript, Firebase',
    link: 'https://clips-iota-silk.vercel.app/',
  },
  {
    id: 3,
    title: 'Miami Landing Page',
    description: 'A landing page for a Miami-based travel agency.',
    image: Miami,
    technologies: 'HTML, CSS',
    link: 'https://marinagera.github.io/miami_landing/',
  },
  
];

const ProjectsComponent = () => {
  return (
    <>
      <LayoutWrapperProjects>
        <LayoutContainer>
          <ProjectsWrapper>
          <ProjectsTitle>My Projects</ProjectsTitle>
          <ProjectsDescription>Featured projects showcasing digital experiences I've crafted with attention to detail and user-centric design.</ProjectsDescription>
            <CardsWrapper>
              <CardGrid>
                {projectData.map((project) => (
                  <ProjectCard key={project.id}>
                    <ProjectImage src={project.image} alt={project.title} />
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDescription >{project.description}</ProjectDescription >
                    <ProjectTechnologies>Technologies: {project.technologies}</ProjectTechnologies>
                    <ProjectLink href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                    </ProjectLink>
                  </ProjectCard>
                ))}
              </CardGrid>
            </CardsWrapper>

          </ProjectsWrapper>
        </LayoutContainer>
      </LayoutWrapperProjects>
    </>
  );
};

export default ProjectsComponent;