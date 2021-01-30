import React from "react";
import TextField from '@material-ui/core/TextField';
import './register.scss';

function Register() {
  return (
    <>
      <form>
          <h1>Create Account</h1>
          <TextField className="txtInput" placeholder="Name" variant="outlined" />
          <TextField className="txtInput" placeholder="Email" variant="outlined" />
          <TextField className="txtInput" placeholder="Password" variant="outlined" />
      </form>
      {/* <div>
          <h3>React is awesome</h3>
      </div> */}
    </>
  );
}

export default Register;
