import React from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

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
            <PageTransitionProvider to={`/student/${values.index}`} index={values.index}>
              <TableStyles.StyledArrowIcon />
            </PageTransitionProvider>
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
