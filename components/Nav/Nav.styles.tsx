import styled from "styled-components";

export const NavStyles = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;
`;

export const CartStyles = styled.div``;
export const SearchStyles = styled.div`
  display: flex;
  column-gap: 0.5rem;
  input {
    border: none;
    outline: none;
  }
`;

export const ButtonStyles = styled.button`
  outline: none;
  border: none;
  padding: 0.5rem 0;
  background-color: transparent;
  cursor: pointer;

  :hover,
  .button:focus {
    opacity: 0.5;
  }
`;
