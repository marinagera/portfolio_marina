import { LayoutContainer, LayoutWrapper } from '../layout/LayoutStyled';
import {
  ProjectsTitle,
  ProjectsDescription, ProjectsWrapper, ContactSectionWrapper
} from './ProjectsStyled';
import CardsComponent from './CardsComponent';
import { ContactSection } from '../about/AboutStyled';

const ProjectsComponent = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutContainer>
          <ProjectsWrapper>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsDescription>Featured projects showcasing digital experiences I've crafted with attention to detail and user-centric design.</ProjectsDescription>
            <CardsComponent />
          </ProjectsWrapper>
          <ContactSectionWrapper>
            <ContactSection>
              <h3>Let's connect</h3>
              <p>
                I'm currently open to frontend-development positions.  
                Feel free to reach out if you'd like to collaborate or learn more about my work.
              </p>
              <ul>
                <li>Email: <span>maryna.herasymenko@powercoders.org</span></li>
                <li> 
                  <a href="https://www.linkedin.com/in/maryna-herasymenko-7762a99a/" target='_blank' rel="noopener noreferrer" title="LinkedIn Profile">
                  Linkedin
                  </a>
                </li>
              </ul>
            </ContactSection>
          </ContactSectionWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};

export default ProjectsComponent;