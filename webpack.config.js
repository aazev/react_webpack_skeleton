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
		filename: '[name].js',
		chunkFilename: 'vendor.js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					chunks: 'initial',
					name: 'vendor',
					test: /node_modules/,
					enforce: true
				},
			}
		}
	},
	module : {
		rules : [
			{
				test : /\.jsx/,
				include : APP_DIR,
				exclude : /(node_modules|vendor|bower_components)/,
				loader : 'babel-loader',
				options : {
					"presets" : ["@babel/preset-env", "@babel/preset-react"],
				}
			}
		]
	}
};

module.exports = config;
