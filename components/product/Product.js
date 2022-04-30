import { useContext, useState, useEffect } from "react";
import Link from "next/link";
// Styles
import styles from "./Product.module.scss";
// Contexts
import { context } from "../../pages/_app";

function Product({ product }) {
  const contextItems = useContext(context);
  const { cartItems, handleAddProduct, handleRemoveProduct } = contextItems;

  const productInCart = cartItems.find((item) => item.id === product.id);
  const itemQuantity = productInCart && productInCart.quantity;

  return (
    <div className={styles.product_container}>
      <div>
        <img src={product.image} alt="product" />
        <div className={styles.content_container}>
          <div className={styles.product_title}>
            {product.title.split(" ").slice(0, 2).join(" ")}
          </div>
          <div className={styles.product_category}>{product.category}</div>
          <span className={styles.product_price}>{product.price}$</span>
        </div>
      </div>
      <div className={styles.product_buttons}>
        <Link href="/details/[id]" as={`/details/${product.id}`}>
          <a>Details</a>
        </Link>
        {itemQuantity ? (
          <div className={styles.increase_decrease_container}>
            <button className={styles.decrease} onClick={() => handleRemoveProduct(product)}>-</button>
            <span className={styles.item_quantity}>{itemQuantity}</span>
            <button className={styles.increase} onClick={() => handleAddProduct(product)}>+</button>
          </div>
        ) : (
          <button
            className={styles.product_add_button}
            onClick={() => handleAddProduct(product)}
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
