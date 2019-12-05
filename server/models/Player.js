import mongoose from "mongoose";

let playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
});
