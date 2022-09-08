import React from 'react'
import SignIn from './Components/SignIn/SignIn/SignIn'
import SignInWithPhone from './Components/SignIn/SignInWithPhone/SignInWithphone'
import SignInWithGoogle from './Components/SignIn/SignInWithGoogle/SignInWithGoogle';
import SignInWithApple from './Components/SignIn/SignInWithApple/SignInWithApple';

const App = () => {
  return (
    <div>

      {/* <SignIn/> */}
      {/* <SignInWithPhone/> */}
{/* <SignInWithGoogle/> */}
<SignInWithApple/>
    </div>
  )
}

export default App