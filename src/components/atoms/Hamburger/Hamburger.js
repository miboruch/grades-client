import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';
import { StyledHamburger, InnerHamburger } from './Hamburger.styles';

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
