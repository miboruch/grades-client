import React, { useContext } from 'react';
import styled from 'styled-components';
import Table from '../Table/Table';
import * as TableStyles from '../../../styles/tableStyles';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { ThemeContext } from '../../../context/ThemeContext';

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
  const { isDarkTheme } = useContext(ThemeContext);
  const columns = React.useMemo(
    () => [
      {
        Header: () => null,
        id: 'position',
        accessor: 'position',
        Cell: (e) => (
          <TableStyles.StyledPositionWrapper>
            {e.value}
            <TableStyles.IconWrapper>
              <TableStyles.StyledUserIcon />
            </TableStyles.IconWrapper>
          </TableStyles.StyledPositionWrapper>
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
            <PageTransitionProvider
              to={`/student/${values.index}`}
              index={values.index}
            >
              <TableStyles.StyledArrowIcon />
            </PageTransitionProvider>
          );
        }
      }
    ],
    []
  );

  return (
    <StyledWrapper isDarkTheme={isDarkTheme}>
      <Table data={data} columns={columns} />
    </StyledWrapper>
  );
};

StandardTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default StandardTable;
