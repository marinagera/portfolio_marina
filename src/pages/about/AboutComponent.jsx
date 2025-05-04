import { 
  AboutWrapper,
  AboutContainer, AboutContent,
  AboutTitle, AboutImage,
  AboutDescription, AboutSection,
  AboutSectionContent,
  ResumeContainer, ResumeContent,
  AboutArticle, ArticleTitle,
  ArticleContent, ArticleSubtitle,
  AboutArticleContainer,
  Image, ContactSection
} from './AboutStyled';
import { LayoutContainer, LayoutWrapper } from '../layout/LayoutStyled';
import MarynaPhoto from '../../assets/images/maryna_photo.jpg';
import { Button } from '../../components/button/Button';


const AboutComponent = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutContainer>
          <AboutWrapper>
            <AboutContainer>
              <AboutContent>

                <AboutTitle>Hi, I'm Maryna Herasymenko</AboutTitle>
                <AboutDescription>Frontend Developer | React Enthusiast | Lifelong Learner</AboutDescription>

                <ResumeContainer>
                  <ResumeContent>Resume</ResumeContent>
                  <a href="/CV_Maryna_Herasymenko.pdf" download={
                    'CV_Maryna_Herasymenko.pdf'
                  } target="_blank" rel="noopener noreferrer" title="Download CV" aria-label="Download CV" 
                  >
                    <Button>Download as PDF</Button>
                  </a>
                </ResumeContainer>
                
                <AboutSection>
                  <AboutSectionContent>
                    <h3>A closer look at my profile</h3>
                    <p>
                      My journey in tech started with a curiosity for how things work, and it has evolved into a love for creating solutions that make life easier.
                    </p>
                    
                    <p>
                      I'm an aspiring Frontend Developer with one year of hands-on experience as a trainee, working with <span>React</span>, API integration, and full-cycle application development from design to testing. With strong foundation in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>TypeScript</span>, and modern frontend technologies, supported by specialized training in frontend development, <span>IT support</span>, and software <span>testing</span>. Passionate about continuous learning and creative problem-solving, I am currently based in Zurich and ready for new challenges.
                      My goal is to deliver high-quality code and exceptional user experiences. I'm always eager to learn new technologies and improve my skills.
                    </p>
                  </AboutSectionContent>
                  
                  <AboutImage>
                    <Image src={MarynaPhoto} alt='Maryna Herasymenko' />
                  </AboutImage>
                </AboutSection>

                <AboutArticleContainer>
                  <AboutArticle>
                    <ArticleTitle>Experience and Technologies</ArticleTitle>
                    <ArticleContent>
                      <ArticleSubtitle>Experience</ArticleSubtitle>
                        <p>React Trainee @ ti&m, Zurich</p>
                        <p>June 2022 - July 2023</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Technologies</ArticleSubtitle>
                        <p>JavaScript, React, TypeScript, HTML, CSS, API, WordPress</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Tools</ArticleSubtitle>
                        <p>Git, GitHub, Vite </p>
                    </ArticleContent>
                  </AboutArticle>

                  <AboutArticle>
                    <ArticleTitle>Education and Languages</ArticleTitle>
                    <ArticleContent>
                      <ArticleSubtitle>Education</ArticleSubtitle>
                        <p>Master's Degree in Food Technologies</p>
                        <p>National University of Food Technology (Ukraine)</p>
                        <p>September 2009 - June 2014</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Languages</ArticleSubtitle>
                        <p>English, German, Russian, Ukrainian</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Certifications</ArticleSubtitle>
                          <p>
                            <a href="https://www.coursera.org/account/accomplishments/professional-cert/2AYQLX6CZ4ZM" target='_blank' rel="noopener noreferrer">
                              IT Support Certificate - Google, Coursera
                            </a>
                          </p>
                          <p>
                            <a href="https://www.coursera.org/account/accomplishments/professional-cert/VSMTYPQVPWLQ" target='_blank' rel="noopener noreferrer">
                              Digital marketing - Google, Coursera
                            </a>
                          </p>
                        <p>Certified Tester Foundation Level - ISTQB, Zurich</p>
                    </ArticleContent>
                  </AboutArticle>
                </AboutArticleContainer>

              </AboutContent>
            </AboutContainer>

            <ContactSection>
              <h3>Let's connect</h3>
              <p>
                I'm currently open to frontend-development positions.  
                Feel free to reach out if you'd like to collaborate or learn more about my work.
              </p>
              <ul>
                <li>Email: <span>marynaherasymenko@gmail.com</span></li>
                <li> 
                  <a href="https://www.linkedin.com/in/maryna-herasymenko-7762a99a/" target='_blank' rel="noopener noreferrer" title="LinkedIn Profile">
                  Linkedin
                  </a>
                </li>
              </ul>
            </ContactSection>
          </AboutWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </>
    
  );
};

export default AboutComponent;