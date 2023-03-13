const express = require("express");
const Connection = require("./database/Connection");
const app = express();
const loginroutes = require("./database/Routes/LoginRoute");

app.use("/user", loginroutes);

Connection().then(
  app.listen("4000", () => {
    console.log("Listin http://localhost:3000");
  })
);
