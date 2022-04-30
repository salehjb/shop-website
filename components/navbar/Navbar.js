import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useContext } from "react";
// Styles
import styles from "./Navbar.module.scss";
// Contexts
import { context } from "../../pages/_app"

// Navbar Items
const navbarItems = [
  { text: "Home", link: "/" },
  { text: "Products", link: "/products" },
];

function Navbar() {
  const contextItems = useContext(context);
  const { cartItems } = contextItems;

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = useRouter().pathname;
  const active = navbarItems.findIndex((item) => item.link === pathname);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu(e) {
    e.stopPropagation();
    setIsMenuOpen(false);
  }

  return (
    <div className={styles.navbar_container}>
      <div className={styles.navbar_logo}>
        <i className="fa fa-shop"></i>
        <p>Digi Shop</p>
      </div>
      <div className={styles.menu_bar}>
        {isMenuOpen ? (
          <i className="fa fa-times" onClick={closeMenu}></i>
        ) : (
          <i className="fa fa-bars" onClick={openMenu}></i>
        )}
      </div>
      <ul
        className={`${styles.navbar_links} ${
          isMenuOpen ? styles.active : null
        }`}
      >
        <div className={styles.all_links} onClick={closeMenu}>
          {navbarItems.map((item, index) => (
            <Link key={index} href={item.link}>
              <a className={active === index && styles.active_link}>
                {item.text}
              </a>
            </Link>
          ))}
          <Link href="/cart" className={styles.shopping_cart_link}>
            <a>
              <i className="fa fa-cart-shopping"></i>
              <span className={styles.cart_items_count}>{cartItems.length}</span>
            </a>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
