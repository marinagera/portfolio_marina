import styled from "styled-components";
import { LayoutWrapper } from '../layout/LayoutStyled';

export const LayoutWrapperProjects = styled(LayoutWrapper)`
  /* margin-top: -74px; */
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
  padding: 60px;
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
  padding: 60px 0;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  height: min-content;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ProjectCard = styled.div`
  background: ${({ theme }) => theme.background};
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const MediaContainer = styled.div`
  position: relative;
  width: 100%;
  height: 420px;
  overflow: hidden;
  `;

export const ProjectImage = styled.img`
  width: 100%;
  height: 420px;
  object-fit: cover;
`;

export const ProjectVideo = styled.video`
  width: 100%; 
  height: 420px;
  object-fit: cover;
`;

export const ProjectTitle = styled.h2`
  font-size: 1.3rem;
  margin: 16px;
`;

export const ProjectDescription = styled.p`
  font-size: 0.9rem;
  margin: 16px;
  line-height: 1.3;
  color: ${({ theme }) => theme.greyText};
`;

export const ProjectTechnologies = styled.div`
  margin: 8px 16px;
  font-size: 0.9rem;
  font-style: italic;
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