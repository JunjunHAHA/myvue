const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'),
            filename: "index.html"
        })
    ],
    module: {
        rules: [
            { test: /\.vue$/, use: 'vue-loader' }, // 处理 .vue 文件的 loader
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {test: /\.ts$/, use: 'ts-loader'},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            {test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631'},
            {test: /\.(ttf|svg|eot|woff|woff2)$/, use: 'url-loader'},
            {test: /\.js$/, use: "babel-loader", exclude: /(node_modules|bower_components)/,},
        ]
    },
};