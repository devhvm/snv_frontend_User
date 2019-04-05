const webpack = require('webpack')
const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(rootPath, 'build/js'),
    publicPath: `/js/`,
    filename: '[name].js',
    chunkFilename: '[name][chunkhash].chunk.js',
    chunkLoadTimeout: 300000
  },
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true
          }
        }]
      }, {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => [require('autoprefixer')()]
            }
          }
        ]
      }, {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: 'inline',
              plugins: () => [require('autoprefixer')()]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {}
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.js' ],
    modules: [ 'node_modules', 'src' ]
  }
}
