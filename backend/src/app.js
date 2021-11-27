const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
app.use(cookieParser());
const port = process.env.PORT || 3001;
const loginRoute = require("./routes/routesHandler");
require("./db/conn");
require("./models/loginModel");

app.use(express.urlencoded({ extended: false }));
app.use("/", loginRoute);
app.use("/user/register", loginRoute);
app.listen(port, () => {
  console.log(`Connection Successfull at ${port}`);
});
