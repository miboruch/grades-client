import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import SearchBar from '../../atoms/SearchBar/SearchBar';
import MessageIcon from '../../../assets/icons/email.svg';
import Button from '../../atoms/Button/Button';
import ChartIcon from '../../../assets/icons/chart.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 3rem;
    justify-content: space-between;
    height: 120px;
  }
`;

const Wrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const StyledChatIcon = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  fill: #fff;
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const Header = ({ handleChange, toggleChart, isUserInfoPage }) => {
  return (
    <StyledHeader>
      {isUserInfoPage ? (
        <Wrapper>
          <Button onClick={() => toggleChart()}>
            <StyledChatIcon />
            Otwórz wykres
          </Button>
        </Wrapper>
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
    </StyledHeader>
  );
};

Header.propTypes = {
  handleChange: PropTypes.func.isRequired,
  toggleChart: PropTypes.func.isRequired,
  isUserInfoPage: PropTypes.bool
};

export default Header;
