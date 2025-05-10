import {
  ContactSection,
  ContactSectionLink,
  GithubIconsStyled,
  LinkedinIconsStyled,
  EmailIconsStyled
} from './ContactStyled';

const ContactComponent = () => {
  return (
    <ContactSection>
      <h3>Let's connect</h3>
      <p>
        I'm currently open to web development roles.  
        Feel free to reach out if you'd like to collaborate or learn more about my work.
      </p>
      <ul>
        <ContactSectionLink>
          <a href="mailto:maryna.herasymenko@powercoders.org">
            <EmailIconsStyled />
            <span>maryna.herasymenko@powercoders.org</span>
          </a>
        </ContactSectionLink>
        <ContactSectionLink> 
          <a href="https://www.linkedin.com/in/maryna-herasymenko-7762a99a/" target='_blank' rel="noopener noreferrer" title="LinkedIn Profile">
            <LinkedinIconsStyled />
            Linkedin
          </a>
        </ContactSectionLink>
        <ContactSectionLink> 
          <a href="https://github.com/marinagera" target='_blank' rel="noopener noreferrer" title="Github Profile">
            <GithubIconsStyled />
            Github
          </a>
        </ContactSectionLink>
      </ul>
    </ContactSection>
  );
};

export default ContactComponent;