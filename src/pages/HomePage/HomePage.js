import React, { useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { ProductsWrapper } from "./HomePageStyle";
import productsList from "../../assets/products";

function HomePage() {
  const [products, setProducts] = useState(productsList);

  return (
    <>
      <ProductsWrapper>
        {products.length ? products.map((product) => <ProductCard name={product.name} />) : <> brak produktów</>}
      </ProductsWrapper>
    </>
  );
}
export default HomePage;
