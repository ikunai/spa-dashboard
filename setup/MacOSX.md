### setup

## Software Stack

- webpack http://webpack.github.io
- react.js
- Redux https://github.com/reactjs/redux
- pure.css http://purecss.io / http://www.pincer.io/node/libraries/pure-css
- Json Web Token https://jwt.io
- superagent https://github.com/visionmedia/superagent
- gulp ? いらないかも

```
$ sudo brew update
```

必要に応じて
```
$ sudo brew uninstall --force node
$ sudo brew uninstall node
$ brew upgrade node
```

バージョンチェック
```
$ node -v
v6.3.1
```

npm初期化（package.json生成）
```
$ npm init -y
```

必要モジュールインストール
```
$ npm install --save jsx-loader css-loader node-sass sass-loader style-loader postcss-loader extract-text-webpack-plugin
$ npm install --save react react-dom
$ npm install --save redux react-redux redux-form
$ npm install --save react-css-modules
$ npm install --save pure-css
$ npm install --save superagent
$ npm install --save-dev webpack
$ npm install --save-dev babel babel-loader babel-core babel-preset-react babel-preset-es2015
$ npm install --save-dev redux-devtools
```

package.jsonにbuildとwatchを追記（for webpack）
```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "rm -rf scripts/*.js && webpack",
    "watch": "rm -rf scripts/*.js && webpack -w"
  },
```

dir生成
```
$ mkdir src scripts
```

webpack.config.jsを作成（Babelで./src/app.jsを./scripts/bundle.jsにコンパイルし、pure.cssをmain.cssに書き出すよう指定）
```
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
```

Tips

var request = require('superagent');
http://qiita.com/hashrock/items/3113690bb3de5bba639b

install samples
http://inaz2.hatenablog.com/entry/2016/04/13/015702

webpackでcss
https://webpack.github.io/docs/stylesheets.html