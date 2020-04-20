import React from 'react';
import styled from 'styled-components';
import * as TableStyles from '../../../styles/tableStyles';
import PropTypes from 'prop-types';
import { useTable } from 'react-table';

const Table = ({ data, columns }) => {
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
    <TableStyles.StyledTable {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <TableStyles.StyledTableRow {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <TableStyles.StyledTableHeading {...column.getHeaderProps()}>
                {column.render('Header')}
              </TableStyles.StyledTableHeading>
            ))}
          </TableStyles.StyledTableRow>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <>
              <TableStyles.StyledTableRow {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <TableStyles.StyledTd {...cell.getCellProps()}>
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
  columns: PropTypes.any.isRequired
};

export default Table;
