const { Schema, model, Types } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true, trim: true },
  password: { type: String, required: true },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
