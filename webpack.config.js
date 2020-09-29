const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    entry: './static/components/index.jsx',
    mode: 'development',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'main.js'
    },

    module: {
        rules: [
        {
            test: /\.(png|jpe?g|gif|css)$/,
            use: [
                {
                    loader: "file-loader",
                    options: {}
                }
            ]
        },
        {
            test: /\.(js|jsx)$/,
            use: [
                {
                    loader: "babel-loader"
                }
            ]
        }
        ]
    },
    resolve: {
        extensions: [".jsx", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./static/index.html"
        })
    ]

}