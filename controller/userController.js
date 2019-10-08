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

// github login part

export const githubLogin = passport.authenticate("github");

export const githubLoginCallback = async (_, __, profile, cb) => {
  console.log(_, __, profile, cb);
  const {
    _json: { id, avatar_url: avatarUrl, name, email }
  } = profile;
  try {
    const user = await User.findOne({ name });
    if (user) {
      user.githubId = id;
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      githubId: id,
      avatarUrl
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
};
// 파라미터인 accessToken,refreshToken를 사용하지 않을 때는 순서대로 언더바를 사용! 사용하지않는것은 안된다!!

export const postGithubLogin = (req, res) => {
  res.redirect(routes.home);
};

// instagram login part

export const instagramLogin = passport.authenticate("instagram");

export const instagramLoginCallback = async (_, __, profile, done) => {
  const {
    _json: {
      data: { id, profile_picture: avatarUrl, full_name: name }
    }
  } = profile;
  try {
    const user = await User.findOne({ name });
    if (user) {
      user.instagramId = id;
      user.save();
      return done(null, user);
    }
    const newUser = await User.create({
      name,
      instagramId: id,
      avatarUrl
    });
    return done(null, newUser);
  } catch (error) {
    return done(error);
  }
};

export const postInstagramLogin = (req, res) => {
  res.redirect(routes.home);
};

// facebook login part

/* export const facebookLogin = passport.authenticate("facebook");

export const facebookLoginCallback = async (_, __, profile, cb) => {
  const {
    _json: { id, name, email }
  } = profile;
  try {
    const user = await User.findOne({ email });
    if (user) {
      user.facebookId = id;
      user.avatarUrl = "";
      user.save();
      return cb(null, user);
    }
    const newUser = await User.create({
      email,
      name,
      facebookId: id
    });
    return cb(null, newUser);
  } catch (error) {
    return cb(error);
  }
  console.log(accessToken, refreshToken, profile, cb);
};

export const postFacebookLogin = (req, res) => {
  res.redirect(routes.home);
};
*/
// facebook은 https에서만 연동가능, https로 주소 변경 후 실시.

export const logoutCtr = (req, res) => {
  req.logout();
  res.redirect(routes.home);
};

export const getMe = (req, res) => {
  res.render("userDetail", { pageTitle: "User Detail", user: req.user });
};
// req.user는 현재 로그인한 사용자

export const userDetailCtr = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const user = await User.findById(id);
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const getEditProfileCtr = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const changePasswordCtr = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
