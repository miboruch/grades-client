import React, { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
import {
  InputWrapper,
  StyledInput,
  StyledSearchIcon
} from './SearchBar.styles';

const SearchBar = ({ handleChange }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <InputWrapper isDarkTheme={isDarkTheme}>
      <StyledInput
        placeholder={'Szukaj studenta'}
        onChange={(e) => handleChange(e)}
        type={'number'}
        min={0}
      />
      <StyledSearchIcon />
    </InputWrapper>
  );
};

export default SearchBar;
