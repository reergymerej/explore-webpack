const path = require('path')
const webpack = require('webpack')

module.exports = {
  // Use multiple entry points.  Each will generate its own dependency graph
  // with chunks named "bundle" and "section1/bundle."
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
    'section1/bundle': path.resolve(__dirname, 'src/section1/index.js'),
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    // Use the chunk name to determine the filename (and relative path).
    filename: '[name].js'
  },

  plugins: [
  ],

  module: {
  },
}
