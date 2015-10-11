var path = require('path');
var webpack = require('webpack');

module.exports = {
	entry: './src/main.jsx',
	output: {
    path: 'public/build',
    filename: '[name].js'
  },
	module: {
		loaders: [
			{ test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
}