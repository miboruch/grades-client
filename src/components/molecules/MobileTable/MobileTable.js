import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import * as TableStyles from '../../../styles/tableStyles';
import Table from '../Table/Table';
import PropTypes from 'prop-types';
import StandardTable from '../StandardTable/StandardTable';

const StyledWrapper = styled(TableStyles.TableWrapperStyle)`
  width: 100%;
  height: 90%;
  background-color: #fff;
  display: flex;
  justify-content: space-around;

  ${({ theme }) => theme.mq.standard} {
    display: none;
  }
`;

const MobileTable = ({ data }) => {
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
        Header: 'Ocena',
        accessor: 'mark'
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

MobileTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default MobileTable;
