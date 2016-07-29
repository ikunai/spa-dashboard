var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/scripts",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["react", "es2015"]
        }
      },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
      { test: /\.less$/,loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader") }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
};