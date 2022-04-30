// Styles
import styles from "./Layout.module.scss";  
// Components 
import Navbar from "../navbar/Navbar";

function Layout({ children }) {
  return (
    <div className={styles.layout_container}>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout