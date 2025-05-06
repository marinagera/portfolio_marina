import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 60px 80px;

  @media screen and (max-width: 992px) {
    padding: 60px 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 60px 20px;
  }
`;

export const ProjectsTitle = styled.h1`
  font-size: 2.5rem;
  margin: 40px 0;
  font-weight: 500;
  text-align: left;
  color: ${({ theme }) => theme.text};
`;

export const ProjectsDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.greyText};
`;

export const CardsWrapper = styled.div`
  padding-top: 60px;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  grid-row-gap: 50px;
  height: min-content;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
    grid-row-gap: 30px;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    cursor: pointer;
  }
`;

export const MediaContainer = styled.div`
  position: relative;
  width: 100%;

  img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    transition: transform 0.7s ease;

    @media screen and (max-width: 600px) {
      width: auto;
      height: 100%;
      max-height: 250px;
      object-fit: contain;
    }
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

export const ProjectVideo = styled.video`
  width: 100%; 
  height: 420px;
  object-fit: cover;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 16px;

  @media screen and (max-width: 600px) {
    font-size: 1.2rem;
    margin-top: 30px;
  }
`;

export const ProjectDescription = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  margin: 16px;
  line-height: 1.3;
  color: ${({ theme }) => theme.greyText};

  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

export const ProjectTechnologies = styled.div`
  margin: 8px 16px 30px;
  font-size: 1rem;
`;

export const ProjectLink = styled.a`
  display: inline-block;
  margin: 8px 16px 16px;
  padding: 8px 16px;
  background: linear-gradient(222deg, #833AB4, #fd6262 );
  color: #fff;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background 0.3s;

  &:hover {
    background: linear-gradient(222deg,  #fd6262, #833AB4);
  }
`;

export const ContactSectionWrapper = styled.div`
  padding: 0 80px;

  @media screen and (max-width: 992px) {
    padding: 0 40px;
  }

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
`;

export const CardLink = styled.a`
  display: block;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`;
