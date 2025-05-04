import styled from "styled-components";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 0 80px;
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 110px;
`;

export const AboutContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
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
  margin: 20px 0;
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

export const AboutSection = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 60px;
  padding: 0 40px;
`;

export const AboutSectionContent = styled.div`
  width: 50%;
  font-size: 1.1rem; 
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  margin-bottom: 20px;

  h3 {
    margin-bottom: 14px;
    font-size: 1.2rem; 
  }

  p {
    margin-bottom: 8px;
    line-height: 1.8;
    text-align: justify;

    span {
      color: ${({ theme }) => theme.mainColor};

    }
  }
`;

export const AboutImage = styled.div`
  width: 50%;
  text-align: center;
`;

export const Image = styled.img`
  width: auto;
  height: 500px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

export const AboutArticleContainer = styled.div`
  display: flex;
  gap: 60px;
  margin: 0;

  >:nth-child(2) {
    margin-top: 120px;
  }
`;

export const AboutArticle = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;

  p {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.4;
  }
`;

export const ArticleTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  
`;

export const ArticleSubtitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.greyText};
  margin-bottom: 20px;
`;

export const ArticleContent = styled.div`
  font-size: 1.1rem;
  height: 200px;
  color: ${({ theme }) => theme.text};
  margin-bottom: 20px;
  padding: 30px 40px;
  text-align: start;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.greyBackground};

  p {
    margin-bottom: 8px;
  }

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    transition: all 0.1s ease;
  }

  a:hover {
    color: ${({ theme }) => theme.mainColor}
  }
`;

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px 40px;
  border-top: 3px solid rgba(245, 235, 235, 1);
  margin: 40px 0;

  ${({ theme }) =>
    theme.name === 'dark' &&
    `
      border-top: 2px solid ${theme.greyColor};
    `}

  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.text};
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.4;
    margin-bottom: 10px;
  }

  ul {
    display: flex;
    gap: 200px;
    list-style: none;
    margin-bottom: 20px;
  }

  li {
    font-size: 1.1rem;
    color: ${({ theme }) => theme.text};
    line-height: 1.4;
    margin-bottom: 20px;

    span {
      display: inline-block;
      font-weight: 500;
      color: ${({ theme }) => theme.mainColor};
      margin-left: 8px;
    }
  }

  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.mainColor};
    text-decoration: none;
    transition: all 0.1s ease;
  }
`;
