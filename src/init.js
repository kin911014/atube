import "@babel/polyfill";
import dotenv from "dotenv";
import "./db";
import app from "./app";

dotenv.config();

import "./models/Video";
import "./models/Comment";
import "./models/User";

// 리스너 제한 수정
process.setMaxListeners(15);

const PORT = process.env.PORT;

const handleListening = () =>
  console.log(`✅  Listening on:http://localhost:${PORT}`);

app.listen(PORT, handleListening);
