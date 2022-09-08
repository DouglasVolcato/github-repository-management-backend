import { Schema } from "mongoose";

export const repoSchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  priority: { type: String, required: true },
  note: { type: String, required: true },
});
