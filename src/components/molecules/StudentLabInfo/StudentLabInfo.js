import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 95%;
  height: 66%;
`;

const StudentLabInfo = ({ labInfo }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Laboratorium',
        accessor: 'labs',
        Cell: ({ row: { index }, rows }) => (
          <TableStyles.StyledBold>
            Lab #{rows.length - index}
          </TableStyles.StyledBold>
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
            {e.value ? (
              <TableStyles.StyledPresenceIcon />
            ) : (
              <TableStyles.StyledAbsenceIcon />
            )}
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
      <Table data={labInfo} columns={columns} isStudentInfoPage={true} />
    </StyledWrapper>
  );
};

StudentLabInfo.propTypes = {
  labInfo: PropTypes.array.isRequired
};

export default StudentLabInfo;
