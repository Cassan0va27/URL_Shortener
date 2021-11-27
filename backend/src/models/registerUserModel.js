const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

registerSchema.methods.generateToken = async function () {
  try {
    let token = jwt.sign(
      { _id: this._id },
      "4EW80IMZGEXIQM1ZNENU5Y8NY43LZHE4SIS4WT89"
    );
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Register = new mongoose.model("user", registerSchema);

module.exports = Register;
