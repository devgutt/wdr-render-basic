const path = require('path');

const mode = process.env.NODE_ENV;

let version = 'master';
if (mode == 'prod') {
  version = require('../../package.json').version;
}
console.log('version:', version);

module.exports = {
  mode: mode == 'prod' ? 'production' : 'development',
  devtool: mode == 'prod' ? false : 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `render-basic-${mode == 'prod' ? version : 'dev'}.js`
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

