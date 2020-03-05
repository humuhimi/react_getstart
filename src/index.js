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
            isLoggedIn: true
        }
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
                <h1>about state: {this.state.answer} </h1>
                <h2>you are logged {wordDisplay}</h2>
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

