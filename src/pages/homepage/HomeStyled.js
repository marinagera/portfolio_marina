import styled from "styled-components";
import { LayoutWrapper, LayoutContainer } from '../layout/LayoutStyled';

export const LayoutWrapperHome = styled(LayoutWrapper)`
  /* margin-top: -74px; */
`;

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* background: linear-gradient(180deg,rgb(51, 51, 54) -48.37766594775941%, rgb(13, 13, 13) 100%); */
  overflow: hidden;
  padding: 14px 30px;
`;

export const NameLogo = styled.h1`
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

export const MainText = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  gap: 20px;
  font-size: 68px;
  margin-top: 200px;
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 100px;
  margin: 230px 0 30px 0;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  font-size: 18px;
  font-weight: 500;
`;
