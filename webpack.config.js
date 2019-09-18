const path = require("path");

const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// __dirname은 어디에서든 접근 가능한 node.js의 전역변수
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};

module.exports = config;
