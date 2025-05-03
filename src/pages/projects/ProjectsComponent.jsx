import { LayoutContainer } from '../layout/LayoutStyled';
import {
  LayoutWrapperProjects, ProjectsTitle,
  ProjectsDescription, ProjectsWrapper,
} from './ProjectsStyled';
import CardsComponent from './CardsComponent';


const ProjectsComponent = () => {
  return (
    <>
      <LayoutWrapperProjects>
        <LayoutContainer>
          <ProjectsWrapper>
          <ProjectsTitle>My Projects</ProjectsTitle>
          <ProjectsDescription>Featured projects showcasing digital experiences I've crafted with attention to detail and user-centric design.</ProjectsDescription>
            <CardsComponent />
          </ProjectsWrapper>
        </LayoutContainer>
      </LayoutWrapperProjects>
    </>
  );
};

export default ProjectsComponent;