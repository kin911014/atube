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
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoinCtr);
globalRouter.post(routes.join, onlyPublic, postJoinCtr, postLoginCtr);

globalRouter.get(routes.login, onlyPublic, getLoginCtr);
globalRouter.post(routes.login, onlyPublic, postLoginCtr);

globalRouter.get(routes.logout, onlyPublic, logoutCtr);
globalRouter.get(routes.home, homeCtr);
globalRouter.get(routes.search, searchCtr);

export default globalRouter;
