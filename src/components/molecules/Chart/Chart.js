import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
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

const StyledParagraph = styled.p`
  width: 100%;
  text-align: center;
  color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? '#ccc' : theme.color.main};
  position: absolute;
  left: 50%;
  bottom: 50px;
  margin: 0;
  transform: translate(-50%, -50%);
  font-size: 14px;
  letter-spacing: 1px;
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  padding-left: 1rem;

  ${({ theme }) => theme.mq.standard} {
    padding-left: 0;
  }
`;

const Chart = ({ isOpen, data, index }) => {
  const { isDarkTheme } = useContext(ThemeContext);
  const chartRef = useRef(null);
  const [compareIndex, setCompareIndex] = useState(null);
  const [updatedData, setUpdatedData] = useState([]);

  useEffect(() => {
    if (compareIndex) {
      (async () => {
        const result = await axios.get(
          `http://tomaszgadek.com/api/students/${compareIndex}`
        );
        setUpdatedData(
          data.map((item, iterator) => ({
            ...item,
            index: index,
            index2: result.data.index,
            labNumber: `Lab #${data.length - iterator}`,
            points2: result.data.labs[iterator].points
          }))
        );
      })();
    }
  }, [compareIndex]);

  useEffect(() => {
    setUpdatedData(
      data.map((item, iterator) => ({
        ...item,
        index: index,
        labNumber: `Lab #${data.length - iterator}`
      }))
    );
  }, []);

  const renderColorfulLegend = (entry) => {
    const {
      color,
      payload: { index }
    } = entry;

    return <span style={{ color }}>{index} points</span>;
  };

  return (
    <ChartWrapper isOpen={isOpen} isDarkTheme={isDarkTheme}>
      <SelectWrapper>
        <SelectMenu currentIndex={index} setCompareIndex={setCompareIndex} />
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
              <stop offset='95%' stopColor={'#29bf89'} stopOpacity={0} />
            </linearGradient>
            <linearGradient id='secondStudentColor' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='5%' stopColor={'#184d5b'} stopOpacity={0.8} />
              <stop offset='95%' stopColor={'#184d5b'} stopOpacity={0} />
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
          <Legend
            formatter={(value, entry) => renderColorfulLegend(entry)}
            iconType={'plainline'}
            iconSize={18}
          />
          <Area
            type='monotone'
            dataKey='points'
            index={index}
            stroke={isDarkTheme ? '#39af79' : '#009a93'}
            activeDot={{ r: 6 }}
            fillOpacity={1}
            fill={'url(#chartColor)'}
          />
          {compareIndex && (
            <Area
              type='monotone'
              dataKey='points2'
              index={compareIndex}
              stroke={'#184d5b'}
              activeDot={{ r: 6 }}
              fillOpacity={1}
              fill={'url(#secondStudentColor)'}
            />
          )}
        </AreaChart>
      </StyledResponsiveContainer>
      <StyledParagraph isDarkTheme={isDarkTheme}>
        {compareIndex && `Porównujesz punkty ${index} oraz ${compareIndex}`}
      </StyledParagraph>
    </ChartWrapper>
  );
};

Chart.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  data: PropTypes.array.isRequired,
  index: PropTypes.string.isRequired
};

export default Chart;
