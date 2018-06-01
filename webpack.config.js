const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// folders
const root = './src/app/app.module.js';
const outputPath = path.resolve(__dirname, 'build');
const publicPath = '/build/';

// bundle
const fileName = 'app.bundle.js';

// html
const htmlEntry = './src/index.html';
const htmlOutput = './index.html';

// styles
const stylesOutput = 'static-admin/css/style.css';

// assets entry
const assetsImagesEntry = './src/assets/images';
const assetsFontsEntry = './src/assets/fonts';
const assetsResourcesEntry = './src/assets/resources';

// assets entry
const assetsImagesOutput = 'static-admin/images';
const assetsFontsOutput = 'static-admin/fonts';
const assetsResourcesOutput = 'static-admin/resources';

let config = {
  entry: root,
  output: {
    path: outputPath,
    filename: fileName,
    publicPath: publicPath
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {loader: 'ng-annotate-loader', options: {add: true}},
          {loader: 'babel-loader'}
        ],
        exclude: /(\.spec.js$|node_modules|vendor)/
      },
      {
        test: /\.html$/,
        use: [{loader: 'html-loader', options: {minimize: false}}]
      },
      {
        test: /\.(css|scss)$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [
            {loader: 'css-loader', options: {sourceMap: true, minimize: true}}, // translates CSS into CommonJS
            {
              loader: 'postcss-loader', options: {
              sourceMap: true, plugins: [
                autoprefixer({browsers: ['ie >= 10', 'last 6 version']})
              ]
            }
            },
            {loader: 'sass-loader', options: {sourceMap: true}},
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: htmlEntry,
      filename: htmlOutput,
      inject: 'body',
      hash: true
    }),
    new ExtractTextWebpackPlugin(stylesOutput),
    new CopyWebpackPlugin([
      {from: './conf.json', to: ''}, // example for http request
      {from: assetsFontsEntry, to: assetsFontsOutput},
      {from: assetsImagesEntry, to: assetsImagesOutput},
      {from: assetsResourcesEntry, to: assetsResourcesOutput}
    ])
  ]
};

module.exports = (env, options) => {
  let production = options.mode === 'production';

  if (production) {
    config.devtool = 'source-map';
    config.devServer = {};
  } else {
    config.devtool = 'eval-source-map';
    config.devServer = {
      contentBase: outputPath,
      overlay: true,
      port: 9000
    };
  }

  return config;
};

