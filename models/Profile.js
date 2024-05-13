const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema(
  {
    name: String,
    email: String,
    password: String,
    userid: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Profile", ProfileSchema);
