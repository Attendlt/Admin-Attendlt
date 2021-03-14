import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useStateValue } from "../StateProvider";
import { useHistory } from "react-router";
import { db } from "../firebase";
import { DataGrid } from "@material-ui/data-grid";
import { CSVLink, CSVDownload } from "react-csv";

const adminCol = [
  { field: "email", headerName: "Email", width: 300 },
  { field: "instituteId", headerName: "Institute ID", width: 500 },
];

const usersCol = [
  { field: "email", headerName: "Email", width: 300 },
  { field: "name", headerName: "Name", width: 300 },
];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

function Home() {
  const [
    { admin, uid, instituteId, storedUsers, storedInstitutes },
    dispatch,
  ] = useStateValue();
  const history = useHistory();

  // const [institutesName, setInstitutesName] = useState([]);
  // const [institutesEmail, setInstitutesEmail] = useState([]);
  const [institutes, setInstitutes] = useState([]);
  let users = [];

  useEffect(() => {
    const fetchData = async () => {
      if (admin) {
        if (storedInstitutes === null) {
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

              dispatch({
                type: "SET_INSTITUTES",
                storedInstitutes: institutes,
              });
            });
        } else {
          setInstitutes(storedInstitutes);
        }
      } else {
        if (instituteId === null) {
          await db
            .collection("institutes")
            .doc(uid)
            .get()
            .then((doc) => {
              if (doc.exists) {
                dispatch({
                  type: "SET_INST_ID",
                  instituteId: doc.data().instituteId,
                });
              }
            });
        }

        if (storedUsers === null) {
          await db
            .collection("users")
            .where("instituteId", "==", instituteId)
            .get()
            .then((snapshots) => {
              snapshots.docs.map((doc) => {
                users.push({
                  id: doc.id,
                  name: doc.data().name,
                  email: doc.data().email,
                });
              });
              // snapshots.docs.map((doc) => ({
              //   id: doc.id,
              //   name: doc.data().name,
              //   email: doc.data().email,
              // }))
              dispatch({
                type: "SET_USERS",
                storedUsers: users,
              });
            });
        } else {
          users = storedUsers;
        }
      }
    };

    fetchData();

    return () => {};
  }, [
    dispatch,
    instituteId,
    institutes,
    storedInstitutes,
    storedUsers,
    uid,
    users,
    admin,
  ]);

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
      {/* for admin */}
      {admin && (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={institutes}
              columns={adminCol}
              pageSize={5}
              checkboxSelection
            />
          </div>
          {/* extra json to csv */}
          &nbsp; &nbsp; &nbsp;
          <CSVLink data={institutes}>
            <Button variant="contained" color="default">
              Download DATA
            </Button>
          </CSVLink>
        </>
      )}

      {/* for institute */}
      {!admin && (
        <>
          <div style={{ height: 400, width: "100%" }}>
            <DataGrid
              rows={users}
              columns={usersCol}
              pageSize={5}
              checkboxSelection
            />
          </div>
          {/* extra json to csv */}
          &nbsp; &nbsp; &nbsp;
          <CSVLink data={users}>
            <Button variant="contained" color="default">
              Download DATA
            </Button>
          </CSVLink>
        </>
      )}
    </div>
  );
}

export default Home;
