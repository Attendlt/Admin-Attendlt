import React from "react";
// import './Signin.css';
import Email from "./Email";
function Signin() {
  return (
    <div className="poster-signin" style={{ backgroundSize: "cover" }}>
      <div
        className="container mt-4"
        style={{
          borderRadius: "30px",
          height: "50%",
          margin: "auto",
          width: "50%",
          boxSizing: "border-box",
        }}
      >
        <Email />
        &nbsp;
      </div>
    </div>
  );
}

export default Signin;
