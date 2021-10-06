import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import JsRules from './rules/JsRules.js';
import ImgRules from './rules/ImgRules.js';
import StylesRules from './rules/StylesRules.js';

export default {
    entry: './frontend/src/js/app.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('frontend/public/js'),
    },
    module: {
        rules: [
            JsRules,
            ImgRules,
            StylesRules
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index.html',
            template: path.resolve('frontend/src/index.html')
        })
    ]
}