import React, { useContext, useRef, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from '../../../context/ThemeContext';
import Button from '../Button/Button';
import SlideIcon from '../SlideIcon/SlideIcon';
import { useOutsideClick } from '../../../utils/customHooks';

const StyledWrapper = styled.div`
  display: none;

  ${({ theme }) => theme.mq.standard} {
    display: block;
  }
`;

const StyledButton = styled(Button)`
  margin: 0;
  position: relative;

  ${({ isDarkTheme }) =>
    !isDarkTheme &&
    css`
      background-color: #fff;
    `}
`;

const MenuList = styled.ul`
  width: 100%;
  height: 500px;
  color: ${({ theme }) => theme.color.main};
  border: 1px solid #ccc;
  transition: all 0.4s ease;
  overflow-y: scroll;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translateY(100%);
  font-family: 'Gilroy';
  list-style-type: none;
  flex-direction: column;
  padding: 0;
  z-index: 9;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      color: #fff;
      border: 1px solid ${theme.color.darkThemeAccents};
    `}
`;

const SingleMenuItem = styled.li`
  width: 100%;
  padding: 2rem;
  color: ${({ theme }) => theme.color.main};
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  cursor: pointer;
  transition: all 0.5s ease;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1px;
  border-top: 1px solid #ccc;

  ${({ isDarkTheme, theme }) =>
    isDarkTheme &&
    css`
      background: #1d1d1d;
      color: #fff;
      border: 1px solid ${theme.color.darkThemeAccents};
    `}

  &:hover {
    background: ${({ theme }) => theme.color.mainGradient};
    color: #fff;
  }

  &:first-of-type {
    border-top: none;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 3rem;
  transform: translateY(-40%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SelectMenu = ({ currentIndex, setCompareIndex }) => {
  const {
    students: { data }
  } = useStaticQuery(graphql`
    query {
      students {
        data {
          index
        }
      }
    }
  `);
  /* Display all students except current */
  const result = data.filter((item) => item.index !== currentIndex);

  const { isDarkTheme } = useContext(ThemeContext);
  const wrapperRef = useRef(null);
  const [isSelectOpen, setSelectOpen] = useState(false);
  const [tl] = useState(gsap.timeline({ defaults: { ease: 'power3.inOut' } }));

  const toggleSelect = () => {
    setSelectOpen(!isSelectOpen);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;
    tl.fromTo(
      wrapper,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 0.5 }
    ).fromTo(
      wrapper.children,
      { autoAlpha: 0, y: '-=20' },
      { autoAlpha: 1, y: '0', stagger: 0.03 }
    );
  }, []);

  useEffect(() => {
    isSelectOpen ? tl.play() : tl.reverse();
  }, [isSelectOpen]);

  useOutsideClick(wrapperRef, isSelectOpen, toggleSelect);

  return (
    <StyledWrapper>
      <StyledButton onClick={() => toggleSelect()}>
        <IconWrapper>
          <SlideIcon isOpen={isSelectOpen} />
        </IconWrapper>
        Porównaj
      </StyledButton>
      <MenuList ref={wrapperRef} isDarkTheme={isDarkTheme}>
        <SingleMenuItem
          isDarkTheme={isDarkTheme}
          onClick={() => {
            setCompareIndex(null);
            toggleSelect();
          }}
        >
          Wyczyść
        </SingleMenuItem>
        {result.map((item) => (
          <SingleMenuItem
            key={item.index}
            isDarkTheme={isDarkTheme}
            onClick={() => {
              setCompareIndex(item.index);
              toggleSelect();
            }}
          >
            {item.index}
          </SingleMenuItem>
        ))}
      </MenuList>
    </StyledWrapper>
  );
};

SelectMenu.propTypes = {
  currentIndex: PropTypes.string.isRequired
};

export default SelectMenu;
