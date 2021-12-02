import React from "react";
import Image from "next/image";
import { ProductStyle } from "./Styles/Product.styles";

interface IProduct {
  product_image: string;
  name: string;
  price: string;
}

interface ILoader {
  src: string;
  width: number;
  quality: number;
}

const myLoader = ({ src, width, quality }: ILoader) =>
  `${src}?w=${width}&q=${quality}`;

const Product = ({ product_image, name, price }: IProduct) => (
  <ProductStyle>
    <Image
      loader={myLoader}
      src={product_image}
      alt={name}
      quality={75}
      width={250}
      height={200}
    />
    <p>{name}</p>
    <p>Ksh{price}</p>
  </ProductStyle>
);

export default Product;
