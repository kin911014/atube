import { videos } from "../db";

export const homeCtr = (req, res) =>
  res.render("home", { pageTitle: "Home", videos });

export const searchCtr = (req, res) => {
  const {
    query: { term: searchingFor }
  } = req;
  res.render("search", { pageTitle: "Search", searchingFor });
};

export const videosCtr = (req, res) =>
  res.render("videos", { pageTitle: "Videos" });

export const uploadCtr = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetailCtr = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideoCtr = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideoCtr = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });
