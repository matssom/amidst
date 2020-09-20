const path = require('path');

module.exports = {
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
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	mode: 'production'
};