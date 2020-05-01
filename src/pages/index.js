import React, { useContext } from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Spinner from '../components/atoms/Spinner/Spinner';
import MobileTable from '../components/molecules/MobileTable/MobileTable';
import StandardTable from '../components/molecules/StandardTable/StandardTable';
import { ThemeContext } from '../context/ThemeContext';

const StyledWrapper = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  align-items: center;
  background: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.mainDarkGradient : '#fbfbfb'};
  transition: all 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100% - 60px);
  }
`;

const IndexPage = ({
  data: {
    students: { data }
  }
}) => {
  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <Layout
      render={(indexNumber) => (
        <>
          <SEO title='Main page' />
          <StyledWrapper isDarkTheme={isDarkTheme}>
            {data ? (
              <>
                <MobileTable
                  data={data.filter((student) =>
                    student.index.includes(indexNumber)
                  )}
                />
                <StandardTable
                  data={data.filter((student) =>
                    student.index.includes(indexNumber)
                  )}
                />
              </>
            ) : (
              <Spinner />
            )}
          </StyledWrapper>
        </>
      )}
    />
  );
};

export const query = graphql`
  query {
    students {
      data {
        index
        mark
        group
        lecturePoints
        homeworkPoints
        presenceCounter
        absenceCounter
        allPoints
        position
      }
    }
  }
`;

export default IndexPage;
