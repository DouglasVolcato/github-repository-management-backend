import { Schema } from "mongoose";

export const repositorySchema = new Schema({
  name: { type: String, required: true },
  link: { type: String, required: true },
  priority: { type: String, required: true },
  note: { type: String, required: true },
});
