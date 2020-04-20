import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  display: none;
  width: 95%;
  height: 90%;
  margin-top: 2rem;
  overflow-y: scroll;
  background-color: #fff;
  padding: 1rem;
  justify-content: space-around;
  border-radius: 15px;
  -webkit-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  -moz-box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);
  box-shadow: 1px 3px 13px 2px rgba(235, 228, 235, 1);

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
        accessor: 'index'
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

StandardTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StandardTable;
