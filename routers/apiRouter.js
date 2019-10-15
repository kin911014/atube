import express from "express";
import routes from "../routes";
import { postRegisterViewCtr } from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.post(routes.registerView, postRegisterViewCtr);

export default apiRouter;
