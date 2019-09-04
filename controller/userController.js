export const joinCtr = (req, res) => res.render("join", { pageTitle: "Join" });

export const loginCtr = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const logoutCtr = (req, res) =>
  res.render("logout", { pageTitle: "Logout" });

export const usersCtr = (req, res) =>
  res.render("users", { pageTitle: "Users" });

export const userDetailCtr = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfileCtr = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePasswordCtr = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
