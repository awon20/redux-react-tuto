const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// const HtmlWebpackPlugin = require("html-webpack-plugin"); //installed via npm
// const webpack = require("webpack"); //to access built-in plugins

module.exports = {
  mode: "development",
  // entry: "./src/index.js",
  entry: {
    index: "./src/index.js",
    print: "./src/print.js",
  },
  output: {
    // filename: "main.js",
    // filename: "bundle.js",
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "inline-source-map",

  devServer: {
    // contentBase: "./dist",
    contentBase: path.join(__dirname, "dist"),
    port: 9000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Development",
    }),
  ],
  module: {
    rules: [
      {
        use: "babel-loader",
        test: /\.js$/,
        exclude: /node_modules/,
      },
      {
        use: ["style-loader", "css-loader"],
        test: /\.css$/,
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/env",
                "@babel/react",
                { plugins: ["@babel/plugin-proposal-class-properties"] },
              ],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "sass-loader",
            options: {
              implementation: require("node-sass"),
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader",
        options: {
          limit: 100000,
        },
      },
    ],
  },
};
