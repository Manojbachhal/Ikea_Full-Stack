const express = require("express");
const Connection = require("./database/Connection");
const app = express();
const loginroutes = require("./database/Routes/Login.route");
const productroutes = require("./database/Routes/Post.routes");

app.use(express.json());
app.use("/user", loginroutes);
app.use("/products", productroutes);

Connection().then(
  app.listen("4000", () => {
    console.log("Listin http://localhost:4000");
  })
);
