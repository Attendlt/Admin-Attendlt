import React, { useEffect, useState } from "react";
import { auth } from "./firebase";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Signin from "./Pages/Signin";
import { useStateValue } from "./StateProvider";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Loading from "./Pages/Loading";
import Institute from "./Pages/Inst";

function App() {
  // till we will not confirm ki wo admin ha ki nahi hum usko loading ki karate rhega...

  const [{ uid, admin }, dispatch] = useStateValue();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function startupFunc() {
      try {
        auth.onAuthStateChanged(async (authUser) => {
          if (authUser) {
            // user is logged in
            await authUser.getIdTokenResult().then((idTokenResult) => {
              dispatch({
                type: "SET_USER",
                uid: authUser?.uid,
                email: authUser?.email,
                admin: idTokenResult?.claims?.admin,
              });
              setLoading(false);
            });
          }
        });
      } catch (e) {
        console.log(e);
      }
    }

    startupFunc();

    return () => {};
  }, [dispatch]);

  return (
    <div>
      <Router>
        <Header />
        <Switch>
          {uid ? (
            loading ? (
              <>
                <Route exact path="/">
                  <Loading />
                </Route>

                <Redirect to="/">
                  <Loading />
                </Redirect>
              </>
            ) : (
              <>
                {admin && (
                  <Route exact path="/create-new-institute">
                    <Institute />
                  </Route>
                )}

                <Route exact path="/">
                  <Home />
                </Route>

                <Redirect to="/">
                  <Home />
                </Redirect>
              </>
            )
          ) : (
            <>
              <Route exact path="/">
                <Signin />
              </Route>

              <Redirect to="/">
                <Signin />
              </Redirect>
            </>
          )}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
