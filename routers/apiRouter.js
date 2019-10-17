import express from "express";
import routes from "../routes";
import {
  postRegisterViewCtr,
  postAddComment
} from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterViewCtr);
apiRouter.post(routes.addComment, postAddComment);

export default apiRouter;
