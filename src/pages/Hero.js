import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Button = styled(motion.a)`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: ${({ theme }) => theme.typography.sizes.lg};
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    width: 100%;
    padding: 14px 24px;
    justify-content: center;
  }
`;

const PrimaryButton = styled(Button)`
  background: ${({ theme }) => theme.colors.secondary};
  color: #000000;
  border: none;
  width: auto;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => `${theme.colors.secondary}40`};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  width: auto;

  &:hover {
    background: ${({ theme }) => `${theme.colors.secondary}10`};
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// In your JSX:
<ButtonGroup>
  <PrimaryButton
    href="/resume.pdf"
    download
    as={motion.a}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <i className="fas fa-download" />
    Download Resume
  </PrimaryButton>
  
  <SecondaryButton
    href="#contact"
    as={motion.a}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
  >
    <i className="fas fa-envelope" />
    Contact Me
  </SecondaryButton>
</ButtonGroup> 