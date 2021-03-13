import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";

import './Signin.css';

function SEmail() {
  const [InsName, setInsName] = useState("");
  const [InsId, setInsId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (InsName && InsId) {
            console.log("Login Successful!!");
    }
  };

  return (<div className="Inst">
          <div className="form">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Institute Name</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Institute Name"
              value={InsName}
              onChange={(e) => setInsName(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Institute ID</Form.Label>
            <span>          </span>
            <Form.Control
              type="text"
              placeholder="Enter Institute Id here"
              value={InsId}
              onChange={(e) => setInsId(e.target.value)}
            />
          </Form.Group>
                    <Button
            type="submit" variant="contained" color="secondary"
          >
            Join
          </Button>
        </Form>
      </div>
      </div>
  );
}

export default SEmail;