import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledButton = styled.button`
  width: 210px;
  height: 40px;
  border-radius: 10px;
  background-color: ${({ isActive }) => (isActive ? '#fff' : 'transparent')};
  position: relative;
  font-family: 'Gilroy';
  border: none;
  color: ${({ isActive, theme }) => (isActive ? theme.color.main : '#fff')};
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 1px;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;

  &:focus {
    outline: none;
  }

  &:hover {
    color: ${({ theme }) => theme.color.main};
    transition: color 0.14s ease;
  }

  &::before {
    position: absolute;
    content: '';
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background-color: #fff;
    transition: all 0.25s ease;
    z-index: -1;
  }
  &:hover::before {
    height: 100%;
    transition: all 0.25s ease;
  }
`;

const Button = ({ children, isActive }) => {
  return <StyledButton isActive={true}>{children}</StyledButton>;
};

Button.propTypes = {
  children: PropTypes.node.isRequired
};

export default Button;
