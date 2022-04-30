/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
// Styles
import styles from "../scss/pages-style/products.module.scss";
// Components
import Product from "../components/product/Product";

function products({ products }) {
  const [search, setSearch] = useState("");

  function inputChangeHandler(event) {
    setSearch(event.target.value);
  }

  const filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={styles.products_container}>
      <div className={styles.products_search}>
        <input type="text" value={search} onChange={inputChangeHandler}></input>
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
      <div className={styles.products_item_container}>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {filteredProducts.length === 0 && (
        <div className={styles.products_empty}>
          <i className="fa-solid fa-face-frown"></i>
          <span>{`"${search}"`} Not found</span>
        </div>
      )}
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
  };
};

export default products;
