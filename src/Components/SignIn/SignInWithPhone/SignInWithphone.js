import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import React, { useState } from "react";
// import "../SignInWithPhone/SignInWithPhone.css";
import { authentication } from "../Utility/Configuration";

const SignIn = () => {
  // const countryCode = "+91";

  const [phoneNumber, setPhoneNumber] = useState(null);
  const [otp, setOtp] = useState(null);
  const [expandForm, setExpandForm] = useState(false);

  const NumberTORegister = (e) => {
    console.log(e.target.value);
    setPhoneNumber(e.target.value);
  };
  const OtpToRegister = (e) => {
    let otps = e.target.value;
    setOtp(otps);
    console.log(otp);
    verifyOtp();
  };
  const verifyOtp = () => {
    let confirmationResult = window.confirmationResult;
    // confirmationResult.confirm(otp).then((result) => {
    //   // User signed in successfully.
    //   const user = result.user;
    //   // ...
    // }).catch((error) => {
    //   // User couldn't sign in (bad verification code?)
    //   // ...
    // });
    const code = otp;
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        console.log(" User signed in successfully.");
        const user = result.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log("User couldn't sign in (bad verification code?)")
        // ...
      });
  };

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
        },
      },
      authentication
    );
  };
  const RequestOtp = (e) => {
    e.preventDefault();

    // if (e.target.value.length >= 12) {
    setExpandForm(true);
    console.log(phoneNumber);
    generateRecaptcha();
    let capchav = window.recaptchaVerifier;
    signInWithPhoneNumber(authentication, phoneNumber, capchav)
      .then((confirmationResult) => {
        console.log(capchav);
        window.confirmationResult = confirmationResult;
        //
      })
      .catch((error) => {
        console.log(error.code);
      });
    // }
  };
  return (
    <div className="formContainer">
      <form className="card p-5" onSubmit={RequestOtp}>
        <h1> Sign In</h1>

        <div className="mb-3 mt-5">
          <label className="form-label">Phone Number</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={NumberTORegister}
          />
        </div>
        {expandForm === true ? (
          <div className="mb-3">
            <label className="form-label">Otp</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
              onClick={OtpToRegister}
            />
          </div>
        ) : null}
        {expandForm === false ? (
          <button type="submit" className="btn btn-primary">
            Request Otp
          </button>
        ) : null}
        <div id="recaptcha-container"></div>
      </form>
    </div>
  );
};

export default SignIn;
