const jwt = require("jsonwebtoken");
const User = require("../models/registerUserModel");

const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtAuthToken;
    const verifyToken = jwt.verify(
      token,
      "4EW80IMZGEXIQM1ZNENU5Y8NY43LZHE4SIS4WT89"
    );

    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });

    req.token = token;
    req.rootUser = rootUser;
    req.userID = rootUser._id;
    next();
  } catch (error) {
    res.status(401).send("Unautorized: No token provided");
  }
};

module.exports = authenticate;
