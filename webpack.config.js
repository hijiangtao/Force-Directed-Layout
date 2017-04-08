/**
 * webpack.config.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-07 19:24:44
 * @version $Id$
 */

var webpack = require('webpack');
var path = require('path');

var devConfig = {
    entry: './src/index.js',
    output: {
        filename: 'home.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: path.resolve(__dirname, 'dist')
    },
    devtool: 'source-map',
    module: {
        loaders: [{ 
            test: /\.js$/, 
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            } 
        }]
    }
};

module.exports = devConfig;
