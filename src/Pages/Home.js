import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { auth, db } from "../firebase";
import { DataGrid } from "@material-ui/data-grid";

function Home() {
  const [{ admin, uid }] = useStateValue();
  const history = useHistory();

  // const [institutesName, setInstitutesName] = useState([]);
  // const [institutesEmail, setInstitutesEmail] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchAdminData = async () => {
      if (admin) {
        await db
          .collection("institutes")
          .get()
          .then((snapshots) => {
            setInstitutes(
              snapshots.docs.map((doc) => ({
                id: doc.id,
                email: doc.data().email,
                instituteId: doc.data().instituteId,
              }))
            );
            console.log(institutes);
          });
      } else {
      }
    };

    fetchAdminData();

    return () => {};
  }, []);

  return (
    <div style={{ marginTop: 80 }}>
      {admin && (
        <span className="btn">
          <Button
            variant="contained"
            color="primary"
            onClick={() => history.push("/create-new-institute")}
          >
            +Create
          </Button>
          &nbsp; &nbsp;
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

      {/* <DataGrid
        pageSize={5}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
        {...institutes}
      /> */}
    </div>
  );
}

export default Home;
