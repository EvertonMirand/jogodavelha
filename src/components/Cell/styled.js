import styled from 'styled-components';

export const Button = styled.button`
  width: 100px;
  height: 100px;
  font-size: 2rem;
  cursor: pointer;
  background: #fff;
  border: 2px solid #333;

  &:disabled {
    color: #aaa;
    cursor: not-allowed;
  }
`;