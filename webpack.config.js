const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        filename: 'container.bundle.js',
        path: path.resolve(__dirname, 'bin')
    },
    resolve: {
        extensions: ['.jsx', '.js']
    },
    mode: 'development',
    module: {
        rules: [
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devtool: 'source-map',
    devServer: {
        historyApiFallback: true
    }
};