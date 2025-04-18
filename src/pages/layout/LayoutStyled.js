import styled from "styled-components";
import { Link } from "react-router";

export const Sitewrapper = styled.div`
position: relative;
background-color: ${({ theme }) => theme.mainBackground};
color: ${({ theme }) => theme.text};
font-family: sans-serif;
transition: all 0.1s ease;
min-height: 100vh;
padding: 20px;
`;

export const LayoutWrapper = styled.div`
  background: #FD6262;
/* background: linear-gradient(180deg, rgba(253, 98, 98, 1) 0%, ${({ theme }) => theme.background} 50%, rgba(253, 98, 98, .7) 100%); */
background-image: linear-gradient(to bottom, #fd6262, #ce4d6b, #9a4168, #663659, #39283e, #39283e, #39283e, #39283e, #663659, #9a4168, #ce4d6b, #fd6262);
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;
  min-height: 100vh;
  padding: .6rem;
`;

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
  overflow-x: hidden;
  border-radius: 2rem .25rem;
  padding: 10px;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: end;
  gap: 36px;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 1rem;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: end;
  list-style: none;
  gap: 1.5rem;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
`;