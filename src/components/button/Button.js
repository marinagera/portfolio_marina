import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 0.75rem 2rem;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  border: 1.5px solid  ${({ theme }) => theme.mainColor};
  border-radius: 6px;
  overflow: hidden;
  transition: all 0.1s ease;

  &:hover {
    color: ${({ theme }) => theme.text};
    background: var(--button-hover);
    transition: all 0.1s ease;
  }

  @media screen and (max-width: 640px) {
    padding: 0.5rem 1.5rem;
  }

  @media screen and (max-width: 440px) {
    padding: 0.5rem 1rem;
  }
`;
