const User = require("../../Models/UserModel/User");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const moongose = require("mongoose");
const register = async ({ name, lastname, email, password, gender }) => {
  // console.log({ name, lastname, email, password, gender });
  let alreadyExist = await User.findOne({ email });

  if (alreadyExist) {
    throw new Error("Already Registered");
  }
  let user = await User.create({
    name,
    lastname,
    email,
    password: bycrpt.hashSync(password),
    gender,
  });
  user.toJSON();
  // console.log(delete user.password);
  delete user.password;
  return user;
};

const GenerateToken = (user) => {
  let payload = {
    _id: user.id,
    email: user.email,
    name: user.name,
  };

  return jwt.sign(payload, "kasndfksdn@-dsn");
};

const login = async ({ email, password }) => {
  let user = await User.findOne({ email });
  if (user) {
    user = user.toJSON();
    if (bycrpt.compareSync(password, user.password)) {
      delete user.password;
      return {
        token: GenerateToken(user),
        data: user,
      };
    }
  }
};

const loggedin = () => {
  let user = User.findOne({ email });
  user = user.toJSON();
  delete user.password;
  return user;
};

const VarifyToken = (token) => {
  const payload = jwt.VarifyToken(token, "kasndfksdn@-dsn");
  return payload;
};

module.exports = {
  register,
  login,
  loggedin,
  VarifyToken,
};
