const path = require('path');

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
                //js나jsx파일에 바벨로더를 적용해 최신문법이 옛날 브라우저에서도 돌아갈 수 있도록 해준다.
                options: {
                    presets: ['@babel/preset-env', '@babel/preset-react'],
                },
            },
        ],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }, //출력
    // 결과 : 여러개의 파일을 합쳐 현재 폴더 내에 dist폴더가 생기고 그 안에 app.js라는 하나의 파일이 생성된다.
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
