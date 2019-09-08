import express from "express";
import routes from "../routes";
import {
  editVideoCtr,
  deleteVideoCtr,
  videoDetailCtr,
  getUploadCtr,
  postUploadCtr
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUploadCtr);
videoRouter.post(routes.upload, postUploadCtr);

videoRouter.get(routes.editVideo, editVideoCtr);
videoRouter.get(routes.deleteVideo, deleteVideoCtr);
videoRouter.get(routes.videoDetail(), videoDetailCtr);

export default videoRouter;
