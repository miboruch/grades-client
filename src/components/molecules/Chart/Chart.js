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
import SelectMenu from '../../atoms/SelectMenu/SelectMenu';

const ChartWrapper = styled.section`
  width: 100%;
  height: 100%;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : '#fff'};
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
  color: ${({ isDarkTheme }) => (isDarkTheme ? '#f5f5f5' : '#2d2d2d')};

  ${({ theme }) => theme.mq.standard} {
    justify-content: center;
  }
`;

const SelectWrapper = styled.div`
  position: absolute;
  top: 3.5rem;
  right: 3rem;
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 1rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 0;
  }
`;

const Chart = ({ isOpen, data, toggleChart, index }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const chartRef = useRef(null);

  const updatedData = data.map((item, iterator) => ({
    ...item,
    index: index,
    labNumber: `Lab #${data.length - iterator}`
  }));
  
  return (
    <ChartWrapper isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <SelectWrapper>
        <SelectMenu currentIndex={index} />
      </SelectWrapper>
      <StyledResponsiveContainer
        width='80%'
        height={300}
        isOpen={isOpen}
        ref={chartRef}
      >
        <AreaChart data={updatedData}>
          <defs>
            <linearGradient id='chartColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={'#29bf89'} stopOpacity={0.8} />
              <stop offset='95%' stopColor={'#184d5b'} stopOpacity={0} />
            </linearGradient>
            <linearGradient id='secondStudentColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={'#4d4d4d'} stopOpacity={0.8} />
              <stop offset='95%' stopColor={'#4d4d4d'} stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey='labNumber' stroke={isDarkTheme ? '#fff' : '#aaa'} />
          <YAxis stroke={isDarkTheme ? '#fff' : '#aaa'} />
          <CartesianGrid strokeDasharray='2 2' />
          <Tooltip
            contentStyle={{ color: '#2d2d2d', fontWeight: 'bold' }}
            itemStyle={{
              color: '#2d2d2d',
              fontSize: '12px',
              fontWeight: '500'
            }}
            viewBox={{ x: 0, y: 0, width: 250, height: 60 }}
          />
          <Legend formatter={(value) => `${index} ${value}`} />
          <Area
            type='monotone'
            dataKey='points'
            stroke={isDarkTheme ? '#f5f5f5' : '#009a93'}
            activeDot={{ r: 6 }}
            fillOpacity={1}
            fill={'url(#chartColor)'}
          />
          {/*<Area*/}
          {/*  type='monotone'*/}
          {/*  dataKey='points'*/}
          {/*  stroke={isDarkTheme ? '#f5f5f5' : '#009a93'}*/}
          {/*  activeDot={{ r: 6 }}*/}
          {/*  fillOpacity={1}*/}
          {/*  fill={'url(#secondStudentColor)'}*/}
          {/*/>*/}
        </AreaChart>
      </StyledResponsiveContainer>
    </ChartWrapper>
  );
};

Chart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  toggleChart: PropTypes.func.isRequired,
  index: PropTypes.string.isRequired
};

export default Chart;
