import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {

    render() {
        return (
            <div>
                <Header username="humuhimi"/>
                <h1>Code here</h1>
                <Greeting />
            </div>
        )
    }
  }

class Header extends React.Component {
    render() {
        return (
            <header>
                <p>Wellcome,{this.props.username} </p>
            </header>
        )
    }
}

class Greeting extends React.Component { 
    render () {
        const date = new Date()
        const hour = date.getHours()
        return (
            <h1>Hi It's {hour} am</h1>
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

