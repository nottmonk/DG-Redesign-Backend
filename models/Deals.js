const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const DealsSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Deals", DealsSchema);
