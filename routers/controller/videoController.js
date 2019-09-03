export const searchCtr = (req, res) =>
  res.render("search", { pageTitle: "Search" });

export const homeCtr = (req, res) => res.render("home", { pageTitle: "Home" });

export const videosCtr = (req, res) =>
  res.render("videos", { pageTitle: "Home" });

export const uploadCtr = (req, res) =>
  res.render("upload", { pageTitle: "Home" });

export const videoDetailCtr = (req, res) =>
  res.render("videoDetail", { pageTitle: "Home" });

export const editVideoCtr = (req, res) =>
  res.render("editVideo", { pageTitle: "Home" });

export const deleteVideoCtr = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Home" });
