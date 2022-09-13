import mongoose from "mongoose";

const schmaName = mongoose.Schema({
  name: { type: String, required: true, default: "fine" },
  email: String,
  dob: Number,
  age: Number,
  salary: Number,
  did: Number,
  designation: String,
  pincode: Number,
  pancard: Number,
  mobilenumber: Number,
});

export default mongoose.model("customers", schmaName);
