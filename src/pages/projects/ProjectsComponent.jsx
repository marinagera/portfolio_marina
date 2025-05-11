import { LayoutContainer, LayoutWrapper } from '../layout/LayoutStyled';
import {
  ProjectsTitle,
  ProjectsDescription, ProjectsWrapper, ContactSectionWrapper
} from './ProjectsStyled';
import CardsComponent from './CardsComponent';
import  ContactComponent  from '../contact/ContactComponent';

const ProjectsComponent = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutContainer>
          <ProjectsWrapper>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsDescription>
            Featured projects showcasing digital experiences I've crafted with attention to detail and user-centric design.
          </ProjectsDescription>
            <CardsComponent />
          </ProjectsWrapper>
          <ContactSectionWrapper>
            <ContactComponent />
          </ContactSectionWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};

export default ProjectsComponent;