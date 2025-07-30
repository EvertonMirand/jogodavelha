import styled from "styled-components";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 100px);
  gap: 5px;
  justify-content: center;
  margin: 20px auto;
`;

export const Info = styled.p`
  margin-top: 10px;
  font-size: 1rem;
`;

export const Result = styled.div`
  margin-top: 15px;

  button {
    margin-top: 8px;
    padding: 6px 12px;
    font-size: 0.9rem;
    cursor: pointer;
  }
`;
