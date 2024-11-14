import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormInput = ({
  label,
  name,
  type = 'text',
  error,
  required,
  ...props
}) => {
  return (
    <InputWrapper>
      {label && (
        <Label htmlFor={name}>
          {label} {required && <Required>*</Required>}
        </Label>
      )}
      <InputField
        as={motion.input}
        id={name}
        name={name}
        type={type}
        hasError={!!error}
        whileFocus={{ scale: 1.01 }}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
`;

const Required = styled.span`
  color: ${({ theme }) => theme.colors.error};
  margin-left: 0.2rem;
`;

const InputField = styled.input`
  width: 100%;
  padding: 0.8rem;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border: 1px solid ${({ theme, hasError }) => 
    hasError ? theme.colors.error : theme.colors.text}40;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 1rem;
  transition: all ${({ theme }) => theme.transitions.base};

  &:focus {
    outline: none;
    border-color: ${({ theme, hasError }) => 
      hasError ? theme.colors.error : theme.colors.accent};
    box-shadow: 0 0 0 2px ${({ theme, hasError }) => 
      hasError ? theme.colors.error : theme.colors.accent}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.text}80;
  }
`;

const ErrorMessage = styled.span`
  display: block;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;

export default FormInput; 