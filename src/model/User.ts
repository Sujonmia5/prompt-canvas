import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  avatar: { type: String },
  bio: { type: String },
  followers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  following: [{ type: Schema.Types.ObjectId, ref: "User" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "Prompt" }],
  createdAt: { type: Date, default: Date.now },
});

const User = models.User || model("User", UserSchema);

export default User;
