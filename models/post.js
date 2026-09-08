import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
      maxlength: [200, "Title cannot exceed 200 characters"],
    },
    content: {
      type: String,
      required: [true, "Content is required"],
    },
    progressStamps: {
      type: [String],
      validate: {
        validator: function (val) {
          return val.length === 4;
        },
        message: "A post must have exactly 4 progress stamps.",
      },
      required: true,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "Author is required"],
    },
    image: {
      type: String,
      default: null,
    },
    imagePublicId: {
      type: String,
      default: "",
    },
    readTime: {
      type: String,
      default: null,
    },
    category: {
      type: String,
      trim: true,
      default: "Uncategorized",
    },
    published: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
