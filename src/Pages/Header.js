import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import "./header.css";
import { Button } from "@material-ui/core";
import { auth } from "../firebase";
import { useStateValue } from "../StateProvider";
let tagline = (
  <span style={{ paddingRight: "65%" }}>
    Attendlt : Virtualizing the future! ~Admin-Panel
  </span>
);

export default function Header() {
  const [{ uid }] = useStateValue();

  const displayDesktop = () => {
    return (
      <>
        <Toolbar>
          {tagline}

          {uid && (
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                auth.signOut();
              }}
            >
              Signout
            </Button>
          )}
        </Toolbar>
      </>
    );
  };

  return (
    <header>
      <AppBar>{displayDesktop()}</AppBar>
    </header>
  );
}
