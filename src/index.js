import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    constructor() {
        super()
        // this.props.answer = "Yes"　//こういうのは無理
        this.state = {
            answer: "Yes"
        }
    }
    render() {
        return (
            <div>
                <h1>about state: {this.state.answer} </h1>
                {/* 下の階層にまでstateが引き継がれる */}
                <ChildComponent answer={this.state.answer} />
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

