import styled from "styled-components";

export const ProductsStyle = styled.div`
  padding: 1rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, auto);

  @media (min-width: 50em) {
    grid-template-columns: repeat(3, auto);
  }
`;
