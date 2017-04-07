/**
 * webpack.config.js
 * @authors Joe Jiang (hijiangtao@gmail.com)
 * @date    2017-04-07 19:24:44
 * @version $Id$
 */

var webpack = require('webpack');

var devConfig = {
    entry: './index.js',
    output: {
        filename: 'home.js',
        path: __dirname,
        publicPath: __dirname
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
