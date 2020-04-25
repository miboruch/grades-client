import React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout
    render={() => (
      <>
        <SEO title='404: Not found' />
        <h1>NOT FOUND</h1>
      </>
    )}
  />
);

export default NotFoundPage;
