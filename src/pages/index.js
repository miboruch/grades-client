import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { API_URL } from '../utils/helpers';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import SearchBar from '../components/atoms/SearchBar/SearchBar';
import Spinner from '../components/atoms/Spinner/Spinner';
import MobileTable from '../components/molecules/MobileTable/MobileTable';
import StandardTable from '../components/molecules/StandardTable/StandardTable';
import Header from '../components/molecules/Header/Header';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  align-items: center;
  background-color: #fbfbfb;
  border-bottom: 1px solid ${({ theme }) => theme.color.secondFontColor};
  position: relative;
`;

const IndexPage = () => {
  const [students, setStudents] = useState(null);
  const [indexNumber, setIndexNumber] = useState('');

  const fetchData = async () => {
    const { data } = await axios.get(API_URL);
    setStudents(data);
  };

  useEffect(() => {
    (async () => {
      await fetchData();
    })();
  }, []);

  const handleChange = (event) => {
    setIndexNumber(event.target.value);
  };

  return (
    <Layout>
      <SEO title='Main page' />
      <StyledWrapper>
        {students ? (
          <>
            <Header handleChange={handleChange} />
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
    </Layout>
  );
};

export default IndexPage;
