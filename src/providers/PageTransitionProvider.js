import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const createBox = (index) => {
  const body = document.body;
  const box = document.createElement('div');
  const heading = document.createElement('h1');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = 1000;
  box.style.bottom = 0;
  box.style.position = 'fixed';
  box.style.display = 'flex';
  box.style.justifyContent = 'center';
  box.style.alignItems = 'center';
  box.style.backgroundColor = 'white';
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  const headingWrapper = document.createElement('div');
  headingWrapper.style.overflow = 'hidden';

  const textNode = document.createTextNode(
    index ? index : 'TiJO'
  );

  heading.appendChild(textNode);
  heading.style.fontSize = '80px';
  heading.style.fontFamily = 'Gilroy';
  heading.style.color = '#009a93';
  heading.style.fontWeight = '600';
  heading.style.letterSpacing = '4px';

  headingWrapper.appendChild(heading);
  box.appendChild(headingWrapper);
  body.appendChild(box);
  return { box, heading, body, vw };
};

const PageTransitionProvider = ({ children, to, index }) => {
  const exitAnimation = () => {
    const { box, heading, body, vw } = createBox(index);
    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeOut' } });
    gsap.set(heading, { autoAlpha: 0 });

    tl.fromTo(box, { x: -vw }, { x: 0, duration: 1 }).fromTo(
      heading,
      { autoAlpha: 0, y: 50 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.3,
        onComplete: () => body.removeChild(box)
      }
    );
  };

  const enterAnimation = () => {
    const { box, body, vw } = createBox(index);
    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeIn' } });

    tl.to(box, {
      duration: 1,
      x: vw,
      onComplete: () => body.removeChild(box)
    });
  };

  return (
    <>
      <TransitionLink
        style={{ textDecoration: 'none', color: 'inherit' }}
        to={to}
        exit={{
          trigger: ({ exit, node }) => exitAnimation(exit, node),
          length: 0.5
        }}
        entry={{
          delay: 1.5,
          trigger: ({ entry, node }) => enterAnimation(entry, node)
        }}
      >
        {children}
      </TransitionLink>
    </>
  );
};

PageTransitionProvider.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  index: PropTypes.string
};

export default PageTransitionProvider;
