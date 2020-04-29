import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { API_URL } from '../utils/helpers';

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
  background-color: ${({ isDarkTheme, theme }) =>
    isDarkTheme ? theme.color.backgroundDark : '#fbfbfb'};
  transition: background-color 0.4s ease;

  ${({ theme }) => theme.mq.standard} {
    height: calc(100% - 60px);
  }
`;

const IndexPage = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  const [students, setStudents] = useState(null);

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    const students = data.map((student, index) => {
      return { ...student, position: ++index };
    });
    setStudents(students);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  return (
    <Layout
      render={(indexNumber) => (
        <>
          <SEO title='Main page' />
          <StyledWrapper isDarkTheme={isDarkTheme}>
            {students ? (
              <>
                <MobileTable
                  data={students.filter((student) =>
                    student.index.includes(indexNumber)
                  )}
                />
                <StandardTable
                  data={students.filter((student) =>
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

export default IndexPage;
