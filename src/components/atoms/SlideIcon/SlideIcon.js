import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';
import { StyledButton } from './SlideIcon.styles';

const SlideIcon = ({ isOpen }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return <StyledButton isOpen={isOpen} isDarkTheme={isDarkTheme} />;
};

SlideIcon.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default SlideIcon;
