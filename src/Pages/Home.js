import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { auth } from "../firebase";
import axios from "axios";

function Home() {
  const [{ admin }] = useStateValue();
  const history = useHistory();

  const [data, setData] = useState([]);

  useEffect(() => {
    const routeAccess = admin ? "getInstitutes" : "getInstituteData";

    // axios.post(`/.netlify/functions/${routeAccess}`);

    return () => {};
  }, []);

  return (
    <div>
      {admin && (
        <span className="btn">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/create-new-institute")}
          >
            +Create
          </Button>
        </span>
      )}

      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          auth.signOut();
        }}
      >
        Signout
      </Button>
    </div>
  );
}

export default Home;
