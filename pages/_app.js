import { createContext, useState } from "react";
// Styles
import "../scss/globals.scss";
// Font Awesome
import "@fortawesome/fontawesome-free/css/all.css";
// Components
import Layout from "../components/layout/Layout";

export const context = createContext();

function MyApp({ Component, pageProps }) {
  const [cartItems, setCartItems] = useState([]);

  function handleAddProduct(product) {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  }

  function handleRemoveProduct(product) {
    const ProductExits = cartItems.find((item) => item.id === product.id);
    if (ProductExits.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  }

  const value = {
    cartItems,
    setCartItems,
    handleAddProduct,
    handleRemoveProduct,
  };

  return (
    <context.Provider value={value}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </context.Provider>
  );
}

export default MyApp;
