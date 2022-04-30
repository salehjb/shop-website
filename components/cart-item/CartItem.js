import { useContext } from "react";
// Styles
import styles from "./CartItem.module.scss";
// Context
import { context } from "../../pages/_app";

function CartItem({ product }) {
  const contextItems = useContext(context);
  const { handleAddProduct, handleRemoveProduct } = contextItems;

  return (
    <div>
      {product.quantity > 0 ? (
        <div className={styles.cart_item}>
          <img src={product.image} alt="product" />
          <div className={styles.cart_title}>
            {product.title.split(" ").slice(0, 3).join(" ")}
          </div>
          <div className={styles.cart_price}>{product.price}$</div>
          <div className={styles.cart_buttons}>
            <button
              className={styles.decrease}
              onClick={() => handleRemoveProduct(product)}
            >
              -
            </button>
            {product.quantity}
            <button
              className={styles.increase}
              onClick={() => handleAddProduct(product)}
            >
              +
            </button>
          </div>
          <div className={styles.cart_total_product_price}>
            {(product.price * product.quantity).toFixed(2)}$
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CartItem;
