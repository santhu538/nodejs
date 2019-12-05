import mongoose from "mongoose";
mongoose.Promise = global.Promise;
const test1Schema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
const test1 = mongoose.model("Test1", test1Schema);

exports.test1 = test1;
exports.test1Schema = test1Schema;
