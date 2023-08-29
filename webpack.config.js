var path = require('path');
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  module: {
    rules: [{
      test: /\.ts$/,
      exclude: /(node_modules|build)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  }
};

//TODO: Redo webpack build process.