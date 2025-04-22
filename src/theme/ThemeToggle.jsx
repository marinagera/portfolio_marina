import React from "react";
import styled from 'styled-components';

const ToggleWrapper = styled.div`
  align-self: center;
  margin-right: 20px;
  z-index: 100;
`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #4f4f4f;
  }

  &:checked + span:before {
    transform: translateX(26px);
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
    height: 20px; 
    width: 20px;
    left: 2px; 
    bottom: 2px;
    background-color: #fafafa;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const ThemeToggle = ({ isDarkMode, toggleTheme }) => {
  return(
    <ToggleWrapper>
      <SwitchLabel>
        <SwitchInput type="checkbox" checked={isDarkMode} onChange={toggleTheme} />
        <Slider />
      </SwitchLabel>
    </ToggleWrapper>
  )
};

export default ThemeToggle;