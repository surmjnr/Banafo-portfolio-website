import { motion } from 'framer-motion';
import styled from 'styled-components';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

function PageTransition({ children }) {
  return (
    <StyledMotionDiv
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.5 }}
    >
      {children}
    </StyledMotionDiv>
  );
}

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
`;

export default PageTransition; 