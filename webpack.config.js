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
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: ["html-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "img/",
              publicPath: "img/"
            }
          }
        ]
      }
    ]
  },

  resolve: {
    modules: [path.join(__dirname), path.join(__dirname, "node_modules")],
    extensions: [".js", ".css"],
    alias: {
      _root: path.resolve(__dirname),
      _atoms: path.resolve(__dirname, "src", "components", "atoms"),
      _molecules: path.resolve(__dirname, "src", "components", "molecules"),
      _organisms: path.resolve(__dirname, "src", "components", "organisms"),
      _templates: path.resolve(__dirname, "src", "components", "templates"),
      _images: path.resolve(__dirname, "src", "images"),
      _pages: path.resolve(__dirname, "src", "pages"),
      _styles: path.resolve(__dirname, "src", "styles"),
      _config: path.resolve(__dirname, "src", "config"),
      _hoc: path.resolve(__dirname, "src", "hoc"),
      _utils: path.resolve(__dirname, "src", "utils")
    }
  }
};
