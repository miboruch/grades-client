import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import StudentInfoTable from '../components/molecules/StudentInfoTable/StudentInfoTable';
import StudentLabInfo from '../components/molecules/StudentLabInfo/StudentLabInfo';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  align-items: center;
  background-color: #fbfbfb;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100% - 60px);
  }
`;

const StudentsTemplate = ({ pageContext: { student, studentData } }) => {
  console.log(student);
  console.log(studentData);
  return (
    <Layout
      render={(indexNumber) => (
        <>
          <SEO title={`Student ${student.index}`} />
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
