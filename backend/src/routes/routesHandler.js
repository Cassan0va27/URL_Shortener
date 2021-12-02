const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: false }));
const { loginUser } = require("../controller/loginUser");
const { registerUser } = require("../controller/registerUser");
const { aboutUser } = require("../controller/aboutUser");
const authenticate = require("../middleware/authenticate");
const { generateLink } = require("../controller/generateLink");

const router = express.Router();

router.route("/login").post(loginUser);

router.route("/user/register").post(registerUser);

router.get("/user/about", authenticate, (req, res) => {
  res.send(req.rootUser);
});

router.get("/logout", authenticate, (req, res) => {
  res.clearCookie("jwtAuthToken", { path: "/" });
  res.status(200).send("Logout Done");
});

router.route("/newlink").post(authenticate, generateLink);

module.exports = router;
