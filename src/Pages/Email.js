import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

import "./Signin.css";

function SEmail() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      await axios
        .get("/.netlify/functions/signin")
        .then(async (res) => {
          const token = res?.data?.token;

          if (token) {
            await auth
              .signInWithCustomToken(token)
              .then(async (userCredential) => {
                const user = userCredential.user;
                if (!user.email) {
                  await user
                    .updateEmail(email)
                    .then(() => console.log("Ho gya ab, bhad ma ja ab..."))
                    .catch((err) => console.log(err));
                }
              })
              .catch((err) => console.log(err.code, err.message));
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="email">
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

          <Button type="submit" variant="contained" color="secondary">
            Login
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SEmail;
