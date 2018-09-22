var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, './public/js');
var APP_DIR = path.resolve(__dirname, './src/jsx');

var config = {
	watchOptions: {
		aggregateTimeout: 300,
		poll: 1000,
		ignored: /node_modules/
	},
	entry:{
		main:APP_DIR + '/' +'index.jsx'
	},
	output: {
		path: BUILD_DIR,
		filename: '[name].js'
	},
	module : {
	rules : [
		{
		test : /\.jsx?/,
		include : APP_DIR,
		loader : 'babel-loader'
		}
	]
	}
};

module.exports = config;
