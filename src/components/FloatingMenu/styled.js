import styled from 'styled-components';

export const Menu = styled.div.attrs((props) => ({
  style: {
    top: `${props.positionTop}px`,
    left: `${props.positionLeft}px`,
  },
}))`
  position: absolute;
  padding: 15px;
  border: 1px solid #ccc;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);

  .header {
    cursor: move;
    background: #f9f9f9;
    padding: 5px;
    border-bottom: 1px solid #ddd;
  }

  h3 {
    margin: 0;
    font-size: 1rem;
  }

  label {
    display: flex;
    align-items: center;
    margin: 8px 0;
    font-size: 0.9rem;

    input {
      margin-left: 8px;
    }
  }
`;
