import React from "react";

import { Link, useHistory } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  const userName = localStorage.getItem("user");
  const history = useHistory();

  function logoutAndRedirect() {
    localStorage.setItem("user", "");
    history.push("/");
  }

  return (
    <header className={styles.navbar}>
      {userName ? (
        <>
          <Link to="/catalog" className={styles.item}>
            Pokémons
          </Link>
          <Link to="/profile" className={styles.item}>
            Meu Perfil
          </Link>
          <div
            onClick={logoutAndRedirect}
            id={styles.logout}
            className={styles.item}
          >
            Sair
          </div>
        </>
      ) : (
        <Link to="/" className={styles.item}>
          Login
        </Link>
      )}
    </header>
  );
};

export default Navbar;
