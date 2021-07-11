const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, "use valid email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "password must be at least 6 ch"],
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (el) {
        return el === this.password;
      },
    },
  },
  role: {
    type: String,
    enum: ["user"],
    default: "user",
  },
});

adminSchema.pre("save", async function (next) {
  if (!this.isModified) {
    return next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  this.confirmPassword = undefined;
  next();
});
adminSchema.methods.check = async function (currentPassword) {
  return await bcrypt.compare(currentPassword, this.password);
};

adminSchema.methods.getToken = async function () {
  return await jwt.sign({ id: this._id }, process.env.key, {
    expiresIn: process.env.exp,
  });
};

const adminModel = mongoose.model("adminPanel", adminSchema);

module.exports = adminModel;
