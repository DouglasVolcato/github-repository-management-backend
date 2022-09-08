import { Schema, model } from "mongoose";
import repoSchema from "./repo.schema.js";

const userSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true, unique: true },
  email: { type: String, reqired: true, select: false },
  photo: { type: String },
  repositories: [repoSchema],
});

export const userModel = model("User", userSchema);
