import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import UserIcon from '../../../assets/icons/user.svg';
import ArrowIcon from '../../../assets/icons/arrow_half.svg';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  width: 100%;
  height: 90%;
  padding: 1rem;
  display: flex;
  margin-top: 2rem;
  justify-content: space-around;
  overflow-y: scroll;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
`;

const StyledTable = styled.table`
  width: 100%;
  height: 90%;
  padding: 1rem;
  position: relative;
`;

const StyledTableHeading = styled.th`
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

const StyledTd = styled.td`
  border-bottom: 1px solid #f4f4f4;
  border-right: 1px solid #f4f4f4;

  &:last-child {
    border-right: 0;
  }
`;

const StyledTableRow = styled.tr`
  width: 100%;
  height: 60px;
  font-size: 14px;
  font-weight: 400;

  &:last-child {
    ${StyledTd} {
      border-bottom: 0;
    }
  }
`;

const IconWrapper = styled.div`
  width: 30px;
  height: 30px;
  background-color: ${({ theme }) => theme.color.secondFontColor};
  border-radius: 50%;
  position: relative;
`;

const StyledUserIcon = styled(UserIcon)`
  width: 18px;
  height: 18px;
  fill: #fff;
  position: absolute;
  padding: 2px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledArrowIcon = styled(ArrowIcon)`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  fill: ${({ theme }) => theme.color.secondFontColor};
  border: ${({ theme }) => `1px solid ${theme.color.secondFontColor}`};
  padding: 0.5rem;
`;

const MobileTable = ({ data }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: 'userIcon',
        Cell: () => (
          <IconWrapper>
            <StyledUserIcon />
          </IconWrapper>
        )
      },
      {
        Header: 'Nr indexu',
        accessor: 'index'
      },
      {
        Header: 'Ocena',
        accessor: 'mark'
      },
      {
        Header: 'Suma',
        accessor: 'allPoints'
      },
      {
        Header: 'Szczegóły',
        id: 'redirect',
        Cell: ({ row: { values } }) => {
          return (
            <Link to={`/student/${values.index}`}>
              <StyledArrowIcon />
            </Link>
          );
        }
      }
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({
    columns,
    data
  });

  return (
    <StyledWrapper>
      <StyledTable {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <StyledTableRow {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <StyledTableHeading {...column.getHeaderProps()}>
                  {column.render('Header')}
                </StyledTableHeading>
              ))}
            </StyledTableRow>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row, i) => {
            prepareRow(row);
            return (
              <>
                <StyledTableRow {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <StyledTd {...cell.getCellProps()}>
                        {cell.render('Cell')}
                      </StyledTd>
                    );
                  })}
                </StyledTableRow>
              </>
            );
          })}
        </tbody>
      </StyledTable>
    </StyledWrapper>
  );
};

export default MobileTable;
