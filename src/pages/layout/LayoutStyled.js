import styled from "styled-components";
import { NavLink } from "react-router";

export const Sitewrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.mainBackground};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  min-height: 100vh;
  padding: 20px;
`;

export const LayoutWrapper = styled.div`
  background: #FD6262;
  background:rgb(245, 235, 235);
  /*  background-image: linear-gradient(to bottom, #fd6262, #ce4d6b, #9a4168, #663659, #39283e, #39283e, #39283e, #39283e, #663659, #9a4168, #ce4d6b, #fd6262); */
  background: ${({ theme }) =>
    theme.name === 'dark'
      ? 'linear-gradient(180deg, rgba(253, 98, 98, 1) 0%, rgba(24, 13, 13, 1) 100%)'
      : 'linear-gradient(180deg, rgba(253, 98, 98, 1) 0%, rgba(245, 235, 235, 1) 100%)'};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  padding: .6rem .5rem;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  overflow-x: hidden;
  border-radius: 2rem .25rem;
  padding: 10px;
  margin-bottom: 40px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 36px;
  margin-top: 10px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  z-index: 100;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  align-items: center;
  list-style: none;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: 6px 20px;
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;

  &.active {
    color: ${({ theme }) => theme.mainColor};
  }

  &:hover {
    color: ${({ theme }) => theme.mainColor};
    transition: all 0.1s ease;
  }
`;