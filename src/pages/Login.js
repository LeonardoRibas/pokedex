import React from "react";

class Login extends React.Component {
  render() {
    return (
      <div className="loginContainer">
        <div>Pokedex</div>
        <input type="text" placeholder="Username" />
        <button>Login</button>
      </div>
    );
  }
}

export default Login;
