import { 
  LayoutWrapperAbout, AboutWrapper,
  AboutContainer, AboutContent,
  AboutTitle, AboutImage,
  AboutDescription, AboutIntro,
  IntroDescription, AboutSection,
  AboutSectionContent, AboutValues,
  ResumeContainer, ResumeContent,
  AboutArticle, ArticleTitle,
  ArticleContent,
  Image 
} from './AboutStyled';
import { LayoutContainer } from '../layout/LayoutStyled';
import Clouds from '../../assets/images/clouds.png';
import MarynaPhoto from '../../assets/images/maryna_photo.jpg';
import { Button } from '../../components/button/Button';


const AboutComponent = () => {
  return (
    <>
      <LayoutWrapperAbout>
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
                    <div>A closer look at my profile</div>
                    My journey in tech started with a curiosity for how things work, and it has evolved into a love for creating solutions that make life easier.
                    <p>I build modern, user-focused web applications using React, JavaScript, and TypeScript.
                    Passionate about continuous learning and creative problem-solving, I am currently based in Zurich and ready for new challenges.
                    </p>
                    
                    <p>I'm currently looking for new opportunities to grow and make an impact in the tech world.</p>
                    <br />
                    Aspiring Frontend Developer with one year of hands-on experience as a trainee, working with React, API integration, and full-cycle application development from design to testing. Strong foundation in JavaScript, TypeScript, and modern frontend technologies, supported by specialized training in frontend development, IT support, and software testing.
                    <br />
                    <br />
                    I'm a passionate frontend developer with a focus on creating functional web applications.
                    With a strong foundation in HTML, CSS, and JavaScript, I specialize in building responsive and user-friendly interfaces using React.
                    My goal is to deliver high-quality code and exceptional user experiences. I'm always eager to learn new technologies and improve my skills.
                  </AboutSectionContent>
                  
                  <AboutImage>
                    <Image src={MarynaPhoto} alt='Maryna Herasymenko' />
                  </AboutImage>
                </AboutSection>

                <AboutSection>
                  <AboutImage>
                    <Image src={Clouds} alt='Maryna Herasymenko' />
                  </AboutImage>
                  <AboutSectionContent>
                    <h3>My Journey</h3>
                    <div>My journey in tech has been filled with challenges and triumphs, and I'm excited to see where it takes me next.</div>

                    <h3>My Projects</h3>
                    <div>Check out my GitHub for some of my work.</div>
                    <h3>My Contact</h3>
                    <div>If you'd like to get in touch, feel free to reach out via LinkedIn or email.</div>
                  
                  </AboutSectionContent>
                </AboutSection>

                  <AboutArticle>
                    <ArticleTitle>Education and Language</ArticleTitle>
                    <ArticleContent>
                    <div>Master's Degree in Food Technologies</div>
                    <div>National University of Food Technology (Ukraine)</div>
                    <div>Graduated in 2014</div>
                    </ArticleContent>
                    <ArticleContent>
                    <div>Languages</div>
                    <div>English, German, Russian, Ukrainian</div>
                    </ArticleContent>
                    <ArticleContent>
                    <div>Certifications</div>
                    <div>IT Support Certificate - Google, Coursera</div>
                    <div>Digital marketing - Google, Coursera</div>
                    <div>Certified Tester Foundation Level - ISTQB, Zurich</div>
                    </ArticleContent>
                  </AboutArticle>

                  <AboutArticle>
                    <ArticleTitle>Experience</ArticleTitle>
                    <ArticleContent>
                      <div>Experience</div>
                      <div>React Trainee at ti&m AG, Zurich</div>
                    </ArticleContent>
                    <ArticleContent>
                    <div>Technologies</div>
                    <div>JavaScript, React, TypeScript, HTML, CSS, API, WordPress</div>
                    </ArticleContent>
                    <ArticleContent>
                    <div>Tools</div>
                    <div>Git, GitHub, Vite, </div>
                    </ArticleContent>
                  </AboutArticle>
                
              </AboutContent>
              
            </AboutContainer>
          </AboutWrapper>
        </LayoutContainer>
      </LayoutWrapperAbout>
    </>
    
  );
};

export default AboutComponent;