import styled from 'styled-components';
import ChartIcon from '../../../assets/icons/chart.svg';

const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  flex-direction: row;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.tableBackgroundDark : '#fff'};
  transition: all 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    padding: 0 3rem;
    justify-content: space-between;
    height: 120px;
  }
`;

const Wrapper = styled.div`
  margin-top: 2.5rem;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const CheckboxWrapper = styled.div`
  position: absolute;
  top: 3rem;
  right: 1.5rem;
  transform: translateY(-50%);

  ${({ theme }) => theme.mq.standard} {
    top: 50%;
    right: 3rem;
  }
`;

const StyledInfoBox = styled.div`
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  display: none;
  color: inherit;

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
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-right: 8rem;
  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? '#f1f1f1' : theme.color.main};

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
  }
`;

const StyledChatIcon = styled(ChartIcon)`
  width: 20px;
  height: 20px;
  fill: ${({ theme, isDarkTheme }) =>
    isDarkTheme ? '#fff' : theme.color.main};
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-50%);
`;

export {
  StyledHeader,
  Wrapper,
  CheckboxWrapper,
  StyledInfoBox,
  StyledSmallParagraph,
  StyledParagraph,
  StyledContentWrapper,
  StyledChatIcon
};
