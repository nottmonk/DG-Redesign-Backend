const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const AdsSchema = new Schema({
  name: String,
});

module.exports = mongoose.model("Ads", AdsSchema);
