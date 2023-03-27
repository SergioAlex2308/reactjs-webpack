const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
		assetModuleFilename: 'assets/fonts/[hash][ext][query]'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		alias: {
			'@components': path.resolve(__dirname, 'src/components/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@images': path.resolve(__dirname, 'src/assets/images/'),
		}
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				}
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
				}
			},
			{
				test: /\.(css|scss)$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(woff | woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000,
						mimetype: "application/font-woff",
						name: "[name].[contenthast].[ext]",
						outputPath: "./assets/fonts/",
						publicPath: "../assets/fonts/",
						esModule: false,
					}
				}
			}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './public/index.html',
			filename: './index.html'
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].[contenthash].css'
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new Dotenv(),
	],
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 3006
	}
}