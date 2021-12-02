const Register = require("../models/registerUserModel");

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const userExists = await Register.findOne({
    email: username,
    password: password,
  });
  if (!userExists) {
    res.status("User Not found");
  } else {
    try {
      const token = await userExists.generateToken();
      res.cookie("jwtAuthToken", token, {
        expires: new Date(Date.now() + 2700000),
        httpOnly: true,
      });
      res.redirect("/user/dashboard");
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { loginUser };
