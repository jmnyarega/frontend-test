import styled from "styled-components";

export const ProductStyle = styled.div`
  justify-self: center;
  padding: 0.5rem;
  font-size: 0.8575rem;
  max-width: 35ch;
  img {
    background-color: hsl(0, 0%, 80%);
    object-fit: cover;
  }
`;

export const ProductInfo = styled.div`
  min-height: 5rem;

  .price {
    color: #434344;
    margin-top: 0.5rem;
  }

  .name {
    font-weight: bold;
  }
`;

export const ProductButtons = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    padding: 0.2em 0.6em;
    border: 1px solid #dcdcdc;
    background-color: transparent;
    border-radius: 0.1em;
    outline: none;
    cursor: pointer;
    font-weight: 500;
  }

  button:hover,
  button:focus {
    opacity: 0.6;
  }
`;
