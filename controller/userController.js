import passport from "passport";
import routes from "../routes";
import User from "../models/User";

export const getJoinCtr = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoinCtr = async (req, res, next) => {
  const {
    body: { name, email, password, password2 }
  } = req;
  if (password !== password2) {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  } else {
    try {
      const user = await User({
        name,
        email
      });
      await User.register(user, password);
      next();
    } catch (error) {
      console.log(error);
      res.redirect(routes.home);
    }
  }
};

export const getLoginCtr = (req, res) =>
  res.render("login", { pageTitle: "Login" });

export const postLoginCtr = passport.authenticate("local", {
  successRedirect: routes.home,
  failureRedirect: routes.login
});

export const githubLoginCallback = (accessToken, refreshToken, profile, cb) => {
  console.log(accessToken, refreshToken, profile, cb);
};

export const logoutCtr = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const usersCtr = (req, res) =>
  res.render("users", { pageTitle: "Users" });

export const userDetailCtr = (req, res) =>
  res.render("userDetail", { pageTitle: "User Detail" });

export const editProfileCtr = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePasswordCtr = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
