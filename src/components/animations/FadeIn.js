import { motion } from 'framer-motion';

const FadeIn = ({ 
  children, 
  duration = 0.5, 
  delay = 0,
  direction = null,
  distance = 50,
  ...props 
}) => {
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: distance };
      case 'down': return { y: -distance };
      case 'left': return { x: distance };
      case 'right': return { x: -distance };
      default: return {};
    }
  };

  return (
    <motion.div
      initial={{ 
        opacity: 0,
        ...getInitialPosition()
      }}
      animate={{ 
        opacity: 1,
        x: 0,
        y: 0
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn; 