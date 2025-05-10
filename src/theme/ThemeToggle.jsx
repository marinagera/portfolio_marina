import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.4s ease-in-out;
  overflow: hidden;
  z-index: 100;
`;

const ToggleWrapper = styled.div`
  align-self: center;
  margin-right: 8px;
  z-index: 100;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 42px;
  height: 18px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4f4f4f;
  }

  &:checked + span:before {
    transform: translateX(22px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0; left: 0;
  right: 0; bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 16px; 
    width: 16px;
    left: 1px; 
    bottom: 1px;
    background-color: #fafafa;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ThemedIcon = styled.div`
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.5s ease-in-out;
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return(
    <ToggleContainer>
      <ToggleWrapper>
        <SwitchLabel>
          <SwitchInput type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
          <Slider />
        </SwitchLabel>
      </ToggleWrapper>
      <ThemedIcon>
        {isDarkMode ? <FiMoon /> : <FiSun />}
      </ThemedIcon>
    </ToggleContainer>
  )
};

export default ThemeToggle;