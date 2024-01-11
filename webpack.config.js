const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin'); //추가

module.exports = {
    name: 'wordrelay-setting',
    mode: 'development', //실서비스에서는 production
    devtool: 'eval', //production일때는 hidden-source-map사용
    resolve: {
        extensions: ['.js', '.jsx'], //js나 jsx파일 확장자 있는지 찾는다.
    },

    //파일 합치기
    //두가지 파일을 합쳐서 app.js파일로 만들어 html이 실행할 수 있도록 만들어준다.

    entry: {
        app: ['./client'],
    }, //입력 , 번들링 시작점

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                targets: {
                                    browsers: ['> 1% in KR'],
                                },
                            },
                        ],
                        '@babel/preset-react',
                    ],
                    plugins: [
                        '@babel/plugin-proposal-class-properties',
                        'react-refresh/babel', //추가됨!
                    ],
                },
            },
        ],
    },
    plugins: [new RefreshWebpackPlugin()], //추가됨!
    output: {
        path: path.join(__dirname, 'dist'), //__dirname은 현재폴더(lecture)
        filename: 'app.js',
        publicPath: '/dist', //추가, publicPath는 가상경로같은것
    },

    devServer: {
        static: [
            {
                directory: path.join(__dirname, 'dist'),
                publicPath: '/dist',
            },
        ],
        hot: true,
    }, //추가
};

/**
mode : 모드에 따라 번들링 최적화를 진행한다. (development/production)
entry : 웹팩에서 웹 자원을 변환하는 데 필요한 진입점이자 자바스크립트 파일 경로. 번들링 시작점.
module : 웹팩에서 사용하는 모듈에 대한 설정/ 웹팩 로더 설정. rules 로 loader를 설정한다.
ouput : 웹팩을 돌리고 난 결과물의 파일 경로. 번들링 결과물 경로 및 이름을 지정한다.
plugins : 기본적인 동작에 추가적인 기능을 제공한다. 확장 프로그램 같은 것.
target : 웹팩에서 번들링 결과를 어떤 목표로하는지 설정한다. (web, webworker, es5, es2020, node0
devtool : 소스맵 생성 관련 설정(source-map, inline-source-map 등)

 */
