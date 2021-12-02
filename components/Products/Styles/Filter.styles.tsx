import styled from "styled-components";
import { theme } from "../../../utils/base.styles";

export const FilterStyle = styled.div`
  padding: 1rem 1.2rem;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 50rem) {
    justify-content: space-between;
    grid-template-columns: repeat(2, auto);
  }

  select {
    display: block;
    width: 100%;
    cursor: pointer;

    background-color: ${theme.colors.lightGray};
    border: 0;
    outline: none;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    margin: auto;

    @media (min-width: 40rem) {
      min-width: 15rem;
    }
  }
  select:hover,
  select:focus {
    opacity: 0.6;
  }
`;
