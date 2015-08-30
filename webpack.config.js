module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/src/js/'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
};
