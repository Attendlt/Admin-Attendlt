import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { auth, db } from "../firebase";

function Home() {
  const [{ admin }] = useStateValue();
  const history = useHistory();

  const [institutesName, setInstitutesName] = useState([]);
  const [institutesEmail, setInstitutesEmail] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      if (admin) {
        await db
          .collection("institutes")
          .get()
          .then((snapshots) => {
            console.log(snapshots.size);
            snapshots.forEach((snapshot) => {
              const { instituteId, email } = snapshot.data();
              console.log(instituteId, email);
              setInstitutesName((oldNames) => [...oldNames, instituteId]);
              setInstitutesEmail((oldEmails) => [...oldEmails, email]);
              setInstitutes([...institutes, snapshot.data()]);
              console.log(institutes);
            });
          });
      }
    };

    fetchAdminData();

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
