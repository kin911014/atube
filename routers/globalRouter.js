import express from "express";
import passport from "passport";
import routes from "../routes";
import { homeCtr, searchCtr } from "../controller/videoController";
import {
  logoutCtr,
  getJoinCtr,
  postJoinCtr,
  getLoginCtr,
  postLoginCtr,
  githubLogin,
  postGithubLogin,
  getMe,
  // facebookLogin,
  // facebookCallback,
  // postFacebookLogin,
  instagramLogin,
  postInstagramLogin
} from "../controller/userController";
import { onlyPublic } from "../middlewares";

const globalRouter = express.Router();

globalRouter.get(routes.join, onlyPublic, getJoinCtr);
globalRouter.post(routes.join, onlyPublic, postJoinCtr, postLoginCtr);

globalRouter.get(routes.login, onlyPublic, getLoginCtr);
globalRouter.post(routes.login, onlyPublic, postLoginCtr);

globalRouter.get(routes.logout, logoutCtr);
globalRouter.get(routes.home, homeCtr);
globalRouter.get(routes.search, searchCtr);

// github login part

globalRouter.get(routes.github, githubLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("github", { failureRedirect: "/login" }),
  postGithubLogin
);

globalRouter.get(routes.me, getMe);

// github login part

globalRouter.get(routes.instagram, instagramLogin);
globalRouter.get(
  routes.githubCallback,
  passport.authenticate("instagram", { failureRedirect: "/login" }),
  postInstagramLogin
);

// facebook login part

/* globalRouter.get(routes.facebook, facebookLogin);
globalRouter.get(
  routes.facebookCallback,
  passport.authenticate("facebook", { failureRedirect: "/login" }),
  postFacebookLogin
);
*/
// facebook은 https에서만 연동가능, https로 주소 변경 후 실시.

export default globalRouter;
