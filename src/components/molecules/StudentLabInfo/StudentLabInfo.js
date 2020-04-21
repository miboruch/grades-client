import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';

const StyledWrapper = styled.div`
  width: 95%;
  height: 70%;
  padding: 1rem;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  margin-top: 2rem;
  overflow-y: scroll;
`;

const StudentLabInfo = ({ labInfo }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Laboratorium',
        accessor: 'labs',
        Cell: ({ row: {index}, rows }) => (
          <TableStyles.StyledBold>Lab #{rows.length - index}</TableStyles.StyledBold>
        )
      },
      {
        Header: 'Data',
        accessor: 'dateOfLab'
      },
      {
        Header: 'Obecność',
        accessor: 'presence',
        Cell: (e) => (
          <TableStyles.StyledBold>
            {e.value ? 'YES' : 'NO'}
          </TableStyles.StyledBold>
        )
      },
      {
        Header: 'Punkty',
        accessor: 'points'
      }
    ],
    []
  );

  return (
    <StyledWrapper>
      <Table data={labInfo} columns={columns} />
    </StyledWrapper>
  );
};

StudentLabInfo.propTypes = {
  labInfo: PropTypes.array.isRequired
};

export default StudentLabInfo;
