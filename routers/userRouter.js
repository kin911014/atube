import express from "express";
import routes from "../routes";
import {
  userDetailCtr,
  getEditProfileCtr,
  postEditProfileCtr,
  getChangePasswordCtr,
  postChangePasswordCtr
} from "../controller/userController";
import { onlyPrivate, uploadAvatar } from "../middlewares";

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfileCtr);
userRouter.post(
  routes.editProfile,
  onlyPrivate,
  uploadAvatar,
  postEditProfileCtr
);
userRouter.get(routes.changePassword, onlyPrivate, getChangePasswordCtr);
userRouter.post(routes.changePassword, onlyPrivate, postChangePasswordCtr);
userRouter.get(routes.userDetail(), userDetailCtr);

export default userRouter;
