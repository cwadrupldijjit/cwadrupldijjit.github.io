module.exports = {
	entry: './Typing.ts',
	
	devtool: 'eval',
	
	resolve: {
		extensions: ['', '.webpack.js', '.seb.js', '.ts', '.tsx', '.js']
	},
	
	module: {
		loaders: [
			{test: /\.tsx$|\.ts$/, exclude: /node_modules/, loaders: ['ts-loader']}
		]
	},
	
	output: {
		path: './',
		filename: './bundle.js'
	}
};