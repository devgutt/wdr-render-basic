const path = require('path');
const webpack = require('webpack');

const mode = process.env.NODE_ENV;

module.exports = {
  mode: mode == 'prod' ? 'production' : 'development',
  devtool: mode == 'prod' ? false : 'eval-cheap-module-source-map',
  output: {
    filename: 'render.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /(node_modules|wdr-loader|wdr-render-basic)/,
        loader: "eslint-loader"
      },
      {
        test: /\.(js)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader'
        ],
      }
    ]
  }
}

