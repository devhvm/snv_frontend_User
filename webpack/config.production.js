// const webpack = require('webpack')
const base = require('./config.base')
// const path = require('path')
// const glob = require('glob')
const merge = require('webpack-merge')

// const rootPath = path.resolve(__dirname, '../')

const proConf = {
  mode: 'production'
}

module.exports = merge(base, proConf)
