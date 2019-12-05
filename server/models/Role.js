import mongoose from "mongoose";

let roleSchema = new mongoose.Schema({
  roleName: {
    type: String,
    required: true
  },
  capabilities: {
    type: String,
    required: true,
    enum: ["Admin", "Player"]
  }
});

let role = mongoose.model("Role", roleSchema);

exports.role = role;
exports.roleSchema = roleSchema;
