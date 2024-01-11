const React = require('react'); //npm에서 react 불러와주기
const { Component } = React;

class WordRelay extends Component {
    state = {
        text: 'Hello, webpackqweqqwejnjcnqwqweqweweq',
    };
    render() {
        return <h1>{this.state.text}</h1>;
    }
}

module.exports = WordRelay;
//쪼갠 컴포넌트를 외부에서도 사용 가능하도록 만들어줌
