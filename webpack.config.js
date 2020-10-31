const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCss = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OnBuild = require('on-build-webpack');
const fs = require('fs');

// const minifyCss = {
// 	entry: './src/style.css',
//   	output: {
//     	path: path.resolve(__dirname, './'),
// 	},
// 	watch: true,
// 	module: {
// 		rules: [
// 			{
// 				test: /\.css$/i,
// 				use: [
// 					MiniCssExtractPlugin.loader,
// 					'css-loader'
// 				],
// 			},
// 		],
// 	},
// 	plugins: [
// 		new MiniCssExtractPlugin({ filename: 'amidst.css' }),
// 		new OnBuild(function () {
// 			fs.unlinkSync(path.join(path.resolve(__dirname, './'), 'main.js'));
// 		}),
// 	],
// 	optimization: {
// 		minimizer: [
// 			new OptimizeCss(),
// 			new TerserPlugin()
// 		]
// 	},
// 	mode: 'production'
// }

const minifyJs = {
	entry: './src/index.js',
  	output: {
    	filename: 'amidst.js',
    	path: path.resolve(__dirname, './'),
	},
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					'css-loader'
				],
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: 'amidst.css' })
	],
	optimization: {
		minimizer: [
			new OptimizeCss(),
			new TerserPlugin()
		]
	},
	mode: 'production'
}

module.exports = [/* minifyCss, */ minifyJs];