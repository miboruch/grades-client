import React, { useContext } from 'react';
import * as TableStyles from '../../../styles/tableStyles';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';
import { ThemeContext } from '../../../context/ThemeContext';

const Table = ({ data, columns, isStudentInfoPage }) => {
  const { isDarkTheme } = useContext(ThemeContext);
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
    <TableStyles.StyledTable
      isStudentInfoPage={isStudentInfoPage}
      {...getTableProps()}
    >
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableStyles.StyledTableRow
            {...headerGroup.getHeaderGroupProps()}
            isDarkTheme={isDarkTheme}
          >
            {headerGroup.headers.map((column) => (
              <TableStyles.StyledTableHeading
                {...column.getHeaderProps()}
                isDarkTheme={isDarkTheme}
              >
                {column.render('Header')}
              </TableStyles.StyledTableHeading>
            ))}
          </TableStyles.StyledTableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, index) => {
          prepareRow(row);
          return (
            <>
              <TableStyles.StyledTableRow
                {...row.getRowProps()}
                isDarkTheme={isDarkTheme}
              >
                {row.cells.map((cell) => {
                  return (
                    <TableStyles.StyledTd
                      {...cell.getCellProps()}
                      isDarkTheme={isDarkTheme}
                    >
                      {cell.render('Cell')}
                    </TableStyles.StyledTd>
                  );
                })}
              </TableStyles.StyledTableRow>
            </>
          );
        })}
      </tbody>
    </TableStyles.StyledTable>
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.any.isRequired,
  isStudentInfoPage: PropTypes.bool
};

Table.defaultProps = {
  isStudentInfoPage: false
};

export default Table;
