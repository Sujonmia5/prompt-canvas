import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  title: { type: String, required: true },
  prompt: { type: String, required: true },
  negativePrompt: { type: String },
  image: { type: String, required: true },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
  model: { type: String },
  steps: { type: Number },
  cfg: { type: Number },
  seed: { type: String },
  aspectRatio: { type: String },
  tags: [{ type: String }],
  likes: { type: Number, default: 0 },
  saves: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
