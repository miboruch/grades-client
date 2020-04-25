import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import SEO from '../components/seo';
import Slider from '../components/molecules/Slider/Slider';
import { Link } from 'gatsby';
import PageTransitionProvider from '../providers/PageTransitionProvider';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const StyledHeadingWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Gilroy';
  position: relative;
`;

const StyledHeading = styled.h1`
  color: #009a93;
  font-size: 89px;
  text-align: center;
`;

const StyledParagraph = styled.p`
  color: #222;
  font-size: 24px;
  text-decoration: none;
`;

const NotFoundPage = () => {
  const mouseMoveEvent = (event) => {
    const [pageX, pageY] = [event.pageX, event.pageY];

    event.target.style = `transform: translate(${pageX/20}px, ${pageY/20}px)`;
  };

  return (
    <StyledWrapper>
      <StyledHeadingWrapper>
        <StyledHeading onMouseMove={mouseMoveEvent}>
          Page not found
        </StyledHeading>
        <PageTransitionProvider to={'/'}>
          <StyledParagraph>Go back</StyledParagraph>
        </PageTransitionProvider>
      </StyledHeadingWrapper>
    </StyledWrapper>
  );
};

export default NotFoundPage;
