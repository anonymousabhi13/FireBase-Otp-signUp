import React from "react";
import SignIn from "./Components/SignInWithEmailAndPassword/SignIn";
import SignInWithPhone from "./Components/SignInWithPhone/SignInWithphone";
import SignInWithGoogle from "./Components/SignInWithGoogle/SignInWithGoogle";
import SignInWithApple from "./Components/SignInWithApple/SignInWithApple";

const App = () => {
  return (
    <div>
      <SignIn/>
      {/* <SignInWithPhone/> */}
      {/* <SignInWithGoogle/> */}
      {/* <SignInWithApple/> */}
    </div>
  );
};

export default App;
