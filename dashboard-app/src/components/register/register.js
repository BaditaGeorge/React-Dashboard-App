import React from "react";
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';
import './register.scss';

function Register() {
  return (
    <>
    <div className="navBar">
        <span style={{left:'10px'}}>Menu</span>
        <span style={{right:'10px'}}>X</span>
    </div>
    <div className="loginMain">
      <form className="regform">
          <p>CREATE ACCOUNT</p>
          <input className="textField" type='text' placeholder='Name'></input>
          <input className="textField" type='text' placeholder='Email'></input>
          <input className="textField" type='text' placeholder='Password'></input>
          <button>Continue</button>
      </form>
    </div>
      {/* <div>
          <h3>React is awesome</h3>
      </div> */}
    </>
  );
}

export default Register;
