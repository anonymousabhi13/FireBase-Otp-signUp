import React, { useState } from "react";
import "./SignIn.css";
import { authentication, } from "../Utility/Configuration";
import {createUserWithEmailAndPassword} from "firebase/auth";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();

    console.log(email, password);
    authentication
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        console.log(error.code)
      });
  };
  const PasswordTORegister = (e) => {
    setPassword(e.target.value);
  };
  const NumberTORegister = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className="formContainer">
      <form className="card p-5" onSubmit={SubmitHandler}>
        <h1> Sign In</h1>

        <div className="mb-3 mt-5">
          <label className="form-label">Email</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={NumberTORegister}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">PassWord</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={PasswordTORegister}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignIn;
