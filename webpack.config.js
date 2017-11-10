const path = require('path')

module.exports = {
  // This is the entry point webpack will use to build the dependency graph.
  entry: path.resolve(__dirname, 'src/index.js'),

  // The results will go out to this bundle.
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'funktacular.bundle.js'
  },

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
