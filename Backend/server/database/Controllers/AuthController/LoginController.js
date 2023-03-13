const User = require("../../Models/UserModel/User");
const bycrpt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async ({ name, lastname, email, image, password }) => {
  let user = await User.find({ email });
  if (user) {
    return new Error("Already Registered");
  }
  user = {
    name,
    lastname,
    email,
    image,
    password: bycrpt.hashSync(password),
  };
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
  let user = await User.find({ email });
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
