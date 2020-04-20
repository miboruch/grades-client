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

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 4rem 1rem;
`;

const IndexPage = () => {
  const [students, setStudents] = useState(null);
  useEffect(async () => {
    const { data } = await axios.get(API_URL);
    setStudents(data);
  }, []);

  return (
    <Layout>
      <SEO title='Main page' />
      <StyledWrapper>
        {students ? (
          <>
            <SearchBar />
            <MobileTable data={students} />
          </>
        ) : (
          <Spinner />
        )}
      </StyledWrapper>
    </Layout>
  );
};

// {students ? <SearchBar /> : <Spinner />}

export default IndexPage;
