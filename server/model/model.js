const mongoose = require("mongoose");

var schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: String,
    status: String,
  },
  { collection: "app" }
);

const Userdb = mongoose.model("app", schema);

module.exports = Userdb;
