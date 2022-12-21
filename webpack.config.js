const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
   entry: "./src/main.js",
   output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      assetModuleFilename: "[name][ext]",
      clean: true,
   },
   module: {
      rules: [
         {
            test: /\.s?[ac]ss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
         },
         {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: "asset/resource",
         },
          {
             test: /\.html$/i,
             loader: "html-loader",
          },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         title: "Gumballino's",
         filename: "index.html",
         template: "./src/template.html",
      }),
   ],
   mode: "development",
   devtool: "inline-source-map",
   devServer: {
      static: "./dist",
   },
};
