import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import './index.css';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Hamburger from './atoms/Hamburger/Hamburger';
import Slider from './molecules/Slider/Slider';
import Header from './molecules/Header/Header';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Layout = ({ render }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [indexNumber, setIndexNumber] = useState('');

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleChange = (event) => {
    setIndexNumber(event.target.value);
  };

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <Hamburger isOpen={isMenuOpen} toggle={toggleMenu} />
          <Slider isOpen={isMenuOpen} />
          <ContentWrapper>
            <Header handleChange={handleChange} />
            {render(indexNumber)}
          </ContentWrapper>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  render: PropTypes.func.isRequired
};

export default Layout;
