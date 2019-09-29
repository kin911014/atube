// 폴더 제작 후 npm i passport passport-local 설치 (passport-local은 username과 password를 쓰는 사용자인증방식을 의미)
import passport from "passport";
import User from "./models/User";

passport.use(User.createStrategy());
// strategy는 로그인하는 방식을 의미 괄호안에 들어간다
