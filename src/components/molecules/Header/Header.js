import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import Button from '../../atoms/Button/Button';
import ToggleCheckbox from '../../atoms/ToggleCheckbox/ToggleCheckbox';
import { ThemeContext } from '../../../context/ThemeContext';
import {
  StyledHeader,
  Wrapper,
  CheckboxWrapper,
  StyledInfoBox,
  StyledSmallParagraph,
  StyledParagraph,
  StyledContentWrapper,
  StyledChatIcon
} from 'Header.styles';

const Header = ({ handleChange, toggleChart, isUserInfoPage, isChartOpen }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader isDarkTheme={isDarkTheme}>
      {isUserInfoPage ? (
        <>
          <Wrapper>
            <Button onClick={() => toggleChart()}>
              <StyledChatIcon isDarkTheme={isDarkTheme} />
              {isChartOpen ? 'Zamknij wykres' : 'Otwórz wykres'}
            </Button>
          </Wrapper>
        </>
      ) : (
        <SearchBar handleChange={handleChange} />
      )}
      <StyledContentWrapper isDarkTheme={isDarkTheme}>
        <StyledInfoBox>
          <StyledParagraph>
            Państwowa Wyższa Szkoła Zawodowa w Tarnowie
          </StyledParagraph>
          <StyledSmallParagraph>
            Testowanie i jakość oprogramowania, 2020
          </StyledSmallParagraph>
        </StyledInfoBox>
      </StyledContentWrapper>
      <CheckboxWrapper>
        <ToggleCheckbox isChecked={isDarkTheme} toggleFunction={toggleTheme} />
      </CheckboxWrapper>
    </StyledHeader>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  toggleChart: PropTypes.func.isRequired,
  isUserInfoPage: PropTypes.bool,
  isChartOpen: PropTypes.bool
};

export default Header;
