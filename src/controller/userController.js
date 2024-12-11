import db from "../models/index";
const getAllUsers = async (req, res) => {
  try {
    const users = await db.User.findAll(); // Giả sử bạn có model User
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Error fetching users" });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await db.User.findByPk(req.params.id); // Giả sử bạn có model User
    if (!user) return res.status(404).json({ error: "User not found" });
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error fetching user" });
  }
};
export default {
  getAllUsers,
  getUserById,
};
