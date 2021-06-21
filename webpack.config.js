const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode_env = process.env.NODE_ENV === 'production' ? 'production':'development'

module.exports = {
    mode:mode_env,
    entry:"./src/index.js",
    output:{
        path:path.join(__dirname, 'dist'),
        filename:"main.[hash].js"
    },
    devtool:'source-map',
    devServer:{
        contentBase:'./dist'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                }
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: "./base.html"
        })
    ]
}