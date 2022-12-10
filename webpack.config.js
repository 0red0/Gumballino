const path = require("path");
module.exports = {
   entry: "./src/gumball.js",
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
      ],
   },
   mode: "development",
   devtool: "inline-source-map",
   devServer: {
      static: "./dist",
   },
};
