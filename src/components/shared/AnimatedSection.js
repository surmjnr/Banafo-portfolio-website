import { motion } from 'framer-motion';
import styled from 'styled-components';

function AnimatedSection({ children, delay = 0 }) {
  return (
    <StyledMotionDiv
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeOut"
      }}
    >
      {children}
    </StyledMotionDiv>
  );
}

const StyledMotionDiv = styled(motion.div)`
  width: 100%;
`;

export default AnimatedSection;
