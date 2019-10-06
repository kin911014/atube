// 폴더 제작 후 npm i passport passport-local 설치 (passport-local은 username과 password를 쓰는 사용자인증방식을 의미)
import passport from "passport";
import GithubStrategy from "passport-github";
import FacebookStrategy from "passport-facebook";
/* npm install passport-github 후 https://github.com/settings/applications/new 에서등록 
그리고 import실시 */
import User from "./models/User";
import {
  githubLoginCallback,
  facebookLoginCallback
} from "./controller/userController";
import routes from "./routes";

passport.use(User.createStrategy());
// strategy는 로그인하는 방식을 의미 괄호안에 들어간다

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GH_ID,
      clientSecret: process.env.GH_SECRET,
      callbackURL: `http://localhost:4000${routes.githubCallback}`
    },
    githubLoginCallback
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FB_ID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: `http://localhost:4000${routes.facebookCallback}`
    },
    facebookLoginCallback
  )
);

passport.serializeUser((user, done) => done(null, user));
// 쿠키에는 오직 user.id만 담아서 보내라는 코드
passport.deserializeUser((user, done) => done(null, user));
// 어느 사용자를 어떻게 찾는가를 담고있는 코드
