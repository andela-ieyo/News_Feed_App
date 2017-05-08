require('dotenv').config();
const webpack = require('webpack');
const path = require('path');
const BUILD_PATH = path.resolve(__dirname, 'public');
const APP_DIR = `${path.resolve(__dirname)}/src`;

const envsDefinePlugin = new webpack.DefinePlugin({
  APIKEY: JSON.stringify(process.env.APIKEY)
});

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: `${APP_DIR}/main.jsx`,
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
        test: /\.jsx$/,
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
  plugins: [
    envsDefinePlugin
  ]
};

