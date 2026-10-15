const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: { index: "./src/index.js", print: "./src/print.js" },
  output: { filename: "[name].bundle.js", path: path.resolve(__dirname, "dist"), clean: true, publicPath: "/" },
  resolve: { extensions: [".js", ".jsx"] },
  devtool: "source-map",
  devServer: { static: path.join(__dirname, "dist"), host: "127.0.0.1", port: 9000 },
  plugins: [new HtmlWebpackPlugin({ title: "Development" })],
  module: { rules: [{ test: /\.jsx?$/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ["@babel/preset-env", "@babel/preset-react"] } } }] },
};
