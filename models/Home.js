const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const HomeSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Home", HomeSchema);
