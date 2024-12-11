import db from "../models/index";
const getAllComments = async (req, res) => {
  try {
    const comments = await db.Comment.findAll(); // Giả sử bạn có model Comment
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comments" });
  }
};

const getCommentById = async (req, res) => {
  try {
    const comment = await db.Comment.findByPk(req.params.id); // Giả sử bạn có model Comment
    if (!comment) return res.status(404).json({ error: "Comment not found" });
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error fetching comment" });
  }
};

export default {
  getAllComments,
  getCommentById,
};
