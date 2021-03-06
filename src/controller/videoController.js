import routes from "../routes";
import Video from "../models/Video";
import Comment from "../models/Comment";

// HOME 콘트롤러

export const homeCtr = async (req, res) => {
  try {
    const videos = await Video.find({}).sort({ _id: -1 });
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

// SEARCH 콘트롤러

export const searchCtr = async (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;
  let videos = [];
  try {
    videos = await Video.find({
      title: { $regex: searchingFor, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

// UPLOAD 콘트롤러

export const getUploadCtr = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUploadCtr = async (req, res) => {
  const {
    body: { title, description },
    file: { location }
  } = req;
  const newVideo = await Video.create({
    fileUrl: location,
    title,
    description,
    creator: req.user.id
  });
  req.user.videos.push(newVideo.id);
  req.user.save();
  res.redirect(routes.videoDetail(newVideo.id));
};

// VIDEO DETAIL 콘트롤러

export const videoDetailCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id)
      .populate("creator")
      .populate("comments");
    // populate는 video객체의 전부를 가져오는 것, 오직 objectID 타입에만 사용가능
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// EDIT VIDEO 콘트롤러

export const getEditVideoCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    // if (video.creator !== req.user.id) {
    //   throw Error();
    // } else {
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
    // }
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const postEditVideoCtr = async (req, res) => {
  const {
    params: { id },
    body: { title, description }
  } = req;
  try {
    await Video.findOneAndUpdate({ _id: id }, { title, description });
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

// DELETE VIDEO 콘트롤러

export const deleteVideoCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    if (video.creator !== req.user.id) {
      throw Error();
    } else {
      await Video.findOneAndRemove({ _id: id });
    }
  } catch (error) {
    console.log(error);
  }
  res.redirect(routes.home);
};

// Register Video View API

export const postRegisterViewCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    video.views += 1;
    video.save();
    res.status(200);
    // res.status(200);은 정상작동을 의미
  } catch (error) {
    res.status(400);
    // res.status(400);은 에러를 의미
  } finally {
    res.end();
  }
};

// POST

export const postAddComment = async (req, res) => {
  const {
    params: { id },
    body: { comment },
    user
  } = req;
  try {
    const video = await Video.findById(id);
    const newComment = await Comment.create({
      text: comment,
      creator: user.id
    });
    video.comments.push(newComment.id);
    video.save();
  } catch (error) {
    res.status(400);
  } finally {
    res.end();
  }
};
