import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled.div`
  width: 95%;
  height: 20%;
  padding: 1rem;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  margin-top: 2rem;
`;

const StudentInfoTable = ({ studentData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: 'userIcon',
        Cell: () => (
          <TableStyles.IconWrapper>
            <TableStyles.StyledUserIcon />
          </TableStyles.IconWrapper>
        )
      },
      {
        Header: 'Nr indexu',
        accessor: 'index',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Grupa',
        accessor: 'group'
      }
    ],
    []
  );

  return (
    <StyledWrapper>
      <Table data={studentData} columns={columns} />
    </StyledWrapper>
  );
};

StudentInfoTable.propTypes = {
  studentData: PropTypes.array.isRequired
};

export default StudentInfoTable;
