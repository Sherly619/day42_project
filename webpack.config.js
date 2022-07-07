const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const env = process.env.NODE_ENV;

module.exports = {
  mode: env,
  entry: "src/index.ts",
  output: {
    path: path.resolve(__dirname, "es"),
    filename: "index.[contenthash].js",
    assetModuleFilename: "[hash][ext][query]",
    clean: true,
  },
  resolve: {
    alias: {
      src: "./src",
      es: "./es",
    },
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body'
    })
  ],

};