import React from "react";
import axios from "axios";

class Login extends React.Component {
  usernameInput = React.createRef();

  keyPressed = (e) => {
    if (e.key === "Enter") {
      let username = this.usernameInput.current.value;
      this.usernameInput.current.value = "";
      this.sendUsername(username);
    }
  };

  sendUsername = (username) => {
    axios
      .post("https://pokedex20201.herokuapp.com/users", { username: username })
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("user", username);
          this.props.history.push("/catalog");
        }
      })
      .catch((err) => {
        if (err.response.status === 422) {
          localStorage.setItem("user", username);
          this.props.history.push("/catalog");
        }
      });
  };

  render() {
    return (
      <div className="loginContainer">
        <input
          type="text"
          ref={this.usernameInput}
          onKeyPress={this.keyPressed}
          placeholder="Username"
        />
      </div>
    );
  }
}

export default Login;
