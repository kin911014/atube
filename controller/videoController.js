import routes from "../routes";
import Video from "../models/Video";

export const homeCtr = async (req, res) => {
  try {
    const videos = await Video.find({});
    res.render("home", { pageTitle: "Home", videos });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [] });
  }
};

export const searchCtr = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;
  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

export const getUploadCtr = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUploadCtr = async (req, res) => {
  const {
    body: { title, description },
    file: { path }
  } = req;
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    description
  });
  console.log(newVideo);
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetailCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Video.findById(id);
    res.render("videoDetail", { pageTitle: "Video Detail", video });
  } catch (error) {
    console.log(error);
    res.redirect(routes.home);
  }
};

export const editVideoCtr = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideoCtr = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
