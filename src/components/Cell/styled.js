import styled, { keyframes } from 'styled-components';

const popIn = keyframes`
  0% {
    transform: scale(0.3);
    opacity: 0;
  }
  70% {
    transform: scale(1.2);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

export const Button = styled.button`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  cursor: pointer;
  background: ${({ backGroundColor = '#fff' }) => backGroundColor};
  border: 2px solid #333;

  &:disabled {
    color: ${({ color = '#ccc' }) => color};
    cursor: not-allowed;
    animation: ${popIn} 0.3s ease forwards;
  }
`;
