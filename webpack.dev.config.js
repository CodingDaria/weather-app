const path = require('path')
const webpack = require('webpack')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
require('dotenv').config()

module.exports = {
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].js'
  },
  mode: 'development',
  target: 'web',
  devtool: 'source-map',
  devServer: {
    hot: false,
    contentBase: path.join(__dirname, 'dist'),
    watchContentBase: true,
    host: 'localhost',
    port: 8087,
    disableHostCheck: true,
    historyApiFallback: true,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    proxy: [
      {
        context: ['/api', '/auth', '/ws'],
        target: `http://localhost:${process.env.PORT || 8080}`,
        secure: false,
        changeOrigin: true,
        ws: process.env.ENABLE_SOCKETS || false
      }
    ]
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        // Loads the javacript into html template provided.
        // Entry point is set below in HtmlWebPackPlugin in Plugins
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader'
            //options: { minimize: true }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './src/html/index.html',
      filename: './index.html',
      excludeChunks: ['server']
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
