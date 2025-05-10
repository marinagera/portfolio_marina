import { HomeWrapper, NameLogo, MainText, InfoList, InfoItem } from './HomeStyled';
import { LayoutContainer, LayoutWrapper } from '../layout/LayoutStyled';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <LayoutWrapper>
        <LayoutContainer>
          <HomeWrapper>
            <div>
              <NameLogo>Maryna Herasymenko</NameLogo>
            </div>
            <MainText>
              <div><span>Maryna Herasymenko</span></div>
              <div>Front-end developer</div>
            </MainText>
            <InfoList>
              <InfoItem>
                <div>Based in</div>
                <span>Zurich, Switzerland</span>
              </InfoItem>
              <InfoItem>
                <div>Contact</div>
                <span>maryna.herasymenko@powercoders.org</span>
              </InfoItem>
              <InfoItem>
                <div>Current location:</div>
                <span>47.3769° N, 8.5417° E</span>
              </InfoItem>
              <InfoItem>
                <div>
                  <Link to="/projects">Projects -&gt;</Link>
                </div>
              </InfoItem>
            </InfoList>
          </HomeWrapper>
        </LayoutContainer>
      </LayoutWrapper>
    </>
  );
};

export default HomePage;