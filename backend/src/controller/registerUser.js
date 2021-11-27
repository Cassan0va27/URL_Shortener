const Register = require("../models/registerUserModel");

const registerUser = async (req, res) => {
  const { name, email } = req.body;
  const passwordArray = req.body.password;
  if ((name, email, passwordArray)) {
    const password = passwordArray[0];
    try {
      const addUser = new Register({
        name: name,
        email: email,
        password: password,
      });
      const result = await addUser.save().then(res.redirect("/user/signup"));
    } catch (error) {
      res.send(error);
    }
  }
};

module.exports = { registerUser };
