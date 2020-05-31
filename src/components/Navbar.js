import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <Link to="/catalog" id={styles.catalogLink} className={styles.item}>
        Catalog
      </Link>
      <Link to="/" className={styles.item}>
        Login
      </Link>
    </header>
  );
};

export default Navbar;
