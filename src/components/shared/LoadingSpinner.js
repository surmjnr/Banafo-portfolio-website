import styled, { keyframes } from 'styled-components';

function LoadingSpinner() {
  return (
    <SpinnerWrapper>
      <Spinner />
    </SpinnerWrapper>
  );
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

const Spinner = styled.div`
  width: 50px;
  height: 50px;
  border: 3px solid ${({ theme }) => theme.colors.background};
  border-top: 3px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

export default LoadingSpinner; 