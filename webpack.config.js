const path = require('path');

module.exports = {
  	entry: './src/index.js',
  	output: {
    	filename: 'amidst.js',
    	path: path.resolve(__dirname, 'test'),
	},
	watch: true
};