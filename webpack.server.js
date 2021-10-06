const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    entry: './server.js',

    target: 'node',

    externals: [nodeExternals()],

    output: {
        path: path.resolve(),
        filename: 'index.js'
    },

    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader'
            }
        ]
    }
};