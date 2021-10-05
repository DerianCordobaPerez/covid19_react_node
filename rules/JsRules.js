export default {
    test: /\.(js|jsx$)/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
    }
}