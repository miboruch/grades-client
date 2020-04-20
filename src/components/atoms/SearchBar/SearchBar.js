import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../../../assets/icons/loupe.svg';

const InputWrapper = styled.div`
  width: 250px;
  height: 40px;
  background-color: ${({ theme }) => theme.color.searchBar};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 10px;
  
  ${({theme}) => theme.mq.standard}{
    width: 450px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  padding-left: 2rem;
  font-size: 14px;
  color: ${({ theme }) => theme.color.fontColor};
  font-family: 'Gilroy';

  &::placeholder {
    font-size: 15px;
    position: absolute;
    color: #c9c9c9;
  }

  &:focus {
    outline: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  fill: #c9c9c9;
  right: 2rem;
  padding-right: 2rem;
  box-sizing: content-box;
`;

const SearchBar = ({ onChange }) => {
  return (
    <InputWrapper>
      <StyledInput placeholder={'Szukaj studenta'} />
      <StyledSearchIcon />
    </InputWrapper>
  );
};

export default SearchBar;
