import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import './index.css';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const Layout = ({ children }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>{children}</StyledWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
