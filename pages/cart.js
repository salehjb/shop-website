/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, useState, useEffect } from "react";
// Styles
import styles from "../scss/pages-style/cart.module.scss";
// Contexts
import { context } from "./_app";
// Components
import CartItem from "../components/cart-item/CartItem";

function cart() {
  const [isActive, setIsAvtive] = useState(true);

  const contextItems = useContext(context);
  const { cartItems, setCartItems } = contextItems;

  useEffect(() => {
    if (cartItems.length === 0) {
      setIsAvtive(false);
    }
  }, [cartItems]);

  function clearCart() {
    setCartItems([]);
  }

  return (
    <div className={styles.cart_container}>
      <div className={styles.cart_content_container}>
        <div className={styles.cart_header}>
          <div className={styles.clear_cart_container}>
            <button
              className={`${styles.clear_cart} ${isActive && styles.active}`}
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <h1>Cart Items</h1>
          <div className={styles.cart_total_price}>
            <div className={styles.cart_total_price_title}>Total Price:</div>
            <div className={styles.cart_total_price_value}>
              {cartItems
                .reduce(
                  (total, product) => total + product.price * product.quantity,
                  0
                )
                .toFixed(2)}
              $
            </div>
          </div>
        </div>
        <div className={styles.cart_items}>
          {cartItems.map((product) => (
            <CartItem key={product.id} product={product} />
          ))}
        </div>
        <div className={styles.cart_empty}>
          {cartItems.length === 0 ? (
            <div className={styles.cart_empty_text}>
              <h1>Your cart is empty</h1>
              <p>
                You can add products to your cart by clicking on the
                {`"Add to cart"`} button on the product page.
              </p>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default cart;
