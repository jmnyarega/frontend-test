import styled from "styled-components";
import { theme } from "../../../utils/base.styles";

export const ProductStyles = styled.div`
  justify-self: center;
  padding: 0.5rem;
  font-size: 0.8575rem;
  max-width: 35ch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  img {
    background-color: ${theme.colors.darkGray};
    min-height: 12rem;
    border-radius: 0.2rem;
    object-fit: cover;
  }
`;

export const ProductInfoStyles = styled.div`
  min-height: 5.5rem;

  .price {
    color: ${theme.colors.primaryColor};
    margin-top: 0.5rem;
  }

  .name {
    font-weight: bold;
  }
`;

export const ProductButtonsStyles = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.5rem;

  button {
    padding: 0.2em 0.6em;
    border: 1px solid ${theme.colors.lightGray};
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
