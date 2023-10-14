const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTSChecker = require('fork-ts-checker-webpack-plugin')

/** @type {import("webpack").Configuration} */
const config = {
  target: 'web',
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/assets/",
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          // 'vue-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    // new VueLoaderPlugin()
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/',
    }),
    new ForkTSChecker(),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  devtool: 'source-map',
}
module.exports = config
