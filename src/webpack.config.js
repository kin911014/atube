const path = require("path");
const autoprefixer = require("autoprefixer");
const ExtractCSS = require("extract-text-webpack-plugin");

const MODE = process.env.WEBPACK_ENV;
// 수동으로 변수설정하는법.
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
// __dirname은 어디에서든 접근 가능한 node.js의 전역변수
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  module: {
    // webpack에서는 위에서 아래가 아닌 아래에서 위의 순서로 실행!!
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader"
          }
        ]
      },
      {
        test: /\.(scss)$/,
        // scss를 찾는 문법
        use: ExtractCSS.extract([
          // 순서4 ExtractCSS로 아래의 가져온 css부분을 추출!
          {
            loader: "css-loader"
            // 순서3 css를 가져와준다
          },
          {
            loader: "postcss-loader",
            // 순서2 특정 plugin들을 css에 대해 실행시켜준다
            options: {
              plugins() {
                return [autoprefixer({ Browserslist: "cover 99.5%" })];
              }
            }
          },
          {
            loader: "sass-loader"
            // 순서1 sass를 css로 옮겨주는 역할
          }
        ])
      }
    ]
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js"
  },
  plugins: [new ExtractCSS("styles.css")]
};

module.exports = config;
// export default config의 예전 문법
