import styled from "styled-components";

export const FilterStyle = styled.div`
  padding: 1rem 1.2rem;
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(2, auto);
  grid-gap: 2rem;

  select {
    display: block;
    max-width: 15rem;
    min-width: 5rem;
  }
`;
