/*eslint-disable */

var webpack = require('webpack');

module.exports = {
  entry: [
    // 'webpack-dev-server/client?http://localhost:8080',
    // 'webpack/hot/only-dev-server',
    './app.js'
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel', // 'babel-loader' is also a legal name to reference
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.optimize.OccurenceOrderPlugin(true),
    // new webpack.optimize.DedupePlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   output: {
    //     comments: false
    //   },
    //   compress: {
    //     warnings: false,
    //     screw_ie8: true
    //   }
    // })
  ]
};

/*eslint-enable */
