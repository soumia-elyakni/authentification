var mongoose = require("mongoose");

const userRole = new mongoose.Schema({
  role: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model("Role", userRole);
