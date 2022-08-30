const production = process.env.NODE_ENV === "production";

const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const webpack = require('webpack');

module.exports = {
    mode: production ? 'production' : 'development',
    entry: './src/index.tsx',
    output: {
        path: __dirname + '/dist',
    },

    resolve: {
        fallback: {
            "fs": false
        },
    },
   
  
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['.ts', '.tsx', '.js', '.json'],
                },
                use: 'ts-loader',
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ]
    },
    devtool: production ? undefined : 'source-map',
    plugins: [
        new webpack.EnvironmentPlugin({
            /* //add the variables here
             * You can access them as process.env.NODE_ENV etc.
            NODE_ENV:'development',
            DEBUG: false
            */
        }),
        new HtmlWebpackPlugin({
            template: 'index.html'
        }),
        new MiniCssExtractPlugin({
            filename: "style.css",
            chunkFilename: "style.css"
        }),

        new webpack.DefinePlugin({
            process: {env: {}}
          })
    ],
};
