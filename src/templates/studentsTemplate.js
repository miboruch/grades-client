import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import StudentInfoTable from '../components/molecules/StudentInfoTable/StudentInfoTable';
import StudentLabInfo from '../components/molecules/StudentLabInfo/StudentLabInfo';
import Chart from '../components/molecules/Chart/Chart';
import { getLastStudentFromNextMark } from '../utils/helpers';

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

const StyledSmallInfo = styled.div`
  width: 95%;
  margin-top: 2rem;
  padding: 0 2rem;
`;

const StyledParagraph = styled.p`
  letter-spacing: 1px;
  font-size: 12px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.fontColor};
  margin: 0;
  padding: 0;
`;

const StudentsTemplate = ({
  pageContext: { student, studentData, nextGradeStudents }
}) => {
  const { mark, allPoints } = getLastStudentFromNextMark(nextGradeStudents);
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
            <StyledSmallInfo>
              {student.mark !== 5 && (
                <StyledParagraph>
                  Do oceny {mark} brakuje {allPoints - student.allPoints} pkt
                </StyledParagraph>
              )}
            </StyledSmallInfo>
            <StudentInfoTable studentData={[student]} />
            <StudentLabInfo labInfo={studentData.labs} />
          </StyledWrapper>
        </>
      )}
    />
  );
};

export default StudentsTemplate;
