import React from "react";
import axios from "axios";

import Navbar from "../components/Navbar";

import loginImage from "../assets/illustrations/login.jpg";
import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const usernameInput = React.createRef();

  function keyPressed(e) {
    if (e.key === "Enter") {
      let username = usernameInput.current.value;
      usernameInput.current.value = "";
      sendUsername(username);
    }
  }

  const sendUsername = (username) => {
    axios
      .post("https://pokedex20201.herokuapp.com/users", { username: username })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("user", username);
          props.history.push("/catalog");
        }
      })
      .catch((err) => {
        if (err.response.status === 422) {
          localStorage.setItem("user", username);
          props.history.push("/catalog");
        }
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div>
          <img className={styles.loginIllustration} src={loginImage} alt="" />
        </div>
        <div className={styles.loginActionBox}>
          <h1 className={styles.loginTitle}>
            Cadastre-se ou
            <br /> faça Login
          </h1>
          <input
            type="text"
            ref={usernameInput}
            onKeyPress={keyPressed}
            className={styles.loginInput}
            placeholder="Nome de usuário"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
