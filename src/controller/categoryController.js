import db from "../models/index";
const getAllCategories = async (req, res) => {
  try {
    const categories = await db.Category.findAll(); // Giả sử bạn có model Category
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Error fetching categories" });
  }
};

const getCategoryById = async (req, res) => {
  try {
    const category = await db.Category.findByPk(req.params.id); // Giả sử bạn có model Category
    if (!category) return res.status(404).json({ error: "Category not found" });
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Error fetching category" });
  }
};

export default {
  getAllCategories,
  getCategoryById,
};
