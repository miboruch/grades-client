import React, { useContext, useRef } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import UserIcon from '../../../assets/icons/user.svg';
import Button from '../../atoms/Button/Button';
import ClipboardIcon from '../../../assets/icons/clipboard.svg';
import SlideShowIcon from '../../../assets/icons/slideshow.svg';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { ThemeContext } from '../../../context/ThemeContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : theme.color.mainGradient};
  color: #fff;
  padding: 7rem 1rem 1rem 1rem;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.8s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 900;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      -webkit-box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
      -moz-box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
      box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.standard} {
    transform: translateX(0);
    position: static;
    width: 400px;
    padding: 4.3rem 1rem 1rem 1rem;
  }
`;

const StyledHeading = styled.h1`
  letter-spacing: 2px;
  font-size: 18px;
  text-transform: uppercase;
  text-align: center;

  ${({ theme }) => theme.mq.standard} {
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid
    ${({ theme, isDarkTheme }) =>
      isDarkTheme ? '#ccc' : theme.color.fontColor};
  position: relative;
  margin-top: 2rem;
`;

const StyledUserIcon = styled(UserIcon)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.color.main};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledNameHeading = styled(StyledHeading)`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.standard} {
    font-size: 18px;
  }
`;

const StyledDescriptionParagraph = styled.p`
  font-size: 13px;
  margin-top: 0.5rem;
  margin-bottom: 3rem;

  ${({ theme }) => theme.mq.standard} {
    font-size: 15px;
  }
`;

const StyledClipboardIcon = styled(ClipboardIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme }) => theme.color.main};
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const StyledSlideShowIcon = styled(SlideShowIcon)`
  width: 20px;
  height: 20px;
  fill: #fff;
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const StyledLink = styled.a`
  text-transform: none;
  color: inherit;
`;

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
      <PageTransitionProvider to={'/'} index={''}>
        <Button isActive={true} isDarkTheme={isDarkTheme}>
          <StyledClipboardIcon />
          Lista studentów
        </Button>
      </PageTransitionProvider>
      <StyledLink
        href={
          'https://drive.google.com/drive/folders/1aMv62b4TQYrD8ydSy2DDYXSPglc0YZKm'
        }
        rel={'noopener noreferrer'}
        target={'_blank'}
      >
        <Button isActive={false}>
          <StyledSlideShowIcon />
          Laboratoria
        </Button>
      </StyledLink>
    </StyledWrapper>
  );
};

Slider.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  isDarkTheme: PropTypes.bool
};

Slider.defaultProps = {
  isDarkTheme: false
};

export default Slider;
