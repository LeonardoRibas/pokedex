import React from "react";
import axios from "axios";

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
    <div className="loginContainer">
      <input
        type="text"
        ref={usernameInput}
        onKeyPress={keyPressed}
        placeholder="Username"
      />
    </div>
  );
};

export default LoginPage;
