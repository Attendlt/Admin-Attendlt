import React from "react";
// import './Signin.css';
import E from "./Email";
import I from "./Inst";
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
        <E />
        &nbsp;
        <I />
      </div>
    </div>
  );
}

export default Signin;
