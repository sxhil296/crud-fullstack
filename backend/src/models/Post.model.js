import mongoose from "mongoose";

const postSchema = new mongoose.Schema({}, { timestamps: true });

export const Post = mongoose.model("Post", postSchema);
