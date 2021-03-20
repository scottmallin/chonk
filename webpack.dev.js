const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
                test: /\.(sass|scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "sass-loader"
                  ]
            }
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'bundle.css'
        })
    ]
}