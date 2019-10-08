import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest: "uploads/videos/" });
const multerAvatar = multer({ dest: "uploads/avatars/" });
// 위는 아마존 대체 시 제거

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "Atube";
  res.locals.routes = routes;
  res.locals.loggedUser = req.user || null;
  // req.user는 로그인된 유저를 의미
  next();
};

export const onlyPublic = (req, res, next) => {
  if (req.user) {
    res.redirect(routes.home);
  } else {
    next();
  }
};

export const onlyPrivate = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect(routes.home);
  }
};

export const uploadVideo = multerVideo.single("videoFile");
export const uploadAvatar = multerAvatar.single("avatar");
// single("pug의 해당 input 이름으로 설정")
