import mongoose from "mongoose";
const { test1Schema } = require("./test1");

mongoose.Promise = global.Promise;
const test2 = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  testobj: [{ type: test1Schema }],
  description: {
    type: String,
    required: true
  }
});
export default mongoose.model("Test2", test2);
