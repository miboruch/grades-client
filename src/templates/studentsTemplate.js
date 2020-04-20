import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/seo';

const StudentsTemplate = ({ pageContext: { student } }) => {
  console.log(student);
  return (
    <Layout>
      <SEO title={`Student ${student.index}`} />
      <h1>hello</h1>
    </Layout>
  );
};

export default StudentsTemplate;
