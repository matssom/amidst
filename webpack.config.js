const path = require('path');

module.exports = {
  	entry: './development/src/index.js',
  	output: {
    	filename: 'amidst.js',
    	path: path.resolve(__dirname, 'test'),
	},
	watch: true,
	optimization: {
		runtimeChunk: true,
	}
};