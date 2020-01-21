const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const glob = require("glob");

module.exports = {
    entry: ['@babel/polyfill','./src/index.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist/',
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: "/"
                    }
                }]
            },
            {
                test: /\.csv$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: "/"
                    }
                }]
            },
            {
                test: /\.jpg$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        publicPath: "/"
                    }
                }]
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader"
                    }
                ]
            }
        ]
    },
    optimization: {
        minimizer: [new UglifyJsPlugin()]
    }
}