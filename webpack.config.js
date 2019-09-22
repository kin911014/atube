const path = require("path");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
// 수동으로 변수설정하는법.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// __dirname은 어디에서든 접근 가능한 node.js의 전역변수
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ENTRY_FILE,
  mode: MODE,
  module: {
    // webpack에서는 위에서 아래가 아닌 아래에서 위의 순서로 실행!!
    rules: [
      {
        test: /\.(scss)$/,
        // scss를 찾는 문법
        use: ExtractCSS.extract([
          {
            loader: "css-loader"
          },
          {
            loader: "postcss-loader"
          },
          {
            loader: "sass-loader"
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].[format]"
  }
};

module.exports = config;
// export default config의 예전 문법
