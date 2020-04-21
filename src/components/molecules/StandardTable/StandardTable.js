import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  display: none;
  width: 95%;
  height: 90%;
  justify-content: space-around;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StandardTable = ({ data }) => {
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
      },
      {
        Header: 'Ocena',
        accessor: 'mark'
      },
      {
        Header: 'Pkt (Wykład)',
        accessor: 'lecturePoints'
      },
      {
        Header: 'Pkt (Lab.)',
        accessor: 'homeworkPoints'
      },
      {
        Header: 'Nieobecności',
        accessor: 'absenceCounter'
      },
      {
        Header: 'Suma',
        accessor: 'allPoints',
        Cell: (e) => <TableStyles.StyledBold>{e.value}</TableStyles.StyledBold>
      },
      {
        Header: 'Szczegóły',
        id: 'redirect',
        Cell: ({ row: { values } }) => {
          return (
            <Link to={`/student/${values.index}`}>
              <TableStyles.StyledArrowIcon />
            </Link>
          );
        }
      }
    ],
    []
  );

  return (
    <StyledWrapper>
      <Table data={data} columns={columns} />
    </StyledWrapper>
  );
};

StandardTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StandardTable;
