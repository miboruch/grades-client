import styled, { css } from 'styled-components';
import UserIcon from '../../../assets/icons/user.svg';
import ClipboardIcon from '../../../assets/icons/clipboard.svg';
import SlideShowIcon from '../../../assets/icons/slideshow.svg';
import PageIcon from '../../../assets/icons/page.svg';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : theme.color.mainGradient};
  color: #fff;
  padding-top: 7rem;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.8s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  z-index: 900;
  overflow: hidden;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      box-shadow: none;

      ${({ theme }) => theme.mq.standard} {
        -webkit-box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
        -moz-box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
        box-shadow: 4px 3px 13px 2px rgba(10, 10, 10, 1);
      }
    `}

  ${({ theme }) => theme.mq.tablet} {
    width: 70%;
  }

  ${({ theme }) => theme.mq.standard} {
    transform: translateX(0);
    position: static;
    width: 400px;
    padding-top: 4.3rem;
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
  fill: #fff;
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
  transition: all 0.4s ease;
`;

const ButtonWrapper = styled.div`
  width: 100%;

  &:hover ${StyledClipboardIcon} {
    fill: ${({ theme }) => theme.color.main};
    transition: fill 0.14s ease;
  }
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
  width: 100%;

  &:hover ${StyledSlideShowIcon} {
    fill: ${({ theme }) => theme.color.main};
    transition: all 0.14s ease;
  }
`;

const StyledPageIcon = styled(PageIcon)`
  width: 20px;
  height: 20px;
  fill: #fff;
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

const StyledPageLink = styled.a`
  color: inherit;
  width: 100%;

  &:hover ${StyledPageIcon} {
    fill: ${({ theme }) => theme.color.main};
    transition: all 0.14s ease;
  }
`;

export {
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
};
