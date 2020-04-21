import styled from 'styled-components';
import UserIcon from '../assets/icons/user.svg';
import ArrowIcon from '../assets/icons/arrow_half.svg';

export const TableWrapperStyle = styled.div`
  background-color: #fff;
  padding: 1rem;
  margin-top: 2rem;
  overflow-y: scroll;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
`;

export const StyledTable = styled.table`
  width: 100%;
  max-height: 90%;
  padding: 0 1rem;
  position: relative;
`;

export const StyledTableHeading = styled.th`
  text-align: left;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.color.fontColor};
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTd = styled.td`
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;

  &:last-child {
    border-right: 0;
  }
`;

export const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px !important;
  font-size: 14px;
  font-weight: 400;
  transition: background-color 0.3s ease;

  &:last-child {
    ${StyledTd} {
      border-bottom: 0;
    }
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.searchBar};
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
