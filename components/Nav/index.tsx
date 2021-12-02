import React from "react";
import {
  NavStyles,
  CartStyles,
  SearchStyles,
  ButtonStyles,
} from "./Nav.styles";

const Nav = () => {
  return (
    <NavStyles>
      <SearchStyles>
        <ButtonStyles>
          <i className="fa fa-search"></i>
        </ButtonStyles>
        <input type="search" name="" id="" placeholder="Search for a product" />
      </SearchStyles>
      <CartStyles>
        <ButtonStyles>
          <i className="fa fa-shopping-cart"></i>
        </ButtonStyles>
      </CartStyles>
    </NavStyles>
  );
};
export default Nav;
