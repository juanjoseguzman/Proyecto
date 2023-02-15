import express from "express";
import userController from "../controller/userController.js";

const userRouter = express.Router();

userRouter.post("/", userController.addUser);

userRouter.post("/login", userController.loginUser);

userRouter.get("/:id", userController.getUserById);

userRouter.patch("/:id", userController.updateUser);

export default userRouter;
