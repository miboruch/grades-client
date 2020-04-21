import React from 'react';
import styled from 'styled-components';
import SearchBar from '../../atoms/SearchBar/SearchBar';

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

const Header = ({handleChange}) => {
  return (
    <StyledHeader>
      <SearchBar handleChange={handleChange}/>
      <StyledInfoBox>
        <StyledParagraph>
          Państwowa Wyższa Szkoła Zawodowa w Tarnowie
        </StyledParagraph>
        <StyledSmallParagraph>
          Testowanie i jakość oprogramowania, 2019/2020
        </StyledSmallParagraph>
      </StyledInfoBox>
    </StyledHeader>
  );
};

export default Header;
