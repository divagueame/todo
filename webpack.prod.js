const path = require('path');
const merge = require('webpack-merge');
const common = require("./webpack.common");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "[name][contentHash].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    optimization: {
        minimizer: [
            new OptimizeCssAssetsWebpackPlugin(),
            new TerserPlugin()
        ]
    },
    plugins: [
       new MiniCssExtractPlugin({
           filename: "[name].[contentHash].css"
       }),
       new CleanWebpackPlugin(),
       new HtmlWebpackPlugin({
           template: "./src/template.html",
           minify: {
               removeComments: true,
               removeAttributeQuotes: true,
               collapseWhitespace: true,
           }
       })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                  {
                    loader: MiniCssExtractPlugin.loader
                  },
                  {
                    loader: 'css-loader'
                  },
                  {
                    loader: 'sass-loader'
                  }
                ]
              },
        ]
    }
})