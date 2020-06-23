import styled from 'styled-components';
import { ResponsiveContainer } from 'recharts';

const ChartWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : '#fff'};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#f5f5f5' : '#2d2d2d')};

  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
  }
`;

const SelectWrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
`;

const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? '#ccc' : theme.color.main};
  position: absolute;
  left: 50%;
  bottom: 50px;
  margin: 0;
  transform: translate(-50%, -50%);
  font-size: 14px;
  letter-spacing: 1px;
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 1rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 0;
  }
`;

export {
  ChartWrapper,
  SelectWrapper,
  StyledParagraph,
  StyledResponsiveContainer
};
