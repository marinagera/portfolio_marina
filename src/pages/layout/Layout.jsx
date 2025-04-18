import { useState } from 'react';
import { Outlet } from "react-router";
import { Sitewrapper, LayoutWrapper, LayoutContainer,Header, Nav, NavList, NavLink } from "./LayoutStyled";
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
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="projects">Projects</NavLink>
                  </li>
                  <li>
                    <NavLink to="about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="contact">Contact</NavLink>
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