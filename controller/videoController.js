import routes from "../routes";

export const homeCtr = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const searchCtr = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;
  res.render("search", { pageTitle: "Search", searchingFor, videos });
};

export const getUploadCtr = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const postUploadCtr = (req, res) => {
  const {
    body: { videoFile, title, description }
  } = req;
  res.redirect(routes.videoDetail(122222));
};

export const videoDetailCtr = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideoCtr = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideoCtr = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });