import React, { useContext, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useOutsideClick } from '../../../utils/customHooks';
import { ThemeContext } from '../../../context/ThemeContext';

const ChartWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : 'rgba(255, 255, 255, 0.9)'};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  //color: ${({ isDarkTheme }) => (isDarkTheme ? '#f5f5f5' : '#2d2d2d')};

  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
  }
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 1rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 0;
  }
`;

const Chart = ({ isOpen, data, toggleChart }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const chartRef = useRef(null);
  const updatedData = data.map((item, index) => ({
    ...item,
    labNumber: `Lab #${data.length - index}`
  }));
  useOutsideClick(chartRef, isOpen, toggleChart);
  return (
    <ChartWrapper isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <StyledResponsiveContainer
        width='80%'
        height={300}
        isOpen={isOpen}
        ref={chartRef}
      >
        <AreaChart data={updatedData}>
          <defs>
            <linearGradient id='chartColor' x1='0' y1='0' x2='0' y2='1'>
              <stop
                offset='5%'
                stopColor={isDarkTheme ? '#27293d' : '#07886F'}
                stopOpacity={0.8}
              />
              <stop
                offset='95%'
                stopColor={isDarkTheme ? '#27293d' : '#07886F'}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <XAxis dataKey='labNumber' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Area
            type='monotone'
            dataKey='points'
            stroke={isDarkTheme ? '#f5f5f5' : '#009a93'}
            activeDot={{ r: 6 }}
            fillOpacity={1}
            fill={'url(#chartColor)'}
          />
        </AreaChart>
      </StyledResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  toggleChart: PropTypes.func.isRequired
};

export default Chart;
