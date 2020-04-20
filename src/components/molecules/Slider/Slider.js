import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserIcon from '../../../assets/icons/user.svg';
import Button from '../../atoms/Button/Button';

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.color.main};
  color: #fff;
  padding: 7rem 1rem 1rem 1rem;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: all 0.5s ease;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(0);
    position: static;
    width: 20%;
  }
`;

const StyledHeading = styled.h1`
  letter-spacing: 3px;
  font-size: 20px;
  text-transform: uppercase;
  text-align: center;

  ${({ theme }) => theme.mq.standard} {
    font-size: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 90px;
  height: 90px;
  background-color: #fff;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.color.fontColor};
  position: relative;
  margin-top: 2rem;
`;

const StyledUserIcon = styled(UserIcon)`
  width: 50px;
  height: 50px;
  fill: ${({ theme }) => theme.color.main};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledNameHeading = styled(StyledHeading)`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 2rem;

  ${({ theme }) => theme.mq.standard} {
    font-size: 18px;
  }
`;

const StyledDescriptionParagraph = styled.p`
  font-size: 13px;
  margin-top: 0.5rem;

  ${({ theme }) => theme.mq.standard} {
    font-size: 15px;
  }
`;

const Slider = ({ isOpen }) => {
  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledHeading>Testowanie i jakość oprogramowania</StyledHeading>
      <IconWrapper>
        <StyledUserIcon />
      </IconWrapper>
      <StyledNameHeading>Tomasz Gądek</StyledNameHeading>
      <StyledDescriptionParagraph>Java specialist</StyledDescriptionParagraph>
      <Button>Hello</Button>
    </StyledWrapper>
  );
};

Slider.propTypes = {
  isOpen: PropTypes.bool.isRequired
};

export default Slider;
