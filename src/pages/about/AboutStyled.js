import styled from "styled-components";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 0 80px;

  @media screen and (max-width: 992px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 150px;
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
  margin-bottom: 30px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 440px) {
    font-size: 1.5rem;
    line-height: 1.5;
    margin-bottom: 24px;
  }
`;

export const AboutDescription = styled.p`
  font-size: 1.2rem; 
  color: ${({ theme }) => theme.text};
  margin-bottom: 30px;
  text-align: center;

  span {
    color: ${({ theme }) => theme.mainColor};
  };

  @media screen and (max-width: 440px) {
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 20px;
  }
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

  @media screen and (max-width: 440px) {
    flex-direction: column;
    padding: 14px;
  }
`;

export const ResumeContent = styled.p`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  line-height: 1.4;
  text-align: center;

  @media screen and (max-width: 440px) {
    margin-bottom: 20px;
  }
`;

export const AboutSection = styled.div`
  display: flex;
  gap: 60px;
  margin-top: 60px;

  @media screen and (max-width: 992px) {
    padding: 0;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const AboutSectionContent = styled.div`
  order: 1;
  width: 70%;
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

    @media screen and (max-width: 600px) {
      font-size: 1rem;
      line-height: 2;
    }
  }

  @media screen and (max-width: 992px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    order: 2;
  }
`;

export const AboutImage = styled.div`
  order: 2;
  width: 30%;
  text-align: end;

  @media screen and (max-width: 992px) {
    width: 30%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    text-align: center;
    order: 1;
  }
`;

export const Image = styled.img`
  width: auto;
  height: 400px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 992px) {
    height: 350px;
  }

  @media screen and (max-width: 768px) {
    width: auto;
  }

  @media screen and (max-width: 600px) {
    width: auto;
    max-height: 300px;
  }
`;

export const AboutArticleContainer = styled.div`
  display: flex;
  gap: 60px;
  margin: 0;

  >:nth-child(2) {
    margin-top: 120px;

    @media screen and (max-width: 1400px) {
      margin-top: 20px;
    }
  }

  @media screen and (max-width: 1400px) {
    margin-top: 50px;
    flex-direction: column;
  }

  @media screen and (max-width: 768px) {
    margin-top: 22px;
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

  @media screen and (max-width: 1400px) {
    width: 100%;
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

  @media screen and (max-width: 768px) {
    height: fit-content;
  }

  @media screen and (max-width: 600px) {
    padding: 22px;
  }
`;

export const AboutTextWithLinks = styled.p`
  display: flex;

  a {
    display:  flex;
    align-items: center;
  }
`;

export const ExternalLinkStyled = styled(HiOutlineExternalLink)`
  margin-left: 6px;
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

    @media screen and (max-width: 600px) {
      font-size: 16px;
    }
  }

  ul {
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 26px 0 20px;

    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 20px;
      margin-top: 22px;
    }
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

      @media screen and (max-width: 600px) {
        font-size: 16px;
        margin-left: 0;
        margin-top: 12px;
      }
    }
  }

  a {
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.mainColor};
    text-decoration: none;
    transition: all 0.1s ease;

    @media screen and (max-width: 600px) {
    font-size: 1rem;
    }
  }

  a:hover, a span:hover {
    color: ${({ theme }) => theme.greyText}
  }

  @media screen and (max-width: 992px) {
    padding: 60px 0;
  }
`;

export const ContactSectionLink = styled.li`
  display: flex;

  a {
    display:  flex;
    align-items: center;
  }
`;

export const GithubIconsStyled = styled(FaGithub)`
  margin-right: 8px;
`;

export const LinkedinIconsStyled = styled(FaLinkedinIn)`
  margin-right: 8px;
`;

export const EmailIconsStyled = styled(MdOutlineEmail)`
  margin: 3px 6px 0 0;
`;
