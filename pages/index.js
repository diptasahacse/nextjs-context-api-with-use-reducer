import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import MyNav from "../components/Layout/MyNav";
import ProductCard from "../components/Layout/ProductCard";
import { useProducts } from "../hooks/useProducts";
import styles from "../styles/Home.module.css";

export default function Home() {
  const {
    state: { loading, products, error },
  } = useProducts();

  let content;

  if (loading) {
    content = <p className="text-center">Product is fetching..</p>;
  }
  if (error) {
    content = <p className="text-center text-danger">Something went wrong.</p>;
  }
  if (!loading && !error && products.length === 0) {
    content = <p className="text-center text-info">Product are empty</p>;
  }

  if (!loading && !error && products.length > 0) {
    content = (
      <div className="row g-4">
        {products.map((item, index) => (
          <ProductCard item={item} key={index} />
        ))}
      </div>
    );
  }

  return <>{content}</>;
}
