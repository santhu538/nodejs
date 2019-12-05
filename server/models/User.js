import mongoose from "mongoose";
const { roleSchema } = require("Role");
const { socialMediaProfileSchema } = require("SocialMediaProfile");

let userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  email: {
    type: String,
    required: true
  },
  appRoles: [
    {
      type: roleSchema,
      required: true
    }
  ],
  socialMediaProfiles: [
    {
      type: socialMediaProfileSchema
    }
  ]
});

let user = mongoose.model("User", userSchema);

exports.userSchema = userSchema;
exports.user = user;
