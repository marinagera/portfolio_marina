import { LayoutWrapperAbout, AboutWrapper, AboutContainer, AboutImage, Image } from './AboutStyled'
import Clouds from '../../assets/images/clouds.png';
import { LayoutContainer } from '../layout/LayoutStyled';


const AboutComponent = () => {
  return (
    <>
      <LayoutWrapperAbout>
        <LayoutContainer>
          <AboutWrapper>
            <AboutContainer>
              <div>About</div>
              <AboutImage>
                <Image src={Clouds} alt='Clouds' />
              </AboutImage>
            </AboutContainer>
          </AboutWrapper>
        </LayoutContainer>
      </LayoutWrapperAbout>
    </>
    
  );
};

export default AboutComponent;