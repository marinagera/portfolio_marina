import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 60px;
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
    text-align: justify;
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
      flex-wrap: wrap;
      margin-top: 22px;
      
      li:nth-child(2), li:nth-child(3) {
        width: 50%;
      } 
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

      @media screen and (max-width: 400px) {
        font-size: 14px;
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

    @media screen and (max-width: 400px) {
      font-size: 14px;
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
  margin: 4px 6px 0 0;

  @media screen and (max-width: 600px) {
    margin: 14px 6px 0 0;
  }
`;