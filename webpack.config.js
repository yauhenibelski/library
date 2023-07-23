const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = ({ develop }) => ({
  mode: develop ? 'development' : 'production',
  devtool: develop ? 'inline-source-map' : false,

  context: path.resolve(__dirname, 'src'),
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        clean: true,
  },
  devServer: {
    port: 3000
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
        options: {
          minimize: false,
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
            filename: './img/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        enforce: "pre",
        use: ["source-map-loader"],
      },
      {test: /\.s[ac]ss$/i,
      // use: [ "style-loader", "css-loader", "sass-loader"]
      use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
        new HtmlWebpackPlugin({
          title: 'Library',
        }),
        new MiniCssExtractPlugin({
          filename: 'style.css'
        }),
        // new CopyPlugin({
        //   patterns: [
        //       {
        //         from: path.resolve(__dirname, 'src/'),
        //         to:   path.resolve(__dirname, 'dist/')
        //       }
        //     ]
        // })
     ],
});