import express from "express";
import routes from "../routes";
import {} from "../controller/userController";
import { postRegisterViewCtr } from "../controller/videoController";

const apiRouter = express.Router();

apiRouter.get(routes.registerView, postRegisterViewCtr);

export default apiRouter;
