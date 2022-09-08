import { Schema, model } from "mongoose";
import repositorySchema from "./repository.schema";

const userSchema = new Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, reqired: true, select: false },
  photo: { type: String },
  repositories: { repositorySchema },
});

export const userModel = model("User", userSchema);
