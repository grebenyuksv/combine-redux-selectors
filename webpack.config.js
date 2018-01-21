const path = require("path");
const LodashPlugin = require("lodash-webpack-plugin");

module.exports = {
	entry: path.resolve("src", "index.js"),
	output: {
		path: path.resolve("dist"),
		filename: "index.js",
		libraryTarget: "commonjs2"
	},
	plugins: [new LodashPlugin()],
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader"
			}
		]
	}
};
