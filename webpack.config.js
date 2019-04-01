const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
	entry: './client/main.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	mode: 'development',
	devtool: 'eval-source-map',
	watch: true,
	module: {
		rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules)/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: ['@babel/preset-env']
				}
			}
		}]
	},
	stats: 'minimal',
	plugins: [
		new HtmlWebpackPlugin({
			template: './index.html',
			title: 'Cinema APP'
		})
	], 
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		port: 9000
	}
};