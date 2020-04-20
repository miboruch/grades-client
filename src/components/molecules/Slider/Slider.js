import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.main};
  color: #fff;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.5s ease;

  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(0);
    position: static;
    width: 20%;
  }
`;

const Slider = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <h1>hello</h1>
    </StyledWrapper>
  );
};

Slider.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Slider;
