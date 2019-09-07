import express from "express";
import routes from "../routes";
import { homeCtr, searchCtr } from "../controller/videoController";
import {
  joinCtr,
  loginCtr,
  logoutCtr,
  getJoinCtr,
  postJoinCtr
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinCtr);
globalRouter.post(routes.join, postJoinCtr);

globalRouter.get(routes.home, homeCtr);
globalRouter.get(routes.login, loginCtr);
globalRouter.get(routes.logout, logoutCtr);
globalRouter.get(routes.search, searchCtr);

export default globalRouter;
