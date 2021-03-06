let path = require('path');
let webpack = require('webpack');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {f0: './f0.js', f1: './f1.js'},
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    plugins:  [
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style',
                    'css'
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.sass$/,
                use: [
                    'style',
                    'css?sourceMap',
                    'sass?sourceMap'
                ]
            }
        ]
    },
    optimization:  {
        minimizer: [new UglifyJsPlugin({sourceMap: true})]
    }
};
