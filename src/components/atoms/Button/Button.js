import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../../../context/ThemeContext';
import { StyledButton } from './Button.styles';

const Button = ({ children, onClick, isMenu }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledButton
      onClick={onClick}
      isDarkTheme={isDarkTheme}
      isMenuButton={isMenu}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  isMenu: PropTypes.bool
};

Button.defaultProps = {
  isMenu: false
};

export default Button;
