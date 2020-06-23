import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button/Button';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { ThemeContext } from '../../../context/ThemeContext';
import {
  StyledWrapper,
  StyledHeading,
  IconWrapper,
  StyledUserIcon,
  StyledNameHeading,
  StyledDescriptionParagraph,
  StyledClipboardIcon,
  ButtonWrapper,
  StyledSlideShowIcon,
  StyledLink,
  StyledPageIcon,
  StyledPageLink
} from './Slider.styles';

const Slider = ({ isOpen }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledWrapper isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <PageTransitionProvider to={'/'} index={''}>
        <StyledHeading>Testowanie i jakość oprogramowania</StyledHeading>
      </PageTransitionProvider>
      <IconWrapper isDarkTheme={isDarkTheme}>
        <StyledUserIcon />
      </IconWrapper>
      <StyledNameHeading>Tomasz Gądek</StyledNameHeading>
      <StyledDescriptionParagraph>Java specialist</StyledDescriptionParagraph>
      <ButtonWrapper>
        <PageTransitionProvider to={'/'} index={''}>
          <Button isDarkTheme={isDarkTheme} isMenu={true}>
            <StyledClipboardIcon />
            Lista studentów
          </Button>
        </PageTransitionProvider>
      </ButtonWrapper>
      <StyledLink
        href={
          'https://drive.google.com/drive/folders/1aMv62b4TQYrD8ydSy2DDYXSPglc0YZKm'
        }
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        <Button isMenu={true}>
          <StyledSlideShowIcon />
          Laboratoria
        </Button>
      </StyledLink>
      <StyledPageLink
        href={'http://www.tomaszgadek.com/index.html'}
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        <Button isMenu={true}>
          <StyledPageIcon />
          Strona internetowa
        </Button>
      </StyledPageLink>
    </StyledWrapper>
  );
};

Slider.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

Slider.defaultProps = {
  isDarkTheme: false
};

export default Slider;
