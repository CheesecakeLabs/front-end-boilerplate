const path = require("path");

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
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015']
            }
          },
          {
            test: /\.css$/i,
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          {
            test: /\.html$/,
            use: ['html-loader']
          },
          {
            test: /\.(jpg|png)$/,
            use: [
              {
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: 'img/',
                  publicPath: 'img/'
                }
              }
            ]
          }
        ]
      }
    ]
  }
};
