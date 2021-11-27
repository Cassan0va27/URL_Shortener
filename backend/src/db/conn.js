const mongoose = require("mongoose");

//Password=pE1n0KK3VD8Okas5

mongoose
  .connect(
    "mongodb+srv://admin:pE1n0KK3VD8Okas5@cluster0.78hnl.mongodb.net/urlHandler?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Connection Sucessfull bhava");
  })
  .catch((e) => console.log(e));
