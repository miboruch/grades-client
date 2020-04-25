import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import StudentInfoTable from '../components/molecules/StudentInfoTable/StudentInfoTable';
import StudentLabInfo from '../components/molecules/StudentLabInfo/StudentLabInfo';
import Chart from '../components/molecules/Chart/Chart';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  align-items: center;
  background-color: #fbfbfb;
  position: relative;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100% - 60px);
  }
`;

const StudentsTemplate = ({ pageContext: { student, studentData } }) => {
  return (
    <Layout
      isUserInfoPage={true}
      render={(indexNumber, isChartOpen, toggleChart) => (
        <>
          <SEO title={`Student ${student.index}`} />
          <Chart
            isOpen={isChartOpen}
            data={studentData.labs}
            toggleChart={toggleChart}
          />
          <StyledWrapper>
            <StudentInfoTable studentData={[student]} />
            <StudentLabInfo labInfo={studentData.labs} />
          </StyledWrapper>
        </>
      )}
    />
  );
};

export default StudentsTemplate;
