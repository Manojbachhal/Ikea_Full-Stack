const mongoose = require("mongoose");

const UserSchema = () => {
  mongoose.Schema({
    name: { type: String, require: true },
    lastname: { type: String },
    email: { type: String, require: true },
    phone: { type: Number },
    gender: { type: String, require: true },
    image: { type: String },
    password: { type: String, require: true },
  });
};
const User = mongoose.model("user", UserSchema);

module.exports = User;
