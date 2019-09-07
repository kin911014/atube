import express from "express";
import routes from "../routes";
import { homeCtr, searchCtr } from "../controller/videoController";
import {
  logoutCtr,
  getJoinCtr,
  postJoinCtr,
  getLoginCtr,
  postLoginCtr
} from "../controller/userController";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoinCtr);
globalRouter.post(routes.join, postJoinCtr);

globalRouter.get(routes.login, getLoginCtr);
globalRouter.post(routes.login, postLoginCtr);

globalRouter.get(routes.logout, logoutCtr);
globalRouter.get(routes.home, homeCtr);
globalRouter.get(routes.search, searchCtr);

export default globalRouter;
