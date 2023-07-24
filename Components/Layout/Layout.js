import Link from "next/link";
import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h2>Car Store</h2>
          <p>Choose and Buy your car</p>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>
        <a href="https://github.com/abbasejlali" target="_blank">
          abbas ejlali
        </a>{" "}
        Car Store | Next Develope &copy;
      </footer>
    </>
  );
};

export default Layout;
