var path = require('path');
module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    libraryExport: 'default'
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /(node_modules|build)/,
        use: {
        loader: 'ts-loader'
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /(node_modules|build)/,
      }
    ]
  }
};

//TODO: Redo webpack build process.