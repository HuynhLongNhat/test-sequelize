// routes/appRoutes.js
import express from "express";
import userController from "../controller/userController.js";
import postController from "../controller/postController.js";
import commentController from "../controller/commentController.js";
import categoryController from "../controller/categoryController.js";

const router = express.Router();

const initWebRoutes = (app) => {
  // Routes liên quan đến Users
  router.get("/users", userController.getAllUsers);
  router.get("/users/:id", userController.getUserById);

  // Routes liên quan đến Posts
  router.get("/posts", postController.getAllPosts);
  router.get("/posts/:id", postController.getPostById);

  // Routes liên quan đến Comments
  router.get("/comments", commentController.getAllComments);
  router.get("/comments/:id", commentController.getCommentById);

  // Routes liên quan đến Categories
  router.get("/categories", categoryController.getAllCategories);
  router.get("/categories/:id", categoryController.getCategoryById);

  // Gắn router vào app
  return app.use("/api", router);
};

export default initWebRoutes;
