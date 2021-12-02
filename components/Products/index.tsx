import React from "react";
import Product from "./Product";
import { ProductsStyle } from "./Styles/Products.styles";

const data = [
  {
    product_image:
      "https://image.goat.com/375/attachments/product_template_pictures/images/008/654/900/original/52015_00.png.png",
    name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
    price: "16000",
  },
  {
    product_image:
      "https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
    name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
    price: "16000",
  },
  {
    product_image:
      "https://image.goat.com/750/attachments/product_template_pictures/images/011/119/994/original/218099_00.png.png",
    name: "Air Jordan 1 Retro High OG 'Shadow' 2018",
    price: "16000",
  },
];

const index = () => {
  return (
    <ProductsStyle>
      {data.map((d) => (
        <Product
          product_image={d.product_image}
          name={d.name}
          price={d.price}
        />
      ))}
    </ProductsStyle>
  );
};

export default index;
