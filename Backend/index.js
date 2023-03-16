const express = require("express");
const Connection = require("./server/database/Connection");
const app = express();
const loginroutes = require("./server/database/Routes/Login.route");
const productroutes = require("./server/database/Routes/Post.routes");
const cors = require("cors");

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.use("/user", loginroutes);
app.use("/products", productroutes);

Connection().then(
  app.listen("4000", () => {
    console.log("Listin http://localhost:4000");
  })
);
