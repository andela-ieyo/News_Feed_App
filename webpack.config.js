const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'public');
const APP_DIR = `${path.resolve(__dirname)}/src`;

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: `${APP_DIR}/main.js`,
  output: {
    path: BUILD_PATH,
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',

      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader',
      },
    ],
  },
};

