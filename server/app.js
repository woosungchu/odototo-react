import express from 'express';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';

const app = express();
const port = 3000;
const devPort = 3001;

if(process.env.NODE_ENV == 'development') {
    console.log(' ########## Development mode ########## ');

    const config = require('../webpack.dev.config');
    let compiler = webpack(config);
    let devServer = new WebpackDevServer(compiler, config.devServer);
    devServer.listen(devPort, () => {
        console.log(' Webpack-dev-server on port', devPort);
    });
}
app.use('/', express.static(__dirname + '/../public'));

/* react-router */
//app.get('*', (req, res) => {
//    res.sendFile(path.resolve(__dirname, './../public/index.html'));
//});

const server = app.listen(port, () => {
    console.log(' Express on port', port);
});
