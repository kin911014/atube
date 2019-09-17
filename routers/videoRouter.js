import express from "express";
import routes from "../routes";
import {
  deleteVideoCtr,
  videoDetailCtr,
  getUploadCtr,
  postUploadCtr,
  postEditVideoCtr,
  getEditVideoCtr
} from "../controller/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, getUploadCtr);
videoRouter.post(routes.upload, uploadVideo, postUploadCtr);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetailCtr);

//Edit Video
videoRouter.get(routes.editVideo(), getEditVideoCtr);
videoRouter.post(routes.editVideo(), postEditVideoCtr);

//Delete Video
videoRouter.get(routes.deleteVideo(), deleteVideoCtr);

export default videoRouter;
