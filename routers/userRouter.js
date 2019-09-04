import express from "express";
import routes from "../routes";
import {
  usersCtr,
  userDetailCtr,
  editProfileCtr,
  changePasswordCtr
} from "./controller/userController";

const userRouter = express.Router();

userRouter.get(routes.editProfile, editProfileCtr);
userRouter.get(routes.changePassword, changePasswordCtr);
userRouter.get(routes.userDetail, userDetailCtr);

export default userRouter;
