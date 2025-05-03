import styled from "styled-components";
import { LayoutWrapper } from '../layout/LayoutStyled';

export const LayoutWrapperAbout = styled(LayoutWrapper)`
  /* margin-top: -74px; */
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

export const AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 20px 80px;
`;

export const AboutTitle = styled.h1`
  font-size: 2.5rem; 
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: center;
`;

export const AboutDescription = styled.p`
  font-size: 1.2rem; 
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
  text-align: center;
`;

export const ResumeContainer = styled.div`
  position: sticky;
  display: flex; 
  justify-content: space-between;
  align-items: center;
  margin: 20px 40px;
  padding: 30px 40px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.greyBackground};
  color: ${({ theme }) => theme.text};
  transition: all 0.1s ease;
`;

export const ResumeContent = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  text-align: center;
`;

export const AboutIntro = styled.div`
  display: flex;
  margin: 60px 40px;
  gap: 100px;
`;

export const IntroDescription = styled.p`
  width: 33%;
  font-size: 1.1rem; 
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const AboutSection = styled.div`
  display: flex;
  margin: 20px 40px;
  gap: 100px;
`;

export const AboutSectionContent = styled.div`
  width: 40%;
  font-size: 1.3rem; 
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  margin-bottom: 20px;
`;

export const AboutValues = styled.div`
  font-size: 1rem; 
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  margin: 40px 0; 
  padding: 40px 30px;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.text};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  h3 {
    font-size: 1.2rem; 
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 10px;
  }
`;

export const AboutArticle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 40px;
`;

export const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  text-align: start;
`;

export const ArticleContent = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  padding: 30px 40px;
  text-align: start;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.greyBackground};
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