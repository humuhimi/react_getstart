import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

import FormContainer from './FormContainer';

import Header from './components/Header'

// import Conditional from './Conditional';

// import TodoItem from './TodoItem'
// import todosData from './todosData';


// class App extends React.Component  {

//     constructor() { 
//         super()
//         this.state = { 
//             todos: todosData
//         }


//         this.handleChange = this.handleChange.bind(this)
//     }

//     handleChange(id) { 
//         console.log("changed",id)
//         this.setState(prevState => {
//             const updatedTodos = prevState.todos.map(todo =>{ 
//                 if (todo.id === id) {
//                     todo.completed = !todo.completed
//                 }
//                 return todo
//             })
//             return {
//                 todos:updatedTodos
//             }
//         })
//     }

//     render() { 
//         const TodoItems = this.state.todos.map(item => <TodoItem key= {item.id} item={item} handleChange={this.handleChange} />)
//         return (
//             <div className='todo-list'>
//             {TodoItems}
//             </div>
//         )     
        
//     }
// }

// class App extends React.Component {
//     constructor(){
//         super()
//         this.state = {
//             loading : false,
//             character:{}
//         }

//     }
//     componentDidMount() {
//         this.setState({loading: true})
//             fetch("https://swapi.co/api/people/1")
//                 .then(response => response.json())
//                 .then(data => {
//                     this.setState({
//                         loading: false,
//                         character : data
//                     })
//                 })
//     }
//     render(){
//         const text = this.state.loading ? 'loading....' : this.state.character.name
//         return(
//             <div>
//                 {text}
//             </div>

//         )
//     }
// }




// class TodoList extends Component {
//     constructor() { 
//         super()
//         this.state = {
//             isLoading: true,
//             unreadMessages: ['a','b']
//         }
//     }

   

//     componentDidMount() {
//         // Mounting時
//         // 1度目のrenderが呼ばれた後に1度だけ呼ばれるメソッドです。
//         // この時点ではまだUIに表示されていません。
//         // データをフェッチしたり、アニメーションやタイマーをセットする場合はここで行います。
//         // このメソッドからはDOMが作成されていますが、直接のDOM操作などライフサイクルを外れる処理は原則避けましょう。
//         setTimeout(() => {this.setState({
//             isLoading: false
//         })},1500)
//     }


//     render(){
//         // ここに書いてあるコードが実際にUIに現れるものになります。
//         // そしてAPIのように、propsやstateの値が変わっても結果は冪等であるべきです。
//         return (
//             <div>
//             {this.state.unreadMessages.length > 0 && 
//             <h2>
//             you have {this.state.unreadMessages.length} unread messeages!!
//             </h2>
//             }
//             </div>
//         )
//     }
// }

function App() {
    return(
        <div>
        <Header />
        <FormContainer /> 
        </div>
        
        
    )
}


ReactDOM.render(
    <App />,
    document.getElementById("root")
)



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


