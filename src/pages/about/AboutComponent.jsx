import { AboutContainer, AboutImage } from './AboutStyled'
import Clouds from '../../assets/images/clouds.png';
import styled from "styled-components";


const Image = styled.img`
  width: 50%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const AboutComponent = () => {
  return (
    <AboutContainer>
      <div>About</div>
      <AboutImage>
        <Image src={Clouds} alt='Clouds' />
      </AboutImage>
    </AboutContainer>
  );
};

export default AboutComponent;