import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import passport from "passport";
import mongoose from "mongoose";
import session from "express-session";
import MongoStore from "connect-mongo";
import apiRouter from "./routers/apiRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";
import routes from "./routes";
import { localsMiddleware } from "./middlewares";

import "./passport";

const app = express();

const CookieStore = MongoStore(session);

app.use(helmet());
app.set("view engine", "pug");
app.use("/uploads", express.static("uploads"));
// 예제로 만듬 실제로 위와같이 사용x
app.use("/static", express.static("static"));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: false,
    store: new CookieStore({ mongooseConnection: mongoose.connection })
    // 저장소와 db를 연결해준다 위의 결과로 쿠키를 계속 보존 및 로그인 상태를 계속 유지
  })
);
app.use(passport.initialize());
app.use(passport.session());
// 세션은 npm install express-session을 해줘야 작동
app.use(localsMiddleware);

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);
app.use(routes.api, apiRouter);

export default app;
