import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import * as TableStyles from '../../../styles/tableStyles';
import Table from '../Table/Table';
import PropTypes from 'prop-types';
import StandardTable from '../StandardTable/StandardTable';

const StyledWrapper = styled.div`
  width: 100%;
  height: 90%;
  margin-top: 2rem;
  overflow-y: scroll;
  background-color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);

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
        accessor: 'index'
      },
      {
        Header: 'Ocena',
        accessor: 'mark'
      },
      {
        Header: 'Suma',
        accessor: 'allPoints'
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