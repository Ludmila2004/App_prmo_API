const mongoose = require("mongoose");
require("../models/Post");
const Post = mongoose.model("posts");

const postCreate = async (req, res) => {
  const post = new Post({
     message: req.body.message,
     name: req.body.name,
  });
  try {
    await post.save();
    return res.status(200).json({ message: "Post criado." });
  } catch (error) {
    return res.status(500).json({ message: "Falha na criação do post: " + error });
  }
};

const postFindAll = async (req, res) => {
    try {
      const posts = await Post.find().lean();
      return res.status(200).json(posts);
    } catch (error) {
      return res.status(404).json({ message: "Post not found: " + error });
    }
};

const postEdit = async (req, res) => {
    try {
      const post = await Post.findOne({ _id: req.params.id });
       post.message = req.body.message;
       post.name = req.body.name;
      try {
        await post.save();
        return res.status(200).json({ message: "Post edited." });
      } catch (error) {
        return res
          .status(500)
          .json({ message: "Post could not be edited: " + error });
      }
    } catch (error) {
      return res
        .status(404)
        .json({ message: "Post not found to edit: " + error });
    }
  };

const postDelete = async (req, res) => {
    try {
      await Post.deleteOne({ _id: req.params.id }).lean();
      return res.status(200).json({ message: "Deleted post." });
    } catch (error) {
      return res.status(404).json({ message: "Could not delete post: " + error });
    }
};

module.exports = {
    postCreate,
    postFindAll,
    postDelete,
    postEdit,
}; 