import React, { Component } from "react";
import { Admin ,Resource,EditGuesser} from "react-admin";
import { UserList } from './components/users';
import jsonServerProvider from "ra-data-json-server";
const express = require("express");
const app = express();
require("dotenv/config");

// PORT
const PORT = 5000;

// middlewares
app.use(express.json());

// ROUTES

// listen
app.listen(PORT, () => {
  console.log(`listeninig on http://localhost:${PORT}`);
});
const dataProvider =
  jsonServerProvider("https://jsonplaceholder.typicode.com");

class App extends Component {
  render() {
    return (
        <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} edit={EditGuesser}/>
      </Admin>
    );
  }
}
export default App;