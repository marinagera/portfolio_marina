import {
  ProjectDescription, ProjectTechnologies,
  CardsWrapper, CardGrid,
  ProjectCard, MediaContainer,
  ProjectImage, ProjectVideo,
  ProjectTitle,CardLink
} from './ProjectsStyled';

import ShopImage from '../../assets/images/Shop.png';
import ClipsImage from '../../assets/images/Clips.png';
import Miami from '../../assets/images/Miami_landing.png';
import Recipes from '../../assets/images/Recipes.png';

const projectData = [
  {
    id: 1,
    title: 'Sport Shop',
    description: 'A clothing store website built with HTML and CSS.',
    image: ShopImage,
    technologies: 'HTML, CSS',
    whatWasLearned: 'HTML, CSS, Flexbox, Grid',
    link: 'https://marinagera.github.io/sport_shop/index.html',
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
  {
    id: 4,
    title: 'Delicious Recipes',
    description: 'A recipe website that allows users to search for their favorite recipes.',
    image: Recipes,
    technologies: 'HTML, CSS',
    link: 'https://recipe-website-herasymenko.netlify.app/',
  },
];

const CardsComponent = () => {
  return(
    <>
      <CardsWrapper>
        <CardGrid>
          {projectData.map((project) => (
            <ProjectCard key={project.id}>
              <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
                <MediaContainer>
                  {project.video ? (
                    <ProjectVideo autoPlay loop muted>
                      <source src={project.video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </ProjectVideo>
                  ) : (
                    <ProjectImage src={project.image} alt={project.title} />
                  )}
                </MediaContainer>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription >{project.description}</ProjectDescription >
                <ProjectTechnologies>Technologies: {project.technologies}</ProjectTechnologies>
              </CardLink>
            </ProjectCard>
          ))}
        </CardGrid>
      </CardsWrapper>
    </>
  )
};

export default CardsComponent;
