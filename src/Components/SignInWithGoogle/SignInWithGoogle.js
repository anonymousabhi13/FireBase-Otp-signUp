import React from 'react'
import './SignInWithGoogle.css'
import { authentication } from '../Utility/Configuration'

import {  signInWithPopup,  GoogleAuthProvider } from "firebase/auth";

const SignInWithGoogle = () => {

    const SignInwithgoogle = () => {
       
        const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
            .then((result) => {
                console.log(result)
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
            })
            .catch((error) => {
                console.log(error)
                // Handle Errors here.
            });
    }

  return (
    <div className='container'>
        <div className="card" >
        <h1>Sign In With Google</h1>
  <button className="btn btn-primary" onClick={SignInwithgoogle} >Sign In With Google</button>
</div>
    </div>
  )
}

export default SignInWithGoogle