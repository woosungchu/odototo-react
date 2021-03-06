//webpack 플러그인을 사용하기위하여 해당 모듈을 import 합니다.
var webpack = require('webpack');
var path = require('path');

module.exports = {

	// webpack-dev-server 의 hot-module-replacement 를 지원하기위해 entry에 추가해줍니다.
	//webpack-dev-server 의 포트를 7번 줄의 뒷부분에 적어줘야 HMR이 제대로 작동합니다.
    entry: [
        './src/index.js',
        'webpack-dev-server/client?http://localhost:3001',
        'webpack/hot/only-dev-server'
    ],

    //메모리에 저장하기 위하여 path를 ‘/’ 로 설정합니다.
    output: {
        path: '/',
        filename: 'bundle.js'
    },

    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"]
    },
    resolveLoader: {
    	moduleExtensions: ["-loader"]
    },

    //webpack-dev-server 를 위한 설정입니다. proxy 부분은 Express.js 서버 URI를 넣어주어야합니다.
    devServer: {
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: true,
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },

    //HMR 을 사용하기위한 webpack 플러그인들입니다.
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],

    //바뀐부분은 ‘react-hot’ 로더를 추가한거밖에 없습니다.
    //단, 여러 모듈을 한꺼번에 적용하기 때문에 babel 을 위하여 따로 query 를 하진 못하고 ? 뒤에 JSON.stringify(query) 를 추가하여 query를 추가합니다.
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot-loader', 'babel-loader?' + JSON.stringify({
                    cacheDirectory: true,
                    presets: ['es2015', 'react']
                })],
                exclude: /node_modules/,
            },{
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    }
};
