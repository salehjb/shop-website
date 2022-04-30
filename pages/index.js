import styles from "../scss/pages-style/home.module.scss";

export default function Home() {
  return (
    <div className={styles.home_container}>
      <i className="fa fa-home"></i>
      <div className={styles.home_text}>
        This is home page. you can navigate in website with menu
      </div>
    </div>
  );
}
