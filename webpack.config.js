const path = require('path');

module.exports = {
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://localhost:8081'
        // 'webpack/hot/only-dev-server'
        // config.paths.demo
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist'
    }
};