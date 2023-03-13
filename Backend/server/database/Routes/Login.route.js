const express = require("express");
const router = express.Router();
const User = require("../Models/UserModel/User");
const {
  register,
  login,
  loggedin,
  VarifyToken,
} = require("../Controllers/AuthController/LoginController");

router.post("/register", async (req, res) => {
  try {
    const { name, lastname, email, image, password } = req.body;
    const user = await register({ name, lastname, email, image, password });
    if (user) {
      res.send = {
        massage: "Registration sucessfull",
        data: user,
      };
    }
  } catch (error) {
    res.status(500).send(new Error("Already Registered"));
  }
});

router.get("/loggedin", async (req, res) => {
  let header = req.header;
  if (header) {
    const token = header.split(" ").pop();

    try {
      const payload = VarifyToken(token);
      let user = await loggedin(payload.email);

      res.send({
        data: user,
      });
    } catch (error) {
      res.status(400).send("something went wrong");
    }
  } else {
    res.status(500).send({ message: "user is not logged in" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await login({ email, password });
    res.send({
      message: "Login successful",
      user,
    });
  } catch (error) {
    res.status(400).send("User Not Found");
  }
});
