const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require(__dirname + '/package');
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

const IS_DEV = path.basename(require.main.filename) === 'webpack-dev-server.js';

module.exports = {
  entry: [
    './src/app.js'
  ],

  output: {
    filename: 'main.[hash:6].js',
    publicPath: IS_DEV ? '/' : config.root
  },

  resolve: {
    extensions: ['.js', '.json', '.vue'],
    modules: [path.join(__dirname, 'node_modules')]
  },

  devtool: IS_DEV ? 'source-map' : false,

  devServer: {
    historyApiFallback: true,
    port: process.env.PORT || 3001,
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: {'^/api': ''}
      }
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require('autoprefixer')()
              ]
            }
          },
          'sass-loader'
        ]
      }
    ]
  },

  plugins: [
    new CleanWebpackPlugin([IS_DEV ? '': 'dist'], {
      root: __dirname
    }),

    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
      minify: IS_DEV ? {} : {
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeComments: true,
      }
    }),

    new VueLoaderPlugin(),
  ]
}