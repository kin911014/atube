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
import { uploadVideo, onlyPrivate } from "../middlewares";

const videoRouter = express.Router();

//Upload
videoRouter.get(routes.upload, onlyPrivate, getUploadCtr);
videoRouter.post(routes.upload, onlyPrivate, uploadVideo, postUploadCtr);

//Video Detail
videoRouter.get(routes.videoDetail(), videoDetailCtr);

//Edit Video
videoRouter.get(routes.editVideo(), onlyPrivate, getEditVideoCtr);
videoRouter.post(routes.editVideo(), onlyPrivate, postEditVideoCtr);

//Delete Video
videoRouter.get(routes.deleteVideo(), onlyPrivate, deleteVideoCtr);

export default videoRouter;
