const path = require('path');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const bundle = {
	entry: './src/index.js',
  	output: {
    	filename: 'amidst.bundle.js',
    	path: path.resolve(__dirname, './'),
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					'style-loader',
					'css-loader'
				],
			},
		],
	},
	optimization: {
		minimizer: [
			new OptimizeCss(),
			new TerserPlugin()
		]
	},
    mode: 'production',
    watch: false
}

module.exports = bundle;