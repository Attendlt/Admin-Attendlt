import { AppBar, Toolbar } from "@material-ui/core";
import React from "react";
import { Navbar } from "react-bootstrap";
import "./header.css";
import {Button} from '@material-ui/core';
let tagline = <span style={{paddingRight:'65%'}}>    Attendlt : Virtualizing the future!  ~Admin-Panel</span>;


export default function Header() {
    const displayDesktop = () => {
        return<>
        <Toolbar>
            {tagline}
            <Button variant="contained" color="primary" style={{marginRight:0}}>Profile</Button>    
    </Toolbar></>;
  };
  
  return (
    <header>
      <AppBar>{displayDesktop()}
      </AppBar> 
    </header>
  );
}