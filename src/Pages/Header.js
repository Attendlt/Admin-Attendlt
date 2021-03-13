import React from "react";
import { Navbar } from "react-bootstrap";
import "./header.css";

let tagline = <span style={{ color: "red" }}>Attendlt</span>;

function Head() {
  return (
    <div className="navhead">
      <div className="navb"></div>
      <Navbar bg="light" variant="light" expand="lg">
        <Navbar.Brand>
          <h1> {tagline} :Admin-Panel</h1>
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
export default Head;
