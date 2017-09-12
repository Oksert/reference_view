module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js'
  },
  watch:true,
  
  module: {
    rules: [
      {
        test: /\.js$/,
        enforce: "pre",
        loader: "eslint-loader"
      }
    ],
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      // { test: /.html$/, loader: 'html' },
      { test: /\.scss$/, loaders: ['style', 'css',
          'autoprefixer-loader?browsers=last 2 versions', 'sass'], },
      { test: /\.png$/, loader: 'file-loader' }
    ]
  }
};