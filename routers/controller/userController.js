export const joinCtr = (req, res) => res.render("join", { pageTitle: "Home" });

export const loginCtr = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const logoutCtr = (req, res) =>
  res.render("logout", { pageTitle: "Home" });

export const usersCtr = (req, res) =>
  res.render("users", { pageTitle: "Home" });

export const userDetailCtr = (req, res) =>
  res.render("userDetail", { pageTitle: "Home" });

export const editProfileCtr = (req, res) =>
  res.render("editProfile", { pageTitle: "Home" });

export const changePasswordCtr = (req, res) =>
  res.render("changePassword", { pageTitle: "Home" });
