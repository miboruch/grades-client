import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
`;

const MarkCell = styled.td`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const StyledSmallParagraph = styled.p`
  font-size: 8px;
  padding-left: 1rem;
  
  ${({theme}) => theme.mq.standard}{
    font-size: 10px;
  }
`;

const StudentInfoTable = ({ studentData, nextMark, nextMarkPoints }) => {
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
        accessor: 'mark',
        Cell: (e) => (
          <MarkCell>
            {e.value}
            <StyledSmallParagraph>
              {nextMarkPoints} pkt do {nextMark}
            </StyledSmallParagraph>
          </MarkCell>
        )
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
  studentData: PropTypes.array.isRequired,
  nextMark: PropTypes.number,
  nextMarkPoints: PropTypes.number
};

export default StudentInfoTable;
