import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const StudentInfoTable = ({ studentData }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Nr indexu',
        accessor: 'index',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Grupa',
        accessor: 'group'
      },
      {
        Header: 'Ocena',
        accessor: 'mark'
      },
      {
        Header: 'Suma',
        accessor: 'allPoints',
        Cell: (e) => (
          <TableStyles.StyledBold>{e.value} pkt</TableStyles.StyledBold>
        )
      }
    ],
    []
  );

  return (
    <StyledWrapper>
      <Table data={studentData} columns={columns} isStudentInfoPage={true} />
    </StyledWrapper>
  );
};

StudentInfoTable.propTypes = {
  studentData: PropTypes.array.isRequired
};

export default StudentInfoTable;
