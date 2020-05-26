import React from "react";

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
    // mandar username para endpoint de login na API
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
