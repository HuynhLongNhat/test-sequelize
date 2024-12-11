// Controller: postController.js
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll(); // Giả sử bạn có model Post
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Error fetching posts" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findByPk(req.params.id); // Giả sử bạn có model Post
    if (!post) return res.status(404).json({ error: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Error fetching post" });
  }
};

export default {
  getAllPosts,
  getPostById,
};
