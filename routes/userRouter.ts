import express from 'express';
import UserController from '../controllers/UserController'

const userRouter = express.Router();
const userController = new UserController();

userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.post("/", userController.postNewUser);
userRouter.put("/:id", userController.updateUserById);
userRouter.delete("/", userController.deleteAllUsers);
userRouter.delete("/:id", userController.deleteUserById);

export default userRouter;
