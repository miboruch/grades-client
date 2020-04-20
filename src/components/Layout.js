import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import './index.css';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Hamburger from './atoms/Hamburger/Hamburger';
import Slider from './molecules/Slider/Slider';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
          <Slider isOpen={isMenuOpen} />
          {children}
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
