import React from 'react';
import TransitionLink from 'gatsby-plugin-transition-link';
import PropTypes from 'prop-types';
import gsap from 'gsap';

const createBox = () => {
  const body = document.body;
  const box = document.createElement('div');
  const vw = window.innerWidth;
  const vh = window.innerHeight;

  box.style.zIndex = 1000;
  box.style.bottom = 0;
  box.style.position = 'fixed';
  box.style.backgroundColor = 'white';
  box.style.width = `${vw}px`;
  box.style.height = `${vh}px`;

  body.appendChild(box);
  return { box, body, vw };
};

const PageTransitionProvider = ({ children, to }) => {
  const exitAnimation = () => {
    const { box, body, vw } = createBox();
    const tl = gsap.timeline({ defaults: { ease: 'Power3.easeOut' } });

    tl.fromTo(
      box,
      { x: -vw },
      { x: 0, duration: 1, onComplete: () => body.removeChild(box) }
    );
  };

  const enterAnimation = () => {
    const { box, body, vw } = createBox();
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
          delay: 0.5,
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
  to: PropTypes.string.isRequired
};

export default PageTransitionProvider;
