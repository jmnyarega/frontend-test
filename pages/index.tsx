import type { FC } from "react";

import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Products from "../components/Products";
import Layout from "../components/Layout";
import Head from "../components/Head";

import { ICategories, IProduct, ISort } from "../types/index.types";

export interface IProps {
  products: IProduct[];
  categories: ICategories;
  sortBy: ISort;
}

const Home: FC<IProps> = ({ products, categories, sortBy }) => {
  return (
    <>
      <Head />
      <Layout>
        <Nav />
        <Hero />
        <Intro />
        <Products products={products} categories={categories} sortBy={sortBy} />
      </Layout>
    </>
  );
};

export async function getStaticProps() {
  //runs during the build process
  const URL = "https://run.mocky.io/v3/5194b007-b9b9-4748-a63f-f5db0ee4cd47";
  const data = await fetch(URL);
  const d = await data.json();

  return {
    props: {
      products: d.products,
      categories: d.categories,
      sortBy: d.sort_by,
    },
    revalidate: 1, // updates data every second
  };
}

export default Home;
