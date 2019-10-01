import express from "express";
import routes from "../routes";
import {
  editProfileCtr,
  changePasswordCtr,
  userDetailCtr
} from "../controller/userController";
import { onlyPrivate } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, editProfileCtr);
userRouter.get(routes.changePassword, onlyPrivate, changePasswordCtr);
userRouter.get(routes.userDetail(), userDetailCtr);

export default userRouter;
