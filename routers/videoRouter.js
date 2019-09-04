import express from "express";
import routes from "../routes";
import {
  videosCtr,
  uploadCtr,
  editVideoCtr,
  deleteVideoCtr,
  videoDetailCtr
} from "../controller/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videosCtr);
videoRouter.get(routes.upload, uploadCtr);
videoRouter.get(routes.editVideo, editVideoCtr);
videoRouter.get(routes.deleteVideo, deleteVideoCtr);
videoRouter.get(routes.videoDetail, videoDetailCtr);

export default videoRouter;
