import { HomeWrapper, NameLogo, MainText, LayoutWrapperHome, InfoList, InfoItem } from './HomeStyled';
import { LayoutContainer } from '../layout/LayoutStyled';
import CardsComponent from '../projects/CardsComponent';

const HomePage = () => {
  return (
    <>
      <LayoutWrapperHome>
        <LayoutContainer>
          <HomeWrapper>
            <NameLogo>Maryna Herasymenko</NameLogo>
            <MainText>
              <div>Web developer</div>
              <div>Front-end developer</div>
            </MainText>
            <InfoList>
              <InfoItem>
                <span>Based in</span>
                <span>Zurich, Switzerland</span>
              </InfoItem>
              <InfoItem>
                <span>Contact</span>
                <span>marynaherasymenko@gmail.com</span>
              </InfoItem>
              <InfoItem>
                <span>Current location:</span>
                <span>47.3769° N, 8.5417° E</span>
              </InfoItem>
            </InfoList>
          </HomeWrapper>
          
        </LayoutContainer>
        
      </LayoutWrapperHome>
      {/* <CardsComponent /> */}
    </>
  );
};

export default HomePage;