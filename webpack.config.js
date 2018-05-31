const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

// folders
const root = './src/app/app.module.js';
const outputPath = path.resolve(__dirname, 'build');
const publicPath = './';

// bundle
const fileName = 'app.bundle.js';

// html
const htmlEntry = './src/index.html';
const htmlOutput = './index.html';

// styles
const stylesOutput = 'styles/style.css';

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
            {loader: 'css-loader', options: {sourceMap: true}},   // translates CSS into CommonJS
            {loader: 'sass-loader', options: {sourceMap: true}}
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
    new ExtractTextWebpackPlugin(stylesOutput)
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

// module.exports = {
//   devtool: 'source-map',
//   entry: {},
//   module: {
//     loaders: [
//        { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
//        { test: /\.html$/, loader: 'raw' },
//        { test: /\.(scss|sass)$/, loader: 'style!css!sass' },
//        { test: /\.css$/, loader: 'style!css' }
//     ]
//   },
//   plugins: [
//     // Injects bundles in your index.html instead of wiring all manually.
//     // It also adds hash to all injected assets so we don't have problems
//     // with cache purging during deployment.
//     new HtmlWebpackPlugin({
//       template: 'client/index.html',
//       inject: 'body',
//       hash: true
//     }),
//
//     // Automatically move all modules defined outside of application directory to vendor bundle.
//     // If you are using more complicated project structure, consider to specify common chunks manually.
//     new webpack.optimize.CommonsChunkPlugin({
//       name: 'vendor',
//       minChunks: function (module, count) {
//         return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
//       }
//     })
//   ]
// };
