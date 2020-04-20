import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import SearchBar from '../components/atoms/SearchBar/SearchBar';

const ContentWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

const IndexPage = () => (
  <Layout>
    <SEO title='Main page' />
    <ContentWrapper>
      <SearchBar />
    </ContentWrapper>
  </Layout>
);

export default IndexPage;
