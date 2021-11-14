const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, '..', 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '..', 'src/components'),
      assets: path.resolve(__dirname, '..', 'src/assets'),
      helpers: path.resolve(__dirname, '..', 'src/helpers')
    },
    extensions: ['*', '.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '..', 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  }
}
