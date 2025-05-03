import styled from "styled-components";

export const Button = styled.button`
  position: relative;
  background-color: transparent;
  color: ${({ theme }) => theme.text};
  padding: 6px 18px;
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
`;
