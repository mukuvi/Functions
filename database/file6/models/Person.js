import mongoose from "mongoose";

const personSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  description: { type: String },
});

const personModel = new mongoose.model("person", personSchema);
export default personModel;
