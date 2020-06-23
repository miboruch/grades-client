import styled, { css } from 'styled-components';
import Button from '../Button/Button';

const StyledWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  margin: 0;
  position: relative;

  ${({ isDarkTheme }) =>
    !isDarkTheme &&
    css`
      background-color: #fff;
    `}
`;

const MenuList = styled.ul`
  width: 100%;
  height: 500px;
  color: ${({ theme }) => theme.color.main};
  border: 1px solid #ccc;
  transition: all 0.4s ease;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  font-family: 'Gilroy';
  list-style-type: none;
  flex-direction: column;
  padding: 0;
  z-index: 9;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      color: #fff;
      border: 1px solid ${theme.color.darkThemeAccents};
    `}
`;

const SingleMenuItem = styled.li`
  width: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.color.main};
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid #ccc;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      background: #1d1d1d;
      color: #fff;
      border: 1px solid ${theme.color.darkThemeAccents};
    `}

  &:hover {
    background: ${({ theme }) => theme.color.mainGradient};
    color: #fff;
  }

  &:first-of-type {
    border-top: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-40%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export { StyledWrapper, StyledButton, MenuList, SingleMenuItem, IconWrapper };
