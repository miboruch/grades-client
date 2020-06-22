import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper, StyledInput } from './ToggleCheckbox.styles';

const ToggleCheckbox = ({ toggleFunction, isChecked, children }) => {
  return (
    <StyledWrapper>
      {children}
      <StyledInput
        type='checkbox'
        onChange={() => toggleFunction()}
        checked={isChecked}
      />
    </StyledWrapper>
  );
};

ToggleCheckbox.propTypes = {
  toggleFunction: PropTypes.func.isRequired,
  isChecked: PropTypes.bool.isRequired
};

export default ToggleCheckbox;
