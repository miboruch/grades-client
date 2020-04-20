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

const StyledHeader = styled.header`
  width: 100%;
  height: 100px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-bottom: 2rem;
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
            {/*<StyledHeader>*/}
            {/*  <SearchBar />*/}
            {/*</StyledHeader>*/}
            <Header />
            <MobileTable data={students} />
            <StandardTable data={students} />
          </>
        ) : (
          <Spinner />
        )}
      </StyledWrapper>
    </Layout>
  );
};

export default IndexPage;
