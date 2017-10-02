const path = require('path');
const webpack  = require('webpack');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'build'), // the target directory for all output files
        publicPath: '/public/', // the url to the output directory resolved relative to the HTML page
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        port: 8080
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [{
                loader: 'style-loader'
            }, {
                loader: 'css-loader'
            }, {
                loader: 'sass-loader',
                options: {
                    includePaths: [path.resolve(__dirname, 'assets')]
                }
            }]
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'inline-source-map'
};