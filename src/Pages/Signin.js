import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import './Signin.css';

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
            console.log("Login Successful!!");
    }
  };

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
        <Form onSubmit={handleSubmit} className="form">
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            style={{ width: "45%", background: "#ff3300" }}
          >
            Login
          </Button>
        </Form>
      </div>
      </div>
    </div>
  );
}

export default Signin;