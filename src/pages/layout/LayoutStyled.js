import styled from "styled-components";
import { NavLink } from "react-router";

export const Sitewrapper = styled.div`
  position: relative;
  background-color: ${({ theme }) => theme.mainBackground};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  min-height: 100vh;
  padding: 20px;
  overflow: hidden;
`;

export const LayoutWrapper = styled.div`
  background: #FD6262;
  background:rgb(245, 235, 235);
  background: ${({ theme }) =>
    theme.name === 'dark'
      ? 'linear-gradient(180deg, rgba(253, 98, 98, 1) 0%, rgba(24, 13, 13, 1) 100%)'
      : 'linear-gradient(180deg, rgba(253, 98, 98, 1) 0%, rgba(245, 235, 235, 1) 100%)'};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  padding: 1.5px 1.5px;
  border-radius: 33px;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  overflow-x: hidden;
  border-radius: 2rem;
  padding: 10px;
  margin-bottom: 50px;
`;

export const Header = styled.header`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 36px;
  margin-top: 10px;
  padding: 0 130px;

  @media screen and (max-width: 992px) {
    padding: 0 80px;
  }

  @media screen and (max-width: 640px) {
    padding: 0 60px 0 0;
    gap: 6px;
  }

  @media screen and (max-width: 440px) {
    justify-content: space-evenly;
    padding: 0 48px 0 0;
    gap: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem;
  z-index: 100;

  @media screen and (max-width: 460px) {
    padding: 1rem 0.5rem;
  }
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

  &.active button {
    background-color: var(--button-hover);
  }

  @media screen and (max-width: 640px) {
    padding: 3px 14px;
  }

  @media screen and (max-width: 440px){
    padding: 3px 8px;
  }
`;