import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { useOutsideClick } from '../../../utils/customHooks';

const ChartWrapper = styled.section`
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  transition: opacity 0.5s ease, visibility 0.5s ease;
  justify-content: center;
  align-items: center;
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: flex;
  }
`;

const StyledResponsiveContainer = styled(ResponsiveContainer)`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
`;

const Chart = ({ isOpen, data, toggleChart }) => {
  const chartRef = useRef(null);
  const updatedData = data.map((item, index) => ({
    ...item,
    labNumber: `Lab #${data.length - index}`
  }));
  useOutsideClick(chartRef, isOpen, toggleChart);
  return (
    <ChartWrapper isOpen={isOpen}>
      <StyledResponsiveContainer
        width='80%'
        height={300}
        isOpen={isOpen}
        ref={chartRef}
      >
        <LineChart data={updatedData}>
          <XAxis dataKey='labNumber' />
          <YAxis />
          <CartesianGrid strokeDasharray='3 3' />
          <Tooltip />
          <Legend />
          <Line
            type='monotone'
            dataKey='points'
            stroke='#009a93'
            activeDot={{ r: 6 }}
          />
        </LineChart>
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
