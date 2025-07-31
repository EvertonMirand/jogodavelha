import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  font-family: sans-serif;
  padding: 20px;
  background: ${({ background }) => background};
  margin: 0;
  height: 100%;
`;
