const path = require('path')
const webpack = require('webpack')

module.exports = {
  // This is the entry point webpack will use to build the dependency graph.
  entry: path.resolve(__dirname, 'src/index.js'),

  // The results will go out to this bundle.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'funktacular.bundle.js'
  },

  plugins: [
    // This minifies the js bundle.  Cool.
    // There are a bunch of other built in plugins too.
    // https://webpack.js.org/plugins/
    new webpack.optimize.UglifyJsPlugin(),

    // This adds a banner.
    new webpack.BannerPlugin({
      banner: 'Hey, look here.  I entered a comment in each of my chunks.',
    })
  ],

  module: {
    rules: [
      {
        // for any file that matches this
        test: /\.txt$/,
        // use raw-loader
        use: 'raw-loader',
      },
    ],
  },
}
