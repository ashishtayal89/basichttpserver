const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== 'production';


module.exports = {
    entry: {
        index: "./js/index.js"
    },
	devtool: 'inline-source-map',
	output: {
		filename: '[name].js'
	},
    mode: 'development',
    devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 9000,
	},
	module: {
		rules: [
			{
                test: /\.js$/,
				include: [path.resolve(__dirname, 'js')],
				loader: 'babel-loader',
				options: {
					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				loader: "file-loader"
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				loader: "file-loader"
			},
			{
				test: /\.(scss|css)$/,

				use: [
					{
						loader: MiniCssExtractPlugin.loader,
						options: {
							hmr: devMode,
						},
					},
					{
						loader: 'css-loader',
						options: {
							sourceMap: true
						},
					},
					{
						loader: 'sass-loader',
						options: {
							sourceMap: true
						},
					}
				]
			}
		]
	},
	resolve: {
		alias: {
			jquery: "jquery/src/jquery"
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			template: './index.html',
			title: 'DigitalE1',
			meta: {
				'viewport': 'width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no',
			}
		}),
		new MiniCssExtractPlugin({
			filename: '[name].css',
		}),
	],
	optimization: {
		minimizer: [new UglifyJSPlugin()],
	}
};
