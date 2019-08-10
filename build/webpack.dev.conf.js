'use strict'

const path = require('path')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')

module.exports = merge(baseWebpackConfig, {
    // 开发服务服务功能
    devServer: {
        // 设置基本目录结构
        contentBase: path.resolve(__dirname, '../dist'),
        // 服务器ip地址
        host: 'localhost',
        // 服务端压缩是否开启
        compress: true,
        // 配置服务端口号
        port: 8088
    }
})