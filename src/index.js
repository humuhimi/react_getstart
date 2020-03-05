import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            answer: "Yes",
            isLoggedIn: true,
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log('clicked')
        // setStateを使うには関数を元のクラスにバインドする必要がある
        // それによりsetStateを持ってこれる
        // 中に関数を定義する
        this.setState(prevState => {
                return {
                    count : prevState.count + 1
                }
        })
    }

    render() {
        let wordDisplay
        if (this.state.isLoggedIn === true) {
            wordDisplay = "in"
        } else {
            wordDisplay = "out"
        }
        return (
            <div>
                <img onMouseOver={() => console.log("hovered!!")} src="https://picsum.photos/seed/picsum/200/300" alt="some_moutain"/>
                <h1>about state: {this.state.answer} </h1>
                <h2>you are logged {wordDisplay}</h2>
                <h1><strong>{ this.state.count } </strong></h1>
                <button onClick={this.handleClick}>Click here</button>
            </div>
        )
    }
  }



ReactDOM.render(
    <App />,
    document.getElementById("root")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

