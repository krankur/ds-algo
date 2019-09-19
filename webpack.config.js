var path = require('path');
var webpack = require('webpack');
var HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            file: path.join(__dirname, 'build/index.html'),
            template: path.join(__dirname, 'index.html')
        }),
        new webpack.HotModuleReplacementPlugin(),
    ]
};