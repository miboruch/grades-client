import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';

const StyledButton = styled.button`
  width: 230px;
  height: 45px;
  border-radius: 10px;
  background-color: ${({ isActive, theme }) =>
    isActive ? '#fff' : theme.color.main};
  position: relative;
  font-family: 'Gilroy';
  border: none;
  color: ${({ isActive, theme }) => (isActive ? theme.color.main : '#fff')};
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 14px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  padding-left: 4rem;
  margin-bottom: 2rem;
  z-index: 7;
  -webkit-box-shadow: 4px 4px 14px 0px rgba(4, 138, 131, 1);
  -moz-box-shadow: 4px 4px 14px 0px rgba(4, 138, 131, 1);
  box-shadow: 4px 4px 14px 0px rgba(4, 138, 131, 1);
  transition: all 0.4s ease;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      background-color: ${({ isActive, theme }) =>
        isActive ? '#fff' : 'transparent'};
      color: ${({ isActive, theme }) =>
        isActive ? theme.color.mainDark : '#fff'};
      -webkit-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 1);
      -moz-box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 1);
      box-shadow: 4px 4px 14px 0px rgba(0, 0, 0, 1);
    `}

  &:focus {
    outline: none;
  }
`;

const Button = ({ children, isActive, onClick }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledButton
      isActive={isActive}
      onClick={onClick}
      isDarkTheme={isDarkTheme}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func
};

export default Button;
