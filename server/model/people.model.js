const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const peopleSchema = new Schema({
  name: String,
  age: Number,
  latitude: Number,
  longitude: Number,
  monthlyIncome: Number,
  experienced: Boolean
});

module.exports = mongoose.model("peoples", peopleSchema);
