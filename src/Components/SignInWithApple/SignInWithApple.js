import React from "react";
import "./SignInWithApple.css";
import { authentication } from "../Utility/Configuration";

import { signInWithPopup, OAuthProvider } from "firebase/auth";

const SignInWithGoogle = () => {

  const SignInwithgoogle = () => {
    const provider = new OAuthProvider("apple.com");
    signInWithPopup(authentication, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Apple Access Token. You can use it to access the Google API.
        const user = result.user;

        // Apple credential
        const credential = OAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        const idToken = credential.idToken;
        // The signed-in user info.
      })
      .catch((error) => {
        console.log(error.code);
        // Handle Errors here.
      });
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Sign In With Apple</h1>
        <button className="btn btn-primary" onClick={SignInwithgoogle}>
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SignInWithGoogle;
