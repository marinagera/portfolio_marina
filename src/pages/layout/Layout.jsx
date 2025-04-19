import { useState } from 'react';
import { Outlet } from "react-router";
import { Sitewrapper, LayoutWrapper, LayoutContainer,Header, Nav, NavList, StyledNavLink } from "./LayoutStyled";
import { Buttton } from '../../components/button/Button';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme/theme';
import GlobalStyle from '../../theme/globalStyles';
import ThemeToggle from '../../theme/ThemeToggle';

const LayoutComponent = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Sitewrapper>
        <LayoutWrapper>
          <LayoutContainer>
            <Header>
              <Nav>
                <NavList>
                  <li>
                    <StyledNavLink to="/">Home</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="projects">Projects</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="about">About</StyledNavLink>
                  </li>
                  <li>
                    <StyledNavLink to="contact">
                      <Buttton>Contact</Buttton>
                      </StyledNavLink>
                  </li>
                </NavList>
              </Nav>
              <ThemeToggle isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            </Header>

            <Outlet/>
          </LayoutContainer>
        </LayoutWrapper>
      </Sitewrapper>
    </ThemeProvider>
  );
};

export default LayoutComponent;