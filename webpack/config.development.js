const webpack = require('webpack')
const base = require('./config.base')
// const path = require('path')
// const glob = require('glob')
const merge = require('webpack-merge')

// const rootPath = path.resolve(__dirname, '../')

const devConf = {
  devtool: 'inline-source-map',
  cache: true,
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    hot: false,
    inline: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: 3000,
    open: false,
    openPage: '',
    contentBase: ['build'],
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
    // proxy: {
    //   'url': 'http://210.2.91.13:9999'
    // }
  }
}

module.exports = merge(base, devConf)
