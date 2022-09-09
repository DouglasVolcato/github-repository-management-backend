import mongoose from "mongoose";
import repoSchema from "./repo.schema.js";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, reqired: true, unique: true },
  password: { type: String, reqired: true, select: false },
  photo: { type: String },
  repositories: [repoSchema],
});

export const userModel = mongoose.model("User", userSchema);
