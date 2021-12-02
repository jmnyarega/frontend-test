import type { FC } from "react";
import Head from "next/head";

import Intro from "../components/Intro";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Products from "../components/Products";

import { ICategories, IProduct, ISort } from "../types/index.types";

export interface IProps {
  products: IProduct[];
  categories: ICategories;
  sortBy: ISort;
}

const Home: FC<IProps> = ({ products, categories, sortBy }) => {
  return (
    <div>
      <Head>
        <title>Store Front</title>
        <meta name="description" content="Home of the best shoes in town" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin={true}
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Nav />
      <Hero />
      <Intro />
      <Products products={products} categories={categories} sortBy={sortBy} />
    </div>
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
