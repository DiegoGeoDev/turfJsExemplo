module.exports = {
	entry: {
		index: ['@babel/polyfill', './src/index.js'],
	},
	output: {
		path: __dirname + '/public',
		filename: '[name]_bundle.js',
	},
	devServer: {
		contentBase: __dirname + '/public',
		port: 3335,
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Credentials': 'true',
			'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
			https: true,
		},
	},
	module: {
		rules: [
			{
				test: /\.(gif|svg|jpg|png)$/,
				loader: 'file-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.json/,
				type: 'javascript/auto',
				use: [require.resolve('json-loader')],
			},
			{
				test: /\.css$/i,
				use: ['css-loader'],
			},
		],
	},
};
