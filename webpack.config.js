const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.join(__dirname,'src','index.js'),
  output: {
    path: path.join(__dirname,'dist'),
    filename: 'main.bundle.js',
    publicPath: "/",
  },
  mode: process.env.NODE_ENV || 'development',
  resolve: {    
    extensions: ['.js', '.json', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules']
  },
  devServer: {
    port: 3500,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({  
      filename: 'index.html',
      template: 'public/index.html'
    })
  ]
};