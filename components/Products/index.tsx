import { FC } from "react";
import Product from "./Product";
import Filter from "./Filter";
import { ProductsStyle } from "./Styles/Products.styles";
import { ICategories, IProduct, ISort } from "../../types/index.types";

interface IProps {
  products: IProduct[];
  categories: ICategories;
  sortBy: ISort;
}

const Index: FC<IProps> = ({ products, categories, sortBy }) => {
  return (
    <>
      <Filter categories={categories} sortBy={sortBy} />
      <ProductsStyle>
        {products.map((d) => (
          <Product
            key={d.name}
            product_image={d.product_image}
            name={d.name}
            price={d.price}
          />
        ))}
      </ProductsStyle>
    </>
  );
};

export default Index;
