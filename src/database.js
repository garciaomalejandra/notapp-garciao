const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost/notapp-db")
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));
