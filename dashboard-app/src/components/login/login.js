import React from "react";
import "./login.scss";

function Login() {
  return (
    <>
      <div className="navBar">
        <span style={{ left: "10px" }}>Menu</span>
        <span style={{ right: "10px" }}>X</span>
      </div>
      <div className="loginMain">
        <form className="regform">
          <p className="formTitle">LOGIN</p>
          <input className="textField" type="text" placeholder="Email"></input>
          <input
            className="textField"
            type="text"
            placeholder="Password"
          ></input>
          <button>Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
