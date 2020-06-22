import React, { useContext, useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeContext } from '../../../context/ThemeContext';
import SlideIcon from '../SlideIcon/SlideIcon';
import { useOutsideClick } from '../../../utils/customHooks';
import {
  StyledWrapper,
  StyledButton,
  MenuList,
  SingleMenuItem,
  IconWrapper
} from './SelectMenu.styles';

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
