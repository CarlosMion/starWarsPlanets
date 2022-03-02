import React from 'react';

import styled from 'styled-components';
import { motion } from 'framer-motion';

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: '50%',
  },
  end: {
    y: '100%',
  },
};

const loadingCircleTransition = {
  duration: 0.5,
  type: 'spring',
  damping: 0,
  mass: 2.5,
};

export function LoadingDots() {
  return (
    <Container
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <Circle
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </Container>
  );
}

const Container = styled(motion.div)`
  width: 40px;
  height: 20px;
  display: flex;
  justify-content: space-around;
  padding: 0 6px;
`;

const Circle = styled(motion.div)`
  display: block;
  width: 6px;
  color: 'black';
  height: 6px;
  background-color: white;
  border-radius: 3px;
  background-color: ${(props) => props.theme.colors.white};
`;
