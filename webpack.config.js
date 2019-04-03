const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://localhost:8081'
    ],
    output: {
        path: path.resolve(path.join(__dirname, './dist')),
        filename: 'js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            title: 'XtraMath-simulator',
            template: './src/index.html',
            filename: './index.html' //relative to root of the application
        })
    ],
    devServer: {
        contentBase: './dist'
    }
};