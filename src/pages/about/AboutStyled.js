import styled from "styled-components";
import { LayoutWrapper } from '../layout/LayoutStyled';

export const LayoutWrapperAbout = styled(LayoutWrapper)`
  margin-top: -74px;
`;

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 14px 30px;
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

export const AboutImage = styled.div`
  width: 50%;
  text-align: center;
`;

export const Image = styled.img`
  width: 60%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;