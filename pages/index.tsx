import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Product from "../components/Products";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Store Front</title>
        <meta name="description" content="Home of the best shoes in town" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css"
        />
      </Head>
      <main className={styles.main}>
        <Nav />
        <Hero />
        <Intro />
        <Product />
      </main>
      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
