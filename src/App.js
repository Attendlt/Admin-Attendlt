import React, { Component } from "react";
import { Admin, Resource, EditGuesser } from "react-admin";
import { UserList, UserEdit } from "./components/users";
import { UserCreate } from "./components/admin";
import jsonServerProvider from "ra-data-json-server";
import authProvider from "./components/authProvider";
// const express = require("express");
// const app = express();
// require("dotenv/config");

// // PORT
// const PORT = 5000;

// // middlewares
// app.use(express.json());

// // ROUTES

// // listen
// app.listen(PORT, () => {
//   console.log(`listeninig on http://localhost:${PORT}`);
// });
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
        <div>
      <Admin dataProvider={dataProvider} authProvider={authProvider}>
        <Resource
          name="users"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
        />
      </Admin>
      </div>
    );
  }
}
export default App;
