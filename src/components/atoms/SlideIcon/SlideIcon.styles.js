import styled from 'styled-components';

const StyledButton = styled.button`
  width: 30px;
  height: 30px;
  background-color: transparent;
  border: none;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 1px;
    background-color: ${({ isDarkTheme, theme }) =>
      isDarkTheme ? '#f1f1f1' : theme.color.main};
    top: ${({ isOpen }) => (isOpen ? '25%' : '50%')};
    transition: all 0.5s ease;
  }

  &::before {
    left: -6px;
    transform-origin: bottom right;
    transform: translate(-50%, -50%)
      ${({ isOpen }) => (isOpen ? 'rotate(-43deg)' : 'rotate(43deg)')};
  }

  &::after {
    left: 6px;
    transform-origin: bottom left;
    transform: translate(-50%, -50%)
      ${({ isOpen }) => (isOpen ? 'rotate(43deg)' : 'rotate(-43deg)')};
  }
`;

export { StyledButton };
