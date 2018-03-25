const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: path.resolve("src", "index.jsx"),
	output: {
		path: path.resolve("dist"),
		filename: "index.js"
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: "babel-loader"
			}
		]
	},
	resolve: {
		extensions: [".js", ".jsx"]
	}
};
