import styled from 'styled-components';

const Switch = styled.button`
  background-color: ${({ theme }) => theme.buttonBg};
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 5px;
  cursor: pointer;
`;

export default Switch;