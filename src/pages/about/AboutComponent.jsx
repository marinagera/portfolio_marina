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
  Image,
  AboutTextWithLinks, ExternalLinkStyled,
} from './AboutStyled';
import { LayoutContainer, LayoutWrapper } from '../layout/LayoutStyled';
import MarynaPhoto from '../../assets/images/maryna_photo.jpg';
import { Button } from '../../components/button/Button';
import  ContactComponent  from '../contact/ContactComponent';


const AboutComponent = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutContainer>
          <AboutWrapper>
            <AboutContainer>
              <AboutContent>

                <AboutTitle>Hi, I'm Maryna Herasymenko</AboutTitle>
                <AboutDescription>Frontend Developer <span>|</span> React Enthusiast <span>|</span> Lifelong Learner</AboutDescription>

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
                      I'm Maryna Herasymenko, an aspiring Frontend Developer passionate about building modern and user-friendly web applications.

                      After a strong background in business and data management, I transitioned into IT with a focus on frontend development.

                      I have hands-on experience as a trainee, working with <span>React</span>, API integration, and full-cycle application development from design to testing. With strong foundation in <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span> and <span>TypeScript</span>, and modern frontend technologies, supported by specialized training in frontend development, IT support, and <span>software testing</span>.
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
                        <div>June 2022 - July 2023</div>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Technologies</ArticleSubtitle>
                        <p>JavaScript, React, TypeScript, HTML, CSS, API Integration, WordPress</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Tools</ArticleSubtitle>
                        <p>Git, GitHub, Gitlab, Vite, CRA, Figma</p>
                    </ArticleContent>
                  </AboutArticle>

                  <AboutArticle>
                    <ArticleTitle>Education and Languages</ArticleTitle>
                    <ArticleContent>
                      <ArticleSubtitle>Education</ArticleSubtitle>
                        <p>Master's Degree in Food Technologies</p>
                        <div>National University of Food Technology (Ukraine)</div>
                        <div>September 2009 - June 2014</div>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Languages</ArticleSubtitle>
                        <p>English, German, Russian, Ukrainian</p>
                    </ArticleContent>
                    <ArticleContent>
                      <ArticleSubtitle>Certifications</ArticleSubtitle>
                          <AboutTextWithLinks>
                            IT Support Certificate - Google, Coursera
                            <a href="https://www.coursera.org/account/accomplishments/professional-cert/2AYQLX6CZ4ZM" target='_blank' rel="noopener noreferrer">
                              <ExternalLinkStyled />
                            </a>
                          </AboutTextWithLinks>
                          <AboutTextWithLinks>
                            Digital marketing - Google, Coursera
                            <a href="https://www.coursera.org/account/accomplishments/professional-cert/VSMTYPQVPWLQ" target='_blank' rel="noopener noreferrer">
                              <ExternalLinkStyled />
                            </a>
                          </AboutTextWithLinks>
                        <p>Certified Tester Foundation Level - ISTQB, Zurich</p>
                    </ArticleContent>
                  </AboutArticle>
                </AboutArticleContainer>

              </AboutContent>
            </AboutContainer>

            <ContactComponent />
          </AboutWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </>
    
  );
};

export default AboutComponent;