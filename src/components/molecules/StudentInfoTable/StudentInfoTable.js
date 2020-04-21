import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
  height: 20%;
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
      <Table data={studentData} columns={columns} isStudentInfoPage={true}/>
    </StyledWrapper>
  );
};

StudentInfoTable.propTypes = {
  studentData: PropTypes.array.isRequired
};

export default StudentInfoTable;
