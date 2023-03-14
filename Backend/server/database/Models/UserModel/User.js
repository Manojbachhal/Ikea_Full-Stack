const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: { type: String, require: true },
    lastname: { type: String, require: true },
    email: { type: String, require: true },
    phone: { type: Number },
    gender: { type: String, require: true },
    password: { type: String, require: true },
    // ..
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("user", UserSchema);

module.exports = User;
