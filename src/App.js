import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import Footer from './components/Footer'
// import Header from './components/Header'
// import MainContent from './components/MainContent'


// function App() {
//   const firstName = "Bob"
//   const lastName = "humu"
//   return (
//     <h1>Hello (firstName + " " + lastName)</h1>
//   )
// }

class App extends React.Component {

  yourMethod() {
    console.log()
   }

  render() {
    const style = this.yourMethod()
      return (
          <div>
              <h1>Code here</h1>
          </div>
      )
  }
}

export default App;
