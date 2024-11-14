import styled from 'styled-components';
import { motion } from 'framer-motion';

const ButtonBase = styled(motion.a)`
  padding: 12px 24px;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    padding: 16px 24px;
  }
`;

export const PrimaryButton = styled(ButtonBase)`
  background: ${({ theme }) => theme.colors.secondary};
  color: #000000;
  border: none;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px ${({ theme }) => `${theme.colors.secondary}40`};
  }
`;

export const OutlinedButton = styled(ButtonBase)`
  background: transparent;
  color: ${({ theme }) => theme.colors.textLight};
  border: 1px solid ${({ theme }) => theme.colors.secondary};

  &:hover {
    background: ${({ theme }) => `${theme.colors.secondary}10`};
  }

  i {
    font-size: 14px;
  }
`; 