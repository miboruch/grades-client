import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';

const StyledHamburger = styled.button`
  cursor: pointer;
  width: 70px;
  height: 60px;
  background: transparent;
  border: none;
  z-index: 901;
  position: absolute;
  top: 3rem;
  left: 1.5rem;
  transform: translateY(-50%);

  :focus {
    outline: none;
  }

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const InnerHamburger = styled.div`
  position: relative;
  ${({ isOpen }) =>
    isOpen &&
    css`
      background: transparent;
    `}
  &::before,
  &::after {
    content: '';
    height: 1px;
    background-color: ${({ isDarkTheme, theme }) =>
      isDarkTheme ? '#fff' : theme.color.main};
    position: absolute;
    left: 0;
    transition: all 0.5s ease;

    ${({ isOpen }) =>
      isOpen &&
      css`
        background-color: #fff;
      `}
  }
  ::before {
    width: ${({ isOpen }) => (isOpen ? '32px' : '26px')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '40deg' : '0deg')});
  }
  ::after {
    width: 32px;
    top: ${({ isOpen }) => (isOpen ? '0' : '2px')};
    transform: rotate(${({ isOpen }) => (isOpen ? '-40deg' : '0deg')});
  }

  ${StyledHamburger}:hover & {
    background: transparent;
    &::before {
      top: 0;
    }
    &::after {
      top: 0;
    }
  }
`;

const Hamburger = ({ isOpen, toggle }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledHamburger onClick={() => toggle()}>
      <InnerHamburger isOpen={isOpen} isDarkTheme={isDarkTheme} />
    </StyledHamburger>
  );
};

Hamburger.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

export default Hamburger;
