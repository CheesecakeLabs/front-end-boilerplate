const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const dotenv = require("dotenv");

dotenv.config();

const isProduction = process.env.APP_ENV === "production";

module.exports = {
  entry: {
    app: [path.resolve(__dirname, "src", "index.js")]
  },
  mode: process.env.APP_ENV,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: isProduction ? "[name].[hash].js" : "[name].js",
    publicPath: "/static/",
    hotUpdateChunkFilename: "hot/hot-update.js",
    hotUpdateMainFilename: "hot/hot-update.json"
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: isProduction ? "[name].[hash].css" : "bundle.css",
      chunkFilename: isProduction ? "[id].[hash].css" : "bundle.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: isProduction
                  ? "[hash:base64:5]"
                  : "[name]_[local]__[hash:base64:5]"
              }
            }
          },
          "postcss-loader"
        ]
      }
    ]
  }
};
