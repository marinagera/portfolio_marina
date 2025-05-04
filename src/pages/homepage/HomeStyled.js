import styled from "styled-components";

export const HomeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 86vh;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 20px 80px;
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
  gap: 20px;
  font-size: 68px;
  font-weight: 500;

  span {
    font-size: 54px;
    color: ${({ theme }) => theme.greyText};
  }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 200px;
  margin-bottom: 10px;
`;

export const InfoItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-decoration: none;
  line-height: 1.5;
  font-size: 20px;
  font-weight: 500;

  div {
    color: ${({ theme }) => theme.greyText};
  }
`;
