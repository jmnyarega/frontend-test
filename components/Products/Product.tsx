import { FC } from "react";
import Image from "next/image";
import {
  ProductStyles,
  ProductInfoStyles,
  ProductButtonsStyles,
} from "./Styles/Product.styles";
import { IProduct } from "../../types/index.types";
import { numberFormart, myLoader } from "../../utils";

const Product: FC<IProduct> = ({ product_image, name, price }) => (
  <ProductStyles>
    <Image
      // @ts-ignore
      loader={myLoader}
      src={product_image}
      alt={name}
      quality={75}
      width={250}
      height={200}
    />
    <ProductInfoStyles>
      <p className="name">{name}</p>
      <p className="price">Ksh {numberFormart(Number(price))}</p>
    </ProductInfoStyles>
    <ProductButtonsStyles>
      <button>Buy now</button>
      <button>Add to cart</button>
    </ProductButtonsStyles>
  </ProductStyles>
);

export default Product;
