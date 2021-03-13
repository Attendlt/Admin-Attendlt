import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

import "./Signin.css";

function SEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InsPhone, setInsPhone] = useState("");
  const [InsId, setInsId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && InsPhone && InsId) {
      console.log("Login Successful!!");
    }
  };

  return (
    <div className="Inst">
      <div className="form">
        <Form onSubmit={handleSubmit}>
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
            <span> </span>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Institute Phone</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Institute Name"
              value={InsPhone}
              onChange={(e) => setInsPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Institute ID</Form.Label>
            <span> </span>
            <Form.Control
              type="text"
              placeholder="Enter Institute Id here"
              value={InsId}
              onChange={(e) => setInsId(e.target.value)}
            />
          </Form.Group>
          &nbsp; &nbsp;
          <Button type="submit" variant="contained" color="secondary">
            Join
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SEmail;
