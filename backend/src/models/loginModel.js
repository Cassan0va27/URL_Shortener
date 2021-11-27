const mongoose = require("mongoose");
const login = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: Date,
  lastLogin: {
    type: Date,
    default: Date.now,
  },
  active: Boolean,
});

const Login = new mongoose.model("userLogin", login);

module.exports = Login;
