import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { Button } from "@material-ui/core";
import axios from "axios";
import "./Signin.css";
import { db } from "../firebase";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Alert, AlertTitle } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

function Institute() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [InsId, setInsId] = useState("");

  const [showAlert, setShowAlert] = useState(false);

  const [showBackDrop, setShowBackDrop] = useState(false);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password && InsId) {
      setShowBackDrop(true);

      await axios
        .post("/.netlify/functions/signup", {
          email: email,
          password: password,
        })
        .then(async (res) => {
          const { uid, email, message } = res.data;
          // console.log(uid, email, message);
          await db
            .collection("institutes")
            .doc(uid)
            .set({
              instituteId: InsId,
              email: email,
            })
            .then(async () => {
              // tell the admin that the institute is added successfully
              console.log("User added successfully");
              setEmail("");
              setInsId("");
              setPassword("");
              setShowAlert(true);
            })
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));

      setShowBackDrop(false);
    }
  };

  return (
    <div>
      <Collapse in={showAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          severity="success"
        >
          <AlertTitle>
            Success user added — <strong>successfully!</strong>
          </AlertTitle>
        </Alert>
      </Collapse>

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

        <Backdrop className={classes.backdrop} open={showBackDrop}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    </div>
  );
}

export default Institute;
