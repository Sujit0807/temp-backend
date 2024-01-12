const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    role: {
      type: String,
      required: [true, "Please add a role"]
    },
    email: {
      type: String,
      required: [true, "Please add a email"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);
