const {
    resolve
} = require("path")

const UglifyJsPLugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: resolve(__dirname, 'src/index.js'),
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'convert-slug.js',
        library: 'convertSlug'
    },
    plugins: [
        new UglifyJsPLugin({
            exclude: [/\.min\.js$/gi]
        })
    ]
}