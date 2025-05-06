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
  padding: 24px 80px 20px;

  @media screen and (max-width: 992px) {
    padding: 24px 40px 20px;
  }

  @media screen and (max-width: 600px) {
    padding: 24px 20px 20px;
  }
`;

export const NameLogo = styled.h1`
  font-size: 22px;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.text};

  @media screen and (max-width: 800px) {
    visibility: hidden;
  }
  
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

    @media screen and (max-width: 1200px) {
      font-size: 46px;
    }

    @media screen and (max-width: 992px) {
      font-size: 40px;
    }

    @media screen and (max-width: 768px) {
      font-size: 32px;
    }

    @media screen and (max-width: 480px) {
      font-size: 28px;
    }
  }

  @media screen and (max-width: 1200px) {
    font-size: 58px;
    gap: 16px;
  }

  @media screen and (max-width: 992px) {
    font-size: 48px;
   
  }

  @media screen and (max-width: 768px) {
    font-size: 40px;
    gap: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
    line-height: 1.5; 
  }
`;

export const InfoList = styled.ul`
  display: flex;
  gap: 140px;
  margin-bottom: 10px;

  @media screen and (max-width: 1400px) {
    gap: 0;
    justify-content: space-between;
  }

  @media screen and (max-width: 992px) {
    flex-wrap: wrap;
  }
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

  span {
    font-size: 18px;
    font-weight: 400;

    @media screen and (max-width: 440px) {
      font-size: 16px;
  }
  }

  a {
    color: ${({ theme }) => theme.greyText};
    text-decoration: none;
    font-size: 20px;
    font-weight: 500;
  }

  a:hover {
    color: ${({ theme }) => theme.mainColor};
  }

  @media screen and (max-width: 1400px) {
    font-size: 16px;
    gap: 2px;
  }

  @media screen and (max-width: 992px) {
    width: 50%;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
