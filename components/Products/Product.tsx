import { FC } from "react";
import Image from "next/image";
import {
  ProductStyle,
  ProductInfo,
  ProductButtons,
} from "./Styles/Product.styles";
import { IProduct } from "../../types/index.types";
import { numberFormart, myLoader } from "../../utils";

const Product: FC<IProduct> = ({ product_image, name, price }) => (
  <ProductStyle>
    <Image
      loader={myLoader}
      src={product_image}
      alt={name}
      quality={75}
      width={250}
      height={200}
    />
    <ProductInfo>
      <p className="name">{name}</p>
      <p className="price">{numberFormart(Number(price))}</p>
    </ProductInfo>
    <ProductButtons>
      <button>Buy now</button>
      <button>Add to cart</button>
    </ProductButtons>
  </ProductStyle>
);

export default Product;
