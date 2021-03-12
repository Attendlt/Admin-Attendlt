import React from "react";
import { Button } from "react-bootstrap";
import './Signin.css';
import E from './Email';
function Signin() {
  return (
    <div className="poster-signin" style={{backgroundSize:"cover"}}>
      <div className="container mt-4" style={{ borderRadius:"30px", height:"60%",margin:"auto", width:"50%", backgroundColor:"white",boxSizing:"border-box", padding:"2em 0 3em 0"}}>
          
        <h2
          style={{ padding:"1em, 0 1em 0",color: "grey",textDecoration: "bold"}}
        >
          <span>Welcome to The Attendlt! Admin-Panel</span>
        </h2>
        <h3
          style={{
            color: "#ff3300",
             padding:"1em, 0 1em 0",
            textDecoration: "bold",
          }}
        >
          To Login In Your Account, Fill the following details!
        </h3>
          <E/>
          <Button
            type="submit"
            style={{ width: "45%",height:"3em",borderRadius:"60px",  padding:"2em, 0 2em 0",background: "#ff3300" }}
          >
            Login
          </Button>
     
      </div>
    </div>
  );
}

export default Signin;