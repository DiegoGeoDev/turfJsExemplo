#### 1. Criar o arquivo package.json

```bash
npm init y
```

#### 2. Criar o arquivo .gitignore

```plaintext
/node_modules
```

#### 3. Instalar os pacotes

```bash
npm i -D @babel/cli @babel/preset-env @babel/core babel-loader @babel/polyfill

npm i -D webpack webpack-cli webpack-dev-server file-loader json-loader

npm i esri-loader
```

#### 4. Criar o arquivo .babelrc

```json
{
	"presets": ["@babel/preset-env"]
}
```

#### 5. Criar o arquivo webpack.config.js

```javascript
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
		],
	},
};
```

### 6. Atualizar o "scripts" do arquivo package.json

```json
  "scripts": {
    "dev": "webpack-dev-server --https --mode=development",
    "build": "webpack --mode=production"
  }
```

#### 7. Criar os arquivos e pastas principais da aplicação

```plaintext
public\index.html
public\style\index.css
public\image
src\index.js
src\util
```
