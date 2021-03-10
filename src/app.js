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