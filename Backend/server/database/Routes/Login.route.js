const express = require("express");
const router = express.Router();
const {
  register,
  login,
  loggedin,
  VarifyToken,
} = require("../Controllers/AuthController/LoginController");

router.post("/register", async (req, res) => {
  try {
    const { name, lastname, email, password, gender } = req.body;
    let user = await register({ name, lastname, email, password, gender });
    // console.log("first", user);

    res.send({
      massage: "Registration sucessfull",
      data: user,
    });
    res.send("hello");
  } catch (error) {
    res.status(500).send(new Error("Already Registered"));
  }
});

router.get("/loggedin", async (req, res) => {
  let header = req.header;
  const authheader = header["authorization"];
  if (authheader) {
    const token = authheader.split(" ").pop();

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

module.exports = router;
