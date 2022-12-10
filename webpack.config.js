const path = require("path");
module.exports = {
   entry: "./src/main.js",
   output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
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
   mode: "development",
   devtool: "inline-source-map",
   devServer: {
      static: "./dist",
   },
};
