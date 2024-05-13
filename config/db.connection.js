const mongoose = require("mongoose");
const { DATABASE_URI } = process.env;

mongoose.connect(DATABASE_URI);

mongoose.connection
  .on("open", () => console.log("You are Connected to mongoose"))
  .on("close", () => console.log("You are Disconnected from mongoose"))
  .on("error", (error) => console.log(error));
