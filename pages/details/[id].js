import Link from "next/link";
// Styles
import styles from "../../scss/pages-style/details.module.scss";

function Details({ product }) {
  return (
    <div className={styles.details_container}>
      <div className={styles.details_all_contents_container}>
        <img src={product.image} alt="product" />
        <div className={styles.details_texts_container}>
          <div className={styles.product_title}>
            {product.title.split(" ").slice(0, 2).join(" ")}
          </div>
          <div className={styles.product_category}>{product.category}</div>
          <div className={styles.product_description}>
            {product.description}
          </div>
          <div className={styles.product_end_section}>
            <span className={styles.product_price}>{product.price}$</span>
            <Link href="/products">
              <a>Back to shop</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  const paths = products.map((product) => ({
    params: {
      id: product.id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${ctx.params.id}`
  );
  const product = await response.json();

  return {
    props: {
      product,
    },
  };
};

export default Details;
