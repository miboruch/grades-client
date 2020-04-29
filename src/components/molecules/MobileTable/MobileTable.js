import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import * as TableStyles from '../../../styles/tableStyles';
import Table from '../Table/Table';
import PropTypes from 'prop-types';
import StandardTable from '../StandardTable/StandardTable';
import PageTransitionProvider from '../../../providers/PageTransitionProvider';
import { ThemeContext } from '../../../context/ThemeContext';

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
  const {isDarkTheme} = useContext(ThemeContext);
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
      <Table data={data} columns={columns}/>
    </StyledWrapper>
  );
};

MobileTable.propTypes = {
  data: PropTypes.array.isRequired
};

export default MobileTable;
