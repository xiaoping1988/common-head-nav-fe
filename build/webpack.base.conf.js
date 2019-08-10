'use strict'

const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    // 入口文件配置
    entry: {
        main: './src/main.js'
    },
    // 出口文件配置
    output: {
        path: path.resolve(__dirname, '../dist'), // 编译之后的文件存储目录
        filename: 'index.js' // js编译之后的文件名称
    },
    // 模块,如解读css,图片如何转换、压缩等
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // css loader
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            }
        ]
    },
    plugins: [
        new UglifyJsPlugin({
            uglifyOptions: {},
            sourceMap: true,
            parallel: true
        }),
        // extract css into its own file
        new ExtractTextPlugin({
            filename: 'index.css',
            allChunks: false
        }),
        new OptimizeCSSPlugin({
            cssProcessorOptions: { safe: true, map: { inline: false } }
        })
    ]
}