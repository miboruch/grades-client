import styled, { css } from 'styled-components';
import UserIcon from '../assets/icons/user.svg';
import ArrowIcon from '../assets/icons/arrow_half.svg';
import PresenceIcon from '../assets/icons/checked.svg';
import AbsenceIcon from '../assets/icons/ban.svg';

export const TableWrapperStyle = styled.div`
  background-color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.tableBackgroundDark : '#fff'};
  padding: 1rem;
  margin-top: 2rem;
  overflow-y: scroll;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  color: #2d2d2d;
  transition: all 0.4s ease;

  ${({ isDarkTheme }) =>
    isDarkTheme &&
    css`
      -webkit-box-shadow: 1px 3px 13px 2px rgba(29, 29, 29, 1);
      -moz-box-shadow: 1px 3px 13px 2px rgba(29, 29, 29, 1);
      box-shadow: 1px 3px 13px 2px rgba(29, 29, 29, 1);
      color: #f1f1f1;
    `}
`;

export const StyledTable = styled.table`
  width: 100%;
  max-height: 90%;
  padding: 0 1rem;
  position: relative;
  font-size: 13px;

  ${({ theme }) => theme.mq.standard} {
    font-size: ${({ isStudentInfoPage }) =>
      isStudentInfoPage ? '24px' : '14px'};
  }
`;

export const StyledTableHeading = styled.th`
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.fontColor};
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  transition: all 0.4s ease;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      border-bottom: 1px solid ${theme.color.darkThemeAccents};
      border-right: 1px solid ${theme.color.darkThemeAccents};
      color: #f5f5f5;
    `}

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTd = styled.td`
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;
  transition: all 0.4s ease;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      border-bottom: 1px solid ${theme.color.darkThemeAccents};
      border-right: 1px solid ${theme.color.darkThemeAccents};
    `}

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px !important;
  font-size: inherit;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:last-child {
    ${StyledTd} {
      border-bottom: 0;
    }
  }

  &:hover {
    background-color: ${({ isDarkTheme, theme }) =>
      isDarkTheme ? theme.color.darkThemeAccents : theme.color.searchBar};
  }
`;

export const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.secondFontColor};
  border-radius: 50%;
  position: relative;
`;

export const StyledUserIcon = styled(UserIcon)`
  width: 18px;
  height: 18px;
  fill: #fff;
  position: absolute;
  padding: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledArrowIcon = styled(ArrowIcon)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  fill: ${({ theme }) => theme.color.secondFontColor};
  border: ${({ theme }) => `1px solid ${theme.color.secondFontColor}`};
  padding: 0.5rem;
  margin-left: 1rem;
`;

export const StyledBold = styled.strong`
  font-weight: 600;
`;

export const StyledPresenceIcon = styled(PresenceIcon)`
  width: 25px;
  height: 25px;
  fill: ${({ theme }) => theme.color.main};
  margin-left: 1rem;
`;

export const StyledAbsenceIcon = styled(AbsenceIcon)`
  width: 25px;
  height: 25px;
  fill: red;
  margin-left: 1rem;
`;

export const BoldGreenFont = styled.p`
  color: ${({ theme }) => theme.color.main};
  font-weight: 600;
`;

export const BoldRedFont = styled(BoldGreenFont)`
  color: #de2620;
`;

export const StyledPositionWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  font-size: 9px;
`;
