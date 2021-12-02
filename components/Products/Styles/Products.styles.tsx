import styled from "styled-components";

export const ProductsStyle = styled.div`
  padding: 0.5rem;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, auto);

  @media (min-width: 30rem) {
    grid-template-columns: repeat(2, auto);
  }

  @media (min-width: 40rem) {
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: 60rem) {
    grid-template-columns: repeat(4, auto);
  }
`;
