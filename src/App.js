import React, { useEffect } from "react";
import { auth } from "./firebase.js";
import Signin from "./Pages/Signin.js";

function App() {
  useEffect(() => {
    // const startupFunc = async () => {
    //   try {
    //     auth.onAuthStateChanged(async (authUser) => {
    //       if (authUser) {
    //       }
    //     });
    //   }
    // };

    return () => {};
  }, []);

  return (
    <div>
      <Signin />
    </div>
  );
}

export default App;
