import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import Button from '../../atoms/Button/Button';
import ChartIcon from '../../../assets/icons/chart.svg';
import ToggleCheckbox from '../../atoms/ToggleCheckbox/ToggleCheckbox';
import { ThemeContext } from '../../../context/ThemeContext';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.tableBackgroundDark : '#fff'};
  transition: all 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 3rem;
    justify-content: space-between;
    height: 120px;
  }
`;

const Wrapper = styled.div`
  margin-top: 2.5rem;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  transform: translateY(-50%);

  ${({ theme }) => theme.mq.standard} {
    top: 50%;
    right: 3rem;
  }
`;

const StyledInfoBox = styled.div`
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  display: none;
  color: ${({ theme }) => theme.color.fontColor};

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledParagraph = styled.p`
  font-size: 16px;
  margin: 0;
  padding: 0;
  text-align: right;
`;

const StyledSmallParagraph = styled(StyledParagraph)`
  font-size: 14px;
`;

const StyledContentWrapper = styled.section`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 8rem;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

const StyledChatIcon = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? '#fff' : theme.color.main};
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const Header = ({ handleChange, toggleChart, isUserInfoPage, isChartOpen }) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <StyledHeader isDarkTheme={isDarkTheme}>
      {isUserInfoPage ? (
        <>
          <Wrapper>
            <Button onClick={() => toggleChart()} isActive={true}>
              <StyledChatIcon isDarkTheme={isDarkTheme} />
              {isChartOpen ? 'Zamknij wykres' : 'Otwórz wykres'}
            </Button>
          </Wrapper>
        </>
      ) : (
        <SearchBar handleChange={handleChange} />
      )}
      <StyledContentWrapper>
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
