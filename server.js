const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');

const config = require('./webpack.config.js');
const options = {
    port: 8080,
    host: 'localhost',
    publicPath: 'http://localhost:8080/dist/',
    inline: true,
    hot: true,
    stats: {
        assets: true,
        colors: true,
        modules: true,
        cachedAssets: false
    }
};

WebpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new WebpackDevServer(compiler, options);

server.listen(options.port, options.host, () => {
    console.log(`Yay!!! Dev server listening on http://${options.host}:${options.port}`);
});