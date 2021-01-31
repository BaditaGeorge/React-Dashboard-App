import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Icon from "@material-ui/core/Icon";
import "./register.scss";

function Register() {
  let [emailOk, setEmailOk] = useState(true);
  let [passOk, setPassOk] = useState(true);
  let [email, setEmail] = useState("");
  let [pass, setPass] = useState("");

  function checkEmail(mail) {
    if (
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        mail
      )
    ) {
      setEmailOk(true);
      return;
    }
    setEmailOk(false);
  }

  function checkPassowrd(pass) {
    if (pass.length < 9) {
      setPassOk(false);
      return;
    }
    let ok = false;
    for(let i=0;i<=9;i++){
      if(pass.split().includes(i.toString())){
        ok = true;
      }
    }
    ok = /[A-Z]/.test(pass);
    ok = /[a-z]/.test(pass);
    setPassOk(ok);
  }

  return (
    <>
      <div className="navBar">
        <span style={{ left: "10px" }}>Menu</span>
        <span style={{ right: "10px" }}>X</span>
      </div>
      <div className="loginMain">
        <form className="regform">
          <p className="formTitle">CREATE ACCOUNT</p>
          <input className="textField" type="text" placeholder="Name"></input>
          <input
            className={emailOk?"textField":"textFieldFail"}
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Email"
          ></input>
          <input
            className={passOk?"textField":"textFieldFail"}
            type="password"
            onChange={(e) => {
              setPass(e.target.value);
            }}
            placeholder="Password"
          ></input>
          <button
            style={{ cursor: "pointer" }}
            onClick={(e) => {
              e.preventDefault();
              checkEmail(email);
              checkPassowrd(pass);
            }}
          >
            Continue
          </button>
        </form>
      </div>
      {/* <div>
          <h3>React is awesome</h3>
      </div> */}
    </>
  );
}

export default Register;
