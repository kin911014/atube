import express from "express";
import routes from "../routes";
import {
  videosCtr,
  uploadCtr,
  videoDetailCtr,
  editVideoCtr,
  deleteVideoCtr
} from "./controller/videoController";
const videoRouter = express.Router();

videoRouter.get(routes.videos, videosCtr);
videoRouter.get(routes.upload, uploadCtr);
videoRouter.get(routes.videoDetail, videoDetailCtr);
videoRouter.get(routes.editVideo, editVideoCtr);
videoRouter.get(routes.deleteVideo, deleteVideoCtr);

export default videoRouter;
