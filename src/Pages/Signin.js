import React from "react";
import { Button } from "react-bootstrap";
import './Signin.css';
import E from './Email';
function Signin() {
  return (
    <div className="poster-signin">
      <div className="container mt-4" style={{ width: "40%", padding: "10%" ,alignContent:'center',alignItems:'center'}}>
          <div className="form">
        <h2
          style={{ color: "grey", textAlign: "center", textDecoration: "bold" }}
        >
          Welcome to The Attendlt!Admin-Panel
        </h2>
        <h3
          style={{
            color: "#ff3300",
            textAlign: "center",
            textDecoration: "bold",
          }}
        >
          To Login In Your Account, Fill the following details!
        </h3>
          <E/>
          <Button
            type="submit"
            style={{ width: "45%", background: "#ff3300" }}
          >
            Login
          </Button>
      </div>
      </div>
    </div>
  );
}

export default Signin;