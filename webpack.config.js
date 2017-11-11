// var webpack = require('webpack');
var path = require('path');
const DIST_DIR = path.resolve(__dirname, "./client/dist");
const SRC_DIR = path.resolve(__dirname, "./client/src");

module.exports = {
	entry: SRC_DIR + '/index.jsx',
	output: {
		path: DIST_DIR,
		filename: 'bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				query: {
					presets: ['react', 'env']
				}
			}
		]
	}
}

