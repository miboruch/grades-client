import React, { useContext, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import GlobalStyle from '../styles/GlobalStyle';
import { theme } from '../styles/theme';
import Hamburger from './atoms/Hamburger/Hamburger';
import Slider from './molecules/Slider/Slider';
import Header from './molecules/Header/Header';
import { ThemeContext } from '../context/ThemeContext';

import './index.css';

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

const Layout = ({ render, isUserInfoPage }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isChartOpen, setChartOpen] = useState(false);
  const [indexNumber, setIndexNumber] = useState('');

  const { isDarkTheme } = useContext(ThemeContext);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const toggleChart = () => {
    setChartOpen(!isChartOpen);
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
          <Slider isOpen={isMenuOpen} isDarkTheme={isDarkTheme} />
          <ContentWrapper>
            <Header
              handleChange={handleChange}
              toggleChart={toggleChart}
              isChartOpen={isChartOpen}
              isUserInfoPage={isUserInfoPage}
            />
            {render(indexNumber, isChartOpen, toggleChart)}
          </ContentWrapper>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  render: PropTypes.func.isRequired,
  isUserInfoPage: PropTypes.bool
};

Layout.defaultProps = {
  isUserInfoPage: false
};

export default Layout;
