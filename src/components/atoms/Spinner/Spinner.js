import React from 'react';
import PropTypes from 'prop-types';
import { SpinnerWrapper, StyledSpinner } from './Spinner.styles';

const Spinner = ({ id }) => (
  <SpinnerWrapper data-testid={id}>
    <StyledSpinner />
  </SpinnerWrapper>
);

Spinner.propTypes = {
  id: PropTypes.string
};

export default Spinner;
