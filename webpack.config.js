const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        hot: false,
        publicPath: '/'
    },

    devtool: "eval-source-map",
    performance: {
        maxEntrypointSize: 10000,
        maxAssetSize: 10000,
        hints: false
    },

    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle-[hash].js",
        chunkFilename: '[id][hash].js',
        publicPath: './'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",

                        options: {
                            minimize: true,
                            sourceMap: true,
                            url:false
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|jpeg|ttf)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        name: '[path][name].[ext]',

                    }
                }]
            }
        ]
    },
    stats: {
        warnings: false
    },
    resolve: {
        alias: {
            "TweenMax": path.resolve('node_modules', 'gsap/src/uncompressed/TweenMax.js'),
        }
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html',
            title: 'React Redux Boilerplate',
            lang: 'en-ca',
            filename: 'index.html',
            inject:true
        }),
        new MiniCssExtractPlugin({
            filename: "[name]-[hash].css",
            chunkFilename: "[id][hash].css"
        }),
        new UglifyJsPlugin({
            sourceMap: true
        }),
        new CopyWebpackPlugin([
            {
                from: 'public/images',
                to: 'images'
            }
        ])
    ],
    mode: "production"
}
